import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        "@mf-xion-bn": "http://localhost:5101/assets/remoteEntry.js",
        "@mf-xion-todo": "http://localhost:5102/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "@suspensive/react", "@xionwcfm/xds", "@xionwcfm/token"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
