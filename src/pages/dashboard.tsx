import { useLoaderData } from 'react-router-dom'

import {
  DashboardHeader,
  DashboardTaskSummary,
  DashboardCategoryOverview,
} from '@components/dashboard'
import { type Category } from '@zod/categoriesSchema'

const Dashboard = () => {
  // TODO: add type to useLoaderData
  const { tasksCategories } = useLoaderData() as { tasksCategories: Category[] }

  return (
    <section className='flex flex-col gap-16'>
      <DashboardHeader />

      <DashboardTaskSummary />

      <DashboardCategoryOverview tasksCategories={tasksCategories} />
    </section>
  )
}

export default Dashboard
