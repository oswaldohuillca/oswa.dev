import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'


export async function GET(context) {
	// const posts = await getCollection('blog')
	const projects = await getCollection('project')

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			// ...posts.map((post) => ({
			// 	...post.data,
			// 	link: `/blog/${post.slug}/`,
			// })),
			...projects.map((project) => {
				return {
					...project.data,
					link: `/project/${project.slug}/`,
					pubDate: new Date(project.data.createAt),
					content: project.body
				}
			}),
		],
	})
}

