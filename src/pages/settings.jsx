import ThemeOptions from '../components/ThemeOptions';

const Settings = () => {
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
		</div>
	);
};

export default Settings;
