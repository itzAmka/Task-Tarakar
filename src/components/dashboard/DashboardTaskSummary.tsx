import { type ComponentProps } from 'react'

import { TasksCompleted } from 'src/loaders'

type DashboardTaskSummaryProps = ComponentProps<'section'> & {
  tasksCompleted: TasksCompleted
}

export const DashboardTaskSummary = ({
  tasksCompleted,
}: DashboardTaskSummaryProps) => {
  const {
    todayCompletedTasksCount,
    weekCompletedTasksCount,
    monthCompletedTasksCount,
  } = tasksCompleted

  return (
    <>
      <section className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>Tasks Summary</h2>
          <p className='text-sm'>
            Number of tasks completed today/this week/this month.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <div className='card text-center sm:items-start items-center gap-1 p-4 bg-neutral text-neutral-content'>
            <h4 className='text-4xl font-bold'>
              {todayCompletedTasksCount.count}
            </h4>
            <p className='text-sm font-semibold'>Tasks completed today</p>
          </div>

          <div className='card text-center sm:items-start items-center gap-1 p-4 bg-neutral text-neutral-content'>
            <h4 className='text-4xl font-bold'>
              {weekCompletedTasksCount.count}
            </h4>
            <p className='text-sm font-semibold'>Tasks completed this week</p>
          </div>

          <div className='card text-center sm:items-start items-center gap-1 p-4 bg-neutral text-neutral-content'>
            <h4 className='text-4xl font-bold'>
              {monthCompletedTasksCount.count}
            </h4>
            <p className='text-sm font-semibold'>Tasks completed this month</p>
          </div>
        </div>
      </section>
    </>
  )
}
