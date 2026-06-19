import { useForm, type SubmitHandler } from 'react-hook-form'
import {
  ArrowUpRight,
  Building2,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
  Send,
  User,
} from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import RevealSection from '../components/common/RevealSection'
import {
  company,
  companyMapEmbedUrl,
  companyMapUrl,
  whatsappUrl,
  whatsappNumber,
} from '../data/company'

interface EnquiryFormValues {
  name: string
  company: string
  telephone: string
  message: string
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>()

  const onSubmit: SubmitHandler<EnquiryFormValues> = (values) => {
    if (!whatsappNumber) return

    const enquiry = [
      `Hello ${company.name}, I would like to make an enquiry.`,
      '',
      `Name: ${values.name}`,
      `Company: ${values.company || 'Not provided'}`,
      `Telephone: ${values.telephone}`,
      '',
      `Message: ${values.message}`,
    ].join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your technology requirements."
        description="Call our team, connect through WhatsApp, or find our Singapore office below."
      />

      <RevealSection className="content-section contact-page">
        <Container>
          <div className="direct-contact-grid">
            <a className="direct-contact-card" href={company.telephoneHref}>
              <span className="contact-card-icon"><Phone size={22} /></span>
              <span>
                <small>Telephone</small>
                <strong>{company.telephone}</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>
            <div className="direct-contact-card">
              <span className="contact-card-icon"><Printer size={22} /></span>
              <span>
                <small>Fax</small>
                <strong>{company.fax}</strong>
              </span>
            </div>
            {whatsappUrl ? (
              <a className="direct-contact-card" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span className="contact-card-icon"><MessageCircle size={22} /></span>
                <span>
                  <small>WhatsApp</small>
                  <strong>Start a conversation</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <div className="direct-contact-card direct-contact-card-muted">
                <span className="contact-card-icon"><MessageCircle size={22} /></span>
                <span>
                  <small>WhatsApp</small>
                  <strong>Available after configuration</strong>
                </span>
              </div>
            )}
          </div>

          <div className="contact-enquiry-layout">
            <div className="contact-enquiry-intro">
              <span className="eyebrow">Send an enquiry</span>
              <h2>Tell us what you need help with.</h2>
              <p>
                Share a few details and we will prepare them as a WhatsApp
                message so you can contact our team directly.
              </p>
              <div className="enquiry-feature">
                <MessageCircle size={20} />
                <span>
                  <strong>Direct to our team</strong>
                  <small>No account or email form required.</small>
                </span>
              </div>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="enquiry-field">
                <label htmlFor="contact-name">
                  <User size={15} /> Your name
                </label>
                <input
                  id="contact-name"
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  {...register('name', { required: 'Please enter your name.' })}
                />
                {errors.name && <span className="field-error">{errors.name.message}</span>}
              </div>

              <div className="enquiry-field">
                <label htmlFor="contact-company">
                  <Building2 size={15} /> Company
                </label>
                <input
                  id="contact-company"
                  placeholder="Company name (optional)"
                  autoComplete="organization"
                  {...register('company')}
                />
              </div>

              <div className="enquiry-field enquiry-field-full">
                <label htmlFor="contact-telephone">
                  <Phone size={15} /> Telephone
                </label>
                <input
                  id="contact-telephone"
                  type="tel"
                  placeholder="+65"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.telephone)}
                  {...register('telephone', {
                    required: 'Please enter a telephone number.',
                    minLength: {
                      value: 7,
                      message: 'Please enter a valid telephone number.',
                    },
                  })}
                />
                {errors.telephone && (
                  <span className="field-error">{errors.telephone.message}</span>
                )}
              </div>

              <div className="enquiry-field enquiry-field-full">
                <label htmlFor="contact-message">
                  <MessageCircle size={15} /> How can we help?
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us about your requirements."
                  aria-invalid={Boolean(errors.message)}
                  {...register('message', {
                    required: 'Please tell us how we can help.',
                    minLength: {
                      value: 10,
                      message: 'Please add a little more detail.',
                    },
                  })}
                />
                {errors.message && (
                  <span className="field-error">{errors.message.message}</span>
                )}
              </div>

              <div className="enquiry-form-actions enquiry-field-full">
                <button
                  className="button button-primary"
                  type="submit"
                  disabled={!whatsappNumber}
                >
                  Continue on WhatsApp <Send size={17} />
                </button>
                <small>
                  Your message is only shared when you confirm it in WhatsApp.
                </small>
              </div>
            </form>
          </div>

          <div className="office-layout">
            <div className="office-details">
              <span className="eyebrow">Singapore office</span>
              <h2>Visit Century Technology.</h2>
              <p>{company.address}</p>
              <a className="button button-primary" href={companyMapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} /> Get directions
              </a>
              <div className="contact-note">
                <strong>Planning a visit?</strong>
                <p>Call our team before arriving so we can make sure the right person is available to meet you.</p>
              </div>
            </div>
            <div className="office-map">
              <iframe
                src={companyMapEmbedUrl}
                title={`${company.name} office location`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </RevealSection>
    </>
  )
}

export default Contact
