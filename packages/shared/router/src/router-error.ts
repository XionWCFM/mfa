import { createContext, useContext } from "react";

export const RouteErrorContext = createContext<unknown | undefined>(undefined);

export const useInternalRouteError = <T = unknown>() => {
  return useContext(RouteErrorContext) as T;
};
