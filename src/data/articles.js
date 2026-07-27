// Article data used both on the main page cards and the full article pages.
// Content is in Indonesian only (as specified: article page does not require translation).
export const articles = [
  {
    id: "1",
    date: "12 September 2024",
    title: {
      ID: "Menjelajahi Kopi Tompak",
      EN: "Exploring Tompak Coffee",
    },
    snippet: {
      ID: "Menyusuri kebun kopi di lereng bukit Tompak, tempat setiap biji dipetik dengan tangan dan cerita.",
      EN: "A walk through the coffee gardens on the slopes of Tompak, where every bean is hand-picked along with its story.",
    },
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Pagi baru saja menyingsing ketika kami tiba di kebun kopi milik Pak Rusli, seorang Prawira Tani generasi ketiga. Di antara kabut tipis, deretan pohon kopi arabika menjulur menyusuri kontur bukit — hijau, rapat, dan hidup.",
      'Setiap pohon di kebun ini punya cerita. Beberapa ditanam oleh kakek Pak Rusli, beberapa lainnya adalah hasil regenerasi belasan tahun terakhir. "Kopi Tompak tumbuh bukan karena kami memaksanya," katanya sambil menyeruput secangkir kopi hitam. "Ia tumbuh karena kami menghormatinya."',
      "Proses panen di sini masih dilakukan dengan tangan. Buah ceri merah dipetik satu per satu, dipilah, kemudian dijemur di atas para-para bambu selama beberapa hari. Cara ini memakan waktu, tetapi memberi karakter khas pada seduhan akhirnya — aroma tanah hangat dengan sentuhan cokelat pahit dan sedikit manis di ujung lidah.",
      "Kebun kopi ini juga menjadi rumah bagi ratusan spesies burung dan serangga. Sistem tanam agroforestri yang diadopsi Prawira Tani membuat kopi tumbuh berdampingan dengan pohon peneduh, tanaman rempah, dan buah-buahan lokal. Ekosistem ini bukan hanya menjaga cita rasa kopi, tetapi juga menjaga tanah agar tetap subur untuk generasi berikutnya.",
      'Menjelang sore, kami duduk di teras kayu sambil menikmati kopi terakhir hari itu. Di kejauhan, kabut mulai turun kembali ke lembah. "Kopi Tompak," kata Pak Rusli pelan, "adalah cara kami bercerita kepada dunia tanpa harus banyak bicara."',
    ],
  },
  {
    id: "2",
    date: "28 Agustus 2024",
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
    id: "3",
    date: "15 Agustus 2024",
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

export const getArticleById = (id) => articles.find((a) => a.id === String(id));
