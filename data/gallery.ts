// ---------------------------------------------------------------------------
// GALLERY — replace `image` values with real photographs of the shop.
// Keep `category` values consistent so the filter buttons keep working.
// ---------------------------------------------------------------------------

export type GalleryCategory =
  | "Shop"
  | "Ice Creams"
  | "Interior"
  | "Opening";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  image: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Shop", image: "/images/shopgallery.jpg", alt: "Heritage Ice Cream Parlour shop front (placeholder)" },
  { id: "g2", category: "Interior", image: "/images/interior.jpg", alt: "Shop interior seating (placeholder)" },
  { id: "g3", category: "Ice Creams", image: "/images/icecream.jpg", alt: "Assorted ice cream scoops (placeholder)" },
  { id: "g5", category: "Opening", image: "/images/opening.jpg", alt: "Grand opening moment (placeholder)" },
  { id: "g8", category: "Shop", image: "/images/shopgallery.jpg", alt: "Shop counter display (placeholder)" },
  { id: "g9", category: "Ice Creams", image: "/images/icecream1.jpg", alt: "Ice cream cone close-up (placeholder)" },
];

export const galleryCategories: (GalleryCategory | "All")[] = [
  "All",
  "Shop",
  "Ice Creams",
  "Interior",
  "Opening",
  
];
