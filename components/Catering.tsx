import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  buildTelUrl,
  buildWhatsAppUrl,
  whatsappMessages,
} from "@/data/siteConfig";
import { catering } from "@/data/offers";

export default function Catering() {
  return (
    <section id="catering" className="bg-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading title={`🍨 ${catering.heading}`} subtitle={catering.intro} />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {catering.services.map((service, i) => (
            <Reveal key={service.label} delayMs={i * 60}>
              <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-blush/30 p-5 text-center">
                <span className="text-3xl">{service.emoji}</span>
                <p className="text-sm font-semibold text-cocoa">
                  {service.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-cocoa px-6 py-8 text-center text-cream sm:px-10">
            <p className="leading-relaxed">{catering.note}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={buildTelUrl()}
                className="rounded-full bg-berry px-6 py-3 text-sm font-bold text-cream shadow-scoop transition-transform hover:-translate-y-0.5 hover:bg-berry-dark sm:text-base"
              >
                📞 Call for Bulk Orders
              </a>
              <a
                href={buildWhatsAppUrl(whatsappMessages.bulkOrder)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-cream/40 px-6 py-3 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5 hover:border-sunshine hover:text-sunshine sm:text-base"
              >
                💬 WhatsApp for Bulk Orders
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
