export const company = {
  name: 'Century Technology',
  legalName: 'Century Technology Pte. Ltd.',
  tagline: 'Your Leading Partner in IT Communications',
  address:
    '71 Toh Guan Road East, TCH Tech Centre #05-01, Singapore 608598',
  telephone: '+65 6355 5688',
  telephoneHref: 'tel:+6563555688',
  fax: '+65 6356 6576',
  emails: {
    sales: {
      label: 'Sales',
      address: 'sales@centurytec.com',
      href: 'mailto:sales@centurytec.com',
    },
    humanResources: {
      label: 'Human Resource & Administration',
      address: 'hrdept@centurytec.com',
      href: 'mailto:hrdept@centurytec.com',
    },
  },
}

export const companyMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.address,
)}`

export const companyMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  company.address,
)}&output=embed`

export const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') || '6596777322'

const defaultWhatsAppMessage = `Hello ${company.name}, I would like to learn more about your solutions.`

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

/** Mobile opens the app via wa.me; desktop opens WhatsApp Web and skips the api.whatsapp.com landing page. */
export function getWhatsAppSendUrl(message: string = defaultWhatsAppMessage) {
  if (!whatsappNumber) return ''

  const text = encodeURIComponent(message)

  if (isMobileDevice()) {
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }

  return `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`
}

export const whatsappUrl = getWhatsAppSendUrl(defaultWhatsAppMessage)
