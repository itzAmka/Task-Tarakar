import { deleteDoc, doc } from 'firebase/firestore'

import { db } from '@config/firebase.config'

export const deleteTask = async (taskId: string): Promise<void> => {
  const tasksRef = doc(db, 'tasks', taskId)

  try {
    await deleteDoc(tasksRef)
  } catch (err: unknown) {
    throw err
  }
}
