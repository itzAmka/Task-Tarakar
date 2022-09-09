import { useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';
import TodoItem from './TodoItem';

const TodosList = () => {
	const { todos } = useContext(TodosContext);

	return (
		<ul className='flex flex-col gap-3 mt-5'>
			{todos.map(todoItem => (
				<TodoItem key={todoItem.id} todoItem={todoItem} />
			))}
		</ul>
	);
};

export default TodosList;
