const AddTodoForm = () => {
	return (
		<form className='w-full flex gap-3 mt-12'>
			<input type='text' className='input input-primary grow' />
			<button className='btn btn-primary'>Add Todo</button>
		</form>
	);
};

export default AddTodoForm;
