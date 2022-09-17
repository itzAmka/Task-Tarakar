import { MdDelete, MdCancel } from 'react-icons/Md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';

const CompletedTodoItem = ({ completedTodoItem }) => {
	const { id, text, isCompleted } = completedTodoItem;
	const { deleteTodo, toggleCompleteTodo } = useContext(TodosContext);

	const handleDeleteTodo = () => {
		deleteTodo(id);
	};

	const handleToggleCompleteTodo = () => {
		toggleCompleteTodo(id);
	};

	return (
		<li className='border border-1 border-blue-500 p-2 rounded-md flex justify-between item-center gap-10'>
			<span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
			<span className='flex items-center gap-2'>
				<button
					onClick={handleToggleCompleteTodo}
					className='text-red-300 ml-1'>
					<MdCancel size={24} />
				</button>
				<button onClick={handleDeleteTodo} className='text-red-500'>
					<MdDelete size={23} />
				</button>
			</span>
		</li>
	);
};

export default CompletedTodoItem;