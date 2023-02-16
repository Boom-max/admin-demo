import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
export default defineConfig({
  plugins: [vue()],
  // 别名配置
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "./src"),
      "_a": path.resolve(__dirname, "./src/assets"),
      "_i": path.resolve(__dirname, "./src/assets/image"),
      "_l": path.resolve(__dirname, "./src/libs"),
      "_c": path.resolve(__dirname, "./src/components"),
      "_s": path.resolve(__dirname, "./src/styles"),
      "_v": path.resolve(__dirname, "./src/views"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/styles/common.less"
        )}";`,
      },
    },
  },
});
