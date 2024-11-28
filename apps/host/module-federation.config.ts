import { createModuleFederationConfig } from "@module-federation/modern-js";

const config = createModuleFederationConfig({
  name: "host",
  remotes: {
    remote: "remote@http://localhost:5101/mf-manifest.json",
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
  },
}) as any;

export default config;
