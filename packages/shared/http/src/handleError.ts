import { ResponseError, isHttpError } from "./error";

export const handleError = async (e: unknown) => {
  if (isHttpError(e)) {
    throw new ResponseError(e);
  }
};
