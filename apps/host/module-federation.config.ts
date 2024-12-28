import { createModuleFederationConfig } from "@module-federation/modern-js";

type ModuleFederationConfig = ReturnType<typeof createModuleFederationConfig>;

const config: ModuleFederationConfig = createModuleFederationConfig({
  name: "host",
  remotes: {
    // remote: "federation_provider@http://localhost:5101/mf-manifest.json",
    remote: "federation_provider@https://feda.vercel.app/mf-manifest.json",
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
    "@xionwcfm/jotai": { singleton: true, eager: true },
    "@xionwcfm/react": { singleton: true, eager: true },
    "@xionwcfm/token": { singleton: true, eager: true },
    "@xionwcfm/xds": { singleton: true, eager: true },
    "@tanstack/react-query": { singleton: true, eager: true },
    "@suspensive/react": { singleton: true, eager: true },
    "react-hook-form": { singleton: true, eager: true },
    zod: { singleton: true, eager: true },
    "es-toolkit": { singleton: true, eager: true },
    "overlay-kit": { singleton: true, eager: true },
    "@repo/router": { singleton: true, eager: true },
    "@repo/http": { singleton: true, eager: true },
  },
});

export default config;
