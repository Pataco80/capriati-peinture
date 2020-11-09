import styled, { css } from 'styled-components'

// Import Components for App
import { layout } from '../../theme/helpers'

// Styled CSS
const BannerCss = css`
  padding: ${props => (props.padding ? props.padding : `2rem`)};
`

// Export Styles for the component
export const Banner = styled.div`
  ${BannerCss}
`

export const BannerCenter = styled.div`
  ${BannerCss}
  ${layout()};
`
