import { cleanup } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import "@testing-library/jest-dom";

createFetchMock(vi).enableMocks();

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});
