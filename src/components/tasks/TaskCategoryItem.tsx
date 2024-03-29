import { type ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { IoAddCircle } from 'react-icons/io5'
import { FaTasks } from 'react-icons/fa'

import { TotalTasksInCategoryItem } from '@components/tasks'

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
            <TotalTasksInCategoryItem categoryId={category.id} />
          </div>

          <div className='card-actions'>
            <Link to={`/tasks/${category.id}`} className='btn btn-secondary'>
              <span className='sm:inline-block hidden'>See Tasks</span>
              <FaTasks />
            </Link>
            <Link
              to={`/tasks/${category.id}/create-task`}
              className='btn btn-primary'
            >
              <span className='sm:inline-block hidden'>New Task</span>
              <IoAddCircle size='30px' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
