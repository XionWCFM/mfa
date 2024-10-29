import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const UserConfigBase = "../host";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./dist/mf-header.min.js",
          dest: "../../../public/vendor",
        },
      ],
    }),
  ],
  base: UserConfigBase,
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: `mf-header.min.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        format: "system",
      },
      preserveEntrySignatures: "strict",
      external: ["react", "react-dom"],
    },
  },
});
