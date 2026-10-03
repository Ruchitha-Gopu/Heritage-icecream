// ---------------------------------------------------------------------------
// REVIEWS
// IMPORTANT: The entries below are SAMPLE placeholders only, included to show
// how the review cards look. They are marked `isSample: true` and the UI
// displays a "Sample review" label whenever that flag is true. Before
// launch, replace these with genuine customer reviews (and remove the
// `isSample` flag, or set it to false, once a review is real).
// ---------------------------------------------------------------------------

export interface Review {
  id: string;
  customerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  image?: string;
  isSample: boolean;
}

export const reviews: Review[] = [
  {
    id: "r1",
    customerName: "Sample Customer",
    rating: 5,
    review:
      "Great taste, friendly service and a wonderful place to enjoy ice cream with family.",
    isSample: true,
  },
  {
    id: "r2",
    customerName: "Sample Customer",
    rating: 4,
    review:
      "Loved the falooda and the badam milk. A nice new spot in Cherukupalli.",
    isSample: true,
  },
  {
    id: "r3",
    customerName: "Sample Customer",
    rating: 5,
    review:
      "Clean shop, good variety of flavours, and the kids enjoyed it a lot.",
    isSample: true,
  },
];
