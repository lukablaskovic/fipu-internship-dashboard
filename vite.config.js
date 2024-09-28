import { fileURLToPath } from "url";
import path from "path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	//base: "/fipu/",
	assetsInclude: "**/*.xml",
	plugins: [vue()],
	define: {
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
	},
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	server: {
		host: "0.0.0.0",
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vue: ["vue"],
					vendor: ["axios"],
				},
			},
		},
	},
});
