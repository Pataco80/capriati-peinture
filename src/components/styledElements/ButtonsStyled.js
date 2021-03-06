import styled, { css } from 'styled-components'

// Import Components for App
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Import helpers
import {
  setLetterSpacing,
  setColor,
  setBorder,
  setTransition,
  setPxToRem,
  setRadius,
} from '@helpers'

// Styled CSS
const ButtonStyles = css`
  text-transform: uppercase;
  text-decoration: none;
  ${setLetterSpacing()};
  padding: ${setPxToRem(14)} ${setPxToRem(26)};
  display: inline-block;
  ${setTransition()};
  cursor: pointer;
  background: none;
  ${(props) => props.radius || `${setRadius({ allPx: 12 })}`};
  font-weight: 900;

  &.btnIconBar {
    width: ${setPxToRem(48)};
    padding: ${setPxToRem(8)} ${setPxToRem(4)};
    border: none;
    height: auto;
    color: ${setColor.mainWhite};
    border-radius: inherit;

    &:focus,
    &:active,
    &:focus {
      outline: none;
    }
  }

  ${({ primary }) =>
    primary &&
    `
    color: ${setColor.mainWhite};
    border: ${setBorder({ color: `${setColor.primaryColor}` })};
    background: ${setColor.primaryColor};
  `}

  ${({ secondary }) =>
    secondary &&
    `
    color: ${setColor.primaryColor};
    border: ${setBorder({ color: setColor.mainWhite })};
    background: ${setColor.mainWhite};
  `}

  ${({ primaryOutline }) =>
    primaryOutline &&
    `
    color: ${setColor.primaryColor};
    border: ${setBorder({ color: `${setColor.primaryColor}` })};
  `}

  ${({ outline }) =>
    outline &&
    `
    color: ${setColor.mainWhite};
    border: ${setBorder({ size: 2, color: setColor.mainWhite })};
  `}

  &:hover {
    ${({ primary, secondary, primaryOutline }) =>
      (primary || secondary || primaryOutline) &&
      `
      color: ${setColor.mainWhite};
      border: ${setBorder({ color: `${setColor.primaryColorD1}` })};
      background: ${setColor.primaryColorD1};
    `}

    ${({ outline }) =>
      outline &&
      `
      background: ${setColor.mainWhite};
      color: ${setColor.primaryColorD1};
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

export const GatsbyButtonLink = styled(AniLink)`
  ${ButtonStyles};
`
