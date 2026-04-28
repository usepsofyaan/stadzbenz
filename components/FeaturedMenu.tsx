import MenuCard from "./MenuCard";
import { menus } from "@/data/menus";

export default function FeaturedMenu() {
  const featured = menus.filter((item) => item.bestseller).slice(0, 4);

  return (
    <section className="px-4 py-8 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">🔥 TERLARIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-2">Produk Terlaris</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Produk favorit yang paling banyak dipesan oleh pelanggan setia kami</p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
