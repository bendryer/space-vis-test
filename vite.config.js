import { defineConfig } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";

// ANALYZE=1 npm run build writes a bundle report (stats.html) and opens it.
const analyze = Boolean(process.env.ANALYZE);

export default defineConfig({
  // The GitHub Pages repo name: https://bendryer.github.io/space-vis-test/
  base: '/space-vis-test/',
  plugins: analyze ? [visualizer({ open: true, gzipSize: true })] : []
})
