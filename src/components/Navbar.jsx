const Navbar = () => {
	return (
		<nav className='flex justify-between items-center'>
			<h1 className='text-4xl'>Todos Manager</h1>
			<select
				name='themes'
				id='theme-modes'
				className='select select-accent px-4 py-0'>
				<option value=''>Change Theme</option>
			</select>
		</nav>
	);
};

export default Navbar;
