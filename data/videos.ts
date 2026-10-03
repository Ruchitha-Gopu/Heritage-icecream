// ---------------------------------------------------------------------------
// VIDEOS — Shop Opening & Moments section.
// Local videos are stored inside the public/videos folder.
// Example:
// public/videos/grand-opening.mp4
// ---------------------------------------------------------------------------

export interface ShopVideo {
  id: string;
  title: string;
  description: string;
  video: string;
  thumbnail?: string;
}

export const videos: ShopVideo[] = [
  {
    id: "v1",
    title: "Heritage Ice Cream Parlour Grand Opening",
    description:
      "Watch moments from the grand opening of Heritage Ice Cream Parlour.",
    video: "/videos.mp4",
    thumbnail: "/images/video-opening.jpg",
  },

];