/* eslint-disable */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import {resolve } from 'node:path';
import vitePluginStylusAlias from 'vite-plugin-stylus-alias';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue3-easy-data-table',
      fileName: (format) => `vue3-easy-data-table.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), vitePluginStylusAlias()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'src'),
      '~@': resolve(__dirname, 'src'),
    },
  },
});
