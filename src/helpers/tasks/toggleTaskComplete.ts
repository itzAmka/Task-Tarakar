import { doc, updateDoc } from 'firebase/firestore'

import { db } from '@config/firebase.config'
import { type Task } from '@zod/tasksSchema'

export const toggleTaskComplete = async (task: Task) => {
  const { id, isCompleted } = task

  const taskDocRef = doc(db, 'tasks', id)

  await updateDoc(taskDocRef, {
    isCompleted: !isCompleted,
  })
}
