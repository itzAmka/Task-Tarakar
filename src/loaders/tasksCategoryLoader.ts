import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { type LoaderFunction, redirect } from 'react-router-dom'

import { auth, db } from '@config/firebase.config'
import { type Category } from '@zod/categoriesSchema'

export const tasksCategoryLoader: LoaderFunction<
  Category[]
> = async (): Promise<Category[]> => {
  if (!auth.currentUser) {
    throw redirect('/sign-in?redirectTo=/tasks')
  }

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
