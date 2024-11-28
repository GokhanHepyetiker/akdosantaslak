import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  define: {
    'vue.compilerOptions': {
      isCustomElement: (tag) => tag.startsWith('swiper-') // Swiper bileşenlerini özel eleman olarak kabul et
    }
  }
});
