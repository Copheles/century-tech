export interface ContactEnquiryPayload {
  name: string
  company: string
  telephone: string
  message: string
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export function isContactFormConfigured() {
  return Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim())
}

export async function submitContactEnquiry(values: ContactEnquiryPayload) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()

  if (!accessKey) {
    throw new Error('CONTACT_NOT_CONFIGURED')
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Website enquiry from ${values.name}`,
      name: values.name,
      company: values.company.trim() || 'Not provided',
      telephone: values.telephone,
      message: values.message,
      botcheck: '',
    }),
  })

  const result = (await response.json()) as { success?: boolean; message?: string }

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'SUBMIT_FAILED')
  }

  return result
}