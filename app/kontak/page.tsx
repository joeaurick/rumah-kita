// app/kontak/page.tsx
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Hubungi Kami | Info Properti",
  description: "Butuh bantuan? Hubungi tim Info Properti untuk konsultasi, KPR, dan informasi rumah impian Anda.",
  alternates: {
    canonical: "https://infoproperti.vercel.app/kontak",
  },
};

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
        Hubungi Kami
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Kami siap membantu Anda! Kirimkan pesan atau hubungi kami langsung via WhatsApp.
      </p>
      <ContactForm />
    </main>
  );
}
