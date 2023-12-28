import { useLoaderData } from 'react-router-dom'
import { Task } from '@zod/tasksSchema'
import { InProgressTaskList } from '@components/tasks'

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

        <InProgressTaskList inProgressTasks={inProgressTasks} />
      </section>
    </>
  )
}

export default InProgressTasks
