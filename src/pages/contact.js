import React from 'react'
import mapsSelector from '../utils/getGoogleMap'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'

// Import Components for App
import { Layout, SEO, Hero, Title, ContactForm } from '@components'
import { Fax, PhoneAlt, Envelope } from '@styled-icons/fa-solid'
import { Map } from '@styled-icons/boxicons-regular'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { SectionContent, Section } from '@styledElements/SectionStyled'
import { Button } from '@styledElements/ButtonsStyled'
import { setFlex, media, setColor, setPxToRem } from '@helpers'

// GraphQl Queries
const getData = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/contact-page-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        businessRoad
        businessRoadNumber
        businessZipCode
        businessCity
        businessShortCanton
        businessContry
        businessPhone
        businessFax
        businessEmail
      }
    }
  }
`

// Component
const contactPage = () => {
  const { heroBcg, site } = useStaticQuery(getData)
  const {
    title,
    businessRoad,
    businessRoadNumber,
    businessZipCode,
    businessCity,
    businessShortCanton,
    businessContry,
    businessPhone,
    businessFax,
    businessEmail,
  } = site.siteMetadata

  // fonction de suppression d'espaces pour les liens
  const removeSpaces = string => {
    return string.replace(/\s/g, '')
  }

  const hrefPhone = `tel:${removeSpaces(businessPhone)}`
  const hrefEmail = `mailto:${businessEmail}`

  // Render Component
  return (
    <Layout background="var(--mediumBackground)">
      <SEO
        title="Nous Contacter"
        description={`Contactez l'entreprise ${title}.`}
        keywords="Nous contacter, formulaire de contact, Nos Coordonées, téléphone, e-mail"
        image="contact"
      />
      <Hero title="Nous Contacter" bcgImage={heroBcg.childImageSharp.fluid} />
      <ContactForm />
      <ContactSection background="var(--mediumBackground)">
        <Title tag="h3" title="Nos Coordonées" titleSection />
        <ContactSectionContent>
          <ContactInfo>
            <Title tag="h5" title="Adresse" noShadow />
            <Title tag="h6" title={`${title}`} noShadow />
            <p>
              {businessRoad} {businessRoadNumber} <br />
              {businessZipCode} {businessCity} <br /> {businessShortCanton} - {businessContry}
            </p>
            <ButtonMap primary onClick={mapsSelector}>
              <MapIcon />
              Nous trouver
            </ButtonMap>
          </ContactInfo>
          <ContactInfo>
            <Title tag="h5" title="Contact" noShadow />
            <p>
              <strong>
                <PhoneAlt className="contactInfo-icon" /> :{' '}
              </strong>
              <a href={hrefPhone}>{businessPhone}</a>
            </p>
            <p>
              <strong>
                <Fax className="contactInfo-icon" /> :{' '}
              </strong>
              {businessFax}
            </p>
            <p>
              <strong>
                <Envelope className="contactInfo-icon" /> :{' '}
              </strong>
              <a href={hrefEmail}>{businessEmail}</a>
            </p>
          </ContactInfo>
        </ContactSectionContent>
      </ContactSection>
    </Layout>
  )
}

// Styles from styled-components
const ContactSection = styled(Section)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('smTablet')`
    ${setFlex()};
  `}
`

const ContactSectionContent = styled(SectionContent)`
  ${media.greaterThan('smTablet')`
    ${setFlex({ y: 'flex-start' })};
  `}
`

const ContactInfo = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  ${media.greaterThan('smTablet')`
    width: 50%;
  `}

  a {
    color: ${setColor.mainBlack};
  }

  .contactInfo-icon {
    display: inline-block;
    color: ${setColor.primaryColor};
    width: 1.5rem;
  }
`

export const ButtonMap = styled(Button)`
  ${setFlex()};
  padding: ${setPxToRem(8)} ${setPxToRem(26)};
`

export const MapIcon = styled(Map)`
  width: 1.6rem;
  height: auto;
`

export default contactPage
