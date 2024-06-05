import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx()], // se agrean todas las integraciones que se deseen, por ejemplo tailwind, react, svelte, etc.
});
