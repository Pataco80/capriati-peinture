import styled, {css} from 'styled-components'

// Import Components for App
import { Link } from 'gatsby'

// Import helpers
import { setLetterSpacing, setColor, setBorder, setTransition, setPxToRem, setRadius } from '../../theme/helpers'

// Styled CSS
const ButtonStyles = css`
  text-transform: uppercase;
  text-decoration: none;
  ${setLetterSpacing()};
  padding: ${setPxToRem(14)} ${setPxToRem(26)};
  display: inline-block;
  ${setTransition()};
  cursor: pointer;
  background:none;
  ${setRadius({allPx:12})};
  font-weight:900;

  ${({ primary }) => primary &&`
    color: ${setColor.mainWhite};
    border: ${setBorder({color:setColor.primaryColor})};
    background:${setColor.primaryColor};
  `}

  ${({ secondary }) => secondary &&`
    color: ${setColor.primaryColor};
    border: ${setBorder({color:setColor.mainWhite})};
    background:${setColor.mainWhite};
  `}

  ${({ primaryOutline }) => primaryOutline &&`
    color: ${setColor.primaryColor};
    border: ${setBorder({color:setColor.primaryColor})};
  `}

  ${({ outline }) => outline &&`
    color: ${setColor.mainWhite};
    border: ${setBorder({size:2,color:setColor.mainWhite})};
  `}

  &:hover {
    ${({ primary, secondary, primaryOutline }) => (primary || secondary || primaryOutline) &&`
      color: ${setColor.mainWhite};
      border: ${setBorder({color:setColor.primaryColorD1})};
      background:${setColor.primaryColorD1};
    `}

    ${({ outline }) => outline &&`
      background: ${setColor.mainWhite};
      color: ${setColor.primaryColor};
    `}
  }
`

// Export Styles for the component
export const Button = styled.button`
  ${ButtonStyles};
`

export const ButtonLink = styled.a`
  ${ButtonStyles};
`

export const ButtonForm = styled.input`
  ${ButtonStyles};
`

export const GatsbyButtonLink = styled(Link)`
  ${ButtonStyles};
`