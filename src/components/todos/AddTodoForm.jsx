import { useContext, useState } from 'react';
import { TodosContext } from '../../context/TodosContext';
import { toast } from 'react-toastify';

const errorId = 'custom-id-error';
const successId = 'custom-id-success';

const AddTodoForm = () => {
	const { addTodo } = useContext(TodosContext);
	const [text, setText] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleChange = e => {
		setText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (validateText(text)) {
			toast.success('Added a new todo', {
				position: 'top-center',
				toastId: successId,
			});
			setDisabled(true);

			addTodo(text);
		} else {
			toast.error('Please add a text field', {
				position: 'top-center',
				toastId: errorId,
			});
			setDisabled(true);
		}

		setTimeout(() => {
			setDisabled(false);
		}, 1500);
		setText('');
	};

	const validateText = text => {
		if (text.length === '' || text.length === 0) {
			return false;
		} else if (text.length > 0) {
			return true;
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full flex gap-3 sm:flex-row flex-col mt-12'>
			<input
				type='text'
				value={text}
				onChange={handleChange}
				className='input input-primary grow'
			/>
			<button className='btn btn-primary' disabled={disabled}>
				Add Todo
			</button>
		</form>
	);
};

export default AddTodoForm;
