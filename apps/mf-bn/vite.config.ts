import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@mf-xion-bn",
      filename: "remoteEntry.js",
      exposes: {
        "./bottom-navigation": "./src/bottom-navigation.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "@xionwcfm/xds",
        "@xionwcfm/xds/style",
        "@xionwcfm/token",
        "@xionwcfm/token/style",
        "@radix-ui/react-icons",
        "react-router-dom",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
