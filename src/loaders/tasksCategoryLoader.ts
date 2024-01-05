import { type LoaderFunction, redirect } from 'react-router-dom'

import { auth } from '@config/firebase.config'
import { type Category } from '@zod/categoriesSchema'
import { getTasksCategory } from '@helpers/tasks'

export const tasksCategoryLoader: LoaderFunction<
  Category[]
> = async (): Promise<Category[]> => {
  if (!auth.currentUser) {
    throw redirect('/sign-in?redirectTo=/tasks')
  }

  const tasksCategories: Category[] = await getTasksCategory()

  return tasksCategories
}
