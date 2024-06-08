import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), react()], // se agrean todas las integraciones que se deseen, por ejemplo tailwind, react, svelte, etc.
});
