import { type ComponentProps } from 'react'

import { type Category } from '@zod/categoriesSchema'
import { TaskCategoryItem } from '@components/tasks'

type TaskCategoryListProps = ComponentProps<'div'> & {
  tasksCategories: Category[]
}

export const TaskCategoryList = ({
  tasksCategories,
}: TaskCategoryListProps) => {
  return (
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6'>
        {tasksCategories.map((category) => (
          <div className='text-sm' key={category.id}>
            <TaskCategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}
