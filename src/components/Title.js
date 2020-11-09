import React from 'react'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, setColor } from '../theme/helpers'

// Component
const Title = props => {
  // Component Variables
  const { title, tag: Tag, hidden, titleSection, noShadow, children } = props

  // Render Component
  return (
    <TitleWrapper hidden={hidden} noShadow={noShadow} titleSection={titleSection}>
      <Tag>{title || children}</Tag>
    </TitleWrapper>
  )
}

// Styles from styled-components
const TitleWrapper = styled.div`
  ${setFlex()};
  text-align: center;
  text-shadow: 2px 2px 3px ${setColor.mainGreyL1};

  ${({ titleSection }) =>
    titleSection &&
    `
    > * {
      margin-top:0 !important;
    }
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

export default Title
