import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            components: '/src/components/',
            containers: '/src/containers/',
            helpers: '/src/helpers/',
            hooks: '/src/hooks/',
            store: '/src/store/',
            mock: '/src/mock/'
        }
    },
    plugins: [react()]
});
