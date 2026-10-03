import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import {
  buildTelUrl,
  buildWhatsAppUrl,
  siteConfig,
  whatsappMessages,
} from "@/data/siteConfig";
import { grandOpeningOffer } from "@/data/offers";

export default function Offer() {
  return (
    <section id="offers" className="relative bg-cocoa py-16 text-cream md:py-24">
      <WaveDivider fill="#3E2417" />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-cream/15 bg-cocoa-light/40 p-6 text-center shadow-scoop sm:p-10">
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              🎉 {grandOpeningOffer.heading} 🎉
            </p>
            <p className="mx-auto mt-4 max-w-xl text-cream/85">
              {grandOpeningOffer.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-cream/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-sunshine">
                  How to Participate
                </p>
                <p className="mt-2 text-sm text-cream/90">
                  {grandOpeningOffer.howToParticipate}
                </p>
              </div>
              <div className="rounded-2xl bg-cream/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-sunshine">
                  {grandOpeningOffer.prizeLabel}
                </p>
                <p className="mt-2 text-sm text-cream/90">
                  🎁 {grandOpeningOffer.prize}
                </p>
              </div>
              <div className="rounded-2xl bg-cream/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-sunshine">
                  {grandOpeningOffer.drawDateLabel}
                </p>
                <p className="mt-2 text-sm text-cream/90">
                  {grandOpeningOffer.drawDate}
                  <br />
                  {grandOpeningOffer.drawDateNote}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={buildWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-berry px-6 py-3 text-sm font-bold text-cream shadow-scoop transition-transform hover:-translate-y-0.5 hover:bg-berry-dark sm:text-base"
              >
                Participate Now
              </a>
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-cream/40 px-6 py-3 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5 hover:border-sunshine hover:text-sunshine sm:text-base"
              >
                Visit Our Store
              </a>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-cream/60">
              {grandOpeningOffer.disclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
