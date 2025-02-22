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
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (/node_modules\/react($|\/)/.test(id)) return 'vendor-react';
            if (/node_modules\/@react-pdf/.test(id)) return 'vendor-pdf'; 
            if (/node_modules\/react-toastify/.test(id)) return 'vendor-toastify'; 
            if (/node_modules\/react-router/.test(id)) return 'vendor-router'; 
            if (/node_modules\/react-dom/.test(id)) return 'vendor-dom'; 
            return 'vendor';
          }
        }
      },
    },
  },
})
