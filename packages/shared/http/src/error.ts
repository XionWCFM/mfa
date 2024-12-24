import { HTTPError } from "ky";

export class ResponseError extends HTTPError {
  constructor(error: HTTPError) {
    super(error.response, error.request, error.options);
  }
}

export class InternalAuthenticationError extends Error {
  // biome-ignore lint/complexity/noUselessConstructor: <explanation>
  constructor(message: string) {
    super(message);
  }
}

export const isResponseError = (error: unknown): error is ResponseError => {
  return error instanceof ResponseError;
};

export const isHttpError = (error: unknown): error is HTTPError => {
  return error instanceof HTTPError;
};

export const isInternalAuthenticationError = (error: unknown): error is InternalAuthenticationError => {
  return error instanceof InternalAuthenticationError;
};
