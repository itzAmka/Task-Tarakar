import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { auth } from '../config/firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');

	const navigate = useNavigate();

	const handleChange = e => {
		setEmail(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (email !== '') {
			try {
				await sendPasswordResetEmail(auth, email);
				toast.success('Check your email for password reset link', {
					autoClose: 5000,
				});
				navigate('/sign-in');
			} catch (error) {
				toast.error('Something went wrong');
			}
		}
	};

	return (
		<div className='mt-12 p-4 border border-slate-500 rounded-lg'>
			<section>
				<h1 className='text-2xl text-slate-400 text-center font-bold mb-6'>
					Send a password reset email
				</h1>
				<form onSubmit={handleSubmit}>
					<div className='form-control gap-2 mb-4'>
						<label htmlFor='email' className='label justify-start gap-2'>
							<MdEmail /> Email
						</label>
						<input
							type='text'
							id='email'
							placeholder='Email'
							autoComplete='email'
							className='input input-secondary'
							value={email}
							onChange={handleChange}
							required
						/>
					</div>
					<button className='btn btn-secondary btn-block mt-4'>Send</button>
				</form>
			</section>
		</div>
	);
};

export default ForgotPassword;
