import { z } from 'zod';

export const categorySchema = z.object({
  id: z.string(),
  title: z.string(),
  userRef: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
});

export type Category = z.infer<typeof categorySchema>;