import { LoaderFunction, redirect } from 'react-router-dom'

import { auth } from '@config/firebase.config'
import {
  TaskCountResult,
  getCompletedTasksCount,
  getTasksCategory,
} from '@helpers/tasks'
import { Category } from '@zod/categoriesSchema'

export type TasksCompleted = {
  todayCompletedTasksCount: TaskCountResult
  weekCompletedTasksCount: TaskCountResult
  monthCompletedTasksCount: TaskCountResult
}
export type DashboardReportsLoaderResult = {
  tasksCategories: Category[]
  tasksCompleted: TasksCompleted
}

export const dashboardReportsLoader: LoaderFunction =
  async (): Promise<DashboardReportsLoaderResult> => {
    if (!auth.currentUser) {
      throw redirect('/sign-in?redirectTo=/')
    }

    const tasksCategories: Category[] = await getTasksCategory()
    const todayCompletedTasksCount = await getCompletedTasksCount('day')
    const weekCompletedTasksCount = await getCompletedTasksCount('week')
    const monthCompletedTasksCount = await getCompletedTasksCount('month')

    return {
      tasksCategories,
      tasksCompleted: {
        todayCompletedTasksCount,
        weekCompletedTasksCount,
        monthCompletedTasksCount,
      },
    }
  }
