// File: app/blog/perbandingan-kpr-konvensional-vs-syariah/page.tsx

export const metadata = {
  title: "Perbandingan KPR Konvensional vs Syariah | Blog Properti Kita",
  description:
    "Ketahui perbedaan KPR Konvensional dan Syariah: kelebihan, kekurangan, serta tips memilih sesuai kebutuhan finansial Anda.",
};

export default function ArtikelKPR() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Perbandingan KPR Konvensional vs Syariah
      </h1>

      <p className="text-gray-700 mb-4">
        Saat ingin membeli rumah, banyak orang dihadapkan pada pilihan antara Kredit Pemilikan Rumah (KPR) konvensional dan KPR berbasis syariah. Memahami perbedaan keduanya sangat penting agar Anda tidak salah langkah dalam mengambil keputusan finansial jangka panjang.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">
        Apa Itu KPR Konvensional?
      </h2>
      <p className="text-gray-700 mb-4">
        KPR konvensional adalah jenis pembiayaan rumah dari bank yang menggunakan sistem bunga. Besaran bunga bisa bersifat tetap (fixed rate) atau mengikuti suku bunga pasar (floating rate).
      </p>

      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>✅ Tersedia luas di banyak bank umum.</li>
        <li>✅ Pilihan tenor fleksibel hingga 20 tahun.</li>
        <li>❌ Terkena risiko naiknya cicilan karena bunga fluktuatif.</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">
        Apa Itu KPR Syariah?
      </h2>
      <p className="text-gray-700 mb-4">
        KPR syariah adalah sistem pembiayaan berbasis prinsip Islam, tanpa bunga (riba), melainkan menggunakan akad seperti murabahah (jual beli) atau ijarah (sewa beli).
      </p>

      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>✅ Angsuran tetap tanpa fluktuasi selama masa cicilan.</li>
        <li>✅ Cocok bagi nasabah yang ingin menghindari riba.</li>
        <li>❌ Total harga rumah biasanya sedikit lebih tinggi dari KPR konvensional.</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">
        Perbandingan Singkat
      </h2>
      <table className="w-full text-left border mt-4 mb-8">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="border px-4 py-2">Aspek</th>
            <th className="border px-4 py-2">KPR Konvensional</th>
            <th className="border px-4 py-2">KPR Syariah</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="border px-4 py-2">Sistem Pembiayaan</td>
            <td className="border px-4 py-2">Bunga</td>
            <td className="border px-4 py-2">Akad (Murabahah/Ijarah)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Angsuran</td>
            <td className="border px-4 py-2">Bisa naik turun</td>
            <td className="border px-4 py-2">Tetap hingga lunas</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Prinsip</td>
            <td className="border px-4 py-2">Non-syariah</td>
            <td className="border px-4 py-2">Berdasarkan syariat Islam</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">
        Mana yang Harus Dipilih?
      </h2>
      <p className="text-gray-700 mb-6">
        Jika Anda menginginkan kepastian cicilan dan menghindari bunga, KPR syariah bisa menjadi pilihan. Namun jika Anda lebih nyaman dengan fleksibilitas dan ingin mengejar promo suku bunga rendah, KPR konvensional bisa dipertimbangkan.
      </p>

      <div className="p-4 border-l-4 border-blue-600 bg-blue-50 text-sm text-blue-900">
        💡 <strong>Tips:</strong> Sebelum memutuskan, bandingkan simulasi cicilan dari kedua jenis KPR dan sesuaikan dengan kondisi keuangan Anda.
      </div>
    </main>
  );
}
