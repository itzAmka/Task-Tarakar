import { type ComponentProps, useState } from 'react'
import { Task } from '@zod/tasksSchema'
import { toggleTaskComplete } from '@helpers/tasks'

type InProgressTaskItemProps = ComponentProps<'ul'> & {
  task: Task
}

export const InProgressTaskItem = ({ task }: InProgressTaskItemProps) => {
  const [taskCompletion, setTaskCompletion] = useState<boolean>(
    task.isCompleted,
  )

  const handleTaskCompletion = async () => {
    await toggleTaskComplete(task)
    setTaskCompletion(!taskCompletion)
  }

  return (
    <>
      <li className='card bg-neutral text-neutral-content'>
        <div className='card-body'>
          <div className='flex items-center gap-2'>
            <label className='cursor-pointer label'>
              <input
                type='checkbox'
                className='checkbox checkbox-info'
                checked={taskCompletion}
                onChange={handleTaskCompletion}
              />
            </label>
            <p className={`${taskCompletion ? 'line-through' : ''}`}>
              {task.title}
            </p>
          </div>
        </div>
      </li>
    </>
  )
}
