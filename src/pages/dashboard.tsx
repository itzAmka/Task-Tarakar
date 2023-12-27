import {
  DashboardHeader,
  DashboardTaskSummary,
  DashboardCategoryOverview,
} from '@components/dashboard'

const Dashboard = () => {
  return (
    <section className='flex flex-col gap-16'>
      <DashboardHeader />

      <DashboardTaskSummary />

      <DashboardCategoryOverview />
    </section>
  )
}

export default Dashboard
