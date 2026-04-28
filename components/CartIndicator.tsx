"use client";

import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";

export default function CartIndicator() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  if (totalItems === 0) return null;

  return (
    <Link href="/checkout" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-accent-600 hover:bg-accent-700 active:scale-95 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group">
      {/* Cart icon */}
      <div className="relative bg-orange-100 text-orange-600 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {/* Badge jumlah item */}
        <span className="absolute -top-2 -right-2 bg-white text-accent-600 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">{totalItems > 99 ? "99+" : totalItems}</span>
      </div>

      {/* Info harga */}
      <div className="flex flex-col leading-tight">
        <span className="text-xs opacity-80">
          {totalItems} item{totalItems > 1 ? "s" : ""}
        </span>
        <span className="text-sm font-semibold">Rp {totalPrice.toLocaleString("id-ID")}</span>
      </div>
    </Link>
  );
}
