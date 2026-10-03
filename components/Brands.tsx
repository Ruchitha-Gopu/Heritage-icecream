import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { brands } from "@/data/products";

export default function Brands() {
  return (
    <section className="bg-blush/40 pb-16 md:pb-24">
      <div className="container-page">
        <SectionHeading
          title="Our Available Ice Cream Brands"
          subtitle="We offer a selection of popular branded ice cream products to give our customers more choices and delicious flavors."
        />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="rounded-2xl border-2 border-cocoa/10 bg-white px-6 py-5 text-center shadow-sm"
              >
                <p className="font-display text-lg font-semibold text-cocoa">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-cocoa/60">
          Heritage Ice Cream Parlour sells these branded products in-store;
          brand names and logos belong to their respective owners.
        </p>
      </div>
    </section>
  );
}
