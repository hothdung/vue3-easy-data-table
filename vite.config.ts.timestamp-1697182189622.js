// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "node:path";
import stylusAlias from "vite-plugin-stylus-alias/src";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve("/Users/thanhdungho/VENDO/vue3-easy-data-table/vue3-easy-data-table", "src/index.ts"),
      name: "vue3-easy-data-table",
      fileName: (format) => `vue3-easy-data-table.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue(), stylusAlias()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@src": path.resolve("/Users/thanhdungho/VENDO/vue3-easy-data-table/vue3-easy-data-table", "src"),
      "@": resolve("/Users/thanhdungho/VENDO/vue3-easy-data-table/vue3-easy-data-table", "src"),
      "~@": resolve("/Users/thanhdungho/VENDO/vue3-easy-data-table/vue3-easy-data-table", "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgc3R5bHVzQWxpYXMgZnJvbSAndml0ZS1wbHVnaW4tc3R5bHVzLWFsaWFzL3NyYyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShcIi9Vc2Vycy90aGFuaGR1bmdoby9WRU5ETy92dWUzLWVhc3ktZGF0YS10YWJsZS92dWUzLWVhc3ktZGF0YS10YWJsZVwiLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAndnVlMy1lYXN5LWRhdGEtdGFibGUnLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB2dWUzLWVhc3ktZGF0YS10YWJsZS4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFt2dWUoKSwgc3R5bHVzQWxpYXMoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanN4JywgJy50cycsICcudHN4J10sXG4gICAgYWxpYXM6IHtcbiAgICAgICdAc3JjJzogcGF0aC5yZXNvbHZlKFwiL1VzZXJzL3RoYW5oZHVuZ2hvL1ZFTkRPL3Z1ZTMtZWFzeS1kYXRhLXRhYmxlL3Z1ZTMtZWFzeS1kYXRhLXRhYmxlXCIsICdzcmMnKSxcbiAgICAgICdAJzogcmVzb2x2ZShcIi9Vc2Vycy90aGFuaGR1bmdoby9WRU5ETy92dWUzLWVhc3ktZGF0YS10YWJsZS92dWUzLWVhc3ktZGF0YS10YWJsZVwiLCAnc3JjJyksXG4gICAgICAnfkAnOiByZXNvbHZlKFwiL1VzZXJzL3RoYW5oZHVuZ2hvL1ZFTkRPL3Z1ZTMtZWFzeS1kYXRhLXRhYmxlL3Z1ZTMtZWFzeS1kYXRhLXRhYmxlXCIsICdzcmMnKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLHNFQUFzRSxjQUFjO0FBQUEsTUFDeEcsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsd0JBQXdCO0FBQUEsSUFDaEQ7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQUEsRUFDOUIsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLE9BQU8sUUFBUSxPQUFPLE1BQU07QUFBQSxJQUN6QyxPQUFPO0FBQUEsTUFDTCxRQUFRLEtBQUssUUFBUSxzRUFBc0UsS0FBSztBQUFBLE1BQ2hHLEtBQUssUUFBUSxzRUFBc0UsS0FBSztBQUFBLE1BQ3hGLE1BQU0sUUFBUSxzRUFBc0UsS0FBSztBQUFBLElBQzNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
