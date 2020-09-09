import React from 'react'

// Import components from Gatsby and plugins Gatsby

// Import Components for App

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'

// GraphQl Queries

// Component
const Title = (props) => {
  // Component Variables
  const { title, tag:Tag, hidden, children } = props

  // Render Component
  return (
    <TitleWrapper hidden={hidden}>
      <Tag>{title || children}</Tag>
    </TitleWrapper>
  )
}


// React PropTypes and more...

// Styles from styled-components
const TitleWrapper = styled.div`
  ${setFlex()};
  text-align:center;

  ${({hidden}) => hidden &&`
      display:none !important;
  `}
`

export default Title
