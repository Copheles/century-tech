import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'

function Products() {
  return (
    <>
      <PageHero title="Products" />
      <RevealSection className="content-section products-page">
        <Container>
          <SectionTitle
            centered
            eyebrow="Products"
            title="Cabling and ELV products for communication and security systems."
          />
        </Container>
      </RevealSection>
    </>
  )
}

export default Products
