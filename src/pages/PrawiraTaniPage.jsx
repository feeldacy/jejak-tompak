import { Link } from "react-router-dom";
import SharedPageLayout from "../components/SharedPageLayout.jsx";
import prawiraheader from "../assets/prawiratani.jpg";

export default function PrawiraTaniPage() {
  return (
    <SharedPageLayout
      coverImage={prawiraheader}
      coverAlt="Prawira Tani — petani muda Dusun Tompak"
      title="Prawira Tani"
    >
      {/* Body */}
      <div className="max-w-none text-tompak-green-deep/80 space-y-8">
        {/* Tentang Prawira Tani */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Tentang Prawira Tani
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Prawira Tani merupakan usaha yang bergerak di bidang pembibitan dan
            budidaya kakao yang berlokasi di Desa Giripurwo, Kabupaten Kulon
            Progo. Nama Prawira memiliki arti berani, sedangkan Tani berarti
            bertani. Filosofi tersebut menggambarkan semangat untuk terus
            berinovasi dan berani mengembangkan sektor pertanian, khususnya
            komoditas kakao.
          </p>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Usaha ini didirikan oleh Muhammad Dwi Prasetyo sebagai upaya
            mendorong pertanian yang lebih mandiri, modern, dan berkelanjutan.
            Selain membudidayakan kakao, Prawira Tani juga mengolah hasil panen
            menjadi produk bernilai tambah dengan merek Tompak Cocoa, sehingga
            mampu meningkatkan nilai ekonomi hasil pertanian masyarakat.
          </p>
        </section>

        {/* Visi */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Visi
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Mewujudkan kedaulatan pangan berbasis keadilan agraria melalui
            penguatan kapasitas petani yang mandiri serta modernisasi ekosistem
            bisnis pertanian yang berkelanjutan. Visi ini menjadi landasan dalam
            setiap kegiatan yang dilakukan Prawira Tani untuk menciptakan
            pertanian yang produktif, berdaya saing, dan memberikan manfaat bagi
            masyarakat.
          </p>
        </section>

        {/* Misi */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Misi
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Untuk mewujudkan visi tersebut, Prawira Tani menjalankan beberapa
            misi utama, yaitu:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-[1.05rem] leading-relaxed marker:text-tompak-green-mid">
            <li>
              Melakukan pendampingan kepada petani dan kelompok tani dalam
              meningkatkan kualitas budidaya kakao.
            </li>
            <li>
              Menyelenggarakan pelatihan mengenai pertanian berkelanjutan agar
              petani mampu menerapkan teknik budidaya yang ramah lingkungan.
            </li>
            <li>
              Membangun kemitraan dengan berbagai pihak guna mendukung
              pembangunan sektor pertanian di tingkat desa.
            </li>
            <li>
              Mendorong perubahan pola pikir petani menuju sistem agroindustri
              yang lebih modern dan bernilai tambah.
            </li>
            <li>
              Mengembangkan agribisnis berkelanjutan yang melibatkan generasi
              muda sebagai motor penggerak pembangunan pertanian.
            </li>
          </ul>
        </section>

        {/* Tujuan */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Tujuan
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Prawira Tani memiliki tujuan untuk meningkatkan kesejahteraan petani
            melalui pengembangan budidaya kakao yang berkelanjutan. Selain
            menghasilkan produk kakao yang berkualitas, usaha ini juga berupaya
            memberdayakan masyarakat serta menjaga kelestarian lingkungan agar
            manfaatnya dapat dirasakan dalam jangka panjang.
          </p>
        </section>

        {/* Peran */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Peran
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Sebagai mitra petani, Prawira Tani berperan dalam menyediakan bibit
            kakao unggul yang berkualitas, memberikan pendampingan mulai dari
            proses budidaya hingga pascapanen, serta mengembangkan kemitraan di
            bidang agroindustri. Di samping itu, Prawira Tani juga mengolah
            hasil panen menjadi produk Tompak Cocoa dan menyelenggarakan
            berbagai kegiatan pelatihan untuk meningkatkan kapasitas petani
            serta masyarakat sekitar.
          </p>
        </section>

        {/* Kegiatan */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Kegiatan
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Berbagai kegiatan yang dilakukan Prawira Tani meliputi penyediaan
            bibit kakao unggul, pendampingan budidaya kakao dari tahap penanaman
            hingga pascapanen, pengolahan hasil kakao menjadi produk bernilai
            tambah, penyelenggaraan pelatihan pertanian berkelanjutan, serta
            pengembangan kemitraan dan edukasi mengenai budidaya kakao.
          </p>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Melalui kegiatan-kegiatan tersebut, Prawira Tani berkomitmen
            mendukung terciptanya ekosistem pertanian kakao yang produktif,
            berkelanjutan, dan mampu meningkatkan kesejahteraan petani lokal.
          </p>
        </section>

        <section className="space-y-4">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Pengolahan Kakao
          </h1>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Sekilas Tentang Pengolahan Kakao
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Pengolahan kakao merupakan rangkaian proses yang dilakukan untuk
            mengubah buah kakao menjadi produk yang memiliki nilai tambah, salah
            satunya dark chocolate. Proses ini dimulai sejak tahap pembibitan
            dan penanaman hingga pengolahan pascapanen. Setiap tahapan memiliki
            peran penting dalam menentukan kualitas biji kakao yang nantinya
            akan diolah menjadi produk cokelat berkualitas.
          </p>
        </section>

        {/* Kegiatan */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Tahap Penanaman
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Tahap penanaman menjadi fondasi utama dalam budidaya kakao. Tanaman
            yang berasal dari bibit berkualitas akan menghasilkan buah dengan
            produktivitas dan mutu yang lebih baik. Oleh karena itu, proses
            pembibitan dilakukan dengan beberapa metode sesuai kebutuhan dan
            tujuan budidaya.
          </p>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-tompak-green-deep">
            1. Pembibitan Kakao
          </h3>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Pembibitan kakao dapat dilakukan melalui dua metode utama, yaitu
            generatif dan vegetatif.
          </p>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            <strong>Pembibitan Generatif</strong> dilakukan dengan menyemai biji
            kakao yang berasal dari buah yang matang dan sehat ke dalam media
            tanam hingga tumbuh menjadi bibit baru.
          </p>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Sementara itu, <strong>Pembibitan Vegetatif</strong> dilakukan untuk
            mempertahankan sifat unggul dari tanaman induk melalui beberapa
            teknik, yaitu:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-[1.05rem] leading-relaxed marker:text-tompak-green-mid">
            <li>
              <strong>Okulasi</strong>, yaitu menempelkan mata tunas dari
              tanaman kakao unggul pada batang bawah bibit muda hasil pembibitan
              generatif. Teknik ini bertujuan memperoleh tanaman unggul dalam
              waktu yang relatif lebih singkat.
            </li>
            <li>
              <strong>Sambung Pucuk (Grafting)</strong>, yaitu menyambungkan
              batang bawah dari bibit generatif dengan batang atas (entres) yang
              berasal dari pohon induk unggul. Cara ini dilakukan agar tanaman
              baru mewarisi karakter unggul dari induknya.
            </li>
            <li>
              <strong>Sambung Samping</strong>, yaitu menggabungkan entres
              tanaman kakao unggul dengan tanaman kakao yang telah tumbuh di
              kebun. Teknik ini bertujuan meningkatkan kualitas dan
              produktivitas tanaman tanpa perlu menebang tanaman lama.
            </li>
            <li>
              <strong>Stek</strong>, yaitu memperbanyak tanaman menggunakan
              potongan batang dari tanaman induk hingga membentuk akar dan
              tumbuh menjadi tanaman baru.
            </li>
          </ul>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-tompak-green-deep">
            2. Persiapan Benih
          </h3>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Setelah metode pembibitan ditentukan, benih dipersiapkan dengan
            memilih bahan tanam yang sehat dan memiliki kualitas baik. Pemilihan
            benih yang tepat akan sangat memengaruhi pertumbuhan tanaman di masa
            mendatang.
          </p>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-tompak-green-deep">
            3. Persiapan Area Penyemaian
          </h3>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Area penyemaian disiapkan agar benih memperoleh lingkungan tumbuh
            yang optimal. Media tanam, kelembapan, serta intensitas cahaya perlu
            diperhatikan agar bibit dapat berkembang dengan baik.
          </p>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-tompak-green-deep">
            4. Proses Pembibitan
          </h3>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Pada tahap ini, benih dirawat secara rutin melalui penyiraman,
            pemupukan, dan pengendalian hama maupun penyakit hingga bibit cukup
            kuat untuk dipindahkan ke lahan budidaya.
          </p>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-tompak-green-deep">
            5. Pemindahan ke Kebun
          </h3>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Bibit yang telah memenuhi syarat pertumbuhan kemudian dipindahkan ke
            lahan tanam permanen. Tahap ini dilakukan dengan hati-hati agar akar
            tanaman tidak mengalami kerusakan sehingga tanaman dapat beradaptasi
            dengan lingkungan barunya.
          </p>
        </section>

        {/* Tahap Pascapanen */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Tahap Pascapanen
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Setelah buah kakao dipanen, proses selanjutnya adalah penanganan
            pascapanen. Tahapan ini sangat menentukan cita rasa dan kualitas
            biji kakao sebelum diolah menjadi produk jadi. Beberapa proses
            pascapanen meliputi:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-[1.05rem] leading-relaxed marker:text-tompak-green-mid">
            <li>
              <strong>Panen</strong>, yaitu memetik buah kakao yang telah
              matang.
            </li>
            <li>
              <strong>Sortasi dan Pemecahan Buah</strong>, untuk memisahkan biji
              kakao dari kulit buah sekaligus memilih biji yang berkualitas.
            </li>
            <li>
              <strong>Fermentasi</strong>, bertujuan membentuk cita rasa dan
              aroma khas kakao.
            </li>
            <li>
              <strong>Penjemuran</strong>, dilakukan untuk menurunkan kadar air
              hingga biji siap disimpan.
            </li>
            <li>
              <strong>Penyimpanan</strong>, menjaga kualitas biji sebelum
              diproses lebih lanjut.
            </li>
            <li>
              <strong>Pengolahan Produk</strong>, yaitu mengolah biji kakao
              menjadi berbagai produk bernilai tambah.
            </li>
          </ul>
        </section>

        {/* Produk Olahan Kakao */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-tompak-green-deep">
            Produk Olahan Kakao
          </h2>
          <p className="leading-[1.85] text-base md:text-[1.05rem]">
            Biji kakao yang telah melalui seluruh tahapan pengolahan dapat
            diolah menjadi berbagai produk turunan. Salah satu produk yang
            dihasilkan adalah <strong>cokelat batang (dark chocolate)</strong>,
            yang memiliki cita rasa khas dan nilai ekonomi lebih tinggi
            dibandingkan menjual biji kakao sebagai bahan baku.
          </p>
        </section>
      </div>

      {/* Back to home */}
      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full glass border border-tompak-green-soft/40 px-6 py-2.5 text-sm font-semibold text-tompak-green-deep transition hover:bg-white/80 hover:scale-105"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </SharedPageLayout>
  );
}
