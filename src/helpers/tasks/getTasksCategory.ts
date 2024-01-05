import { collection, getDocs, orderBy, query } from 'firebase/firestore'

import { db } from '@config/firebase.config'
import { type Category } from '@zod/categoriesSchema'

export const getTasksCategory = async (): Promise<Category[]> => {
  const categoriesColRef = collection(db, 'categories')

  let tasksCategories: Category[] = []

  const tasksCategoriesQuery = query(
    categoriesColRef,
    orderBy('updatedAt', 'asc'),
    orderBy('title', 'asc'),
  )

  const querySnapshot = await getDocs(tasksCategoriesQuery)

  querySnapshot.forEach((doc) => {
    const tasksCategory: Category = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      color: doc.data().color,
      createdAt: doc.data().createdAt,
      updatedAt: doc.data().updatedAt,
    }

    tasksCategories.push(tasksCategory)
  })

  return tasksCategories
}
