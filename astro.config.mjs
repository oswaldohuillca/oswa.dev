import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import robotsTxt from 'astro-robots-txt'


// https://astro.build/config
export default defineConfig({
  site: "https://oswa.dev",
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'dracula'
      },

    }),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
    robotsTxt()
  ]
})