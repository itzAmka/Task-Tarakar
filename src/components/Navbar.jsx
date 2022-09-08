const Navbar = () => {
	return (
		<nav className='flex justify-between items-center'>
			<h1 className='text-4xl'>Todos Manager</h1>
			<select
				name='themes'
				id='theme-modes'
				className='select select-accent px-4 py-0'>
				<option value=''>Change Theme</option>
				<option value='light'>light</option>
				<option value='dark'>dark</option>
				<option value='night'>night</option>
				<option value='synthwave'>synthwave</option>
				<option value='retro'>retro</option>
				<option value='cyberpunk'>cyberpunk</option>
				<option value='valentine'>valentine</option>
				<option value='halloween'>halloween</option>
				<option value='forest'>forest</option>
				<option value='aqua'>aqua</option>
				<option value='wireframe'>wireframe</option>
				<option value='black'>black</option>
				<option value='luxury'>luxury</option>
				<option value='dracula'>dracula</option>
				<option value='coffee'>coffee</option>
			</select>
		</nav>
	);
};

export default Navbar;
