import { Link, useLocation } from 'react-router-dom'

export const TasksNav = () => {
  const location = useLocation()

  return (
    <nav className=' flex items-center justify-center'>
      <ul className='menu menu-horizontal gap-2 border-b border-b-neutral-500'>
        <li>
          <Link
            to='/tasks'
            className={`${location.pathname === '/tasks' ? 'active' : ''}`}
          >
            In Progress
          </Link>
        </li>
        <li>
          <Link
            to='/tasks/completed'
            className={`${
              location.pathname === '/tasks/completed' ? 'active' : ''
            }`}
          >
            Completed
          </Link>
        </li>
      </ul>
    </nav>
  )
}
