import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

const useLocalApi = true;
const deployedApiUrl = "https://2lvx5jtjdg.execute-api.us-east-1.amazonaws.com/dev/";
const localApiUrl = "http://localhost:3001/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: window.location.origin.includes("localhost") && useLocalApi ? localApiUrl : deployedApiUrl,
        changeOrigin: true,
        rewrite: path => path.replace('/api', ''),
      }
    }
  }
})
