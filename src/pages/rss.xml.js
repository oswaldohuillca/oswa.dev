import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
	const [posts, projects] = await Promise.all([
		getCollection('blog'),
		getCollection('project'),
	])

	const blogItems = posts
		.sort((a, b) => b.data.createAt.valueOf() - a.data.createAt.valueOf())
		.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
			pubDate: post.data.createAt,
		}))

	const projectItems = projects
		.sort((a, b) => b.data.createAt.valueOf() - a.data.createAt.valueOf())
		.map((project) => ({
			title: project.data.title,
			description: project.data.description,
			link: `/project/${project.slug}/`,
			pubDate: project.data.createAt,
			content: project.body,
		}))

	const items = [...blogItems, ...projectItems].sort(
		(a, b) => new Date(b.pubDate) - new Date(a.pubDate)
	)

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
		customData: `<language>es</language>`,
	})
}

