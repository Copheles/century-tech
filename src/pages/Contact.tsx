import { useForm, type SubmitHandler } from 'react-hook-form'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
  Send,
  User,
} from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import {
  company,
  companyMapEmbedUrl,
  companyMapUrl,
  whatsappNumber,
} from '../data/company'

interface EnquiryFormValues {
  name: string
  company: string
  telephone: string
  message: string
}

function PopOnScroll({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
              },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
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
      <PageHero title="Contact Us" />

      <section className="content-section contact-page">
        <Container>
          {/* Direct Contact Cards - each pops in individually */}
          <div className="direct-contact-grid">
            <PopOnScroll delay={0}>
              <a className="direct-contact-card" href={company.telephoneHref}>
                <span className="contact-card-icon"><Phone size={22} /></span>
                <span>
                  <small>Telephone</small>
                  <strong>{company.telephone}</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>
            </PopOnScroll>
            <PopOnScroll delay={0.1}>
              <div className="direct-contact-card">
                <span className="contact-card-icon"><Printer size={22} /></span>
                <span>
                  <small>Fax</small>
                  <strong>{company.fax}</strong>
                </span>
              </div>
            </PopOnScroll>
            <PopOnScroll delay={0.2}>
              <a className="direct-contact-card" href={company.emails.sales.href}>
                <span className="contact-card-icon"><Mail size={22} /></span>
                <span>
                  <small>{company.emails.sales.label}</small>
                  <strong>{company.emails.sales.address}</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>
            </PopOnScroll>
            <PopOnScroll delay={0.3}>
              <a className="direct-contact-card" href={company.emails.humanResources.href}>
                <span className="contact-card-icon"><Mail size={22} /></span>
                <span>
                  <small>{company.emails.humanResources.label}</small>
                  <strong>{company.emails.humanResources.address}</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>
            </PopOnScroll>
          </div>

          {/* Enquiry Section */}
          <div className="contact-enquiry-layout">
            <PopOnScroll className="contact-enquiry-intro" delay={0}>
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
            </PopOnScroll>

            <form className="enquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <PopOnScroll className="enquiry-field" delay={0}>
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
              </PopOnScroll>

              <PopOnScroll className="enquiry-field" delay={0.1}>
                <label htmlFor="contact-company">
                  <Building2 size={15} /> Company
                </label>
                <input
                  id="contact-company"
                  placeholder="Company name (optional)"
                  autoComplete="organization"
                  {...register('company')}
                />
              </PopOnScroll>

              <PopOnScroll className="enquiry-field enquiry-field-full" delay={0.2}>
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
              </PopOnScroll>

              <PopOnScroll className="enquiry-field enquiry-field-full" delay={0.3}>
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
              </PopOnScroll>

              <PopOnScroll className="enquiry-form-actions enquiry-field-full" delay={0.4}>
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
              </PopOnScroll>
            </form>
          </div>

          {/* Office Section */}
          <PopOnScroll delay={0}>
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
          </PopOnScroll>
        </Container>
      </section>
    </>
  )
}

export default Contact
