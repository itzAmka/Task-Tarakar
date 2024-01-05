import { LoaderFunction, redirect } from 'react-router-dom'

import { auth } from '@config/firebase.config'
import { getTasksCategory } from '@helpers/tasks'
import { Category } from '@zod/categoriesSchema'

// TODO: Later, this should load all the data needed for the dashboard reports
export const dashboardReportsLoader: LoaderFunction = async () => {
  if (!auth.currentUser) {
    throw redirect('/sign-in?redirectTo=/')
  }

  const tasksCategories: Category[] = await getTasksCategory()

  return {
    tasksCategories,
  }
}
