import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "federation_provider",
      filename: "remoteEntry.js",
      exposes: {
        "./button": "./src/exposes/button.tsx",
        "./store": "./src/exposes/store.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "@xionwcfm/jotai": { singleton: true },
        "@xionwcfm/react": { singleton: true },
        "@xionwcfm/token": { singleton: true },
        "@xionwcfm/xds": { singleton: true },
        "@tanstack/react-query": { singleton: true },
        "@suspensive/react": { singleton: true },
        "react-hook-form": { singleton: true },
        zod: { singleton: true },
        "es-toolkit": { singleton: true },
        "overlay-kit": { singleton: true },
        "@repo/router": { singleton: true },
        "@repo/http": { singleton: true },
      },
    }),
  ],
  server: {
    port: 5101,
  },
});
