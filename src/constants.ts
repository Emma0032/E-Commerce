import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Essential Heavyweight Tee",
    price: 45,
    originalPrice: 60,
    description: "A premium, heavyweight cotton tee designed for a structured fit and long-lasting comfort. Features a reinforced collar and double-stitched seams.",
    images: [
      "https://picsum.photos/seed/tee1/800/1000",
      "https://picsum.photos/seed/tee2/800/1000",
      "https://picsum.photos/seed/tee3/800/1000"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Off-White", hex: "#F9F9F9" },
      { name: "Slate", hex: "#4B5563" },
      { name: "Black", hex: "#000000" }
    ],
    stock: 12,
    rating: 4.8,
    reviewsCount: 124,
    isBestseller: true
  },
  {
    id: "2",
    name: "Minimalist Chino Pant",
    price: 95,
    description: "Tailored for versatility. These chinos feature a slim-straight cut and a touch of stretch for all-day movement.",
    images: [
      "https://picsum.photos/seed/chino1/800/1000",
      "https://picsum.photos/seed/chino2/800/1000"
    ],
    category: "Bottoms",
    sizes: ["30", "32", "34", "36"],
    colors: [
      { name: "Beige", hex: "#D2B48C" },
      { name: "Navy", hex: "#000080" }
    ],
    stock: 5,
    rating: 4.9,
    reviewsCount: 89,
    isBestseller: true
  },
  {
    id: "3",
    name: "Merino Wool Sweater",
    price: 120,
    originalPrice: 150,
    description: "Ultra-soft merino wool that regulates temperature. A timeless layer for any season.",
    images: [
      "https://picsum.photos/seed/sweater1/800/1000",
      "https://picsum.photos/seed/sweater2/800/1000"
    ],
    category: "Knitwear",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Oatmeal", hex: "#EAE0D5" }
    ],
    stock: 8,
    rating: 4.7,
    reviewsCount: 56,
    isNew: true
  },
  {
    id: "4",
    name: "Classic Oxford Shirt",
    price: 75,
    description: "The foundation of a modern wardrobe. Crisp cotton oxford with a perfect button-down collar.",
    images: [
      "https://picsum.photos/seed/shirt1/800/1000",
      "https://picsum.photos/seed/shirt2/800/1000"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "White", hex: "#FFFFFF" }
    ],
    stock: 20,
    rating: 4.6,
    reviewsCount: 210
  }
];
