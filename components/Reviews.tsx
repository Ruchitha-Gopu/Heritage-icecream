"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { reviews } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="text-sunshine-dark" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="text-cocoa/20">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const current = reviews[index];

  return (
    <section id="reviews" className="bg-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          title="⭐ What Our Customers Say"
          subtitle="Sample reviews shown below for demonstration. Genuine customer reviews will be added here as they come in."
        />

        <Reveal>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl bg-blush/30 p-6 text-center shadow-sm sm:p-10">
              {current.isSample && (
                <span className="mb-3 inline-block rounded-full bg-cocoa/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cocoa/60">
                  Sample review
                </span>
              )}
              <div className="flex justify-center text-2xl">
                <Stars rating={current.rating} />
              </div>
              <p className="mt-4 font-display text-lg italic text-cocoa sm:text-xl">
                &ldquo;{current.review}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-cocoa/70">
                — {current.customerName}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-cocoa shadow hover:bg-blush/40"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {reviews.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    aria-label={`Show review ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      i === index ? "bg-berry" : "bg-cocoa/20"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-cocoa shadow hover:bg-blush/40"
              >
                ›
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
