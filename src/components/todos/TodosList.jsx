import { useContext, useEffect } from 'react';
import { TodosContext } from '../../context/TodosContext';
import TodoItem from './TodoItem';
import CompletedTodoItem from './CompletedTodoItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodosList = () => {
	const { todos } = useContext(TodosContext);
	const [completedTodos, setCompletedTodos] = useLocalStorage(
		'completedTodos',
		[],
	);

	useEffect(() => {
		setCompletedTodos(
			todos.filter(todoItem => {
				if (todoItem.isCompleted) return todoItem;
			}),
		);
	}, [todos]);

	return (
		<>
			<ul className='flex flex-col gap-3 mt-5'>
				{todos.map(todoItem => (
					<TodoItem key={todoItem.id} todoItem={todoItem} />
				))}
			</ul>
			<ul className='flex flex-col gap-3 mt-10'>
				{completedTodos.map(completedTodoItem => (
					<CompletedTodoItem
						key={completedTodoItem.id}
						completedTodoItem={completedTodoItem}
					/>
				))}
			</ul>
		</>
	);
};

export default TodosList;
