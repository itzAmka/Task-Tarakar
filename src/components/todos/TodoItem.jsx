import { MdDelete } from 'react-icons/Md';
import { FaEdit } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { TodosContext } from '../../context/TodosContext';

const TodoItem = ({ todoItem }) => {
	const { id, text, isCompleted, isEditing } = todoItem;
	const { deleteTodo, toggleCompleteTodo, toggleEditTodo, updateTodo } =
		useContext(TodosContext);
	const [updatedText, setUpdatedText] = useState(`${text}`);

	const handleDeleteTodo = () => {
		deleteTodo(id);
	};

	const handleToggleCompleteTodo = () => {
		toggleCompleteTodo(id);
	};

	const handleChange = e => {
		setUpdatedText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		updateTodo(id, updatedText);
	};

	return (
		<>
			{!isCompleted && (
				<li className='border border-1 border-blue-500 p-2 rounded-md flex justify-between items-center gap-10'>
					{isEditing ? (
						<form onSubmit={handleSubmit} className='w-full'>
							<input
								type='text'
								id='editing-input'
								className='w-full border border-blue-400 rounded-md px-2 text-black focus:outline-blue-500'
								value={updatedText}
								onChange={handleChange}
							/>
						</form>
					) : (
						<span>{text}</span>
					)}
					<span className='flex items-center gap-2'>
						{isEditing ? (
							<button
								className='bg-yellow-500 text-black py-1 px-2 rounded-lg'
								onClick={() => updateTodo(id, updatedText)}>
								Save
							</button>
						) : (
							<button
								className='text-yellow-500'
								onClick={() => toggleEditTodo(id)}>
								<FaEdit size={20} />
							</button>
						)}
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
			)}
		</>
	);
};

export default TodoItem;
