import styled, { css } from 'styled-components'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import Components for App
import { BcgImage } from '@components'

// Import StyledElements for basic styles
import { BannerStyled } from '@styledElements/BannerStyled'
import { SectionContentCenter } from '@styledElements/SectionStyled'

// Import helpers
import { setFlex, media } from '@helpers'

// Export Styles for the component
export const ServiceHeader = styled.header`
  ${setFlex({ flDir: 'column' })};
  position: relative;
  width: 100%;

  ${media.greaterThan('smTablet')`
    align-items: flex-end;
  `}
`

export const ServiceBanner = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;

  ${media.greaterThan('smTablet')`
    ${setFlex({ x: 'flex-end' })};
    align-self: flex-end;

    h3 {
      margin:0 0 0.5rem 0;
      align-self: flex-end;
    }
  `}
`

export const ServiceSmallBanner = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
`

export const BannerContent = styled(BannerStyled)`
  ${setFlex({ x: 'flex-end' })};
  background-color: rgba(255, 255, 255, 0.8);
  width: 80%;
  max-width: 600px;
  border-top-left-radius: 100%;
  min-height: 150px;
  align-content: flex-end;
`

export const ServiceBcgImage = styled(BcgImage)`
  margin-bottom: 3rem;
`

export const IconContainerCard = styled.div`
  width: 200px;
  height: 200px;
`

export const IconContainer = styled.div`
  margin-right: 1rem;
  width: 100px;
  height: 100px;
`

export const ServiceIcon = styled(Img)`
  height: inherit;
  max-width: 200px;
`

export const ServiceBody = styled(SectionContentCenter)`
  flex-grow: 2000;
`

export const ServiceWrapper = styled.article`
  ${setFlex({ flDir: 'column' })};
  flex-flow: wrap;
  padding: 1rem;
  width: 100%;

  &.home {
    padding: 2rem;

    ${ServiceBanner} {
      ${setFlex({ flDir: 'column' })};
    }
  }
`
