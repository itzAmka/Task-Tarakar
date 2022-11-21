import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';

const Navbar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const openSidebar = () => {
		setSidebarOpen(prevState => !prevState);
	};

	const closeSidebar = () => {
		setSidebarOpen(prevState => (prevState = false));
	};

	return (
		<nav className='flex justify-between items-center relative'>
			<Link to='/'>
				<h1 className='sm:text-4xl text-xl font-bold'>Todos Manager</h1>
			</Link>
			<BsFillGearFill
				onClick={openSidebar}
				className='cursor-pointer hover:rotate-180 transition duration-500 z-10 select-none'
				size={30}
			/>
			<div
				className={`absolute top-0 rounded-xl right-0 bg-slate-800 sm:w-3/12 w-2/4 h-48 transition duration-500 z-9 ${
					sidebarOpen ? 'scale-1' : 'scale-0 '
				} `}
			>
				<ul
					className='w-full h-full flex flex-col px-1 gap-6 items-center justify-center text-center'
					onClick={closeSidebar}
				>
					<li className='w-full outline outline-2 rounded btn-outline btn-info outline-blue-700 -rotate-12 shadow-lg'>
						<Link to='/' className='inline-block w-full'>
							Home
						</Link>
					</li>
					<li
						className='w-full outline outline-2 rounded  btn-outline btn-info outline-blue-700 -rotate-12 shadow-lg'
						onClick={closeSidebar}
					>
						<Link to='/settings' className='inline-block w-full'>
							Settings
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
