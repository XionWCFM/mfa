import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {},
  shared: {
    FEDERATION_REMOTE_URL: z.string().min(1),
  },
  clientPrefix: "PUBLIC_",
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
