export interface Promo {
  id: number;
  title: string;
  description: string;
  discount: string;
  code?: string;
  bgColor: string;
  icon: string;
}

export const promos: Promo[] = [
  {
    id: 1,
    title: "Diskon Spesial 50%",
    description: "Untuk pembelian paket combo minimal Rp100.000",
    discount: "50%",
    code: "COMBO50",
    bgColor: "from-orange-400 to-red-500",
    icon: "🎉",
  },
  {
    id: 2,
    title: "Gratis Ongkos Kirim",
    description: "Untuk pembelian minimal Rp75.000, tanpa syarat & ketentuan",
    discount: "GRATIS",
    code: "FREEONGKIR",
    bgColor: "from-blue-400 to-indigo-500",
    icon: "🚚",
  },
  {
    id: 3,
    title: "Beli 2 Gratis 1",
    description: "Promo spesial untuk menu pilihan setiap hari Jumat & Sabtu",
    discount: "BELI 2",
    code: "BELI2GRATIS1",
    bgColor: "from-green-400 to-emerald-500",
    icon: "🎁",
  },
  {
    id: 4,
    title: "Member Spesial Cashback",
    description: "Dapatkan cashback hingga 20% untuk member setia kami",
    discount: "20%",
    code: "MEMBER20",
    bgColor: "from-purple-400 to-pink-500",
    icon: "💳",
  },
];
