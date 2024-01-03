import { Outlet, useParams } from 'react-router-dom'

import { TasksNav } from '@components/tasks'

const Tasks = () => {
  const params = useParams()

  return (
    <div className='flex flex-col gap-16'>
      {/* TODO: breadcrumbs */}
      <TasksNav categoryId={params.categoryId} />
      <Outlet />
    </div>
  )
}

export default Tasks
