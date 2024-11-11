import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "federation_provider",
      exposes: {
        "./button": "./src/exposes/button.tsx",
        "./store": "./src/exposes/store.tsx",
        "./bridge": "./src/exposes/bridge.tsx",
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
      },
    }),
  ],
  server: {
    port: 5101,
  },
});
