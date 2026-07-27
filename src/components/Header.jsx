import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getT } from "../data/translations.js";

const navItems = [
  { key: "beranda", href: "#beranda" },
  { key: "tentang", href: "#tagline" },
  { key: "sejarah", href: "#sejarah" },
  { key: "komoditas", href: "#komoditas" },
  { key: "prawira", href: "#prawira" },
  { key: "artikel", href: "#artikel" },
  { key: "dokumentasi", href: "#dokumentasi" },
];

export default function Header({ language, onToggleLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getT(language);
  const location = useLocation();
  const navigate = useNavigate();
  const isMain = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    if (!isMain) {
      e.preventDefault();
      navigate("/" + href);
      return;
    }
    // Smooth scroll for anchors on main page
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Jejak Tompak — Beranda"
          >
            <span className="vollkorn-title font-display font-bold tracking-tight text-tompak-green-deep text-lg sm:text-xl">
              JEJAK <span className="text-tompak-green-mid">TOMPAK</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-tompak-green-deep/80 rounded-full hover:text-tompak-green-deep hover:bg-white/60 transition-all duration-300"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {isMain && (
              <button
                type="button"
                onClick={onToggleLanguage}
                className="relative flex items-center gap-1 rounded-full border border-white/70 bg-white/60 backdrop-blur px-3 py-1.5 text-xs font-semibold text-tompak-green-deep shadow-sm transition hover:bg-white/80 hover:scale-105"
                aria-label="Toggle language"
              >
                <span
                  className={`px-2 py-0.5 rounded-full transition ${
                    language === "ID"
                      ? "bg-tompak-green-mid text-white shadow"
                      : "text-tompak-green-deep/60"
                  }`}
                >
                  ID
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full transition ${
                    language === "EN"
                      ? "bg-tompak-green-mid text-white shadow"
                      : "text-tompak-green-deep/60"
                  }`}
                >
                  EN
                </span>
              </button>
            )}

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/60 text-tompak-green-deep hover:bg-white/80 transition"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[520px] mt-2 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-2xl px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-tompak-green-deep hover:bg-white/70 transition"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
