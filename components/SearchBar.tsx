"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-900 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Cari menu makanan favorit Anda..."
            value={query}
            onChange={handleChange}
            className="w-full px-6 py-4 pl-5 rounded-full border-2 border-primary-200 dark:border-primary-800 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all shadow-md"
          />
          {query && (
            <button onClick={handleClear} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-colors">
              ✕
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
