/* File: components/ContactForm.tsx */
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan terkirim! Kami akan menghubungi Anda segera.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
      <input
        name="nama"
        placeholder="Nama"
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="pesan"
        placeholder="Pesan Anda"
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        required
      ></textarea>
      <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
        Kirim
      </button>
    </form>
  );
}
