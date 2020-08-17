import styled from 'styled-components'
import { layout, media, setFlex, setTransition, setPxToRem, setShadow, setBorder, setColor } from '../../theme/helpers'
import { Link } from 'gatsby'
import {MenuAlt3} from '@styled-icons/heroicons-outline/MenuAlt3'

export const NavBarWrapper = styled.nav`
  ${setFlex()};
  border-bottom: ${setBorder({size:1,style:'solid', color:`${setColor.primaryColor}`})};
  background-color: ${setColor.mainWhite};
  width:100vw;
  position: relative;
  top:0;
  z-index:1000;

  &[data-active='true'] {
    position: fixed;
    ${setShadow('medium')};
    top:0;
  }
`

export const NavBarContainer = styled.div`
  ${layout()};

  ${setFlex({flDir:'column'})};
  background-color: ${setColor.mainWhite};

  ${setTransition()};

  ${media.greaterThan('tablet')`
    ${setFlex({y:'stretch', wrap:'nowrap'})};
    padding: ${setPxToRem(8)} 0;
  `}
`

export const NavBarHeader = styled.div`
${setFlex()};
  background-color: ${setColor.mainWhite};
  position:relative;
  top:0;
  width:100%;
  z-index:10;

  ${media.greaterThan('tablet')`
    background-color: ${setColor.mainWhite};
    width:auto;
  `}
`
export const NavHeaderContent = styled.section`
  ${setFlex({x:'space-between'})};
  padding: ${setPxToRem(8)} ${setPxToRem(16)};

  ${media.greaterThan('tablet')`
  padding: 0 ${setPxToRem(16)};
  max-width:180px;
  `}
`

export const NavbarToggle = styled(MenuAlt3)`
  color: ${setColor.primaryColor};
  width:40px;
  height:40px;
  ${media.greaterThan('tablet')`
    display:none;
  `}
`




export const NavBarItem = styled.li`
  width:100%;

  ${media.greaterThan('tablet')`
    width:auto;
  `}
`

export const NavBarLink = styled(Link)`
  ${setFlex()};
  position:relative;
  color: ${setColor.primaryColor};
  padding: ${setPxToRem(12)} ${setPxToRem(16)};
  width:100%;
  ${setTransition({delay:0.2, duration:2})};
  height:50px;
  opacity:0;
  ${setTransition({duration:0.5})};

  &:hover {
    color: ${setColor.secondaryColor};
  }
  &[aria-current] {
    color: ${setColor.secondaryColor};
    text-decoration: underline;
  }

  ${media.greaterThan('tablet')`
  height:40px;
  padding: ${setPxToRem(0)} ${setPxToRem(16)};
  transition:none;

  `}
`

export const NavBarMenu = styled.ul`
  ${layout()};
  background-color: ${setColor.mainWhite};
  position:relative;
  width:100%;
  height:0;
  ${setFlex({flDir:'column'})};
  top:-250px;
  ${setTransition({duration:0.3})};

  ${media.greaterThan('tablet')`
    ${setFlex({x:'flex-end'})};
    height:auto;
    position:relative;
    top:0;
    transition:none;
  `}

  & ${NavBarLink} {
    ${media.greaterThan('tablet')`
      opacity:1
    `}
  }

  &.show-nav {
    height:250px;
    top:0;

    ${media.greaterThan('tablet')`
      height:auto;
    `}

    & ${NavBarLink} {
      height:50px;
      opacity:1;
    }
  }
`
