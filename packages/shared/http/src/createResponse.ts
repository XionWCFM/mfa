import type { ApiSuccessResponse } from "./type";

import type { KyResponse } from "ky";
import type { ExternalSuccessResponse } from "./type";

export const createResponse = async <T>(
  response: KyResponse<ExternalSuccessResponse<T>>,
): Promise<ApiSuccessResponse<T>> => {
  if (response.status === 204) {
    return {
      success: true,
      data: null as T,
      status: 204,
      response: response,
    };
  }
  try {
    const result = await response.json();
    return {
      success: true,
      data: result.data as T,
      status: response.status,
      response: response,
    };
  } catch (_e) {
    return {
      success: true,
      data: null as T,
      status: response.status,
      response: response,
    };
  }
};
