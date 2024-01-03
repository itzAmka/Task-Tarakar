import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsEyeFill, BsEyeSlashFill, BsPersonLinesFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

import { db, auth } from '@config/firebase.config'
import GoogleOAuth from '@components/GoogleOAuth'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const { name, email, password } = formData

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (name !== '' || email !== '' || password !== '') {
      // sign up user
      try {
        // create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        )

        // get user from userCredential
        const user = userCredential.user

        if (user) {
          // update the user displayName
          await updateProfile(user, { displayName: name })

          // create refrence of the users document
          const usersRef = doc(db, 'users', user.uid)

          // save the new user to the database
          await setDoc(usersRef, {
            name: user.displayName,
            email: user.email,
          })

          setFormData({ name: '', email: '', password: '' })
          navigate('/')
        }
      } catch (error) {
        toast.error('Something went wrong')
      }
    }
  }

  return (
    <div className='mt-12 p-4 border border-slate-500 rounded-lg'>
      <section>
        <h1 className='text-2xl text-slate-400 text-center font-bold mb-6'>
          Create a new account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='form-control gap-2 mb-4'>
            <label htmlFor='name' className='label justify-start gap-2'>
              <BsPersonLinesFill /> Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Name'
              autoComplete='username'
              className='input input-secondary'
              value={name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className='form-control gap-2 mb-4'>
            <label htmlFor='password' className='label justify-start gap-2'>
              <RiLockPasswordFill /> Password
            </label>
            <div className='w-full relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                autoComplete='new-password'
                className='w-full input input-secondary'
                value={password}
                onChange={handleChange}
                required
              />
              <span className='absolute top-3 right-2 cursor-pointer'>
                {showPassword ? (
                  <BsEyeFill size={23} onClick={toggleShowPassword} />
                ) : (
                  <BsEyeSlashFill size={23} onClick={toggleShowPassword} />
                )}
              </span>
            </div>
          </div>
          <button className='btn btn-secondary btn-block mt-4'>Sign Up</button>
        </form>
      </section>

      <div className='divider h-1 rounded-full my-10'>OR</div>

      <section className='flex justify-center sm:gap-4 gap-6 sm:flex-row flex-col'>
        <GoogleOAuth />
        <Link
          to='/sign-in'
          className='btn btn-outline btn-info sm:btn-wide btn-block'
        >
          Already have an account?
        </Link>
      </section>
    </div>
  )
}

export default SignUp
