import { collection, getDocs, query, orderBy, where } from 'firebase/firestore'
import { type LoaderFunction, redirect } from 'react-router-dom'
import { db, auth } from '@config/firebase.config'
import { Task } from '@zod/tasksSchema'

export const completedTasksLoader: LoaderFunction<Task[]> = async (): Promise<
  Task[]
> => {
  if (!auth.currentUser) {
    throw redirect('/sign-in')
  }

  const tasksColRef = collection(db, 'tasks')

  const tasksQuery = query(
    tasksColRef,
    orderBy('updatedAt', 'desc'),
    where('isCompleted', '==', true),
    where('userRef', '==', auth.currentUser?.uid),
  )

  const querySnapshot = await getDocs(tasksQuery)

  const completedTasks: Task[] = []

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

    completedTasks.push(task)
  })

  return completedTasks
}
