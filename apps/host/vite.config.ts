import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { CONFIG_BASE } from "./src/base";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: CONFIG_BASE,
});
