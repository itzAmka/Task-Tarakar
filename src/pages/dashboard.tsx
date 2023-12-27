import { Link } from 'react-router-dom'
import { IoAddCircle } from 'react-icons/io5'

const Dashboard = () => {
  return (
    <section className='flex flex-col gap-16'>
      <div className='flex gap-4 items-center justify-between'>
        <h1 className='md:text-2xl text-xl font-bold text-primary'>
          Dashboard Reports
        </h1>
        <Link to='/tasks' className='btn btn-sm btn-success'>
          <span className='sm:inline-block hidden'>New Task</span>
          <IoAddCircle size='30px' />
        </Link>
      </div>
      <section className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>Tasks Summary</h2>
          <p className='text-sm'>
            Number of tasks completed today/this week/this month.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <div className='card text-center sm:items-start items-center gap-1 p-4 bg-neutral text-neutral-content'>
            <h4 className='text-4xl font-bold'>10</h4>
            <p className='text-sm font-semibold'>Tasks completed today</p>
          </div>

          <div className='card text-center sm:items-start items-center gap-1 p-4 bg-neutral text-neutral-content'>
            <h4 className='text-4xl font-bold'>20</h4>
            <p className='text-sm font-semibold'>Tasks completed this week</p>
          </div>

          <div className='card text-center sm:items-start items-center gap-1 p-4 bg-neutral text-neutral-content'>
            <h4 className='text-4xl font-bold'>30</h4>
            <p className='text-sm font-semibold'>Tasks completed this month</p>
          </div>
        </div>
      </section>

      <section className='card flex flex-col gap-6 bg-neutral text-neutral-content p-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>Category Overview</h2>
          <p className='text-sm'>
            List of categories with the number of tasks in each.
          </p>
        </div>

        <div className=' overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='text-neutral-content '>
                <th>Categories</th>
                <th>Number of Categories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personal</td>
                <td>10</td>
              </tr>
              <tr className='bg-primary'>
                <td>Work</td>
                <td>35</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  )
}

export default Dashboard
