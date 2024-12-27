import { createModuleFederationConfig } from "@module-federation/modern-js";

type ModuleFederationConfig = ReturnType<typeof createModuleFederationConfig>;

const config: ModuleFederationConfig = createModuleFederationConfig({
  name: "host",
  remotes: {
    remote: "federation_provider@http://localhost:5101/remoteEntry.js",
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
});

export default config;
