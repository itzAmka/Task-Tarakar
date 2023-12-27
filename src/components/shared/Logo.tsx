import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <Link to='/' className='btn btn-ghost'>
        <h1 className='md:text-2xl text-xl font-bold uppercase'>
          Task Tarakar
        </h1>
      </Link>
    </>
  )
}

export default Logo
