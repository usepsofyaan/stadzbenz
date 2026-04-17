import MenuCard from './MenuCard';
import { menus } from '@/data/menus';

export default function FeaturedMenu() {
  const featured = menus.filter((item) => item.popular).slice(0, 4);

  return (
    <section className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            ⭐ Menu Favorit
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Menu pilihan terlaris dan paling disukai pelanggan kami
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
