import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import todosData from '../data/todosData';
import { uid } from '../helpers/uid';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useLocalStorage('todos', todosData);

	const addTodo = text => {
		setTodos(currState => {
			return [
				...currState,
				{
					id: uid(),
					text,
					isCompleted: false,
					isEditing: false,
				},
			];
		});
	};

	const deleteTodo = id => {
		setTodos(todos.filter(todoItem => todoItem.id !== id));
	};

	return (
		<TodosContext.Provider value={{ todos, addTodo, deleteTodo }}>
			{children}
		</TodosContext.Provider>
	);
};
