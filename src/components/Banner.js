import React from 'react'

// Import Components for App
import { Title } from '@components'
import { BannerStyledCenter } from '@styledElements/BannerStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex } from '@helpers'

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
const BannerWrapper = styled(BannerStyledCenter)`
  ${setFlex({ flDir: 'column' })};
`

export default Banner
