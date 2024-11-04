// vite.config.ts
import { defineConfig } from 'vite';
import vue  from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@rollup/wasm-node'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/shards-dashboard-pro/_overrides.scss";
          @import "@/assets/shards-dashboard-pro/_variables.scss";
          @import "@/assets/shards-dashboard-pro/_utilities.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
     '@': path.resolve(__dirname, './src'),
    }
  }
});
