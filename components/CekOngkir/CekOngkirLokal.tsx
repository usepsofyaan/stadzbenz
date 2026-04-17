"use client";

import { FormEvent, useState } from "react";

interface LokalData {
  titikAsal: string;
  titikTujuan: string;
  berat: number;
}

export default function CekOngkirLokal() {
  const [formData, setFormData] = useState<LokalData>({
    titikAsal: "",
    titikTujuan: "",
    berat: 0,
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "berat" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Integrate dengan API kurir lokal
      const response = await fetch("/api/cek-ongkir-lokal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: "Gagal mengecek ongkir lokal" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Titik/Alamat Asal</label>
          <input
            type="text"
            name="titikAsal"
            value={formData.titikAsal}
            onChange={handleChange}
            placeholder="Contoh: Jl. Merdeka No. 123"
            required
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Titik/Alamat Tujuan</label>
          <input
            type="text"
            name="titikTujuan"
            value={formData.titikTujuan}
            onChange={handleChange}
            placeholder="Contoh: Jl. Ahmad Yani No. 456"
            required
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Berat (gram)</label>
          <input
            type="number"
            name="berat"
            value={formData.berat || ""}
            onChange={handleChange}
            placeholder="1000"
            step="100"
            required
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-medium py-2 rounded-lg transition-colors">
          {loading ? "Mengecek..." : "Cek Ongkir Lokal"}
        </button>
      </form>

      {/* Hasil */}
      {result && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          {result.error ? (
            <p className="text-red-600 dark:text-red-400">{result.error}</p>
          ) : (
            <div className="space-y-2">
              <h3 className="font-semibold text-zinc-900 dark:text-white">Hasil Cek Ongkir Lokal:</h3>
              {result.biaya && <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Rp {result.biaya.toLocaleString("id-ID")}</div>}
              {result.estimasi && <p className="text-sm text-zinc-600 dark:text-zinc-400">Estimasi: {result.estimasi}</p>}
              <pre className="text-xs text-zinc-600 dark:text-zinc-400 overflow-auto">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
