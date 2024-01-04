import { useState, type ComponentProps, useEffect } from 'react'

import { getTasksTotalByCategoryId } from '@helpers/tasks'

type TotalTasksInCategoryItemProps = ComponentProps<'span'> & {
  categoryId: string
}

export const TotalTasksInCategoryItem = ({
  categoryId,
}: TotalTasksInCategoryItemProps) => {
  const [totalCount, setTotalCount] = useState<number>(0)

  const handleGetTotalTasksInCategory = async () => {
    setTotalCount(await getTasksTotalByCategoryId(categoryId))
  }

  useEffect(() => {
    handleGetTotalTasksInCategory()
  }, [])

  return <span className='badge badge-accent'>{totalCount}</span>
}
