"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { galleryCategories, galleryImages, GalleryCategory } from "@/data/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter]
  );

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <section id="gallery" className="bg-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          title="Our Gallery"
          subtitle="A look at our shop, our treats and our happy customers. Placeholder images shown below — real shop photos coming soon."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === cat
                  ? "bg-berry text-cream"
                  : "bg-blush/40 text-cocoa/70 hover:bg-blush/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {filtered.map((img, i) => (
            <Reveal key={img.id} delayMs={(i % 8) * 40} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-cocoa/0 transition-colors group-hover:bg-cocoa/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-cocoa/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image preview"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-2xl text-cream hover:bg-cream/20"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-2xl text-cream hover:bg-cream/20 sm:left-6"
          >
            ‹
          </button>

          <div className="relative max-h-[80vh] w-full max-w-2xl">
            <Image
              src={active.image}
              alt={active.alt}
              width={900}
              height={900}
              className="mx-auto max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-cream/80">{active.category}</p>
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-2xl text-cream hover:bg-cream/20 sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
