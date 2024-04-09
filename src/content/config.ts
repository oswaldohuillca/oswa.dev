import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		createAt: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
})

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


export const collections = { blog, project }
