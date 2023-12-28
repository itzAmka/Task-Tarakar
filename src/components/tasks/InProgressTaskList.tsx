import { ComponentProps } from 'react'
import { Task } from '@zod/tasksSchema'
import { InProgressTaskItem } from '@components/tasks'

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
          <li className='brightness-75'>
            <p>You have no in-progress tasks on this category.</p>
            <p>Click on the "Add Task" button to add a new task.</p>
          </li>
        )}
      </ul>
    </>
  )
}
