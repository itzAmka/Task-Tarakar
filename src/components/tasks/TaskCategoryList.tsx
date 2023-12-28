import { TaskCategoryItem, TCategory } from '@components/tasks'

export const TaskCategoryList = () => {
  const categories: TCategory[] = [
    {
      id: '1',
      title: 'All',
      color: 'bg-gray-100',
      description: 'All tasks',
    },
    {
      id: '2',
      title: 'Personal',
      color: 'bg-blue-100',
      description: 'Personal tasks',
    },
    {
      id: '3',
      title: 'Work',
      color: 'bg-yellow-100',
      description: 'Work tasks',
    },
    {
      id: '4',
      title: 'Shopping',
      color: 'bg-green-100',
      description: 'Shopping tasks',
    },
    {
      id: '5',
      title: 'Others',
      color: 'bg-red-100',
      description: 'Other tasks',
    },
  ]

  return (
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6'>
        {categories.map((category) => (
          <div className='text-sm' key={category.id}>
            <TaskCategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}
