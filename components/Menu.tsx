"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { products, ProductCategory } from "@/data/products";

const categories: ProductCategory[] = [
  "Ice Creams",
  "Special Desserts",
  "Ice Cream Products",
];

export default function Menu() {
  const [active, setActive] = useState<ProductCategory>("Ice Creams");
  const items = products.filter((p) => p.category === active);

  return (
    <section id="menu" className="bg-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          title="Our Menu"
          subtitle="Prices shown below are placeholders and will be updated with actual pricing. Ice cream products are available from ₹10 onwards."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:text-base ${
                active === cat
                  ? "bg-berry text-cream shadow-scoop"
                  : "bg-white text-cocoa/70 hover:bg-blush/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.id} delayMs={(i % 4) * 70}>
              <article className="h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-cocoa/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-sunshine px-3 py-1 text-xs font-bold text-cocoa shadow">
                    {item.price}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-cocoa">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cocoa/70">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
