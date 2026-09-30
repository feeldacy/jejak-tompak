// Article data used both on the main page cards and the full article pages.
// Content is in Indonesian only (as specified: article page does not require translation).
//
// `publishedAt` is an ISO date (YYYY-MM-DD). It doubles as the URL slug and the
// sort key, so it must be unique per article. If two articles ever share a
// publish day, disambiguate by adding a time suffix or a short slug segment.

// how to import image
// import imageTitle from "../assets/articles/imageTitle.jpg";

// Block-based article content (rich articles use `content` array instead of `body`)
import { biopest } from "./articleContents/biopest.js";
import { villageProfileContent } from "./articleContents/village-profile.js";
import { sikopong } from "./articleContents/sikopong.js"; 
import { soescoa } from "./articleContents/soescoa.js";
import { tehkakao } from "./articleContents/tehkakao.js";
import { digitalmarketing } from "./articleContents/digitalmarketing.js";

import biop from "../assets/comodities/kakao.jpg";
import sikopongImg from "../assets/sikopong/header-sikopong.jpg";
import tehkakaoImg from "../assets/tehkakao/tehkakao-header.jpg";

const INDO_MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

// Format ISO date (YYYY-MM-DD) into Indonesian long form: "12 September 2024"
export const formatIndoDate = (iso) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  const monthIdx = parseInt(m, 10) - 1;
  const month = INDO_MONTHS[monthIdx] ?? "";
  return `${parseInt(d, 10)} ${month} ${y}`;
};

const rawArticles = [
  {
    publishedAt: "2026-07-09",
    title: {
      ID: "SIKOPONG: Pemanfaatan Komoditas Lokal Bernilai Jual",
      EN: "SIKOPONG: Utilizing Local Commodities for Market Value",
    },
    snippet: {
      ID: "Pemanfaatan pisang lokal menjadi SIKOPONG, olahan pisang unik yang dikreasikan bersama ibu-ibu PKK Dusun Tompak sebagai upaya meningkatkan nilai jual komoditas lokal dan membuka peluang usaha rumahan.",
      EN: "Utilizing local bananas to create SIKOPONG, a unique banana-based product developed in collaboration with the PKK mothers of Tompak Village, aiming to enhance the market value of local commodities and open opportunities for home-based businesses.",
    },
    image:
      sikopongImg,
    category: "Komoditas",
    content: sikopong,
  },
  {
    publishedAt: "2026-08-04",
    slug: "pengolahan-kakao-tompak",
    title: {
      ID: "Potensi Lengkuas untuk Pertanian Kakao Tompak",
      EN: "potential of Galangal for Tompak Cocoa Farming",
    },
    snippet: {
      ID: "Mengolah rimpang lengkuas menjadi biopestisida sebagai alternatif pengendalian hama Helopeltis pada tanaman kakao sekaligus memanfaatkan potensi lokal untuk mendukung pertanian berkelanjutan di Dusun Tompak.",
      EN: "Using galangal root to create biopesticides as an alternative for controlling Helopeltis pests in cocoa plants, while utilizing local potential to support sustainable agriculture in Tompak Village.",
    },
    image:
      biop,
    category: "Komoditas",
    content: biopest,
  },
  {
    publishedAt: "2024-07-26",
    title: {
      ID: "SOESCOA: Peluang Usaha dari Olahan Soes Kering",
      EN: "SOESCOA: Business Opportunities from Dried Soes Processing",
    },
    snippet: {
      ID: "Memanfaatkan kakao lokal sebagai isian, tim KKN Kicauan Menoreh mengajak ibu-ibu KWT Dusun Tompak mengolah soes kering menjadi produk camilan yang lezat dan berpotensi dikembangkan sebagai peluang usaha UMKM.",
      EN: "Utilizing local cocoa beans as filling, the KKN Kicauan Menoreh team invites Dusun Tompak KWT mothers to process dried soes into a delicious snack with potential for development as UMKM business opportunities.",
    },
    image:
      biop,
    category: "Komoditas",
    content: soescoa,
  },
  {
    publishedAt: "2024-08-15",
    title: {
      ID: "Dari Limbah Menjadi Berkah: Inovasi Teh dari Kulit Ari Biji Kakao",
      EN: "Dari Limbah Menjadi Berkah: Inovasi Teh dari Kulit Ari Biji Kakao",
    },
    snippet: {
      ID: "Dari kulit ari kakao menjadi secangkir teh beraroma cokelat! Tim KKN Kicauan Menoreh memperkenalkan KakaoTea kepada warga RW 35 sebagai inovasi olahan sekaligus peluang usaha dari hasil samping produksi kakao.",
      EN: "From cocoa pod skins to a cup of chocolate-aroma tea! The KKN Kicauan Menoreh team introduces KakaoTea to the residents of RW 35 as an innovative processing idea and business opportunity from cocoa production byproducts.",
    },
    image:
      tehkakaoImg,
    category: "Komoditas",
    content: tehkakao,
  },
  {
    publishedAt: "2024-08-15",
    title: {
      ID: "Kenalkan Digital Marketing dan Branding, Tim KKN Kicauan Menoreh Ajak Warga Tompak Melek Pemasaran Digital",
      EN: "Introducing Digital Marketing and Branding, KKN Kicauan Menoreh Encourages Tompak Residents to Embrace Digital Marketing",
    },
    snippet: {
      ID: "Tim KKN Kicauan Menoreh memperkenalkan digital marketing dan branding kepada warga Dusun Tompak sebagai strategi untuk memperluas jangkauan pemasaran produk UMKM. Melalui edukasi ini, warga diajak memanfaatkan media digital, marketplace, dan strategi branding untuk membangun identitas produk yang kuat, meningkatkan daya saing, serta menjangkau lebih banyak konsumen.",
      EN: "Introducing digital marketing and branding to the residents of Tompak Village as a strategy to expand the reach of UMKM products. Through this education, residents are encouraged to utilize digital media, marketplaces, and branding strategies to build strong product identities, enhance competitiveness, and reach more consumers.",
    },
    image:
      biop,
    category: "Komoditas",
    content: digitalmarketing,
  },
];

// Sorted newest-first. This is the single source of truth for article order —
// dashboard slicing and prev/next navigation both rely on it.
export const articles = [...rawArticles].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

// Look up an article by its ISO publish date (used as the URL slug).
export const getArticleByDate = (date) =>
  articles.find((a) => a.publishedAt === date);
