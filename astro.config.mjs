// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import remarkGfm from "remark-gfm"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://nkaewam.dev",
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  integrations: [react(), mdx()],
})
