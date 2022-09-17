import { useContext, useEffect } from 'react';
import { TodosContext } from '../../context/TodosContext';
import TodoItem from './TodoItem';
import CompletedTodoItem from './CompletedTodoItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodosList = () => {
	const { todos } = useContext(TodosContext);
	const [notCompletedTodos, setNotCompletedTodos] = useLocalStorage(
		'notCompletedTodos',
		[],
	);
	const [completedTodos, setCompletedTodos] = useLocalStorage(
		'completedTodos',
		[],
	);

	useEffect(() => {
		setNotCompletedTodos(
			todos.filter(todoItem => {
				if (!todoItem.isCompleted) return todoItem;
			}),
		);
		setCompletedTodos(
			todos.filter(todoItem => {
				if (todoItem.isCompleted) return todoItem;
			}),
		);
	}, [todos]);

	return (
		<>
			<ul className='flex flex-col gap-3 mt-5'>
				{notCompletedTodos.length === 0 ? (
					<li className='ml-1 text-xl'>No Tasks Todo</li>
				) : (
					notCompletedTodos.map(todoItem => (
						<TodoItem key={todoItem.id} todoItem={todoItem} />
					))
				)}
			</ul>
			<hr className='border-orange-500 border-2 rounded-lg mt-10 mx-1' />
			<ul className='flex flex-col gap-3 mt-10'>
				{completedTodos.length === 0 ? (
					<li className='ml-1 text-xl'>No Completed Tasks</li>
				) : (
					completedTodos.map(completedTodoItem => (
						<CompletedTodoItem
							key={completedTodoItem.id}
							completedTodoItem={completedTodoItem}
						/>
					))
				)}
			</ul>
		</>
	);
};

export default TodosList;
