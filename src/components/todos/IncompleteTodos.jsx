import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { toast } from 'react-toastify';

const IncompleteTodos = ({ todo }) => {
	const { id, text } = todo;
	const [isEditing, setIsEditing] = useState(false);
	const [newText, setNewText] = useState(text);

	const handleEdit = () => {
		setIsEditing(!isEditing);

		if (isEditing) {
			if (validateText(newText)) {
				toast.success('Edited', {
					position: 'top-center',
					autoClose: 500,
				});
			} else {
				toast.error('failed to edit', { position: 'top-center' });
			}
		}
	};

	const handleChange = e => {
		setNewText(e.target.value);
	};

	const validateText = text => {
		if (text.length === '' || text.length === 0) {
			return false;
		} else if (text.length > 0) {
			return true;
		}
	};

	return (
		<li className='border border-1 border-blue-500 p-2 rounded-md flex sm:flex-row flex-col justify-between items-center sm:gap-10 gap-5'>
			{isEditing ? (
				<form className='w-full'>
					<input
						type='text'
						id='editing-input'
						className='w-full input input-success sm:h-7 h-10 focus:outline-none'
						aria-label='Edit Todo'
						name='text'
						value={newText}
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
						onClick={handleEdit}
					>
						Save
					</button>
				) : (
					<button className='text-yellow-500' onClick={handleEdit}>
						<FaEdit size={20} />
					</button>
				)}
				<button className='text-green-500 ml-1'>
					<BsFillCheckCircleFill size={19} />
				</button>
				<button className='text-red-500'>
					<MdDelete size={23} />
				</button>
			</span>
		</li>
	);
};

export default IncompleteTodos;
