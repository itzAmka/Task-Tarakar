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

	return (
		<TodosContext.Provider value={{ todos, addTodo }}>
			{children}
		</TodosContext.Provider>
	);
};
