import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const cssFileName = 'index.min.css'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    publicDir: 'frontend/public',
    root: 'frontend/src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            output: {
                assetFileNames: (file) => {
                    return `assets/css/${cssFileName}`
                },
                entryFileNames: (file) => {
                    return `assets/js/[name].min.js`
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, // Enable inline JavaScript in Less styles
            },
        },
    },
    server: {
        port: 8234,
    },
    resolve: {
        alias: [
            {
                find: 'lib',
                replacement: path.resolve(__dirname, './frontend/src/lib'),
            },
            {
                find: 'scenes',
                replacement: path.resolve(__dirname, './frontend/src/scenes'),
            },
            {
                find: '@posthog/apps-common',
                replacement: path.resolve(__dirname, './frontend/@posthog/apps-common/src/index'),
            },
            {
                find: '@posthog/apps-common/',
                replacement: path.resolve(__dirname, './frontend/@posthog/apps-common/src/'),
            },

            {
                find: '@posthog/lemon-ui/',
                replacement: path.resolve(__dirname, './frontend/@posthog/lemon-ui/src/'),
            },
            {
                find: '@posthog/lemon-ui',
                replacement: path.resolve(__dirname, './frontend/@posthog/lemon-ui/src'),
            },
            { find: 'storybook', replacement: '../.storybook' },
            { find: '~', replacement: path.resolve(__dirname, './frontend/src') },
            { find: 'public', replacement: path.resolve(__dirname, './public') },
        ],
    },
})
