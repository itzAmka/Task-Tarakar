import { doc, updateDoc } from 'firebase/firestore'

import { db } from '@config/firebase.config'

export const updateTask = async (
  taskId: string,
  title: string,
): Promise<void> => {
  const tasksRef = doc(db, 'tasks', taskId)

  try {
    await updateDoc(tasksRef, {
      title,
    })
  } catch (err: unknown) {
    throw err
  }
}
