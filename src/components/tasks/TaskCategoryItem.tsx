import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

export type TCategory = {
  id: string
  title: string
  color: string
  description: string
  createdAt?: string
  updatedAt?: string
}

type TaskCategoryItemProps = ComponentProps<'div'> & {
  category: TCategory
}

export const TaskCategoryItem = ({ category }: TaskCategoryItemProps) => {
  return (
    <>
      <div className='card bg-neutral text-neutral-content'>
        <div className='card-body gap-8 justify-between'>
          <div className='flex items-start justify-between gap-2'>
            <div className='flex flex-col gap-1'>
              <h4 className='card-title'>{category.title}</h4>
              <p>{category.description}</p>
            </div>
            <span className='badge badge-outline'>50 tasks</span>
          </div>

          <div className='card-actions'>
            <Link to={`/tasks/${category.id}`} className='btn btn-primary'>
              See tasks
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
