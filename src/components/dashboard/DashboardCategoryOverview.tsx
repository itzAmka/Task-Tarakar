import { type ComponentProps } from 'react'
import { type Category } from '@zod/categoriesSchema'
import { TotalTasksInCategoryItem } from '@components/tasks'

type DashboardCategoryOverviewProps = ComponentProps<'section'> & {
  tasksCategories: Category[]
}

export const DashboardCategoryOverview = ({
  tasksCategories = [],
}: DashboardCategoryOverviewProps) => {
  return (
    <>
      <section className='card flex flex-col gap-6 bg-neutral text-neutral-content p-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>Category Overview</h2>
          <p className='text-sm'>
            List of categories with the number of tasks in each.
          </p>
        </div>

        <div className=' overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='text-neutral-content '>
                <th>Categories</th>
                <th>Number of Tasks</th>
              </tr>
            </thead>
            <tbody>
              {tasksCategories.length > 0 ? (
                tasksCategories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.title}</td>
                    <td>
                      <TotalTasksInCategoryItem categoryId={category.id} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className='text-primary'>
                    Could not find any categories.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
