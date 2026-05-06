import { MenuItem } from "@/data/menus";
import { useCartStore } from "@/stores/cartStore";
import { useState } from "react";
import Image from "next/image";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addToCart(item, 1);
    setIsAdded(true);
    // Reset button state after 1.5 seconds
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow relative">
      {/* Badge Container */}
      <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
        {/* Bestseller Badge */}
        {item.bestseller && <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">🔥 Terlaris</div>}
        {/* New Badge */}
        {item.isNew && <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">✨ BARU</div>}
      </div>

      {/* Image Container */}
      <div className="w-full h-48 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-primary-700 dark:to-primary-600 flex items-center justify-center overflow-hidden relative">
        {!imageError && item.image ? <Image src={item.image} alt={item.name} fill className="object-cover" onError={() => setImageError(true)} /> : <div className="text-6xl">🍲</div>}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-semibold text-lg text-zinc-900 dark:text-white line-clamp-2">{item.name}</h3>

        {/* Category & Rating */}
        <div className="flex items-center justify-between my-2">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded">{item.category}</span>
          <span className="text-sm font-medium text-accent-500 flex items-center gap-1">⭐ {item.rating}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">{item.description}</p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-accent-600 dark:text-accent-400">Rp {item.price.toLocaleString("id-ID")}</span>
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isAdded ? "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700" : "bg-accent-600 hover:bg-accent-700 dark:bg-accent-600 dark:hover:bg-accent-700"
            } text-white`}
          >
            {isAdded ? "✓ Ditambahkan" : "+ Keranjang"}
          </button>
        </div>
      </div>
    </div>
  );
}
