import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), sentryVitePlugin({
      sourcemaps: {
        filesToDeleteAfterUpload: "**/*.js.map",
      },
      org: "joshnice",
      project: "blog",
      authToken: env.SENTRY_AUTH_TOKEN,
    })],
    build: {
      sourcemap: true
    }
  }
});
