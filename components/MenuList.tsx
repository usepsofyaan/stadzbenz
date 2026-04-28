"use client";

import MenuCard from "./MenuCard";
import { MenuItem, menus } from "@/data/menus";
import { useMemo } from "react";

interface MenuListProps {
  searchQuery: string;
  selectedCategory: string;
}

export default function MenuList({ searchQuery, selectedCategory }: MenuListProps) {
  const filteredMenus = useMemo(() => {
    let result = menus;

    // Filter by category
    if (selectedCategory && selectedCategory !== "Semua") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return result;
  }, [searchQuery, selectedCategory]);

  // Filter for newest products
  const newestProducts = menus.filter((item) => item.isNew).slice(0, 8);

  // Determine which products to show
  const isFilterActive = searchQuery || selectedCategory !== "Semua";
  const productsToShow = isFilterActive ? filteredMenus : newestProducts;

  return (
    <section className="px-4 py-8 pb-32 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          {!isFilterActive && (
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">✨ TERBARU</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-2">{isFilterActive ? "📋 Hasil Pencarian" : "Produk Terbaru"}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {isFilterActive ? `${filteredMenus.length} menu ditemukan ${selectedCategory !== "Semua" ? `di kategori ${selectedCategory}` : ""}` : "Produk terbaru yang baru saja ditambahkan ke menu kami"}
          </p>
        </div>

        {/* Menu Grid */}
        {productsToShow.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {productsToShow.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">Hmm, menu tidak ditemukan 😕</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">Coba cari dengan kata kunci lain</p>
          </div>
        )}
      </div>
    </section>
  );
}
