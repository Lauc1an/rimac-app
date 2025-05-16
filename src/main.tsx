import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "@/pages/Login";
import Plans from "@/pages/Plans";
import Summary from "@/pages/Summary";
import Header from "@/components/layout/Header";
import "@/assets/styles/index.scss";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/planes", element: <Plans /> },
  { path: "/resumen", element: <Summary /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
