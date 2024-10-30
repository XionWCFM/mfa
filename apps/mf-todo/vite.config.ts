import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@mf-xion-todo",
      filename: "remoteEntry.js",
      exposes: {
        "./todo-root-page": "./src/exposes/todo-root-page.tsx",
        "./todo-write-page": "./src/exposes/todo-write-page.tsx",
        "./todo-detail-page": "./src/exposes/todo-detail-page.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
