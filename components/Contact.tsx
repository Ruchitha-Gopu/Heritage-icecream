"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  buildTelUrl,
  buildWhatsAppUrl,
  siteConfig,
  whatsappMessages,
} from "@/data/siteConfig";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // NOTE FOR THE BUSINESS OWNER / DEVELOPER:
    // This enquiry form currently only shows a confirmation message — it
    // does not send an email or SMS yet. To actually receive enquiries,
    // connect it to a backend (a Next.js API route that emails/SMSes the
    // shop, or a form service such as Formspree / Google Forms).
    setSent(true);
  };

  return (
    <section id="contact" className="bg-blush/30 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading title="Contact Us" />

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white p-6 shadow-scoop sm:p-8">
              <h3 className="font-display text-xl font-semibold text-cocoa">
                {siteConfig.businessName}
              </h3>
              <ul className="mt-4 space-y-3 text-cocoa/80">
                <li>📍 {siteConfig.addressLine}</li>
                <li>📞 {siteConfig.phoneDisplay}</li>
                <li>👤 Contact Person: {siteConfig.contactPerson}</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
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
                  className="rounded-full border-2 border-cocoa/15 px-5 py-3 text-sm font-bold text-cocoa transition-transform hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-cocoa/15 px-5 py-3 text-sm font-bold text-cocoa transition-transform hover:-translate-y-0.5 hover:border-cocoa"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="rounded-3xl bg-white p-6 shadow-scoop sm:p-8">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="text-4xl">🍦</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-cocoa">
                    Thanks for reaching out!
                  </h3>
                  <p className="mt-2 text-sm text-cocoa/70">
                    We&apos;ll get back to you soon. For a faster response,
                    call or WhatsApp us directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-5 rounded-full bg-cocoa px-5 py-2.5 text-sm font-bold text-cream"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-cocoa">
                      Name
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa placeholder:text-cocoa/40 focus:border-berry"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-1.5 block text-sm font-semibold text-cocoa">
                      Phone
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa placeholder:text-cocoa/40 focus:border-berry"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold text-cocoa">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa placeholder:text-cocoa/40 focus:border-berry"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-berry px-6 py-3.5 text-sm font-bold text-cream shadow-scoop transition-transform hover:-translate-y-0.5 hover:bg-berry-dark"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
