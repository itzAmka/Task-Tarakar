import { MdDelete } from 'react-icons/md';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

const CompletedTodos = ({ todo }) => {
	const { id, text, isCompleted } = todo;

	const todoRef = doc(db, 'todos', id);

	const handleComplete = async () => {
		await updateDoc(todoRef, {
			isCompleted: !isCompleted,
		});
	};

	return (
		<li className='border border-1 border-blue-500 p-2 rounded-md flex sm:flex-row flex-col justify-between items-center sm:gap-10 gap-5'>
			<span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
			<span className='flex items-center gap-2'>
				<button className='text-green-500'>
					<BsArrowUpCircleFill size={21} onClick={handleComplete} />
				</button>
				<button className='text-red-500'>
					<MdDelete size={23} />
				</button>
			</span>
		</li>
	);
};

export default CompletedTodos;
