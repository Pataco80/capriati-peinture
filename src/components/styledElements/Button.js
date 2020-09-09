import styled, {css} from 'styled-components'
import { Link } from 'gatsby'

import { setLetterSpacing, setColor, setBorder, setTransition, setPxToRem, setRadius } from '../../theme/helpers'

const ButtonStyles = css`
  text-transform: uppercase;
  text-decoration: none;
  ${setLetterSpacing()};
  padding: ${setPxToRem(14)} ${setPxToRem(26)};
  display: inline-block;
  ${setTransition()};
  cursor: pointer;
  background:none;
  ${setRadius(12)};
  
  ${({ primary }) => primary && `
    color: ${setColor.mainWhite};
    border: ${setBorder({color:setColor.primaryColor})};
    background:${setColor.primaryColor};
  `}

${({ secondary }) => secondary && `
    color: ${setColor.primaryColor};
    border: ${setBorder({color:setColor.mainWhite})};
    background:${setColor.mainWhite};
  `}

  ${({ primaryOutline }) => primaryOutline && `
    color: ${setColor.primaryColor};
    border: ${setBorder({color:setColor.primaryColor})};
  `}

  ${({ outline }) => outline && `
    color: ${setColor.mainWhite};
    border: ${setBorder({size:2,color:setColor.mainWhite})};
  `}

  &:hover {
    ${({ primary, secondary, primaryOutline }) => (primary || secondary || primaryOutline) && `
      color: ${setColor.mainWhite};
      border: ${setBorder({color:setColor.primaryColorD1})};
      background:${setColor.primaryColorD1};
    `}

    ${({ outline }) => outline && `
      background: ${setColor.mainWhite};
      color: ${setColor.primaryColor};
    `}
  }
`

export const Button = styled.button`
  ${ButtonStyles};
`
export const ButtonLink = styled.a`
  ${ButtonStyles};
`

export const GatsbyButtonLink = styled(Link)`
  ${ButtonStyles};
`

