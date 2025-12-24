import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'
import path from 'path'

export default defineConfig({
  plugins: [cloudflare(), ssrPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
