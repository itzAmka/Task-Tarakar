import { useState, useEffect } from 'react';
import {
	onSnapshot,
	collection,
	query,
	where,
	doc,
	deleteDoc,
} from 'firebase/firestore';
import { db, auth } from '../../config/firebase.config';
import Spinner from '../shared/Spinner';
import IncompleteTodos from './IncompleteTodos';
import CompletedTodos from './CompletedTodos';
import { Todo } from '../../zod/todosSchema';

type DocData = {
	text: string;
	isCompleted: boolean;
	userRef: string;
}

const TodosList = () => {
	const [loading, setLoading] = useState(true);
	const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
	const [incompleteTodos, setIncompleteTodos] = useState<Todo[]>([]);

	const handleDelete = async (id: string) => {
		const todoRef = doc(db, 'todos', id);
		await deleteDoc(todoRef);
	};

	const confirmDelete = (id: string) => {
		const confirm = window.confirm(
			'Are you sure you want to delete this todo?',
		);
		if (confirm) {
			handleDelete(id);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			fetchTodos();
		}, 1000);
	}, []);

	const fetchTodos = async () => {
		const q = query(
			collection(db, 'todos'),
			where('userRef', '==', auth?.currentUser?.uid),
		);
		onSnapshot(q, querySnapshot => {
			const _completedTodos: Todo[] = []
			const _incompleteTodos: Todo[]  = [];
			querySnapshot.forEach(doc => {
				if (doc.data().isCompleted) {
					_completedTodos.push({ ...(doc.data() as DocData), id: doc.id });
				} else {
					_incompleteTodos.push({ ...(doc.data() as DocData), id: doc.id });
				}
			});

			setCompletedTodos(_completedTodos);
			setIncompleteTodos(_incompleteTodos);
		});
	};

	return (
		<div>
			{loading ? (
				<Spinner bgColor='bg-yellow-200' />
			) : (
				<>
					<div className='mt-12'>
						<ul className='flex flex-col gap-3 mt-5'>
							{incompleteTodos.length === 0 ? (
								<li className='ml-1 text-xl'>No Tasks Todo</li>
							) : (
								incompleteTodos.map(todo => (
									<IncompleteTodos
										key={todo.id}
										todo={todo}
										confirmDelete={confirmDelete}
									/>
								))
							)}
						</ul>

						<hr className='border-orange-500 border-2 rounded-lg my-10 mx-1' />

						<ul className='flex flex-col gap-3 mt-5'>
							{completedTodos.length === 0 ? (
								<li className='ml-1 text-xl'>No Completed Tasks</li>
							) : (
								completedTodos.map(todo => (
									<CompletedTodos
										key={todo.id}
										todo={todo}
										confirmDelete={confirmDelete}
									/>
								))
							)}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default TodosList;
