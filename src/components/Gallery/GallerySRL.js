import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SRLWrapper } from 'simple-react-lightbox'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'
// GraphQl Queries
export const getData = graphql`
  {
  worksData:allWorkGalleryJson {
    nodes {
      id
      workName
      infos {
        id
        text
      }
      galleryContent {
        name
        shortName
        thumbnail
        fullImg
        caption
      }
    }
  }
  allFile(filter: {relativeDirectory: {regex: "/works/"}}) {
      edges {
        node {
          name
          id
          relativePath
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              originalImg
              sizes
            }
          }
        }
      }
    }
}
`
const GallerySrl = () => {
  const data = useStaticQuery(getData)

  console.log(data)
  return (
    <SRLWrapper>
      <Container>
          <Row>
            {data.allFile.edges.map((e) => (
              <ImgCol key={e.node.id} className="bootstrap_column" lg="4">
                <Img fluid={e.node.childImageSharp.fluid} />
              </ImgCol>
            ))}
          </Row>
        </Container>
    </SRLWrapper>
  )
}

const ImgCol = styled(Col)`
  margin-bottom: 20px;
  height: 300px;
  min-width:300px;
  .gatsby-image-wrapper {
    height: 100%;
  }
`
export default GallerySrl
