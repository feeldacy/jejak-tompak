import HeroSection from "../components/HeroSection.jsx";
import AboutTompakSection from "../components/AboutTompakSection.jsx";
import DemographySection from "../components/DemographySection.jsx";
import SejarahSection from "../components/SejarahSection.jsx";
import KomoditasSection from "../components/KomoditasSection.jsx";
import PrawiraTaniSection from "../components/PrawiraTaniSection.jsx";
import ArtikelSection from "../components/ArtikelSection.jsx";
import DokumentasiSection from "../components/DokumentasiSection.jsx";

export default function MainPage({ language }) {
  return (
    <>
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
