"use client";

import { aboutStore } from "@/data/about";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{aboutStore.storeName}</h1>
          <p className="text-xl text-orange-100">{aboutStore.tagline}</p>
        </div>
      </section>

      {/* About Description */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tentang Kami</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">{aboutStore.description}</p>
          <p className="text-gray-600 dark:text-gray-300">
            Sejak didirikan pada tahun <span className="font-semibold">{aboutStore.foundedYear}</span>, Stadz Benz telah menjadi pilihan utama kuliner tradisional Indonesia bagi ribuan pelanggan setia.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 dark:bg-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visi Kami</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{aboutStore.vision}</p>
          </div>

          {/* Mission */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Misi Kami</h3>
            <ul className="space-y-3">
              {aboutStore.mission.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features/Keunggulan */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Keunggulan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutStore.features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-orange-500 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutStore.team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informasi Kontak</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-orange-500 font-bold w-24">Alamat:</span>
              <span className="text-gray-600 dark:text-gray-300">{aboutStore.location}</span>
            </div>
            <div className="flex items-start">
              <span className="text-orange-500 font-bold w-24">Telepon:</span>
              <span className="text-gray-600 dark:text-gray-300">{aboutStore.phone}</span>
            </div>
            <div className="flex items-start">
              <span className="text-orange-500 font-bold w-24">Email:</span>
              <span className="text-gray-600 dark:text-gray-300">{aboutStore.email}</span>
            </div>
            <div className="flex items-start">
              <span className="text-orange-500 font-bold w-24">Jam Operasional:</span>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Senin - Jumat: {aboutStore.operatingHours.weekday}</p>
                <p>Sabtu - Minggu: {aboutStore.operatingHours.weekend}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
