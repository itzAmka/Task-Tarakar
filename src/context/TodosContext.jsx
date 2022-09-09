import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import todosData from '../data/todosData';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useLocalStorage('todos', todosData);

	return (
		<TodosContext.Provider value={{ todos }}>{children}</TodosContext.Provider>
	);
};
