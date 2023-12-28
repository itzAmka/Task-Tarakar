import { Outlet } from 'react-router-dom'
import { TaskCategoryList } from '@components/tasks'

const Tasks = () => {
  return (
    <div className='flex flex-col gap-16'>
      <TaskCategoryList />
      <Outlet />
    </div>
  )
}

export default Tasks
