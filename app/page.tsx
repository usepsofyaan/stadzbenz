"use client";

import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import FeaturedMenu from "@/components/FeaturedMenu";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import MenuList from "@/components/MenuList";
import CartIndicator from "@/components/CartIndicator";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  return (
    <div className="w-full">
      {/* Header with Cart */}
      <div className="sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-orange-600 dark:text-orange-400">Stadz Benz</h1>
          <CartIndicator />
        </div>
      </div>

      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Menu */}
      <FeaturedMenu />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500" />

      {/* Categories */}
      <Categories onSelectCategory={setSelectedCategory} />

      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} />

      {/* All Menu List */}
      <MenuList searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </div>
  );
}
