import { z } from 'zod'

export const tasksSchema = z.object({
  id: z.string(),
  title: z.string(),
  isCompleted: z.boolean().default(false),
  userRef: z.string(),
  categoryRef: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Task = z.infer<typeof tasksSchema>
