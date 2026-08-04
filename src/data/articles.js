// Article data used both on the main page cards and the full article pages.
// Content is in Indonesian only (as specified: article page does not require translation).
//
// `publishedAt` is an ISO date (YYYY-MM-DD). It doubles as the URL slug and the
// sort key, so it must be unique per article. If two articles ever share a
// publish day, disambiguate by adding a time suffix or a short slug segment.

// how to import image
import Biopest from "../assets/Biopest/Bio0.jpg";
import Biopest from "../assets/Biopest/Bio1.jpg";
import Biopest from "../assets/Biopest/Bio2.jpg";
import Biopest from "../assets/Biopest/Bio3.jpg";
import Biopest from "../assets/Biopest/Bio4.jpg";
import Biopest from "../assets/Biopest/Bio5.jpg";
import Biopest from "../assets/Biopest/Bio6.jpg";
import Biopest from "../assets/Biopest/Bio7.jpg";


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
    publishedAt: "2026-08-03",
    title: {
      ID: "Galangal for Farmers: Solusi Ramah Lingkungan Lawan Helopeltis",
      EN: "Galangal for Farmers: An Environmentally Friendly Solution Against Helopeltis",
    },
    snippet: {
      ID: "Mengenal pemanfaatan rimpang lengkuas sebagai biopestisida ramah lingkungan untuk membantu mengendalikan hama Helopeltis pada tanaman kakao di Dusun Tompak.",
      EN: "A walk through the coffee gardens on the slopes of Tompak, where every bean is hand-picked along with its story.",
    },
    image: imageTitle,
    body: [
      "Beberapa tahun terakhir, dunia kakao mengalami gejolak yang cukup dramatis. Dalam satu dekade terakhir banyak petani di Sulawesi dan Sumatra menebang pohon kakao mereka karena frustrasi diserang hama, pohon tua, dan harga jual yang tak sepadan dengan biaya perawatan. Krisis pasokan kakao global yang melanda Afrika Barat pada akhir 2023 hingga 2024 memicu lonjakan harga yang luar biasa. Jika biasanya biji kakao lokal hanya dihargai Rp25.000–Rp30.000 per kg, harga tersebut melesat hingga menembus angka di atas Rp100.000–Rp150.000 per kg di puncaknya. Kenaikan harga yang sangat drastis ini menjadi booster semangat bagi petani di seluruh Indonesia. Banyak yang mulai membersihkan kebun tua, membeli bibit unggul baru, dan melakukan gerakan penanaman kembali. Kebangkitan budidaya kakao ini pun menjadi fenomena yang terlihat jelas dalam 1–2 tahun terakhir.",
      'Gelombang kebangkitan ini turut menyentuh Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta. Di Kapanewon Girimulyo, tepatnya di Dusun Tompak, Desa Giripurwo, para petani mulai melirik kembali kakao sebagai komoditas yang menjanjikan. Hal ini dikarenakan Dusun Tompak terletak di dataran menengah memiliki kondisi lingkungan yang sangat mendukung untuk budidaya kakao. Dengan ketinggian lahan yang berada pada kisaran ideal 0–600 meter di atas permukaan laut (mdpl), curah hujan yang cukup tinggi dan merata sekitar 1.500–2.500 mm per tahun, serta suhu harian yang berkisar 23°C–32°C dengan kelembapan udara relatif di atas 70–80%, Dusun Tompak menyediakan ekosistem yang nyaman bagi pertumbuhan dan produktivitas tanaman kakao. Kondisi ini membuat kakao dapat tumbuh subur dan berbuah lebat jika dirawat dengan baik."',
      "Namun, di balik potensi besar tersebut, petani kakao di Dusun Tompak menghadapi tantangan yang tidak mudah. Hama utama tanaman kakao, yaitu kepik penghisap buah (Helopeltis sp.), menjadi ancaman terbesar pada hasil panen. Hama ini menusuk dan menghisap cairan buah kakao, menyebabkan bercak hitam. Serangan Helopeltis paling fatal saat menyerang umur buah kakao dibawah 3 bulan, dia menyerang jaringan nutrisi utama, sehingga buah kakao tidak dapat tumbuh dengan normal. Selama ini, petani cenderung mengandalkan pestisida kimia sintetik untuk mengendalikan hama tersebut. Namun, penggunaan pestisida kimia yang berlebihan dan terus-menerus menimbulkan dampak negatif, seperti pencemaran lingkungan, resistensi hama, hingga ancaman bagi kesehatan petani dan konsumen.",
      "Disisi lain, Dusun Tompak menyimpan potensi lokal yang melimpah dan selama ini mungkin kurang dimanfaatkan, yaitu tanaman lengkuas (Alpinia galanga). Rimpang lengkuas yang tumbuh melimpah di pekarangan dan ladang warga mengandung senyawa aktif seperti minyak atsiri, sineol, kamfer, dan galangin yang bersifat sebagai biotoksin dan penolak (repellent) bagi serangga hama (Sari et al., 2021). Sudah ada penelitian yang membuktikan bahwa rimpang lengkuas dapat mengurangi serangan helopeltis.",
      'Cara Membuat Biopestisida dari Rimpang Lengkuas"',
      "Pemanfaatan rimpang lengkuas sebagai pestisida nabati dapat dilakukan dengan metode pengolahan sederhana. Berdasarkan penelitian Hastuti, Rusmana, dan Hasan (2015), rimpang lengkuas digunakan dengan konsentrasi 100 gram per liter air. Bahan tersebut kemudian diolah menjadi larutan yang dapat diaplikasikan pada tanaman lokal untuk membantu mengendalikan hama Helopeltis sp.",
      'Tahapan pembuatannya sebagai berikut:',
      "1.	Menyiapkan rimpang lengkuas dan air", 
      'Menyiapkan rimpang lengkuas sebagai bahan utama pembuatan biopestisida serta air sebagai bahan pelarut. Rimpang lengkuas dan air disiapkan sesuai kebutuhan pembuatan larutan biopestisida sebelum memasuki tahap pembersihan dan pengolahan bahan. Berdasarkan metode penelitian yang digunakan sebagai acuan, konsentrasi yang digunakan adalah 100 gram rimpang lengkuas untuk 1 liter air.',
      "2. Membersihkan rimpang lengkuas",
      'Membersihkan rimpang lengkuas yang telah disiapkan dengan mencucinya menggunakan air hingga bersih untuk menghilangkan tanah, kotoran, dan sisa-sisa yang menempel pada permukaan rimpang. Proses ini dilakukan sebagai tahap awal sebelum rimpang dipotong dan ditakar untuk pembuatan biopestisida.',
      "3.	Memotong dan menakar rimpang lengkuas",
      'Rimpang lengkuas yang telah dibersihkan kemudian dipotong menjadi bagian-bagian kecil agar lebih mudah diolah.',
      "Setelah itu, potongan lengkuas ditimbang dan disesuaikan dengan takaran yang digunakan dalam pembuatan biopestisida. Pada pembuatan yang dilakukan dalam kegiatan ini, digunakan 50 gram rimpang lengkuas yang dicampurkan dengan 500 ml air. Takaran tersebut digunakan sebagai formulasi larutan biopestisida yang kemudian akan diproses pada tahap berikutnya.",
      '4. Menghaluskan lengkuas',
      "Menghaluskan rimpang lengkuas yang telah dibersihkan, dipotong, dan ditakar menggunakan blender hingga menjadi bahan yang lebih halus. Proses ini dilakukan untuk mengolah rimpang lengkuas sebelum dicampurkan dengan air dan diproses lebih lanjut menjadi larutan biopestisida.",
      '5. Menyaring slurry',
      "Menyaring slurry atau hasil penghalusan rimpang lengkuas untuk memisahkan ampas dan partikel padat dari bagian larutan. Proses penyaringan dilakukan agar diperoleh larutan yang lebih bersih dan tidak mengandung partikel kasar yang dapat mengganggu proses penggunaan biopestisida, khususnya saat diaplikasikan menggunakan alat penyemprot.",
      '6. Mendiamkan larutan',
      "Mendiamkan larutan hasil penyaringan selama 24 jam untuk memberikan waktu bagi bahan aktif dari rimpang lengkuas terlarut dan tercampur dalam larutan. Larutan dibiarkan dalam wadah yang sesuai sebelum digunakan pada tahap aplikasi biopestisida. Tahap pendiaman selama 24 jam ini mengikuti metode pembuatan larutan pestisida nabati yang digunakan sebagai acuan.",
      '7. Aplikasi biopestisida pada tanaman',
      "Setelah didiamkan selama 24 jam, larutan biopestisida berbahan baku rimpang lengkuas siap digunakan pada tanaman. Larutan kemudian dimasukkan ke dalam alat penyemprot dan diaplikasikan secara langsung pada tanaman, terutama pada bagian tanaman yang menjadi sasaran serangan hama Helopeltis sp.",
      'Penyemprotan dilakukan secara berkala dengan interval satu minggu. Aplikasi juga dilakukan pada sore hari untuk mengikuti metode yang digunakan sebagai acuan, yaitu sekitar pukul 16.00–17.00 WIB. Penyemprotan secara berkala dilakukan sebagai bagian dari upaya pengendalian hama sekaligus penerapan alternatif pestisida nabati yang memanfaatkan bahan baku lokal.',
      "Potensi Lengkuas sebagai Biopestisida Ramah Lingkungan untuk Pertanian Berkelanjutan",
      'Pemanfaatan rimpang lengkuas sebagai bahan biopestisida menjadi salah satu alternatif dalam pengendalian hama pada tanaman lokal. Lengkuas memiliki kandungan senyawa aktif, antara lain minyak atsiri, sineol, kamper, dan galangin, yang dalam penelitian diketahui memiliki sifat sebagai biotoksin dan penolak (repellent) terhadap serangga.',
      "Penelitian mengenai penggunaan larutan pestisida nabati rimpang lengkuas pada tanaman lokal menunjukkan bahwa pemberian larutan lengkuas dapat menekan luas dan intensitas serangan Helopeltis sp. Hasil penelitian tersebut menunjukkan bahwa perlakuan menggunakan larutan rimpang lengkuas menghasilkan luas dan intensitas serangan yang relatif lebih rendah dibandingkan beberapa perlakuan pestisida nabati lainnya.",
      'Potensi tersebut menjadi relevan untuk dikembangkan di Dusun Tompak karena lengkuas merupakan salah satu tanaman yang tersedia di lingkungan masyarakat. Pemanfaatan tanaman lokal sebagai bahan biopestisida memberikan nilai guna tambahan terhadap sumber daya yang tersedia di sekitar masyarakat sekaligus memperkenalkan alternatif dalam pengendalian hama kakao.',
      "Melalui kegiatan ini, pemanfaatan lengkuas tidak hanya dilakukan dalam bentuk pembuatan dan aplikasi biopestisida, tetapi juga didokumentasikan dan dipublikasikan melalui media digital yaitu website dusun Tompak. Dokumentasi tersebut diharapkan dapat menjadi sumber informasi bagi masyarakat mengenai pemanfaatan bahan lokal dalam mendukung budidaya kakao yang lebih berkelanjutan.",
      'Pemanfaatan rimpang lengkuas sebagai biopestisida menjadi salah satu langkah dalam mengembangkan inovasi pertanian berbasis potensi lokal di Dusun Tompak. Melalui proses pembuatan, aplikasi pada tanaman, serta dokumentasi dan publikasi digital, pengetahuan mengenai pemanfaatan bahan lokal dapat terus diperkenalkan kepada masyarakat. Diharapkan kegiatan ini dapat mendorong pemanfaatan sumber daya lokal secara berkelanjutan dan mendukung upaya pengelolaan tanaman yang lebih ramah lingkungan.',
      "Daftar Pustaka",
      'Hastuti, D., Rusmana, & Hasan, P. (2015). Uji Efektifitas Larutan Pestisida Nabati Rimpang Lengkuas, Daun Serai, dan Daun Babadotan pada Pengendalian Hama Penghisap Buah (Helopeltis sp.) Tanaman Kakao. Jurnal Agroekotek, 7(2), 97–105.'
    ], // every new paragprah add coma
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
