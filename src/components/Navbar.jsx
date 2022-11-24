import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { MdAssignmentInd } from 'react-icons/md';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../config/firebase.config';
import { signOut } from 'firebase/auth';

const Navbar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { isLoggedIn } = useAuth();

	const openSidebar = () => {
		setSidebarOpen(prevState => !prevState);
	};

	const closeSidebar = () => {
		setSidebarOpen(prevState => (prevState = false));
	};

	const handleLogout = async () => {
		await signOut(auth);
	};

	return (
		<nav className='flex justify-between items-center relative'>
			<Link to='/' onClick={closeSidebar}>
				<h1 className='sm:text-4xl text-xl font-bold'>Todos Manager</h1>
			</Link>
			<BsFillGearFill
				onClick={openSidebar}
				className='cursor-pointer hover:rotate-180 transition duration-500 z-10 select-none'
				size={26}
			/>
			<div
				className={`absolute top-0 rounded-xl right-0 bg-slate-800 p-4 pt-14 h-48s transition duration-500 z-9 ${
					sidebarOpen ? 'scale-1' : 'scale-0 '
				} `}
			>
				<ul
					className='flex flex-col px-1 gap-4 items-center justify-center text-center'
					onClick={closeSidebar}
				>
					<li className='w-full px-2 py-1 outline outline-2 rounded btn-outline btn-secondary shadow-lg'>
						<Link to='/' className='w-full flex items-center gap-2'>
							<span>
								<AiOutlineHome />
							</span>
							<span>Home</span>
						</Link>
					</li>
					<li
						className='w-full px-2 py-1 outline outline-2 rounded btn-outline btn-secondary shadow-lg'
						onClick={closeSidebar}
					>
						<Link to='/settings' className='w-full flex items-center gap-2'>
							<span>
								<FiSettings />
							</span>
							<span>Settings</span>
						</Link>
					</li>
					{isLoggedIn ? (
						<>
							<li
								className='w-full px-2 py-1 outline outline-2 rounded btn-outline btn-secondary shadow-lg'
								onClick={closeSidebar}
							>
								<Link
									to='/sign-in'
									onClick={handleLogout}
									className='w-full flex items-center gap-2'
								>
									<span>
										<BiLogOut />
									</span>
									<span>Logout</span>
								</Link>
							</li>
						</>
					) : (
						<>
							<li
								className='w-full px-2 py-1 outline outline-2 rounded btn-outline btn-secondary shadow-lg'
								onClick={closeSidebar}
							>
								<Link to='/sign-in' className='w-full flex items-center gap-2'>
									<span>
										<BiLogIn />
									</span>
									<span>Login</span>
								</Link>
							</li>
							<li
								className='w-full px-2 py-1 outline outline-2 rounded btn-outline btn-secondary shadow-lg'
								onClick={closeSidebar}
							>
								<Link to='/sign-up' className='w-full flex items-center gap-2'>
									<span>
										<MdAssignmentInd />
									</span>
									<span>Sign Up</span>
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
