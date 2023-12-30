import { collection, getDocs, query, orderBy, where } from 'firebase/firestore'
import { type LoaderFunction, redirect } from 'react-router-dom'
import { db, auth } from '@config/firebase.config'
import { Task } from '@zod/tasksSchema'

export const inProgressTasksLoader: LoaderFunction<Task[]> = async ({
  params,
}): Promise<Task[]> => {
  if (!auth.currentUser) {
    throw redirect(`/sign-in?redirectTo=/tasks/${params.categoryId}`)
  }

  const tasksColRef = collection(db, 'tasks')

  const tasksQuery = query(
    tasksColRef,
    orderBy('updatedAt', 'desc'),
    where('isCompleted', '==', false),
    where('userRef', '==', auth.currentUser?.uid),
  )

  const querySnapshot = await getDocs(tasksQuery)

  const inProgressTasks: Task[] = []

  querySnapshot.forEach((doc) => {
    const task: Task = {
      id: doc.id,
      title: doc.data().title,
      isCompleted: doc.data().isCompleted,
      categoryRef: doc.data().categoryRef,
      userRef: doc.data().userRef,
      createdAt: doc.data().createdAt,
      updatedAt: doc.data().updatedAt,
    }

    inProgressTasks.push(task)
  })

  return inProgressTasks
}
