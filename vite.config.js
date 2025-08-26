import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://api.mercadoe.space",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // /api/orders/1 -> /orders/1
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/styles/variables.scss" as *;`,
      },
    },
  },
});
