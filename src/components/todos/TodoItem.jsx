const TodoItem = ({ todoItem }) => {
	const { id, text, isCompleted, isEditing } = todoItem;

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
				<span>{text}</span>
			)}
		</li>
	);
};

export default TodoItem;
