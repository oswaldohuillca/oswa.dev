import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://oswa.dev",
  // A nivel raíz para que lo hereden tanto .md como .mdx. Temas duales: los
  // colores del tema claro van inline y los del oscuro como custom properties,
  // que global.mdx.css activa bajo html.dark.
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      // Par elegido por contraste sobre nuestras superficies: los comentarios
      // de github-light/github-dark se quedan en 4.41:1 y 3.75:1. Este par
      // deja el mínimo real en 4.62:1 (claro) y 5.88:1 (oscuro).
      themes: {
        light: "github-light-high-contrast",
        dark: "github-dark-default",
      },
      defaultColor: "light",
      wrap: false,
    },
  },
  integrations: [
    mdx(),
    sitemap(),
    // tailwind({
    //   applyBaseStyles: false
    // }),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
