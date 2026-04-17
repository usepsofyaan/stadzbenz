import { MenuItem } from "@/data/menus";
import { useCartStore } from "@/stores/cartStore";
import { useState } from "react";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item, 1);
    setIsAdded(true);
    // Reset button state after 1.5 seconds
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-zinc-700 dark:to-zinc-600 flex items-center justify-center overflow-hidden">
        <div className="text-6xl">🍲</div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-semibold text-lg text-zinc-900 dark:text-white line-clamp-2">{item.name}</h3>

        {/* Category & Rating */}
        <div className="flex items-center justify-between my-2">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded">{item.category}</span>
          <span className="text-sm font-medium text-yellow-500 flex items-center gap-1">⭐ {item.rating}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">{item.description}</p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-orange-600 dark:text-orange-400">Rp {item.price.toLocaleString("id-ID")}</span>
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isAdded ? "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700" : "bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
            } text-white`}
          >
            {isAdded ? "✓ Ditambahkan" : "+ Keranjang"}
          </button>
        </div>
      </div>
    </div>
  );
}
