import { type ComponentProps } from 'react'
import { Form } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { Task } from '@zod/tasksSchema'
import { toggleTaskComplete } from '@helpers/tasks'
import { DeleteTaskButton } from '@components/tasks'
import { UpdateTask } from './UpdateTask'

type InProgressTaskItemProps = ComponentProps<'ul'> & {
  task: Task
}

export const InProgressTaskItem = ({ task }: InProgressTaskItemProps) => {
  const handleTaskCompletion = async () => {
    await toggleTaskComplete(task)
  }

  return (
    <>
      <li className='card bg-neutral text-neutral-content'>
        <div className='card-body px-4 py-6'>
          <div className='flex items-center gap-2'>
            <Form method='post'>
              <button
                className={`btn btn-sm btn-circle btn-success ${
                  task.isCompleted ? '' : 'btn-outline'
                }`}
                onClick={handleTaskCompletion}
              >
                <FaCheck />
              </button>
            </Form>
            <p>{task.title}</p>
            <div className='flex items-center justify-center gap-2'>
              <UpdateTask task={task} />
              <DeleteTaskButton taskId={task.id} />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
