import React from 'react'

// Import Components for App
import Title from './Title'
import { BannerCenter } from './styledElements/BannerStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'

// Component
const Banner = ({ title, children }) => {
  // Render Component
  return (
    <BannerWrapper>
      <Title tag="h1" title={title} />
      {children}
    </BannerWrapper>
  )
}

// Styles from styled-components
const BannerWrapper = styled(BannerCenter)`
  ${setFlex({ flDir: 'column' })};
`

export default Banner
