import React from 'react'

// Import Hooks
import { useWindowSize } from '@hooks'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title, ServiceGallery } from '@components'

// Import styles from styled-components file and helpers
import * as S from './ServiceItemStyled'
import { breakpoints } from '@helpers'

// GraphQl Queries
export const getGalleryImages = graphql`
  {
    servicesGallery: allFile(
      filter: { relativePath: { regex: "/gallery/services/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  }
`

// Component
const ServiceItem = ({
  id,
  name,
  shortName,
  altIcon,
  altFeatured,
  Icon,
  featuredImage,
  competences,
  gallery,
  home,
}) => {
  // Component Variables
  const data = useStaticQuery(getGalleryImages)
  const serviceItemGallery = data.servicesGallery.edges
  const competencesList = competences
  const windowSize = useWindowSize()
  const toHero = breakpoints.smTablet
  // Component Functions
  const galleryItem = serviceItemGallery.map(({ node }) => ({
    image: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  // Render Component
  return (
    <S.ServiceWrapper key={id} className={home ? 'home' : ''}>
      <S.ServiceHeader home={home}>
        {windowSize < toHero || home ? (
          <S.ServiceSmallBanner padding='0'>
            <S.IconContainerCard>
              <S.ServiceIcon
                name={name}
                shortName={shortName}
                alt={altIcon}
                fluid={Icon}
              />
            </S.IconContainerCard>
            <Title tag='h3' title={name} />
          </S.ServiceSmallBanner>
        ) : (
          <S.ServiceBcgImage
            name={name}
            shortName={shortName}
            fluid={featuredImage}
            altFeatured={altFeatured}
            notOverlay
          >
            <S.ServiceBanner>
              <S.BannerContent>
                <S.IconContainer>
                  <S.ServiceIcon
                    name={name}
                    shortName={shortName}
                    alt={altIcon}
                    fluid={Icon}
                  />
                </S.IconContainer>
                <h3>{name}</h3>
              </S.BannerContent>
            </S.ServiceBanner>
          </S.ServiceBcgImage>
        )}
      </S.ServiceHeader>
      <S.ServiceBody padding='0'>
        {competencesList.map((item, i) => {
          // Return infos from services
          return <p key={i}>{item.text}</p>
        })}
      </S.ServiceBody>
      {!home && (
        <ServiceGallery gallery={gallery} servicesGalleryImg={galleryItem} />
      )}
    </S.ServiceWrapper>
  )
}

export default ServiceItem
