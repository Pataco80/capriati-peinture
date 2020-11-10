import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'

// Import Files from component
import videoMp4 from '../assets/video/paint.mp4'
import videoOgv from '../assets/video/paint.mp4'
import videoWebm from '../assets/video/paints.webm'

// Import styled-components and helpers
import styled from 'styled-components'
import { setLinearBcg, setFlex } from '../theme/helpers'

// GraphQl Queries
const getImage = graphql`
  {
    posterImg: file(relativePath: { eq: "images/painting_poster_hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
// Component
const Videobcg = ({ className, children }) => {
  // Component Variables
  const data = useStaticQuery(getImage)
  const poster = data.posterImg.childImageSharp.fluid

  // Render Component
  return (
    <div className={className}>
      <span className="overlay"></span>
      {children}
      <video id="video" autoPlay loop playsInline poster={poster}>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
        <source src={videoOgv} type="video/ogg" />
        <track kind="captions" label="Video Hero" captions="Video Hero" />
      </video>
    </div>
  )
}

export default styled(Videobcg)`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  .overlay {
    display: block;
    width: 100%;
    height: 100%;
    ${setLinearBcg({ colStart: 'rgba(0,0,0,0.7)', colEtart: 'rgba(0,0,0,0.2)' })};
    opacity: 0.3;
    z-index: 1;
  }

  video {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
  }
`
