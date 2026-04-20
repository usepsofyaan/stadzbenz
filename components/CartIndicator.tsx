"use client";

import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";

export default function CartIndicator() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <Link href="/checkout" className="flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-full transition-colors">
      <span className="text-lg">🛒</span>
      <span className="font-medium">{totalItems} items</span>
      <span className="text-sm">Rp {totalPrice.toLocaleString("id-ID")}</span>
    </Link>
  );
}
