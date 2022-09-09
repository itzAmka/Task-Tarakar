import { useContext, useState } from 'react';
import { TodosContext } from '../../context/TodosContext';

const AddTodoForm = () => {
	const { addTodo } = useContext(TodosContext);
	const [text, setText] = useState('');

	const handleChange = e => {
		setText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		addTodo(text);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit} className='w-full flex gap-3 mt-12'>
			<input
				type='text'
				value={text}
				onChange={handleChange}
				className='input input-primary grow'
			/>
			<button className='btn btn-primary'>Add Todo</button>
		</form>
	);
};

export default AddTodoForm;
