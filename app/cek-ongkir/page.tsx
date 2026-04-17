"use client";

import { useState } from "react";
import CekOngkos from "@/components/CekOngkir/CekOngkos";
import CekResi from "@/components/CekOngkir/CekResi";
import CekOngkirLokal from "@/components/CekOngkir/CekOngkirLokal";
import CekIdKecamatan from "@/components/CekOngkir/CekIdKecamatan";

type TabType = "ongkos" | "resi" | "lokal" | "kecamatan";

export default function CekOngkirPage() {
  const [activeTab, setActiveTab] = useState<TabType>("ongkos");

  const tabs: Array<{ id: TabType; label: string; icon: string }> = [
    { id: "ongkos", label: "Cek Ongkos", icon: "💰" },
    { id: "resi", label: "Cek Resi", icon: "📦" },
    { id: "lokal", label: "Ongkir Lokal", icon: "🏘️" },
    { id: "kecamatan", label: "ID Kecamatan", icon: "🗺️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 pb-32">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Cek Ongkos Kirim</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Periksa biaya pengiriman, tracking paket, dan informasi kecamatan</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 sticky top-16 z-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id ? "bg-orange-600 text-white shadow-lg" : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
          {activeTab === "ongkos" && <CekOngkos />}
          {activeTab === "resi" && <CekResi />}
          {activeTab === "lokal" && <CekOngkirLokal />}
          {activeTab === "kecamatan" && <CekIdKecamatan />}
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Tips Penggunaan</h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
            <li>Pastikan nama kota dan kecamatan sesuai dengan data resmi</li>
            <li>Berat paket dihitung dalam gram (1 kg = 1000 gram)</li>
            <li>Untuk tracking paket, gunakan nomor resi yang diberikan kurir</li>
            <li>ID kecamatan diperlukan untuk integrasi API pengiriman</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
