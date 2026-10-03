import { buildWhatsAppUrl, whatsappMessages } from "@/data/siteConfig";

interface WhatsAppButtonProps {
  floating?: boolean;
}

export default function WhatsAppButton({ floating = false }: WhatsAppButtonProps) {
  if (!floating) return null;

  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-scoop transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.65 4.53 1.78 6.4L4 29l7.78-1.74A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.63 28 15S22.63 3 16.004 3Zm0 21.8c-1.99 0-3.86-.55-5.46-1.5l-.39-.23-4.15.93.93-4.03-.25-.4A9.77 9.77 0 0 1 5.2 15c0-5.96 4.85-10.8 10.8-10.8S26.8 9.04 26.8 15 21.96 24.8 16.004 24.8Zm5.63-8.1c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.15-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.53-.92-.82-1.53-1.83-1.72-2.14-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.39-.02-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.53.08-.81.39-.28.31-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.29 5.22 4.61.73.31 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.35Z" />
      </svg>
    </a>
  );
}
