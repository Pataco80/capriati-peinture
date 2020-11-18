import styled from 'styled-components'

// Import Components for App
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Import helpers
import { layout, media, setFlex, setTransition, setPxToRem, setColor, setBorder } from '@helpers'

// Export Styles for the component
export const MainNavItem = styled.li`
  width: 100%;

  ${media.greaterThan('lgTablet')`
    width: auto;
    height: auto;
  `}
`

export const MainNavLink = styled(AniLink)`
  ${setFlex()};
  align-content: center;
  position: relative;
  padding: ${setPxToRem(6)} ${setPxToRem(16)} ${setPxToRem(4)} ${setPxToRem(16)};
  width: 100%;
  ${setTransition({ delay: 0.2, duration: 0.8 })};
  height: 50px;
  opacity: 0;
  color: ${setColor.primaryColor};
  text-transform: uppercase;
  text-decoration: underline;

  &.topBarOpen {
    opacity: 1;
    transition: none;
  }

  ${media.greaterThan('lgTablet')`
    padding: ${setPxToRem(0)} ${setPxToRem(16)} ${setPxToRem(0)} ${setPxToRem(16)};
    opacity: 1;
    transition: none;
    height: 40px;
  `}

  & .span {
    border-bottom: none;
    line-height: initial;
  }
`

export const MainNavMenu = styled.ul`
  ${layout()};
  ${setFlex({ flDir: 'column' })};

  & ${MainNavLink} {
    color: ${setColor.primaryColor};
    text-decoration: none;

    &:hover {
      color: ${setColor.primaryColorD2};
    }

    &[aria-current] {
      color: ${setColor.primaryColorD2};
    }
    & .span:hover,
    &[aria-current] .span {
      border-bottom: ${setBorder({ size: 2, style: 'solid', color: `${setColor.primaryColorD2}` })};
    }
  }

  ${media.greaterThan('lgTablet')`
    ${setFlex({ flDir: 'row', x: 'flex-end' })};
    height: auto;
    position: relative;
    top: 0;
    transition: none;
  `}

  &.footer {
    ${setFlex({ wrap: 'wrap' })};

    & ${MainNavItem} {
      width: auto;
    }

    & ${MainNavLink} {
      opacity: 1;
      width: auto;
      transition: none;
      color: ${setColor.mainWhite};

      & .span:hover,
      &[aria-current] .span {
        border-bottom: ${setBorder({ size: 2, style: 'solid', color: `${setColor.mainWhite}` })};
      }
    }
  }
`
