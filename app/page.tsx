"use client";

import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import FeaturedMenu from "@/components/FeaturedMenu";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import MenuList from "@/components/MenuList";
import CartIndicator from "@/components/CartIndicator";
import PromoCarousel from "@/components/PromoCarousel";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  return (
    <div className="w-full">
      {/* Header with Cart */}
      <div className="sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-primary-200 dark:border-primary-800 shadow-sm px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-accent-600 dark:text-accent-400">Stadz Benz</h1>
          <CartIndicator />
        </div>
      </div>

      {/* Hero Banner */}
      <HeroBanner />

      {/* Search Bar - Optimal Position */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Promo Carousel - Between Search & Featured Menu */}
      <PromoCarousel />

      {/* Featured Menu */}
      <FeaturedMenu />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-accent-400 via-accent-500 to-primary-500" />

      {/* Categories */}
      <Categories onSelectCategory={setSelectedCategory} />

      {/* All Menu List */}
      <MenuList searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </div>
  );
}
