import { MdDelete } from 'react-icons/md';
import { BsArrowUpCircleFill } from 'react-icons/bs';
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
		<li className='border border-1 border-blue-500 p-2 rounded-md flex sm:flex-row flex-col justify-between items-center sm:gap-10 gap-5'>
			<span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
			<span className='flex items-center gap-2'>
				<button
					onClick={handleToggleCompleteTodo}
					className='text-green-500 ml-1'
				>
					<BsArrowUpCircleFill size={21} />
				</button>
				<button onClick={handleDeleteTodo} className='text-red-500'>
					<MdDelete size={23} />
				</button>
			</span>
		</li>
	);
};

export default CompletedTodoItem;
