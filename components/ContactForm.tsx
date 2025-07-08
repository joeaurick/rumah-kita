// components/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle actual form submission (e.g., emailjs, API)
    alert("Pesan Anda berhasil dikirim!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Nama"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Pesan Anda"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
      >
        Kirim Pesan
      </button>

      <a
        href={`https://wa.me/6281234567890?text=Halo%20Info%20Properti%2C%20saya%20ingin%20bertanya%20tentang%20...`}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
      >
        Hubungi via WhatsApp
      </a>
    </form>
  );
}
