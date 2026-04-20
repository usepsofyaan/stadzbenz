"use client";

import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleOrder = () => {
    if (items.length === 0) {
      alert("Keranjang Anda kosong!");
      return;
    }

    // Format pesan untuk WhatsApp
    const itemList = items.map((item) => `- ${item.name} x${item.quantity} = Rp ${(item.price * item.quantity).toLocaleString("id-ID")}`).join("%0A");

    const message = `Halo, saya ingin memesan:%0A%0A${itemList}%0A%0ATotal: Rp ${totalPrice.toLocaleString("id-ID")}`;
    const whatsappUrl = `https://wa.me/6285156280108?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-6 pb-32">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">🛒 Keranjang Belanja</h1>
          <p className="text-zinc-600 dark:text-zinc-400">{totalItems} item dalam keranjang</p>
        </div>

        {/* Cart Items */}
        {items.length > 0 ? (
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-zinc-800 rounded-lg p-4 flex gap-4 shadow">
                {/* Item Image */}
                <div className="w-24 h-24 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-zinc-700 dark:to-zinc-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-4xl">🍲</div>
                </div>

                {/* Item Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{item.category}</p>
                  <p className="font-bold text-accent-600 dark:text-accent-400">Rp {item.price.toLocaleString("id-ID")}</p>
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-700 rounded-lg p-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded">
                      −
                    </button>
                    <span className="px-4 py-1 font-semibold text-zinc-900 dark:text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded">
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Subtotal</p>
                    <p className="font-bold text-zinc-900 dark:text-white">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium">
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-zinc-800 rounded-lg">
            <p className="text-3xl mb-4">🛒</p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Keranjang Anda kosong</p>
            <Link href="/" className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Lanjut Belanja
            </Link>
          </div>
        )}

        {/* Order Summary */}
        {items.length > 0 && (
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow space-y-4">
            {/* Summary Items */}
            <div className="space-y-2 border-b border-zinc-200 dark:border-zinc-700 pb-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">Subtotal:</span>
                <span className="text-zinc-900 dark:text-white font-medium">Rp {totalPrice.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">Ongkir:</span>
                <span className="text-zinc-900 dark:text-white font-medium">Gratis</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-orange-600 dark:text-orange-400">Rp {totalPrice.toLocaleString("id-ID")}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button onClick={clearCart} className="flex-1 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-900 dark:text-white font-semibold py-3 rounded-lg transition-colors">
                Hapus Semua
              </button>
              <button onClick={handleOrder} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                💬 Pesan via WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Back Link */}
        {items.length > 0 && (
          <Link href="/" className="block text-center mt-4 text-orange-600 dark:text-orange-400 hover:underline font-medium">
            ← Kembali Belanja
          </Link>
        )}
      </div>
    </div>
  );
}
