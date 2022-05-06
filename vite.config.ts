import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                dir: './dist',
                assetFileNames: 'assets/[name][extname]',
                chunkFileNames: 'assets/[name].js',
                entryFileNames: 'assets/[name].js'
            }
        }
    },
    plugins: [
        react(), 
    ]
})
