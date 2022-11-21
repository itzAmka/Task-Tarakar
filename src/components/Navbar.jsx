import ThemeOptions from './ThemeOptions';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center'>
			<h1 className='sm:text-4xl text-xl font-bold'>Todos Manager</h1>
			<ThemeOptions />
		</nav>
	);
};

export default Navbar;
