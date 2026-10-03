"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";

const links = [
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur shadow-[0_4px_20px_-8px_rgba(62,36,23,0.25)]"
          : "bg-cream/70 backdrop-blur"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-semibold text-cocoa md:text-xl"
        >
          <span aria-hidden="true" className="text-2xl">
            🍦
          </span>
          <span>{siteConfig.businessName}</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-cocoa/80 transition-colors hover:text-berry"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-berry px-5 py-2.5 text-sm font-bold text-cream shadow-scoop transition-transform hover:-translate-y-0.5 hover:bg-berry-dark"
          >
            Order / Enquire Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-cocoa/15 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 bg-cocoa transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-cocoa transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-cocoa transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream shadow-lg transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-cocoa/85 hover:bg-blush/50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-berry px-5 py-3 text-center text-base font-bold text-cream"
            >
              Order / Enquire Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
