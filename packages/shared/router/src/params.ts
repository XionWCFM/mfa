import { createContext, useContext } from "react";

export type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};

const DEFAULT_PARAMS: Params = {};
export const ParamsContext = createContext<Params>(DEFAULT_PARAMS);

export const useInternalParams = <T extends string = string>() => {
  const params = useContext(ParamsContext) as Params<T>;
  if (params === DEFAULT_PARAMS) {
    console.warn("❌ useInternalParams must be used within a Valid Instance");
  }
  return params;
};
