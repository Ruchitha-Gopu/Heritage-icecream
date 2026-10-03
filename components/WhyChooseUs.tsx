import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { whyChooseUs } from "@/data/offers";

export default function WhyChooseUs() {
  return (
    <section className="bg-blush/30 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading title="Why Choose Us" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 60}>
              <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm">
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-cocoa">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
