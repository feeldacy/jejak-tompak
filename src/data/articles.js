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
import biop from "../assets/Biopest/Bio0.jpg";
import { villageProfileContent } from "./articleContents/village-profile.js";

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
    publishedAt: "2024-10-05",
    slug: "profil-desa-tompak",
    title: {
      ID: "Profil Desa Tompak",
      EN: "Tompak Village Profile",
    },
    snippet: {
      ID: "Mengenal lebih dekat desa Tompak — geografi, sejarah, dan kehidupan masyarakatnya yang kaya akan budaya.",
      EN: "A closer look at Tompak village — its geography, history, and culturally rich community life.",
    },
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    category: "Profil",
    content: villageProfileContent,
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
    publishedAt: "2024-08-28",
    title: {
      ID: "Prawira Tani: Wajah Muda Tanah Tompak",
      EN: "Prawira Tani: The Young Face of Tompak",
    },
    snippet: {
      ID: "Bertemu petani muda yang membawa semangat baru sekaligus menghormati tradisi para pendahulu.",
      EN: "Meeting young farmers who bring new energy while honoring the traditions of their predecessors.",
    },
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Prawira Tani bukan sekadar sebutan. Ia adalah komitmen — komitmen dari para petani muda Tompak untuk terus menjaga tanah yang mereka warisi.",
      "Rata-rata mereka berusia di bawah 35 tahun. Sebagian besar sempat merantau ke kota, menempuh pendidikan, lalu kembali dengan pengetahuan baru. Mereka membawa pupuk organik yang lebih efisien, sistem irigasi tetes untuk area kering, dan mekanisme pencatatan hasil panen berbasis digital.",
      'Namun, mereka tidak datang untuk mengganti cara-cara lama. Setiap keputusan tetap dibicarakan bersama para tetua di balai desa. "Kami belajar dari yang muda dan yang tua," ujar Nadia, salah satu koordinator Prawira Tani. "Keduanya sama-sama guru."',
      'Kolaborasi lintas generasi ini melahirkan praktik-praktik menarik. Salah satunya adalah sistem "kalender panen" — perpaduan antara pengamatan cuaca modern dan pembacaan tanda-tanda alam warisan leluhur. Hasilnya, produktivitas naik tanpa mengorbankan kesuburan tanah.',
      'Di ujung wawancara, kami bertanya apa yang paling membanggakan bagi mereka. Nadia menjawab singkat, "Melihat anak-anak di desa mulai bermimpi jadi petani lagi. Itu tanda bahwa apa yang kami rawat, tumbuh dengan benar."',
    ],
  },
  {
    publishedAt: "2024-08-15",
    title: {
      ID: "Batu-Batu yang Berbicara",
      EN: "Stones That Speak",
    },
    snippet: {
      ID: "Menelusuri artefak sejarah Tompak dan makna yang tersimpan di balik setiap ukirannya.",
      EN: "Tracing the historical artifacts of Tompak and the meaning behind every carving.",
    },
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Di sudut desa Tompak berdiri sebuah batu tua. Tingginya sekitar satu setengah meter, permukaannya penuh dengan ukiran halus yang mulai memudar oleh lumut dan waktu.",
      'Bagi sebagian orang, batu ini hanyalah artefak. Namun bagi masyarakat Tompak, batu ini adalah "buku pertama" yang menceritakan siapa mereka dan dari mana mereka berasal.',
      "Menurut Pak Tarmizi, seorang penjaga situs, ukiran pada batu ini menggambarkan siklus tanam yang diwariskan turun-temurun: musim membuka lahan, musim menanam, musim panen, dan musim istirahat. Setiap ukiran menjadi pengingat bahwa tanah pun butuh napas.",
      'Beberapa tahun terakhir, tim arkeolog dan komunitas lokal bekerja sama untuk mendokumentasikan batu ini secara digital. Foto tiga dimensi, catatan pengukuran, hingga kisah-kisah lisan seputar batu ini kini tersimpan dengan rapi — sebuah upaya agar generasi mendatang bisa tetap "mendengar" apa yang dibisikkan batu-batu ini.',
      "Kami pulang dengan satu kesadaran: sejarah Tompak tidak hanya ada di buku pelajaran, tetapi juga di setiap alur ukiran batu tua ini — yang, jika kita mau berhenti sejenak, ternyata benar-benar bisa berbicara.",
    ],
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
