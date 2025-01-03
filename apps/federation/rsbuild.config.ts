import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { env } from "@repo/env";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  output: {
    assetPrefix: env.FEDERATION_REMOTE_URL,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "federation_provider",
      filename: "remoteEntry.js",
      exposes: {
        "./button": "./src/button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5101,
  },
});
