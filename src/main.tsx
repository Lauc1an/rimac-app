import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import Header from "@/components/layout/Header";
import "@/assets/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
);
