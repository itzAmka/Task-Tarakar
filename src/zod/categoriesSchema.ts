import { z } from 'zod'

export const categorySchema = z.object({
  id: z.string(),
  title: z.string(),
  color: z.string().regex(/^#[0-9a-f]{6}$/i, { message: 'Invalid color' }),
  description: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
})

export type Category = z.infer<typeof categorySchema>
