import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wgslVitePlugin from '@vgpu/wgsl/loader-vite';

export default defineConfig({
  plugins: [
    wgslVitePlugin(),
    react()
  ],
  server: {
    port: 3000,
    open: false
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          vgpu: ['vgpu']
        }
      }
    }
  }
});
