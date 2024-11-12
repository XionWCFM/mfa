import { createContext, useContext } from "react";

export interface Path {
  pathname: string;
  search: string;
  hash: string;
}

export interface Location<State = any> extends Path {
  state: State;
  key: string;
}
const DEFAULT_LOCATION: Location = {
  pathname: "",
  search: "",
  hash: "",
  state: {},
  key: "",
};

export const LocationContext = createContext<Location>(DEFAULT_LOCATION);

export const useInternalLocation = () => {
  const location = useContext(LocationContext);
  if (location === DEFAULT_LOCATION) {
    console.warn("❌ useInternalLocation must be used within a Valid Instance");
  }
  return location;
};
