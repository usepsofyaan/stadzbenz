'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <section className="px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Cari menu makanan..."
            value={query}
            onChange={handleChange}
            className="w-full px-4 py-3 pl-5 rounded-full border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
    </section>
  );
}
