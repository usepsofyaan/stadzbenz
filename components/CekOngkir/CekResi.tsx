"use client";

import { FormEvent, useState } from "react";

interface ResiData {
  noResi: string;
}

interface TrackingInfo {
  noResi: string;
  status: string;
  lokasi: string;
  estimasi: string;
  detail: string;
}

export default function CekResi() {
  const [formData, setFormData] = useState<ResiData>({
    noResi: "",
  });

  const [tracking, setTracking] = useState<TrackingInfo | null>(null);
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
      // TODO: Integrate dengan API tracking kurir
      const response = await fetch("/api/cek-resi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setTracking(data);
    } catch (error) {
      console.error("Error:", error);
      setTracking({
        noResi: formData.noResi,
        status: "error",
        lokasi: "Tidak diketahui",
        estimasi: "-",
        detail: "Gagal mengecek resi pengiriman",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Nomor Resi Pengiriman</label>
          <input
            type="text"
            name="noResi"
            value={formData.noResi}
            onChange={handleChange}
            placeholder="Contoh: 123456789"
            required
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-medium py-2 rounded-lg transition-colors">
          {loading ? "Melacak..." : "Lacak Paket"}
        </button>
      </form>

      {/* Hasil Tracking */}
      {tracking && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-3">Status Pengiriman</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">No. Resi:</span>
                <span className="font-medium text-zinc-900 dark:text-white">{tracking.noResi}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Status:</span>
                <span
                  className={`font-medium px-2 py-1 rounded text-sm ${
                    tracking.status === "delivered"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : tracking.status === "in_transit"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                        : tracking.status === "error"
                          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                  }`}
                >
                  {tracking.status === "delivered" && "✓ Terkirim"}
                  {tracking.status === "in_transit" && "📍 Dalam Perjalanan"}
                  {tracking.status === "error" && "✕ Error"}
                  {tracking.status === "pending" && "Pending"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Lokasi:</span>
                <span className="font-medium text-zinc-900 dark:text-white">{tracking.lokasi}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Estimasi:</span>
                <span className="font-medium text-zinc-900 dark:text-white">{tracking.estimasi}</span>
              </div>

              <div className="pt-2 border-t border-blue-200 dark:border-blue-800">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{tracking.detail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
