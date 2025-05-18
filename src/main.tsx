import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "@/pages/LoginPage";
import PlansPage from "@/pages/PlansPage";
import SummaryPage from "@/pages/SummaryPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UserProvider } from "@/context/user/UserProvider";
import { AuthProvider } from "@/context/auth/AuthProvider";
import "@/assets/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/planes" element={<PlansPage />} />
            <Route path="/resumen" element={<SummaryPage />} />
          </Routes>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
    <Footer />
  </StrictMode>
);
