import { Outlet } from 'react-router-dom'
import { TasksNav } from '@components/tasks'

const Tasks = () => {
  return (
    <div className='flex flex-col gap-16'>
      <TasksNav />
      <Outlet />
    </div>
  )
}

export default Tasks
