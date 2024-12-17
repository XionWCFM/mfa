import type { KyResponse } from "ky";

export type ExternalSuccessResponse<T> = { data: T };
export type ExternalErrorResponse = { data: null; message: string; status: string };

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
  status: number;
  response: KyResponse<ExternalSuccessResponse<T>>;
};
