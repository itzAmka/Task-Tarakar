import { z } from 'zod';

export const todoSchema = z.object({
  // current schema
  id: z.string(),
  text: z.string(),
  userRef: z.string(),
  isCompleted: z.boolean(),

  // after update: make it optional for now
  categoryRef: z.string().optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Todo = z.infer<typeof todoSchema>;