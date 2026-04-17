"use client";

import { FormEvent, useState } from "react";

interface OngkosData {
  kotaAsal: string;
  kecamatanAsal: string;
  kotaTujuan: string;
  kecamatanTujuan: string;
  berat: number;
  kurir: string;
}

export default function CekOngkos() {
  const [formData, setFormData] = useState<OngkosData>({
    kotaAsal: "",
    kecamatanAsal: "",
    kotaTujuan: "",
    kecamatanTujuan: "",
    berat: 0,
    kurir: "jne",
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      // TODO: Integrate dengan API kurir (JNE, Tiki, Pos Indonesia, dll)
      const response = await fetch("/api/cek-ongkos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: "Gagal mengecek ongkos kirim" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Kota & Kecamatan Asal */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Kota Asal</label>
            <input
              type="text"
              name="kotaAsal"
              value={formData.kotaAsal}
              onChange={handleChange}
              placeholder="Contoh: Jakarta"
              required
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Kecamatan Asal</label>
            <input
              type="text"
              name="kecamatanAsal"
              value={formData.kecamatanAsal}
              onChange={handleChange}
              placeholder="Contoh: Cengkareng"
              required
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Kota & Kecamatan Tujuan */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Kota Tujuan</label>
            <input
              type="text"
              name="kotaTujuan"
              value={formData.kotaTujuan}
              onChange={handleChange}
              placeholder="Contoh: Bandung"
              required
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Kecamatan Tujuan</label>
            <input
              type="text"
              name="kecamatanTujuan"
              value={formData.kecamatanTujuan}
              onChange={handleChange}
              placeholder="Contoh: Cimahi"
              required
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Berat & Kurir */}
        <div className="grid grid-cols-2 gap-3">
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
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Pilih Kurir</label>
            <select
              name="kurir"
              value={formData.kurir}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="jne">JNE</option>
              <option value="tiki">Tiki</option>
              <option value="pos">Pos Indonesia</option>
              <option value="gojek">GojekSend</option>
              <option value="grab">GrabSend</option>
            </select>
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-medium py-2 rounded-lg transition-colors">
          {loading ? "Mengecek..." : "Cek Ongkos Kirim"}
        </button>
      </form>

      {/* Hasil */}
      {result && (
        <div className="mt-6 p-4 bg-orange-50 dark:bg-zinc-800 border border-orange-200 dark:border-zinc-700 rounded-lg">
          {result.error ? (
            <p className="text-red-600 dark:text-red-400">{result.error}</p>
          ) : (
            <div className="space-y-2">
              <h3 className="font-semibold text-zinc-900 dark:text-white">Hasil Cek Ongkos:</h3>
              <pre className="text-sm text-zinc-700 dark:text-zinc-300 overflow-auto">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
