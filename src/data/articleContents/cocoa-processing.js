// Article content: Cocoa Processing in Tompak
// Block-based content structure for the ArticleRenderer

const cocoaProcessingContent = [
  {
    type: "heading",
    level: 2,
    text: "Dari Biji ke Cokelat: Perjalanan Kakao Tompak",
  },
  {
    type: "paragraph",
    content:
      "Di lereng selatan desa Tompak, hamparan kebun kakao membentang luas di bawah naungan pohon kelapa dan cengkeh. Bagi masyarakat di sini, kakao bukan sekadar komoditas — ia adalah warisan yang telah menghidupi tiga generasi.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    alt: "Biji kakao yang sedang difermentasi di dalam kotak kayu",
    caption:
      "Proses fermentasi kakao berlangsung selama 5-7 hari dalam kotak kayu tradisional.",
  },
  {
    type: "paragraph",
    content:
      "Proses pengolahan dimulai sejak buah kakao dipetik dari pohon. Buah yang matang sempurna — berwarna kuning keemasan — dipilih satu per satu oleh para petani. Setiap buah dibuka dengan hati-hati, bijinya dikeluarkan bersama pulp putih yang manis.",
  },
  {
    type: "heading",
    level: 3,
    text: "Fermentasi: Jantung Rasa Kakao",
  },
  {
    type: "paragraph",
    content:
      "Fermentasi adalah tahap paling krusial dalam menentukan cita rasa akhir cokelat. Di Tompak, fermentasi dilakukan secara tradisional menggunakan kotak-kotak kayu berlapis daun pisang. Biji kakao ditumpuk dan ditutup rapat, dibiarkan selama lima hingga tujuh hari.",
  },
  {
    type: "list",
    style: "ordered",
    items: [
      "Hari 1-2: Fermentasi anaerob — bakteri memecah pulp, suhu naik hingga 45°C",
      "Hari 3-4: Fermentasi aerob dimulai — biji diaduk untuk sirkulasi udara",
      "Hari 5-7: Reaksi enzimatis membentuk prekursor rasa cokelat",
    ],
  },
  {
    type: "quote",
    content:
      "Kakao yang difermentasi dengan baik akan berbicara sendiri saat disangrai. Kita hanya perlu mendengarkan.",
    attribution: "Pak Darman, petani kakao senior Tompak",
  },
  {
    type: "heading",
    level: 3,
    text: "Pengeringan dan Penyortiran",
  },
  {
    type: "paragraph",
    content:
      "Setelah fermentasi selesai, biji kakao dijemur di atas para-para bambu selama 7-10 hari. Para petani secara rutin membalik biji-biji ini agar pengeringan merata. Kadar air harus turun hingga di bawah 7% sebelum biji siap dijual atau diolah lebih lanjut.",
  },
  {
    type: "gallery",
    images: [
      {
        src: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80",
        alt: "Biji kakao dijemur di bawah sinar matahari",
      },
      {
        src: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80",
        alt: "Petani menyortir biji kakao berdasarkan ukuran",
      },
      {
        src: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80",
        alt: "Hasil akhir biji kakao kering siap sangrai",
      },
    ],
    caption: "Tahapan pengeringan dan penyortiran biji kakao di Tompak",
  },
  {
    type: "heading",
    level: 3,
    text: "Menuju Cokelat Berkualitas",
  },
  {
    type: "paragraph",
    content:
      "Dalam beberapa tahun terakhir, kelompok Prawira Tani mulai bereksperimen dengan pengolahan kakao hingga tahap akhir — menjadi cokelat batangan. Dengan peralatan sederhana namun teknik yang presisi, mereka berhasil memproduksi cokelat single-origin yang kini mulai dikenal di pasar-pasar lokal.",
  },
  {
    type: "list",
    style: "unordered",
    items: [
      "Sangrai biji pada suhu 120-140°C selama 20-30 menit",
      "Pisahkan kulit ari dari nib kakao menggunakan winnower sederhana",
      "Giling nib menjadi pasta kakao (cocoa liquor)",
      "Conching selama 8-12 jam untuk kelembutan tekstur",
    ],
  },
  {
    type: "paragraph",
    content:
      "Perjalanan dari biji ke cokelat ini bukan hanya soal proses — ia adalah cerita tentang kesabaran, ketelitian, dan kebanggaan masyarakat Tompak terhadap hasil bumi mereka sendiri.",
  },
];

export { cocoaProcessingContent };
