import styled from 'styled-components'

// Import helpers
import { setFlex, setColor } from '@helpers'

// Export Styles for the component
export const TitleWrapper = styled.div`
  ${setFlex()};
  text-align: center;
  text-shadow: 2px 2px 2px ${setColor.mainGreyL1};
  margin-bottom: 3rem;

  ${({ notMargin }) =>
    notMargin &&
    `
      margin-bottom: 0 !important;
  `}

  ${({ hidden }) =>
    hidden &&
    `
      display:none !important;
  `}

  ${({ noShadow }) =>
    noShadow &&
    `
    text-shadow: none !important;
  `}
`
