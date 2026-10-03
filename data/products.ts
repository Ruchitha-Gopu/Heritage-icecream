// ---------------------------------------------------------------------------
// PRODUCTS — menu items shown in the Menu section.
// Replace `image` with real photos and `price` with actual prices whenever
// they are finalised. Prices are placeholders ("₹XX") until then.
// ---------------------------------------------------------------------------

export type ProductCategory =
  | "Ice Creams"
  | "Special Desserts"
  | "Ice Cream Products";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
}

export const products: Product[] = [
  // -------------------- Ice Creams (flavours) --------------------
  {
    id: "ic-vanilla",
    name: "Vanilla",
    category: "Ice Creams",
    description: "Classic, creamy vanilla — a family favourite.",
    image: "/images/Vanillaicecream.jpg",
  },
  {
    id: "ic-chocolate",
    name: "Chocolate",
    category: "Ice Creams",
    description: "Rich and indulgent chocolate ice cream.",
    image: "/images/chocolate.jpg",
  },
  {
    id: "ic-strawberry",
    name: "Strawberry",
    category: "Ice Creams",
    description: "Fruity and refreshing strawberry flavour.",
    image: "/images/Strawberry.jpg",
  },
  {
    id: "ic-butterscotch",
    name: "Butterscotch",
    category: "Ice Creams",
    description: "Crunchy caramel bits in every scoop.",
    image: "/images/butterscotch.jpg",
  },
  {
    id: "ic-pista",
    name: "Pista",
    category: "Ice Creams",
    description: "Traditional pistachio flavour, nutty and smooth.",
    image: "/images/pista.jpg",
  },
  {
    id: "ic-mango",
    name: "Mango",
    category: "Ice Creams",
    description: "Seasonal favourite made with real mango flavour.",
    image: "/images/mango.jpg",
  },


  // -------------------- Special Desserts --------------------
  {
    id: "sd-dryfruit",
    name: "Dry Fruit Ice Cream",
    category: "Special Desserts",
    description:
      "Delicious and creamy ice cream made with rich dry-fruit flavours.",
    image: "/images/dryfruit.jpg",
  },
  {
    id: "sd-gulabjamun",
    name: "Gulab Jamun with Ice Cream",
    category: "Special Desserts",
    description:
      "A delicious combination of warm Gulab Jamun and creamy ice cream.",
    image: "/images/Gulabjamunam.jpg",
  },
  {
    id: "sd-badammilk-ic",
    name: "Badam Milk with Ice Cream",
    category: "Special Desserts",
    description:
      "A refreshing combination of creamy ice cream and delicious badam milk.",
    image: "/images/Almond.jpg",
  },
  {
    id: "sd-falooda",
    name: "Special Falooda",
    category: "Special Desserts",
    description:
      "A rich and refreshing falooda made with delicious ingredients and ice cream.",
    image: "/images/faloodaice.jpg",
  },

  // -------------------- Ice Cream Products (formats) --------------------
  {
    id: "pf-cups",
    name: "Cups",
    category: "Ice Cream Products",
    description: "Single-serve ice cream cups, ready to enjoy.",
    image: "/images/cupicecreams.jpg",
  },
  {
    id: "pf-cones",
    name: "Cones",
    category: "Ice Cream Products",
    description: "Classic crunchy cones with your favourite flavour.",
    image: "/images/coneice.jpg",
  },
  {
    id: "pf-chocobars",
    name: "Chocobars",
    category: "Ice Cream Products",
    description: "Chocolate-coated bars, a favourite for all ages.",
  
    image: "/images/chocobar.jpg",
  },
  {
    id: "pf-familypacks",
    name: "Family Packs",
    category: "Ice Cream Products",
    description: "Take-home packs, perfect for sharing at home.",
    image: "/images/familypack.jpg",
  },
];

export const specialties = [
  {
    id: "sp-apsara",
    name: "Apsara Badam Milk",
    description:
      "Enjoy the famous Bandar-style Apsara Badam Milk, rich, refreshing and delicious.",
    image: "/images/badammilk.jpg",
  },
  {
    id: "sp-dryfruit",
    name: "Dry Fruit Ice Creams",
    description:
      "Delicious and creamy ice creams made with rich dry-fruit flavours.",
    image: "/images/dryfruit.jpg",
  },
  {
    id: "sp-gulabjamun",
    name: "Gulab Jamun with Ice Cream",
    description:
      "A delicious combination of warm Gulab Jamun and creamy ice cream.",
    image: "/images/Gulabjamunam.jpg",
  },
  {
    id: "sp-badammilk",
    name: "Badam Milk with Ice Cream",
    description:
      "A refreshing combination of creamy ice cream and delicious badam milk.",
    image: "/images/Almond.jpg",
  },
  {
    id: "sp-falooda",
    name: "Special Falooda",
    description:
      "A rich and refreshing falooda made with delicious ingredients and ice cream.",
    image: "/images/faloodaice.jpg",
  },
];

export const brands = [
  {
    id: "brand-heritage",
    name: "Heritage",
  },
  {
    id: "brand-motherdairy",
    name: "Mother Dairy",
  },
  {
    id: "brand-br",
    name: "Baskin-Robbins (B.R.)",
  },
];
