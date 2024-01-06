import {
  collection,
  getCountFromServer,
  orderBy,
  query,
  where,
  Timestamp,
} from 'firebase/firestore'

import { auth, db } from '@config/firebase.config'
import { redirect } from 'react-router-dom'

type TimePeriodArg = 'day' | 'week' | 'month'
export type TaskCountResult = {
  count: number
  timePeriod: TimePeriodArg
}

export const getCompletedTasksCount = async (
  timePeriod: TimePeriodArg,
): Promise<TaskCountResult> => {
  if (!auth.currentUser) throw redirect('/sign-in?redirectTo=/')

  const tasksColRef = collection(db, 'tasks')

  // Determine the start date based on the time period
  const now = new Date()
  let startDate = new Date()
  switch (timePeriod) {
    case 'day':
      startDate.setDate(now.getDate() - 1)
      break
    case 'week':
      startDate.setDate(now.getDate() - 7)
      break
    case 'month':
      startDate.setMonth(now.getMonth() - 1)
      break
  }

  // Create the query
  const startTimestamp = Timestamp.fromDate(startDate)
  const tasksQuery = query(
    tasksColRef,
    where('userRef', '==', auth.currentUser?.uid),
    where('isCompleted', '==', true),
    where('updatedAt', '>=', startTimestamp),
    orderBy('updatedAt'),
  )

  // Get the count
  const countSnapshot = await getCountFromServer(tasksQuery)
  const count = countSnapshot.data().count

  return { count, timePeriod }
}
