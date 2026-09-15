import { useForm, type SubmitHandler } from 'react-hook-form'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
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
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import FaqSection from '../components/sections/FaqSection'
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

const motionEase = [0.22, 1, 0.36, 1] as const
const viewportOnce = { once: true, amount: 0.2 } as const

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: motionEase },
  },
}

const contactChannels = [
  {
    icon: Phone,
    label: 'Telephone',
    value: company.telephone,
    href: company.telephoneHref,
  },
  {
    icon: Printer,
    label: 'Fax',
    value: company.fax,
  },
  {
    icon: Mail,
    label: company.emails.sales.label,
    value: company.emails.sales.address,
    href: company.emails.sales.href,
  },
  {
    icon: Mail,
    label: company.emails.humanResources.label,
    value: company.emails.humanResources.address,
    href: company.emails.humanResources.href,
  },
]

function Contact() {
  const reduceMotion = useReducedMotion()
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
    <div className="contact-page">
      <PageHero title="Contact Us" />

      <RevealSection className="content-section contact-main-section">
        <Container className="contact-split-layout">
          <motion.div
            className="contact-split-reach"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="Get in touch"
                title="Reach our team."
                description="Call, email, or send an enquiry. We are ready to support your structured cabling and ELV requirements."
              />
            </motion.div>

            <div className="contact-channels">
              {contactChannels.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="contact-channel-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.9} />
                    </span>
                    <span className="contact-channel-copy">
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                  </>
                )

                return href ? (
                  <motion.a
                    className="contact-channel"
                    key={label}
                    href={href}
                    variants={fadeUp}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div className="contact-channel" key={label} variants={fadeUp}>
                    {content}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="contact-split-enquiry"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="Send an enquiry"
                title="Tell us what you need."
                description="Share a few details and we will prepare them as a WhatsApp message so you can contact our team directly."
              />
            </motion.div>

            <div className="enquiry-card">
              <motion.form
                className="enquiry-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                variants={staggerContainer}
              >
              <motion.div className="enquiry-field" variants={fadeUp}>
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
              </motion.div>

              <motion.div className="enquiry-field" variants={fadeUp}>
                <label htmlFor="contact-company">
                  <Building2 size={15} /> Company
                </label>
                <input
                  id="contact-company"
                  placeholder="Company name (optional)"
                  autoComplete="organization"
                  {...register('company')}
                />
              </motion.div>

              <motion.div className="enquiry-field enquiry-field-full" variants={fadeUp}>
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
              </motion.div>

              <motion.div className="enquiry-field enquiry-field-full" variants={fadeUp}>
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
              </motion.div>

              <motion.div className="enquiry-form-actions enquiry-field-full" variants={fadeUp}>
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
              </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-tint contact-visit-section">
        <Container>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionTitle
              centered
              eyebrow="Singapore office"
              title="Visit Century Technology."
              description={company.address}
            />
          </motion.div>

          <motion.div
            className="office-actions"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <a
              className="button button-primary"
              href={companyMapUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} /> Get directions
            </a>
            <p>Call before visiting so we can arrange the right person to meet you.</p>
          </motion.div>

          <motion.div
            className="office-map"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <iframe
              src={companyMapEmbedUrl}
              title={`${company.name} office location`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </Container>
      </RevealSection>

      <FaqSection />
    </div>
  )
}

export default Contact
