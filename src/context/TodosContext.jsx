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

	const toggleEditTodo = id => {
		setTodos(currState => {
			const todoItemToCompelete = currState.find(
				todoItem => todoItem.id === id,
			);

			const notCompleteTodos = currState.filter(todoItem => todoItem.id !== id);
			return [
				{
					...todoItemToCompelete,
					isEditing: !todoItemToCompelete.isEditing,
				},

				...notCompleteTodos,
			];
		});
	};

	const updateTodo = (id, updatedText) => {
		setTodos(currState => {
			const editingTodo = currState.find(todoItem => todoItem.id === id);

			const notEditedTodos = currState.filter(todoItem => todoItem.id !== id);

			return [
				{
					...editingTodo,
					text: updatedText,
					isEditing: false,
				},

				...notEditedTodos,
			];
		});
	};

	return (
		<TodosContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
				toggleCompleteTodo,
				toggleEditTodo,
				updateTodo,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};
