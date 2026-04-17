"use client";

import { useState } from "react";

export default function WhatsAppPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "085268396946";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert("Mohon lengkapi semua field");
      return;
    }

    setIsSubmitting(true);

    try {
      // Format pesan dengan informasi dari form
      const fullMessage = `Halo, saya ${name}.\nNomor HP: ${phone}\n\nPesan: ${message}`;
      const encodedMessage = encodeURIComponent(fullMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Buka WhatsApp di tab baru
      window.open(whatsappUrl, "_blank");

      // Reset form setelah submit
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all transform hover:scale-110 active:scale-95"
          title="Buka WhatsApp"
        >
          💬
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-zinc-900 dark:to-zinc-800 p-4">
      <div className="max-w-md mx-auto pt-4">
        {/* Header dengan Close Button */}
        <div className="bg-white dark:bg-zinc-800 rounded-t-2xl shadow-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💬</span>
            <div>
              <h1 className="font-bold text-lg text-zinc-900 dark:text-white">Hubungi Kami</h1>
              <p className="text-xs text-green-600 dark:text-green-400">Kami siap membantu via WhatsApp</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors text-2xl font-light" title="Tutup">
            ✕
          </button>
        </div>

        {/* Form Content */}
        <div className="bg-white dark:bg-zinc-800 shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Nama Lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Nomor HP */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Nomor HP/WhatsApp</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 081234567890"
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Pesan */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Pesanmu</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan pesan atau pertanyaanmu di sini..."
                rows={4}
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Nomor Tujuan Info */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-3">
              <p className="text-sm text-green-800 dark:text-green-300">
                <span className="font-semibold">Nomor WhatsApp:</span>{" "}
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                  +62 {whatsappNumber.slice(1)}
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>💬</span>
              {isSubmitting ? "Membuka WhatsApp..." : "Hubungi via WhatsApp"}
            </button>

            {/* Alternative Contact */}
            <div className="text-center text-xs text-zinc-600 dark:text-zinc-400 pt-2">
              <p>Atau hubungi langsung:</p>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 font-semibold hover:underline">
                Klik di sini
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-white dark:bg-zinc-800 rounded-b-2xl shadow-lg px-6 py-4 text-center text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-700">
          <p>⏰ Jam Operasional: 08:00 - 22:00 (Setiap hari)</p>
          <p className="mt-1">Respon cepat & pelayanan terbaik untuk Anda 🙏</p>
        </div>
      </div>
    </div>
  );
}
