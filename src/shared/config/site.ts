const fallbackUrl = "https://igadgetpasdaran.ir";

export const siteConfig = {
  name: "iGadget Pasdaran",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  phoneHref: "tel:+982100000000",
  whatsappHref: "https://wa.me/989120000000",
  telegramHref: "https://t.me/igadget_placeholder",
} as const;
