import { MdDelete } from 'react-icons/md';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const CompletedTodos = ({ todo }) => {
	const { id, text, isCompleted } = todo;
	return (
		<li className='border border-1 border-blue-500 p-2 rounded-md flex sm:flex-row flex-col justify-between items-center sm:gap-10 gap-5'>
			<span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
			<span className='flex items-center gap-2'>
				<button className='text-green-500'>
					<BsArrowUpCircleFill size={21} />
				</button>
				<button className='text-red-500'>
					<MdDelete size={23} />
				</button>
			</span>
		</li>
	);
};

export default CompletedTodos;
