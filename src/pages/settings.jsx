import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import { auth } from '../config/firebase.config';
import { signOut } from 'firebase/auth';
import ThemeOptions from '../components/ThemeOptions';

const Settings = () => {
	const handleLogout = async () => {
		await signOut(auth);
	};

	return (
		<div className='mt-12 p-4 border border-slate-500 rounded-lg'>
			<section>
				<h2 className='text-3xl text-slate-400 mb-4'>Settings</h2>
				<div className='divider'></div>
				<h3 className='text-xl'>Theme mode</h3>
				<div className='my-4'>
					<ThemeOptions />
				</div>
			</section>
			<section className='mt-16'>
				<h2 className='text-3xl text-slate-400 mb-4'>About</h2>
				<div className='divider'></div>
				<p>
					Todos Manager is a web app that manages your short or long term todos
					listings and easy to use.
				</p>
				<div className='mt-4'>
					<p className='text-xl text-slate-400 mb-2'>
						Version:
						<span className='text-sm text-slate-300 font-bold ml-2'>1.0.0</span>
					</p>
					<p className='text-xl text-slate-400'>
						Developed and Designed by:
						<a
							className='btn-link font-bold ml-2'
							href='https://github.com/AmkaE'
							target='_blank'
						>
							AmkaE
						</a>
					</p>
				</div>
			</section>
			<section className='text-center mt-10 flex justify-center gap-4 sm:flex-row flex-col'>
				<Link to='/'>
					<button className='btn bg-slate-700 btn-wide'>
						<RiArrowGoBackFill size={18} />
						<span className='ml-2'>Go Back To Home</span>
					</button>
				</Link>
				<Link to='/sign-in' onClick={handleLogout}>
					<button className='btn btn-error btn-wide'>
						<BiLogOut size={20} />
						<span className='ml-2'>Logout</span>
					</button>
				</Link>
			</section>
		</div>
	);
};

export default Settings;
