import { useState, useEffect } from 'react';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { db, auth } from '../../config/firebase.config';
import Spinner from '../shared/Spinner';
import IncompleteTodos from './IncompleteTodos';
import CompletedTodos from './CompletedTodos';

const TodosList = () => {
	const [loading, setLoading] = useState(true);
	const [completedTodos, setCompletedTodos] = useState([]);
	const [incompleteTodos, setIncompleteTodos] = useState([]);

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
			const _completedTodos = [];
			const _incompleteTodos = [];
			querySnapshot.forEach(doc => {
				if (doc.data().isCompleted) {
					_completedTodos.push({ ...doc.data(), id: doc.id });
				} else {
					_incompleteTodos.push({ ...doc.data(), id: doc.id });
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
							{incompleteTodos.map(todo => (
								<IncompleteTodos key={todo.id} todo={todo} />
							))}
						</ul>

						<hr className='border-orange-500 border-2 rounded-lg my-10 mx-1' />

						<ul className='flex flex-col gap-3 mt-5'>
							{completedTodos.map(todo => (
								<CompletedTodos key={todo.id} todo={todo} />
							))}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default TodosList;
