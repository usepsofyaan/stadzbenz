export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  popular?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
}

export const menus: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Kuning Istimewa",
    category: "Nasi Kuning",
    price: 35000,
    rating: 4.8,
    image: "/placeholder-1.jpg",
    description: "Nasi kuning dengan lauk pauk lengkap, daging ayam, telur rebus, dan sambel",
    popular: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "Soto Ayam Tradisional",
    category: "Sup & Soto",
    price: 28000,
    rating: 4.7,
    image: "/placeholder-2.jpg",
    description: "Soto ayam hangat dengan bumbu rempah khas, telur rebus, dan tahu goreng",
    popular: true,
    bestseller: true,
  },
  {
    id: 3,
    name: "Bakso Daging Premium",
    category: "Bakso",
    price: 32000,
    rating: 4.6,
    image: "/placeholder-3.jpg",
    description: "Bakso daging sapi premium dengan kuah kaldu yang lezat, mie dan sayuran",
    popular: true,
    bestseller: true,
  },
  {
    id: 5,
    name: "Sate Ayam Lezat",
    category: "Daging",
    price: 40000,
    rating: 4.9,
    image: "/placeholder-5.jpg",
    description: "Sate ayam gratis dengan bumbu kacang kental dan sambal khas, 10 tusuk",
    bestseller: true,
  },
  {
    id: 6,
    name: "Perkedel Goreng",
    category: "Gorengan",
    price: 15000,
    rating: 4.4,
    image: "/placeholder-6.jpg",
    description: "Perkedel kentang goreng crispy dengan rasa gurih, 5 buah",
  },
  {
    id: 7,
    name: "Tahu Goreng Tepung",
    category: "Gorengan",
    price: 18000,
    rating: 4.3,
    image: "/placeholder-7.jpg",
    description: "Tahu goreng dengan tepung kriuk, hot & crispy dengan sambal",
  },
  {
    id: 8,
    name: "Nasi Goreng Kampung",
    category: "Nasi Goreng",
    price: 30000,
    rating: 4.7,
    image: "/placeholder-8.jpg",
    description: "Nasi goreng dengan daging ayam, telur, kacang, sayuran, dan sambal pedas",
    isNew: true,
  },
  {
    id: 9,
    name: "Lumpia Ayam",
    category: "Camilan",
    price: 20000,
    rating: 4.6,
    image: "/placeholder-9.jpg",
    description: "Lumpia goreng isi ayam, sayuran, dan telur, per 5 buah",
    isNew: true,
  },
  {
    id: 10,
    name: "Martabak Terang Bulan",
    category: "Penutup",
    price: 22000,
    rating: 4.8,
    image: "/placeholder-10.jpg",
    description: "Martabak dengan isi gula, cokelat, telur, dan margarin, 1 porsi",
    isNew: true,
  },
  {
    id: 11,
    name: "Rendang Daging",
    category: "Daging",
    price: 45000,
    rating: 4.9,
    image: "/placeholder-11.jpg",
    description: "Rendang daging sapi dengan santan dan bumbu rempah yang mendalam",
    isNew: true,
  },
  {
    id: 12,
    name: "Ikan Bakar Medan",
    category: "Seafood",
    price: 50000,
    rating: 4.8,
    image: "/placeholder-12.jpg",
    description: "Ikan bakar utuh dengan bumbu kuning, sambal matah, dan nasi putih",
    isNew: true,
  },
];

export const categories = ["Semua", "Nasi Kuning", "Sup & Soto", "Bakso", "Sayuran", "Daging", "Gorengan", "Nasi Goreng", "Camilan", "Penutup", "Seafood"];
