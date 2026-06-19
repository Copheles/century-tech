export const company = {
  name: 'Century Technology',
  legalName: 'Century Technology Pte. Ltd.',
  tagline: 'Your Leading Partner in IT Communications',
  address:
    '71 Toh Guan Road East, TCH Tech Centre #05-01, Singapore 608598',
  telephone: '+65 6355 5688',
  telephoneHref: 'tel:+6563555688',
  fax: '+65 6356 6576',
}

export const companyMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.address,
)}`

export const companyMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  company.address,
)}&output=embed`

export const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') || ''

export const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello ${company.name}, I would like to learn more about your solutions.`,
    )}`
  : ''
