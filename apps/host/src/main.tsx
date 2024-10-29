import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MicroFrontend } from "./micronfrontend.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MicroFrontend containerId="mf-header" />
    <App />
  </StrictMode>,
);
