import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(),'')
    return {
        define: {
            __ASSETS_URL__: JSON.stringify(env.VITE_ASSETS_URL)
        },
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
    }
})
