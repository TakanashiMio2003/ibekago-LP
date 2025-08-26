import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PcDesignB } from "./screens/PcDesignB/PcDesignB";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PcDesignB />
  </StrictMode>,
);
