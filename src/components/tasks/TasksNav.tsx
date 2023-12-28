import { ComponentProps } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoTimer } from 'react-icons/io5'
import { IoIosCheckmarkCircle } from 'react-icons/io'

type TasksNavProps = ComponentProps<'div'> & {
  categoryId?: string
}

export const TasksNav = ({ categoryId }: TasksNavProps) => {
  const location = useLocation()

  return (
    <nav className='flex items-center justify-center'>
      <ul className='menu menu-horizontal justify-center gap-2 border-b border-b-neutral-500'>
        <li className='sm:w-fit w-full'>
          <Link
            to={`/tasks/${categoryId}`}
            className={`${
              location.pathname === `/tasks/${categoryId}` ? 'active' : ''
            }`}
          >
            <IoTimer />
            <span>In Progress</span>
          </Link>
        </li>
        <li className='sm:w-fit w-full'>
          <Link
            to={`/tasks/${categoryId}/completed`}
            className={`${
              location.pathname === `/tasks/${categoryId}/completed`
                ? 'active'
                : ''
            }`}
          >
            <IoIosCheckmarkCircle />
            <span>Completed</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
