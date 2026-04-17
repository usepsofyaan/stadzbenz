'use client';

import MenuCard from './MenuCard';
import { MenuItem, menus } from '@/data/menus';
import { useMemo } from 'react';

interface MenuListProps {
  searchQuery: string;
  selectedCategory: string;
}

export default function MenuList({ searchQuery, selectedCategory }: MenuListProps) {
  const filteredMenus = useMemo(() => {
    let result = menus;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'Semua') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <section className="px-4 py-8 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            📋 Semua Menu
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            {filteredMenus.length} menu tersedia {selectedCategory !== 'Semua' && `di kategori ${selectedCategory}`}
          </p>
        </div>

        {/* Menu Grid */}
        {filteredMenus.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMenus.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Hmm, menu tidak ditemukan 😕
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
              Coba cari dengan kata kunci lain
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
