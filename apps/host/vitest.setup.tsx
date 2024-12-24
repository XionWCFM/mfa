import { server } from "@repo/mocks/server";
import { vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

createFetchMock(vi).enableMocks();

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal");
  document.body.appendChild(portalRoot);
  localStorage.clear();
});

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
  server.resetHandlers();
  const portalRoot = document.getElementById("portal");
  if (portalRoot) {
    document.body.removeChild(portalRoot);
  }
});

afterAll(() => {
  server.close();
});
