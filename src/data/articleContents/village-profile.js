// Article content: Village Profile of Tompak
// Block-based content structure for the ArticleRenderer

const villageProfileContent = [
  {
    type: "heading",
    level: 2,
    text: "Mengenal Desa Tompak: Potret Kehidupan di Lereng Bukit",
  },
  {
    type: "paragraph",
    content:
      "Desa Tompak terletak di ketinggian 600-900 meter di atas permukaan laut, dikelilingi oleh perbukitan hijau yang subur dan aliran sungai kecil yang menjadi nadi kehidupan masyarakatnya. Dengan populasi sekitar 1.200 jiwa yang tersebar di empat dusun, desa ini menyimpan kekayaan budaya dan alam yang luar biasa.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    alt: "Pemandangan desa Tompak dari ketinggian dengan hamparan sawah terasering",
    caption: "Panorama desa Tompak dilihat dari Bukit Cemara di pagi hari.",
  },
  {
    type: "heading",
    level: 3,
    text: "Geografi dan Iklim",
  },
  {
    type: "paragraph",
    content:
      "Terletak di jantung Kabupaten, Tompak memiliki topografi berbukit dengan tanah vulkanik yang sangat subur. Curah hujan rata-rata 2.500mm per tahun menjadikan daerah ini ideal untuk pertanian — terutama kopi, kakao, dan cengkeh.",
  },
  {
    type: "list",
    style: "unordered",
    items: [
      "Ketinggian: 600-900 mdpl",
      "Suhu rata-rata: 18-26°C",
      "Curah hujan: 2.500mm/tahun",
      "Luas wilayah: 4,2 km²",
      "Jumlah dusun: 4 (Dusun Atas, Dusun Tengah, Dusun Bawah, Dusun Timur)",
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "Sejarah Singkat",
  },
  {
    type: "paragraph",
    content:
      "Nama 'Tompak' berasal dari bahasa lokal yang berarti 'tempat berlindung'. Menurut kisah turun-temurun, para leluhur pertama tiba di lembah ini sekitar abad ke-17, mencari tempat yang aman dari konflik di dataran rendah. Mereka menemukan lembah subur yang terlindung oleh dinding bukit dari segala penjuru.",
  },
  {
    type: "quote",
    content:
      "Nenek moyang kami tidak memilih tanah ini. Tanah inilah yang memanggil mereka — dengan airnya yang jernih, tanahnya yang harum, dan anginnya yang berbisik damai.",
    attribution: "Mbah Karso, tetua desa Tompak",
  },
  {
    type: "heading",
    level: 3,
    text: "Kehidupan Masyarakat",
  },
  {
    type: "paragraph",
    content:
      "Mayoritas penduduk Tompak berprofesi sebagai petani. Namun, pertanian di sini bukanlah aktivitas individual — ia adalah kerja kolektif yang diatur oleh sistem gotong royong bernama 'sambatan'. Setiap keluarga memiliki peran, dan setiap musim memiliki ritualnya sendiri.",
  },
  {
    type: "gallery",
    images: [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        alt: "Petani Tompak bekerja di ladang pada pagi hari",
      },
      {
        src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
        alt: "Hasil panen sayuran segar dari kebun warga",
      },
      {
        src: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80",
        alt: "Suasana pasar mingguan di desa Tompak",
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        alt: "Anak-anak bermain di tepi sungai desa",
      },
    ],
    caption: "Kehidupan sehari-hari masyarakat desa Tompak",
  },
  {
    type: "heading",
    level: 3,
    text: "Potensi dan Harapan",
  },
  {
    type: "paragraph",
    content:
      "Saat ini, desa Tompak tengah bertransformasi. Program Prawira Tani membawa semangat baru bagi generasi muda untuk tetap tinggal dan mengembangkan desa. Infrastruktur jalan mulai diperbaiki, sinyal internet perlahan menjangkau, dan produk-produk lokal mulai menemukan pasarnya.",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Dokumentasi Profil Desa Tompak 2024",
    caption: "Video dokumentasi singkat tentang kehidupan masyarakat Tompak.",
  },
  {
    type: "paragraph",
    content:
      "Tompak mungkin kecil, tetapi ia menyimpan mimpi yang besar — mimpi tentang desa yang mandiri, sejahtera, dan tetap setia pada akarnya. Dan mimpi itu, perlahan tapi pasti, sedang tumbuh menjadi kenyataan.",
  },
];

export { villageProfileContent };
