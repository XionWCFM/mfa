import { vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

createFetchMock(vi).enableMocks();

beforeEach(() => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal");
  document.body.appendChild(portalRoot);
  localStorage.clear();
});

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
  const portalRoot = document.getElementById("portal");
  if (portalRoot) {
    document.body.removeChild(portalRoot);
  }
});
