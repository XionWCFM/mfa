import { createContext, useContext } from "react";

export type RouterFunction = (
  path: string,
  options?: {
    // history state
    state?: any;
    // nested route path resolve
    relative?: "route" | "path";
  },
) => void;

export type Router = {
  push: RouterFunction;
  replace: RouterFunction;
  back: (number?: number) => void;
};

const DEFAULT_ROUTER: Router = {
  push: () => {},
  replace: () => {},
  back: () => {},
};

export const RouterContext = createContext<Router>(DEFAULT_ROUTER);

export const useInternalRouter = () => {
  const router = useContext(RouterContext);

  if (router === DEFAULT_ROUTER) {
    console.warn("❌ useInternalRouter must be used within a Valid Instance, Now Using Default Router");
  }

  return router;
};
