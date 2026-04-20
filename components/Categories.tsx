"use client";

import { categories } from "@/data/menus";
import { useState } from "react";

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <section className="px-4 py-6 bg-white dark:bg-zinc-900 border-b border-primary-200 dark:border-primary-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">📂 Kategori</h3>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelectCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors flex-shrink-0 ${
                selectedCategory === category ? "bg-accent-600 text-white" : "bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
