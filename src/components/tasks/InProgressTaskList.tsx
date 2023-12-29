import { ComponentProps } from 'react'
import { Task } from '@zod/tasksSchema'
import { InProgressTaskItem } from '@components/tasks'
import { Link } from 'react-router-dom'
import { IoAddCircle } from 'react-icons/io5'

type InProgressTaskListProps = ComponentProps<'ul'> & {
  inProgressTasks: Task[]
}

export const InProgressTaskList = ({
  inProgressTasks,
}: InProgressTaskListProps) => {
  return (
    <>
      <ul className='grid grid-col-1 gap-4'>
        {inProgressTasks.length > 0 ? (
          <>
            {inProgressTasks.map((task) => (
              <InProgressTaskItem task={task} key={task.id} />
            ))}
          </>
        ) : (
          <li className='brightness-75 flex flex-col gap-4'>
            <p>You have no in-progress tasks on this category.</p>
            <Link to='/tasks' className='btn btn-sm btn-success w-fit'>
              <span className='sm:inline-block hidden'> Create a task</span>
              <IoAddCircle size='30px' />
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}
