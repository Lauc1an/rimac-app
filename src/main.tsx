import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "@/pages/LoginPage";
import PlansPage from "@/pages/PlansPage";
import SummaryPage from "@/pages/SummaryPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/assets/styles/index.scss";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/planes", element: <PlansPage /> },
  { path: "/resumen", element: <SummaryPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
