"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/siteConfig";

export default function QRSection() {
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(
    siteConfig.websiteUrl
  )}`;

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: siteConfig.businessName,
          text: siteConfig.tagline,
          url: siteConfig.websiteUrl,
        });
      } catch {
        // user cancelled share — no action needed
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(siteConfig.websiteUrl);
      alert("Website link copied to clipboard!");
    }
  };

  return (
    <section className="bg-sunshine/25 py-14 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] bg-white p-6 text-center shadow-scoop sm:flex-row sm:text-left md:p-10">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border-4 border-cream shadow-sm sm:h-48 sm:w-48">
              <Image
                src={qrImageUrl}
                alt="QR code linking to the Heritage Ice Cream Parlour website"
                fill
                sizes="200px"
                className="object-contain p-2"
                unoptimized
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-cocoa sm:text-3xl">
                Scan &amp; Explore Heritage 🍦
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cocoa/75 sm:text-base">
                Scan the QR code with your phone camera and explore Heritage
                Ice Cream Parlour online.
              </p>
              <button
                type="button"
                onClick={handleShare}
                className="mt-4 rounded-full bg-cocoa px-5 py-2.5 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
              >
                Share Our Website
              </button>
              <p className="mt-3 text-xs text-cocoa/50">
                Note: the QR code above points to{" "}
                <code className="rounded bg-cream px-1.5 py-0.5">
                  {siteConfig.websiteUrl}
                </code>{" "}
                — update <code className="rounded bg-cream px-1.5 py-0.5">websiteUrl</code>{" "}
                in <code className="rounded bg-cream px-1.5 py-0.5">data/siteConfig.ts</code>{" "}
                once the site is deployed.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
