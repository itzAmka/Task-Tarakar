import { Outlet, useLoaderData } from 'react-router-dom'
import { TaskCategoryList } from '@components/tasks'
import { Category } from '@zod/categoriesSchema'

const Tasks = () => {
  const tasksCategories = useLoaderData() as Category[]

  return (
    <div className='flex flex-col gap-16'>
      <TaskCategoryList tasksCategories={tasksCategories} />
      <Outlet />
    </div>
  )
}

export default Tasks
