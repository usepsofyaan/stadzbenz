"use client";

import MenuCard from "./MenuCard";
import { MenuItem } from "@/data/menus";
import { useMemo, useEffect, useState } from "react";
import { Product } from "@/types";

interface MenuListProps {
  searchQuery: string;
  selectedCategory: string;
}

export default function MenuList({ searchQuery, selectedCategory }: MenuListProps) {
  const [products, setProducts] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/admin/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await response.json();

        // Transform Product to MenuItem format
        const menuItems: MenuItem[] = data.map((product, index) => ({
          id: index + 1,
          name: product.name,
          category: product.category,
          price: product.price,
          rating: 4.5, // Default rating
          image: product.image_url,
          description: product.description,
          isNew: true, // Mark products from API as new
        }));

        setProducts(menuItems);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredMenus = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory && selectedCategory !== "Semua") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return result;
  }, [searchQuery, selectedCategory, products]);

  // Filter for newest products
  const newestProducts = products.filter((item) => item.isNew).slice(0, 8);

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

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-zinc-800 rounded-lg h-64 animate-pulse">
                <div className="h-48 bg-zinc-200 dark:bg-zinc-700"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : productsToShow.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {productsToShow.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">Hmm, menu tidak ditemukan 😕</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">{loading ? "Memuat produk..." : "Coba cari dengan kata kunci lain atau tambahkan produk di halaman admin"}</p>
          </div>
        )}
      </div>
    </section>
  );
}
