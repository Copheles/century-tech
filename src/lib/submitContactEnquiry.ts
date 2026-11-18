import emailjs from '@emailjs/browser'

export interface ContactEnquiryPayload {
  name: string
  company: string
  telephone: string
  message: string
}

function getEmailJsConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? '',
  }
}

export function isContactFormConfigured() {
  const { serviceId, templateId, publicKey } = getEmailJsConfig()

  return Boolean(serviceId && templateId && publicKey)
}

export async function submitContactEnquiry(values: ContactEnquiryPayload) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig()

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('CONTACT_NOT_CONFIGURED')
  }

  const result = await emailjs.send(
    serviceId,
    templateId,
    {
      subject: `Website enquiry from ${values.name}`,
      name: values.name,
      company: values.company.trim() || 'Not provided',
      telephone: values.telephone,
      message: values.message,
    },
    { publicKey },
  )

  if (result.status !== 200) {
    throw new Error('SUBMIT_FAILED')
  }

  return result
}