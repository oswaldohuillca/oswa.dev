import { defineCollection, z } from 'astro:content'

const project = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		createAt: z.coerce.date(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		github: z.string().optional(),
		website: z.string().optional(),
	}),
})


export const collections = { project }
