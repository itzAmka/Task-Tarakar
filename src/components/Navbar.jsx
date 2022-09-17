import { useLocalStorage } from '../hooks/useLocalStorage';

const Navbar = () => {
	const [selectedOptionTheme, setSelectedOptionTheme] = useLocalStorage(
		'selectedOptionTheme',
		'night',
	);

	const handleOptionChange = e => {
		setSelectedOptionTheme(e.target.value);
	};

	const dataTheme = document.querySelector('[data-theme]');
	const currentTheme = dataTheme.attributes['data-theme'];
	currentTheme.value = selectedOptionTheme;

	return (
		<nav className='flex justify-between items-center'>
			<h1 className='sm:text-4xl text-xl font-bold'>Todos Manager</h1>
			<select
				onChange={handleOptionChange}
				value={selectedOptionTheme}
				name='themes'
				id='theme-modes'
				className='select select-accent'>
				<option value='light'>Change Theme</option>
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
