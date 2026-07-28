import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import PrawiraTaniPage from "./pages/PrawiraTaniPage.jsx";

export default function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "ID";
    return window.localStorage.getItem("jejak-tompak-lang") || "ID";
  });

  const location = useLocation();

  useEffect(() => {
    window.localStorage.setItem("jejak-tompak-lang", language);
    document.documentElement.lang = language === "ID" ? "id" : "en";
  }, [language]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Ambient background blobs */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-tompak-green-soft/30 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-tompak-brown-soft/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-tompak-green-mist/60 blur-3xl" />
      </div>

      <Header language={language} onToggleLanguage={toggleLanguage} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<MainPage language={language} />} />
          <Route path="/artikel/:id" element={<ArticlePage />} />
          <Route path="/prawira-tani" element={<PrawiraTaniPage />} />
        </Routes>
      </main>

      <Footer language={language} />
    </div>
  );
}
