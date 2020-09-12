import React from 'react'

// Import components from Gatsby and plugins Gatsby

// Import Components for App

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, setColor } from '../theme/helpers'

// GraphQl Queries

// Component
const Title = (props) => {
  // Component Variables
  const { title, tag:Tag, hidden, noShadow, children } = props

  // Render Component
  return (
    <TitleWrapper hidden={hidden} noShadow={noShadow}>
      <Tag>{title || children}</Tag>
    </TitleWrapper>
  )
}


// React PropTypes and more...

// Styles from styled-components
const TitleWrapper = styled.div`
  ${setFlex()};
  text-align:center;
  text-shadow: 2px 2px 3px ${setColor.mainGreyL1};

  ${({hidden}) => hidden &&`
      display:none !important;
  `}

  ${({noShadow}) => noShadow &&`
    text-shadow: none !important;
  `}
`

export default Title
