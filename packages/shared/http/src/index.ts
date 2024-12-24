import type { KyInstance } from "ky";
import { type Http, createHttp } from "./createHttp";
import { createInstance } from "./createInstance";
import { createResponse } from "./createResponse";
import { InternalAuthenticationError, ResponseError, isInternalAuthenticationError, isResponseError } from "./error";
import type { ApiSuccessResponse, ExternalErrorResponse, ExternalSuccessResponse } from "./type";

export function isKyInstance(instance: any): instance is KyInstance {
  return instance && typeof instance.get === "function" && typeof instance.post === "function";
}

export const http = createHttp();

export {
  createHttp,
  createInstance,
  createResponse,
  ResponseError,
  isResponseError,
  isInternalAuthenticationError,
  InternalAuthenticationError,
};

export type { Http, ExternalErrorResponse, ExternalSuccessResponse, ApiSuccessResponse };
