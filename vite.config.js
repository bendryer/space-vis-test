import { defineConfig } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";
import { fileURLToPath } from 'node:url';

// ANALYZE=1 npm run build writes a bundle report (stats.html) and opens it.
const analyze = Boolean(process.env.ANALYZE);

export default defineConfig({
  // The GitHub Pages repo name: https://bendryer.github.io/space-vis-test/
  base: '/space-vis-test/',
  build: {
    rollupOptions: {
      // Two pages on one engine: the showcase (index.html) and the presentation (present.html).
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        present: fileURLToPath(new URL('./present.html', import.meta.url)),
      },
      // The code both pages share is mostly three.js and the engine: name its chunk for that, not
      // for whichever shared module Rollup happens to meet first.
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three/') || id.includes('/src/engine/')) return 'engine';
        },
      },
    },
  },
  plugins: analyze ? [visualizer({ open: true, gzipSize: true })] : []
})
