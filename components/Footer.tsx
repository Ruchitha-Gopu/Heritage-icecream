import { siteConfig } from "@/data/siteConfig";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#offers", label: "Offers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#videos", label: "Videos" },
  { href: "#catering", label: "Catering" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa py-12 text-cream/85">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-semibold text-cream">
            <span aria-hidden="true">🍦</span> {siteConfig.businessName}
          </p>
          <p className="mt-2 font-display italic text-cream/70">
            &ldquo;{siteConfig.taglineAlt}&rdquo;
          </p>
        </div>

        <div>
          <p className="font-semibold text-cream">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-sunshine">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-cream">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>📍 {siteConfig.city}, Tenali Road</li>
            <li>📞 {siteConfig.phoneDisplay}</li>
            <li>👤 {siteConfig.contactPerson}</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-cream">Follow Us</p>
          <div className="mt-3 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20"
            >
              📷
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20"
            >
              📘
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20"
            >
              💬
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
        © 2026 {siteConfig.businessName}. All Rights Reserved.
      </div>
    </footer>
  );
}
