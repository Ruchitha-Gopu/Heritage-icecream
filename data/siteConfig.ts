// ---------------------------------------------------------------------------
// SITE CONFIG — edit this file to update business details across the site.
// ---------------------------------------------------------------------------

export const siteConfig = {
  businessName: "Heritage Ice Cream Parlour",
  tagline: "A New Destination for Delicious Ice Creams",
  taglineAlt: "A New Address for Great Taste",
  description:
    "Visit Heritage Ice Cream Parlour in Cherukupalli for delicious ice creams, dry fruit ice creams, falooda, badam milk, Gulab Jamun with Ice Cream and more.",

  // Contact
  contactPerson: "Chandra Sekhar Reddy",
  phoneDisplay: "99853 41226",
  phoneTel: "+919985341226", // used for tel: links
  whatsappNumber: "919985341226", // used for wa.me links (no + or spaces)

  // Address
  addressLine: "Opposite Godavari Andhra Cooperative Bank, Tenali Road, Cherukupalli",
  city: "Cherukupalli",

  // TODO: Replace with your exact Google Maps share link.
  // Open Google Maps -> search your shop -> Share -> Embed a map -> copy the src URL here.
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Godavari+Andhra+Cooperative+Bank+Tenali+Road+Cherukupalli&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Godavari+Andhra+Cooperative+Bank+Tenali+Road+Cherukupalli",

  // TODO: Replace with the final deployed website URL once known.
  websiteUrl: "https://YOUR_WEBSITE_URL",

  // TODO: Replace with your real social profile links.
  social: {
    instagram: "https://instagram.com/YOUR_INSTAGRAM_HANDLE",
    facebook: "https://facebook.com/YOUR_FACEBOOK_PAGE",
  },

  // Opening hours are not confirmed yet — placeholder only.
  openingHours: "Timings coming soon — please call to confirm",
};

export const whatsappMessages = {
  general:
    "Hello Heritage Ice Cream Parlour, I would like to know more about your ice creams and offers.",
  bulkOrder:
    "Hello Heritage Ice Cream Parlour, I am interested in placing a bulk ice cream order for an event.",
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export function buildTelUrl() {
  return `tel:${siteConfig.phoneTel}`;
}
