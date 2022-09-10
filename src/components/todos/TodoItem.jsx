import { MdDelete } from 'react-icons/Md';
import { FaEdit } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';

const TodoItem = ({ todoItem }) => {
	const { id, text, isCompleted, isEditing } = todoItem;
	const { deleteTodo, toggleCompleteTodo } = useContext(TodosContext);

	const handleDeleteTodo = () => {
		deleteTodo(id);
	};
	const handleToggleCompleteTodo = () => {
		toggleCompleteTodo(id);
	};

	return (
		<li className='border border-1 border-blue-500 p-2 rounded-md flex justify-between gap-10'>
			{isEditing ? (
				<form class='w-full'>
					<input
						type='text'
						id='editing-input'
						class='w-full border border-blue-400 rounded-md px-2 text-black focus:outline-blue-500'
						value={text}
					/>
				</form>
			) : (
				<span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
			)}
			<span className='flex items-center gap-2'>
				<button
					disabled={isCompleted}
					className='disabled:text-gray-500 text-yellow-500'>
					<FaEdit size={20} />
				</button>
				<button
					onClick={handleToggleCompleteTodo}
					className='text-green-500 ml-1'>
					<BsFillCheckCircleFill size={19} />
				</button>
				<button onClick={handleDeleteTodo} className='text-red-500'>
					<MdDelete size={23} />
				</button>
			</span>
		</li>
	);
};

export default TodoItem;
