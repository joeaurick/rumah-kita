/* File: components/Footer.tsx */
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Properti Kita. Semua hak dilindungi.</p>
    </footer>
  );
}