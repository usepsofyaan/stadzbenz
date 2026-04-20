"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Cek Ongkir", path: "/cek-ongkir", icon: "📦" },
    { name: "WhatsApp", path: "/wa", icon: "💬" },
    { name: "About", path: "/about", icon: "ℹ️" },
    { name: "Checkout", path: "/checkout", icon: "🛒" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-primary-300 dark:border-primary-700 shadow-lg">
      <div className="flex justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-2 text-sm font-medium transition-colors ${
                isActive ? "text-accent-500 dark:text-accent-400 bg-accent-50 dark:bg-primary-800" : "text-zinc-600 dark:text-zinc-400 hover:bg-primary-50 dark:hover:bg-primary-900"
              }`}
            >
              <span className="text-xl mb-1">{tab.icon}</span>
              <span className="text-xs">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
