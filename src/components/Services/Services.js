import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title, ServiceItem } from '@components'

// Import styles from styled-components file
import * as S from './ServicesStyled'

// GraphQl Queries
export const getData = graphql`
  {
    servicesIcon: allFile(
      filter: { relativePath: { regex: "/servicesIcons/" } }
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
    featuredImg: allFile(filter: { relativePath: { regex: "/features/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
              originalName
              aspectRatio
              sizes
            }
          }
        }
      }
    }
    servicesData: allServicesDataJson {
      nodes {
        id
        name
        shortName
        icon
        altIcon
        featuredImg
        altFeatured
        competences {
          id
          text
        }
        gallery {
          id
          shortName
          image
          altImg
        }
      }
    }
  }
`

// Component
const Services = (props) => {
  // Component Variables
  const { home, background, padding } = props
  const data = useStaticQuery(getData)

  const servicesIconList = data.servicesIcon.edges
  const servicesFeaturedList = data.featuredImg.edges
  const servicesJsonData = data.servicesData.nodes

  // Component Functions
  const servicefeatured = servicesFeaturedList.map(({ node }) => ({
    featuredImg: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  const serviceIcon = servicesIconList.map(({ node }) => ({
    icon: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  // Render Component
  return (
    <S.ServicesWrapper background={background} padding={padding}>
      {home ? <Title tag='h2' title='Nos Services' titleSection /> : ''}
      <S.ServicesContent padding='0'>
        {servicesJsonData.map(
          ({ name, shortName, competences, gallery, altIcon, altFeatured }) => {
            // Variables and Functions for icon and featured images
            const regExp = new RegExp(shortName, 'i')
            const iconPath = serviceIcon.find(({ originalName }) =>
              originalName.match(regExp)
            ).icon
            const featuredImgPath = servicefeatured.find(({ originalName }) =>
              originalName.match(regExp)
            ).featuredImg

            // Return Item on Card or page format
            return (
              <>
                {home ? (
                  <S.ServiceItemCard
                    to={`/services/#${shortName}`}
                    className='cartelien'
                    title={`Voir le service de ${name}`}
                    fade='true'
                    duration={1}
                    hex='#ffffff'
                  >
                    <ServiceItem
                      key={shortName}
                      shortName={shortName}
                      Icon={iconPath}
                      name={name}
                      competences={competences}
                      home={home}
                      altIcon={altIcon}
                    />
                  </S.ServiceItemCard>
                ) : (
                  <ServiceItem
                    key={shortName}
                    shortName={shortName}
                    Icon={iconPath}
                    featuredImage={featuredImgPath}
                    name={name}
                    competences={competences}
                    gallery={gallery}
                    altIcon={altIcon}
                    altFeatured={altFeatured}
                  />
                )}
              </>
            )
          }
        )}
      </S.ServicesContent>
      {home ? (
        <S.ServicesLink
          primary='true'
          to='/services/'
          title='Voir nos Services'
          fade='true'
          duration={1}
          hex='#ffffff'
        >
          En savoir plus
        </S.ServicesLink>
      ) : (
        ''
      )}
    </S.ServicesWrapper>
  )
}

export default Services
