import { Link } from "react-router-dom";
import SharedPageLayout from "../components/SharedPageLayout.jsx";
import coverImage from "../assets/hero-bg/IMG_5958.jpg";

// Dummy Indonesian body content — placeholder narrative for the Prawira Tani program.
const paragraphs = [
  "Prawira Tani lahir dari kegelisahan sederhana: bagaimana caranya agar lahan-lahan di Dusun Tompak tetap hidup ketika generasi mudanya perlahan pergi ke kota. Program ini menjadi jembatan antara kearifan lokal para petani sepuh dan semangat baru anak-anak muda yang ingin pulang, bertani, dan tumbuh bersama tanah kelahirannya.",
  "Setiap anggota Prawira Tani tidak hanya belajar mengolah lahan, tetapi juga membaca musim, merawat benih, dan memahami rantai pasar. Mereka bergerak dalam kelompok-kelompok kecil, saling berbagi peralatan, ilmu, dan waktu. Dari kebun kopi di lereng utara hingga sawah tadah hujan di sisi selatan dusun, setiap petak lahan adalah kelas terbuka.",
  "Kami percaya bahwa pertanian bukan sekadar profesi warisan, melainkan pilihan sadar yang bisa dijalani dengan bangga. Prawira Tani hadir untuk memastikan bahwa memilih menjadi petani muda di Tompak berarti memilih jalan yang bermartabat, berkelanjutan, dan berpihak pada masa depan dusun.",
  "Ke depan, Prawira Tani akan terus memperluas jaringan, memperdalam praktik agroekologi, dan membuka ruang belajar bagi siapa saja yang ingin ikut merawat tanah. Karena pada akhirnya, menjaga Tompak adalah menjaga cerita panjang tentang manusia dan tanahnya — sebuah cerita yang belum selesai ditulis.",
];

export default function PrawiraTaniPage() {
  return (
    <SharedPageLayout
      coverImage={coverImage}
      coverAlt="Prawira Tani — petani muda Dusun Tompak"
      title="Prawira Tani"
    >
      {/* Meta chip */}
      <div className="flex items-center gap-2 mb-6 justify-center">
        <span className="rounded-full bg-tompak-green-mid/10 border border-tompak-green-mid/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-tompak-green-mid">
          Program
        </span>
        <span className="text-xs text-tompak-green-deep/60">
          Gerakan Petani Muda Dusun Tompak
        </span>
      </div>

      {/* Body */}
      <div className="prose prose-lg max-w-none text-tompak-green-deep/80 space-y-5">
        {paragraphs.map((para, i) => (
          <p key={i} className="leading-[1.85] text-base md:text-[1.05rem]">
            {para}
          </p>
        ))}
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
