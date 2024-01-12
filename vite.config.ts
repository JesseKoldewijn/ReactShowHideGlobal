import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import tsPaths from "vite-plugin-tspaths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsPaths()],
});
