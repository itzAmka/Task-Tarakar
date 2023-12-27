import { Link } from 'react-router-dom'
import { IoAddCircle } from 'react-icons/io5'

export const DashboardHeader = () => {
  return (
    <>
      <div className='flex gap-4 items-center justify-between'>
        <h1 className='md:text-2xl text-xl font-bold text-primary'>
          Dashboard Reports
        </h1>
        <Link to='/tasks' className='btn btn-sm btn-success'>
          <span className='sm:inline-block hidden'>New Task</span>
          <IoAddCircle size='30px' />
        </Link>
      </div>
    </>
  )
}
