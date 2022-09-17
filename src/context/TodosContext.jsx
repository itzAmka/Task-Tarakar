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
				{
					id: uid(),
					text,
					isCompleted: false,
					isEditing: false,
				},
				...currState,
			];
		});
	};

	const deleteTodo = id => {
		setTodos(todos.filter(todoItem => todoItem.id !== id));
	};

	const toggleCompleteTodo = id => {
		setTodos(currState => {
			const todoItemToCompelete = currState.find(
				todoItem => todoItem.id === id,
			);

			const notCompleteTodos = currState.filter(todoItem => todoItem.id !== id);
			return [
				{
					...todoItemToCompelete,
					isCompleted: !todoItemToCompelete.isCompleted,
				},

				...notCompleteTodos,
			];
		});
	};

	return (
		<TodosContext.Provider
			value={{ todos, addTodo, deleteTodo, toggleCompleteTodo }}>
			{children}
		</TodosContext.Provider>
	);
};
