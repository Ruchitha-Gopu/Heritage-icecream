import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  buildTelUrl,
  buildWhatsAppUrl,
  siteConfig,
  whatsappMessages,
} from "@/data/siteConfig";

export default function Location() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading title="📍 Visit Heritage Ice Cream Parlour" />

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-scoop">
              <iframe
                title="Heritage Ice Cream Parlour location on Google Maps"
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full sm:h-[400px]"
              />
            </div>
            
          </Reveal>

          <Reveal delayMs={100}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-blush/30 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-cocoa">
                {siteConfig.businessName}
              </h3>
              <p className="mt-2 text-cocoa/80">{siteConfig.addressLine}</p>
              <p className="mt-1 font-semibold text-cocoa/80">
                Phone: {siteConfig.phoneDisplay}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cocoa px-5 py-3 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
                >
                  Get Directions
                </a>
                <a
                  href={buildTelUrl()}
                  className="rounded-full bg-berry px-5 py-3 text-sm font-bold text-cream shadow-scoop transition-transform hover:-translate-y-0.5 hover:bg-berry-dark"
                >
                  📞 Call Now
                </a>
                <a
                  href={buildWhatsAppUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-cocoa/20 bg-white px-5 py-3 text-sm font-bold text-cocoa transition-transform hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
