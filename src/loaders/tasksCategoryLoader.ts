import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { type LoaderFunction } from 'react-router-dom'
import { db } from '@config/firebase.config'
import { type Category } from '@zod/categoriesSchema'

export const tasksCategoryLoader: LoaderFunction<Category[]> = async () => {
  const categoriesColRef = collection(db, 'categories')

  let tasksCategories: Category[] = []

  const tasksCategoriesQuery = query(categoriesColRef, orderBy('createdAt'))

  const querySnapshot = await getDocs(tasksCategoriesQuery)

  querySnapshot.forEach((doc) => {
    const task: Category = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      color: doc.data().color,
      createdAt: doc.data().createdAt,
      updatedAt: doc.data().updatedAt,
    }

    tasksCategories.push(task)
  })

  return tasksCategories
}
