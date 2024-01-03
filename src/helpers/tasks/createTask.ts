import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import { auth, db } from '@config/firebase.config'

export const createTask = async (title: string, categoryId: string) => {
  if (!title || !categoryId) {
    return {
      ok: false,
      message: 'Title and category are required',
    }
  }

  const newTask = {
    title,
    isCompleted: false,
    categoryRef: categoryId,
    userRef: auth.currentUser?.uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  const taskColRef = collection(db, 'tasks')

  try {
    const createdTask = await addDoc(taskColRef, newTask)

    if (!createdTask) {
      throw new Error('Failed to create task')
    }

    return {
      ok: true,
      message: 'Task created successfully',
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}
