import styled from 'styled-components'

// Import helpers
import { layout, media, setFlex, setTransition, setPxToRem, setShadow, setBorder, setColor } from '../../theme/helpers'

// Export Styles for the component
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
    box-shadow:${setShadow('medium')};
    top:0;
  }
`

export const NavBarContainer = styled.div`
  ${layout()};
  ${setFlex({flDir:'column'})};
  background-color: ${setColor.mainWhite};
  ${setTransition()};

  ${media.greaterThan('lgTablet')`
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

  ${media.greaterThan('lgTablet')`
    ${setFlex({x:'flex-start'})};
    background-color: ${setColor.mainWhite};
    width:auto;
  `}
`

export const NavHeaderContent = styled.section`
  ${setFlex({x:'space-between'})};
  padding: ${setPxToRem(8)} ${setPxToRem(16)};

  ${media.greaterThan('lgTablet')`
    padding: 0 ${setPxToRem(16)};
    max-width:180px;
  `}
`

export const NavbarToggle = styled.span`
  color: ${setColor.primaryColor};
  width:40px;
  height:40px;
  ${setTransition()};

  ${media.greaterThan('lgTablet')`
    display:none;
  `}
`

export const NavBarMenuDropdown = styled.section`
  top:-256px;
  ${setTransition({duration:0.3})};
  background-color: ${setColor.mainWhite};
  position:relative;
  width:100%;
  height:0;


  &.show-nav {
    height:256px;
    top:0;

    ${media.greaterThan('lgTablet')`
      height:auto;
    `}
  }
`

export const NavBarMenu = styled.div`
  ${media.greaterThan('lgTablet')`
    ${setFlex({x:'flex-end'})};
    height:auto;
    position:relative;
    top:0;
    transition:none;
  `}
`