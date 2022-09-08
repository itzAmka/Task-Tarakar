import todoData from './todosData';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import TodoItem from './TodoItem';

const TodosList = () => {
	const [todos, setTodos] = useLocalStorage('todos', todoData);

	return (
		<ul className='flex flex-col gap-3 mt-5'>
			{todos.map(todoItem => (
				<TodoItem key={todoItem.id} todoItem={todoItem} />
			))}
		</ul>
	);
};

export default TodosList;
