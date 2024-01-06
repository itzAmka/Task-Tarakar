import { useLoaderData } from 'react-router-dom'

import {
  DashboardHeader,
  DashboardTaskSummary,
  DashboardCategoryOverview,
} from '@components/dashboard'
import { type DashboardReportsLoaderResult } from 'src/loaders'

const Dashboard = () => {
  const { tasksCategories, tasksCompleted } =
    useLoaderData() as DashboardReportsLoaderResult

  return (
    <section className='flex flex-col gap-16'>
      <DashboardHeader />

      <DashboardTaskSummary tasksCompleted={tasksCompleted} />

      <DashboardCategoryOverview tasksCategories={tasksCategories} />
    </section>
  )
}

export default Dashboard
