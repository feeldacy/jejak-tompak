import SEO from "../components/SEO.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutTompakSection from "../components/AboutTompakSection.jsx";
import DemographySection from "../components/DemographySection.jsx";
import SejarahSection from "../components/SejarahSection.jsx";
import KomoditasSection from "../components/KomoditasSection.jsx";
import PrawiraTaniSection from "../components/PrawiraTaniSection.jsx";
import ArtikelSection from "../components/ArtikelSection.jsx";
import DokumentasiSection from "../components/DokumentasiSection.jsx";

export default function MainPage({ language }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jejak Tompak",
    url: "https://jejaktompak.id",
    description:
      "Menelusuri sejarah, komoditas, dan cerita masyarakat Dusun Tompak, Desa Giripurwo, Kulon Progo.",
    inLanguage: ["id", "en"],
    about: {
      "@type": "Place",
      name: "Dusun Tompak",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Giripurwo",
        addressRegion: "Kulon Progo",
        addressCountry: "ID",
      },
    },
  };

  return (
    <>
      <SEO
        title={null}
        description="Jejak Tompak — Menelusuri sejarah, komoditas, dan cerita masyarakat Dusun Tompak, Desa Giripurwo, Kulon Progo."
        path="/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection language={language} />
      <AboutTompakSection language={language} />
      <DemographySection language={language} />
      <SejarahSection language={language} />
      <KomoditasSection language={language} />
      <PrawiraTaniSection language={language} />
      <ArtikelSection language={language} />
      <DokumentasiSection language={language} />
    </>
  );
}
