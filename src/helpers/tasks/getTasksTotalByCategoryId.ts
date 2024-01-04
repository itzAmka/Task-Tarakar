import { auth, db } from '@config/firebase.config'
import {
  collection,
  getCountFromServer,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { redirect } from 'react-router-dom'

export const getTasksTotalByCategoryId = async (
  categoryId: string,
): Promise<number> => {
  // fetch tasks by categoryId
  if (!auth.currentUser) {
    throw redirect(`/sign-in?redirectTo=/tasks/${categoryId}`)
  }

  const tasksColRef = collection(db, 'tasks')

  const tasksQuery = query(
    tasksColRef,
    orderBy('updatedAt', 'desc'),
    where('userRef', '==', auth.currentUser?.uid),
    where('categoryRef', '==', categoryId),
  )

  const tasksSnapshot = await getCountFromServer(tasksQuery)

  const taskTotalCount = tasksSnapshot.data().count

  return taskTotalCount
}
