import { useState } from 'react'
import { CheckCircle2, ChevronDown, Image as ImageIcon, MessageCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import { productWhatsAppUrl, products } from '../data/products'
import type { Product } from '../data/products'

const motionEase = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: motionEase },
  },
}

function ProductPhoto({ src, alt }: { src: string; alt: string }) {
  const [missing, setMissing] = useState(false)

  return (
    <div className={`product-photo${missing ? ' is-empty' : ''}`}>
      {missing ? (
        <span className="product-photo-empty">
          <ImageIcon size={28} strokeWidth={1.6} aria-hidden="true" />
          Photo coming soon
        </span>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />
      )}
    </div>
  )
}

function SpecList({ items }: { items: string[] }) {
  return (
    <ul className="product-spec-grid">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ProductRow({ product, index }: { product: Product; index: number }) {
  const reduceMotion = useReducedMotion()
  const [specsOpen, setSpecsOpen] = useState(false)
  const imageOnLeft = index % 2 === 0
  const ready = Boolean(product.title && product.description)
  const enquiryName =
    product.title && product.model ? `${product.title} (${product.model})` : product.title
  const whatsappHref = enquiryName ? productWhatsAppUrl(enquiryName) : ''
  const photoFrom = imageOnLeft ? -48 : 48
  const copyFrom = -photoFrom
  const highlights = product.highlights?.length
    ? product.highlights
    : (product.features ?? []).slice(0, 4)
  const moreSpecs = (product.features ?? []).filter((feature) => !highlights.includes(feature))
  const specsId = `${product.id}-specs`

  return (
    <article className="product">
      <div className={`product-intro${imageOnLeft ? '' : ' product-intro-reverse'}`}>
        <motion.div
          className="product-photo-wrap"
          initial={reduceMotion ? false : { opacity: 0, x: photoFrom }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: motionEase }}
        >
          <ProductPhoto src={product.image} alt={product.imageAlt} />
        </motion.div>

        <motion.div
          className="product-copy"
          initial={reduceMotion ? false : { opacity: 0, x: copyFrom }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.08, ease: motionEase }}
        >
          {ready ? (
            <>
              {product.model ? <p className="product-model">{product.model}</p> : null}
              <h2>{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">
                <span className="product-price-label">Price</span>
                <span className="product-price-value">{product.price ?? 'Price on request'}</span>
              </p>
              <div className="product-actions">
                <Button to="/contact">Enquire</Button>
                {whatsappHref ? (
                  <a
                    className="button button-secondary"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    WhatsApp
                  </a>
                ) : null}
              </div>
            </>
          ) : (
            <p className="product-pending">Description coming soon.</p>
          )}
        </motion.div>
      </div>

      {highlights.length ? (
        <div className="product-specs">
          <p className="product-specs-label">Specifications</p>
          <SpecList items={highlights} />
          {moreSpecs.length ? (
            <>
              <button
                type="button"
                className={`product-specs-toggle${specsOpen ? ' is-open' : ''}`}
                aria-expanded={specsOpen}
                aria-controls={specsId}
                onClick={() => setSpecsOpen((open) => !open)}
              >
                {specsOpen ? 'Hide specifications' : 'View specifications'}
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              {specsOpen ? (
                <div id={specsId}>
                  <SpecList items={moreSpecs} />
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

function Products() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <PageHero title="Products" />
      <RevealSection className="content-section products-page">
        <Container>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <SectionTitle centered eyebrow="Products" title="Equipment we supply." />
          </motion.div>
          <div className="product-list">
            {products.map((product, index) => (
              <ProductRow key={product.id} product={product} index={index} />
            ))}
          </div>
        </Container>
      </RevealSection>
    </>
  )
}

export default Products
