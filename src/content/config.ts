import { defineCollection, z } from 'astro:content'

const project = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** Resumen de una línea para listas compactas. */
		tagline: z.string().optional(),
		createAt: z.coerce.date(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		github: z.string().optional(),
		website: z.string().optional(),
		/** 'case-study' se muestra con captura; 'library' es un paquete open-source sin UI propia. */
		kind: z.enum(['case-study', 'library']).default('case-study'),
		/** Comando de instalación real y publicado. Se omite si el paquete aún no está en un registro. */
		install: z.string().optional(),
		/** Registro donde vive el paquete, para etiquetarlo sin inventar métricas. */
		registry: z.enum(['npm', 'packagist']).optional(),
		/** Nota corta de estado cuando el paquete todavía no es instalable. */
		status: z.string().optional(),
	}),
})


export const collections = { project }
