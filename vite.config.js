import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: '/cover/',
  plugins: [react(), tailwindcss(),

    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/static/*',  
          dest: 'static'               
        }
      ]
    })
  ],


  
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
