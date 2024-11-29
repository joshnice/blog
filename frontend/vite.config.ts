import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    sourcemaps: {
      filesToDeleteAfterUpload: "**/*.js.map",
    },
    org: "joshnice",
    project: "blog"
  })],
  build: {
    sourcemap: true
  }
})