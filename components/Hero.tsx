import Image from "next/image";
import {
  buildTelUrl,
  buildWhatsAppUrl,
  siteConfig,
  whatsappMessages,
} from "@/data/siteConfig";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-10 md:pt-16">
      {/* soft decorative scoop shapes */}
      <div className="pointer-events-none absolute -left-16 top-24 h-40 w-40 rounded-full bg-blush/60 blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-sunshine/40 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 pb-16 md:grid-cols-2 md:pb-24">
        <div>
          <p className="inline-block rounded-full bg-blush/70 px-4 py-1.5 text-sm font-bold text-berry-dark">
            Now Open in {siteConfig.city}
          </p>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-cocoa sm:text-5xl lg:text-6xl">
            {siteConfig.businessName}
          </h1>

          <p className="mt-4 font-display text-xl italic text-berry-dark sm:text-2xl">
            {siteConfig.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-cocoa/80 sm:text-lg">
            Enjoy delicious ice creams, special desserts, refreshing faloodas,
            badam milk and much more at Heritage Ice Cream Parlour,
            Cherukupalli.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-berry px-6 py-3.5 text-sm font-bold text-cream shadow-scoop transition-transform hover:-translate-y-0.5 hover:bg-berry-dark sm:text-base"
            >
              View Menu
            </a>
            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5 hover:bg-cocoa-light sm:text-base"
            >
              Get Directions
            </a>
            <a
              href={buildTelUrl()}
              className="rounded-full border-2 border-cocoa/20 bg-white px-6 py-3.5 text-sm font-bold text-cocoa transition-transform hover:-translate-y-0.5 hover:border-berry hover:text-berry sm:text-base"
            >
              📞 Call Now
            </a>
            <a
              href={buildWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cocoa/20 bg-white px-6 py-3.5 text-sm font-bold text-cocoa transition-transform hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 sm:text-base"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-scoop shadow-scoop">
            <Image
  src="/images/home.png"
  alt="Heritage Ice Cream Parlour"
  fill
  priority
  sizes="(max-width: 768px) 90vw, 480px"
  className="object-cover"
/>
          </div>
          <div className="absolute -bottom-5 -left-5 animate-wiggle rounded-2xl bg-white px-4 py-3 shadow-scoop sm:-left-8">
            <p className="font-display text-sm font-semibold text-cocoa sm:text-base">
              🍨 Ice cream products from{" "}
              <span className="text-berry">₹10 onwards</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
