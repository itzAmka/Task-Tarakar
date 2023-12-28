import { useLoaderData } from 'react-router-dom'
import { Task } from '@zod/tasksSchema'

const InProgressTasks = () => {
  const inProgressTasks = useLoaderData() as Task[]

  return (
    <>
      <section className='flex flex-col gap-10'>
        <div className='max-w-md flex flex-col gap-2'>
          <h1 className='md:text-2xl text-xl font-bold text-primary'>
            In-Progress Tasks
          </h1>
          <p className='text-sm'>
            In-progress tasks are tasks that you are currently working on.
          </p>
        </div>

        <ul className='grid grid-col-1'>
          {inProgressTasks.map((task) => (
            <li className='card bg-neutral text-neutral-content' key={task.id}>
              <div className='card-body'>{task.title}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default InProgressTasks
