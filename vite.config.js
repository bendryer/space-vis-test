import { defineConfig } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  // REPLACE 'solar-system-explorer' WITH YOUR REPO NAME
  // Example: If your repo is at https://github.com/bendryer/solar-system-explorer
  // the base should be '/solar-system-explorer/'
  base: '/space-vis-test/',
  plugins: [visualizer({ open: true, gzipSize: true })]
})