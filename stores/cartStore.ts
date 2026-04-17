import { create } from "zustand";
import { MenuItem } from "@/data/menus";

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (item: MenuItem, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // Jika item sudah ada di cart, tambah quantity
        return {
          items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i)),
        };
      } else {
        // Jika item baru, tambahkan ke cart
        return {
          items: [
            ...state.items,
            {
              ...item,
              quantity,
            },
          ],
        };
      }
    });
  },

  removeFromCart: (itemId: number) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== itemId),
    }));
  },

  updateQuantity: (itemId: number, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        return {
          items: state.items.filter((i) => i.id !== itemId),
        };
      }
      return {
        items: state.items.map((i) => (i.id === itemId ? { ...i, quantity } : i)),
      };
    });
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
