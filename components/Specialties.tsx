import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WaveDivider from "@/components/WaveDivider";
import { specialties } from "@/data/products";

export default function Specialties() {
  return (
    <section className="relative bg-blush/40 pb-16 pt-4 md:pb-24">
      <WaveDivider fill="#FBD2DE" flip />
      <div className="container-page">
        <SectionHeading
          title="Our Specialties"
          subtitle="The treats our customers keep coming back for."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, i) => (
            <Reveal key={item.id} delayMs={(i % 3) * 80}>
              <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-scoop">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-cocoa">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa/75">
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
