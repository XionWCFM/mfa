const path = require("node:path");
const react = require("@vitejs/plugin-react");
const { defineConfig } = require("vitest/config");

const config = defineConfig({
  plugins: [react()],
  test: {
    environment: "happydom",
  },
  resolve: {
    alias: {
      "@repo": path.resolve(__dirname, "../../packages"),
    },
  },
});

module.exports = config;
