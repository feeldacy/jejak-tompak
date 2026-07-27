import { Link } from "react-router-dom";
import { getT } from "../data/translations.js";

export default function Footer({ language }) {
  const t = getT(language);

  return (
    <footer className="relative mt-20">
      {/* Blend layer */}
      <div className="h-24 w-full bg-gradient-to-b from-transparent to-tompak-green-deep/95" />

      <div className="relative bg-tompak-green-deep text-white">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-tompak-green-deep via-tompak-green-deep to-tompak-brown-deep/40 opacity-90" />
        <div className="absolute inset-0 backdrop-blur-md" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link
                to="/"
                className="font-display font-bold tracking-tight text-2xl"
              >
                JEJAK <span className="text-tompak-green-soft">TOMPAK</span>
              </Link>
              <p className="text-sm text-white/70 max-w-xs">
                {t.footer.tagline}
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-display font-semibold text-white/90 uppercase tracking-wider text-xs">
                {t.footer.quickLinks}
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    {t.nav.beranda}
                  </Link>
                </li>
                <li>
                  <a href="/#artikel" className="hover:text-white transition">
                    {t.nav.artikel}
                  </a>
                </li>
                <li>
                  <a href="/#sejarah" className="hover:text-white transition">
                    {t.nav.sejarah}
                  </a>
                </li>
                <li>
                  <a href="/#komoditas" className="hover:text-white transition">
                    {t.nav.komoditas}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact + social */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-display font-semibold text-white/90 uppercase tracking-wider text-xs">
                {t.footer.contact}
              </h4>
              <a
                href="mailto:halo@jejaktompak.id"
                className="text-sm text-white/80 hover:text-white transition"
              >
                halo@jejaktompak.id
              </a>

              <h4 className="mt-3 font-display font-semibold text-white/90 uppercase tracking-wider text-xs">
                {t.footer.follow}
              </h4>
              <div className="flex items-center gap-3">
                <SocialIcon href="#" label="Facebook">
                  <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z" />
                </SocialIcon>
                <SocialIcon href="#" label="Instagram">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </SocialIcon>
                <SocialIcon href="#" label="Twitter">
                  <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3 4.8a4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.5 11.7 11.7 0 0 0 8.3 20c7.6 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z" />
                </SocialIcon>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/60">
            {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur transition hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden
      >
        {children}
      </svg>
    </a>
  );
}
