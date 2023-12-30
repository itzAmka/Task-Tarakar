import { Link } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { BiLogOut } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { auth } from '@config/firebase.config'
import ThemeOptions from '@components/ThemeOptions'

const Settings = () => {
  const handleLogout = async () => {
    await signOut(auth)
  }

  return (
    <div className='p-4 border border-slate-700 rounded-lg'>
      <section>
        <h2 className='text-3xl mb-4'>Settings</h2>
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
          <span className='text-primary font-semibold'>Task Takarak</span> is a
          Task Tracker app, powered by ReactJS and Firebase, provides a simple,
          efficient way to manage your tasks. With its user-friendly interface
          and real-time updates, it keeps your daily to-dos organized and on
          track, ensuring productivity and clarity in your personal and
          professional life.
        </p>
        <div className='mt-4'>
          <p className='text-xl text-slate-400 mb-2'>
            Version:
            <span className='text-sm text-slate-300 font-bold ml-2'>1.0.1</span>
          </p>
          <p className='text-xl text-slate-400'>
            Designed and Developed by:
            <a
              className='btn-link font-bold ml-2'
              href='https://www.amka.dev'
              target='_blank'
            >
              Amin H.
            </a>
          </p>

          {/* social links */}
          <div className='mt-4'>
            <h2>Follow me on:</h2>
            <div className='flex flex-wrap gap-2 mt-2'>
              {/* github */}
              <a
                className='btn btn-neutral gap-2'
                href='https://github.com/itzAmka'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
                <FaGithub size={20} />
              </a>

              {/* linkedIn */}
              <a
                className='btn btn-neutral gap-2'
                href='https://www.linkedin.com/in/amin-hassen-405715/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
                <FaLinkedinIn size={20} />
              </a>

              {/* twitter */}
              <a
                className='btn btn-neutral gap-2'
                href='https://twitter.com/itzAmka'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='text-center mt-10 flex justify-center items-center sm:gap-4 gap-6 flex-row flex-wrap'>
        <Link to='/' className='btn btn-secondary sm:btn-wide w-full gap-3'>
          <RiArrowGoBackFill size={18} />
          <span>Go Back To Home</span>
        </Link>
        <Link
          to='/sign-in'
          onClick={handleLogout}
          className='btn btn-error sm:btn-wide w-full gap-3'
        >
          <BiLogOut size={20} />
          <span>Logout</span>
        </Link>
      </section>
    </div>
  )
}

export default Settings
