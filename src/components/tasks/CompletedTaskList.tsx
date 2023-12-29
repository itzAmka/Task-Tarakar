import { ComponentProps } from 'react'
import { Task } from '@zod/tasksSchema'
import { CompletedTaskItem } from '@components/tasks'
import { Link } from 'react-router-dom'
import { IoAddCircle } from 'react-icons/io5'

type CompletedTaskListProps = ComponentProps<'ul'> & {
  completedTasks: Task[]
}

export const CompletedTaskList = ({
  completedTasks,
}: CompletedTaskListProps) => {
  return (
    <>
      <ul className='grid grid-col-1 gap-4'>
        {completedTasks.length > 0 ? (
          <>
            {completedTasks.map((task) => (
              <CompletedTaskItem task={task} key={task.id} />
            ))}
          </>
        ) : (
          <li className='brightness-75 flex flex-col gap-4'>
            <p>It looks like you have no completed tasks on this category.</p>
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
