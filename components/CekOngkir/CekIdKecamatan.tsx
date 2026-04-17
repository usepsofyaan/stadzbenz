"use client";

import { FormEvent, useState } from "react";

interface KecamatanData {
  namakecamatan: string;
  kotaId?: string;
}

interface KecamatanResult {
  id: string;
  nama: string;
  kota: string;
  provinsi: string;
  kodePos?: string;
}

export default function CekIdKecamatan() {
  const [formData, setFormData] = useState<KecamatanData>({
    namakecamatan: "",
  });

  const [result, setResult] = useState<KecamatanResult | null>(null);
  const [results, setResults] = useState<KecamatanResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Integrate dengan API kecamatan
      const response = await fetch("/api/cek-id-kecamatan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (Array.isArray(data)) {
        setResults(data);
        setResult(null);
      } else {
        setResult(data);
        setResults([]);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult({
        id: "error",
        nama: formData.namakecamatan,
        kota: "-",
        provinsi: "-",
      });
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Cari Nama Kecamatan</label>
          <input
            type="text"
            name="namakecamatan"
            value={formData.namakecamatan}
            onChange={handleChange}
            placeholder="Contoh: Cengkareng"
            required
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-medium py-2 rounded-lg transition-colors">
          {loading ? "Mencari..." : "Cek ID Kecamatan"}
        </button>
      </form>

      {/* Hasil Single */}
      {result && !Array.isArray(results) && results.length === 0 && (
        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
          {result.id === "error" ? (
            <p className="text-red-600 dark:text-red-400">Kecamatan tidak ditemukan</p>
          ) : (
            <div className="space-y-3">
              <h3 className="font-semibold text-zinc-900 dark:text-white text-lg">{result.nama}</h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">ID:</span>
                  <code className="font-mono bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded text-zinc-900 dark:text-white">{result.id}</code>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Kota:</span>
                  <span className="text-zinc-900 dark:text-white">{result.kota}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Provinsi:</span>
                  <span className="text-zinc-900 dark:text-white">{result.provinsi}</span>
                </div>

                {result.kodePos && (
                  <div className="flex justify-between">
                    <span className="text-zinc-600 dark:text-zinc-400">Kode Pos:</span>
                    <span className="text-zinc-900 dark:text-white">{result.kodePos}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Hasil Multiple */}
      {results.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Hasil Pencarian ({results.length})</h3>

          <div className="space-y-2 max-h-80 overflow-y-auto">
            {results.map((item) => (
              <div key={item.id} className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h4 className="font-medium text-zinc-900 dark:text-white">{item.nama}</h4>
                <div className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <div className="flex justify-between">
                    <span>Kota:</span>
                    <span>{item.kota}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ID:</span>
                    <code className="font-mono bg-zinc-100 dark:bg-zinc-700 px-1 rounded">{item.id}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
