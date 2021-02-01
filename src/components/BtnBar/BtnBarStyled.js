import styled from 'styled-components'
import { setFlex, setBorder, setRadius, setPxToRem, setColor, setTransition, media } from '@helpers'

// Import Components for App
import {Button} from '@styledElements/ButtonsStyled'

// Component Styles
export const MobileWrapper = styled.section`
  ${setFlex({ x:'space-between', y:'center'})};
  position:fixed;
  bottom:0;
  width:100%;
  height:auto;
  background-color:${setColor.primaryColor};
  border-top:${setBorder({size:2})};
  padding: 0 ${setPxToRem(16)};
  z-index:200;
  color:${setColor.mainWhite};
`

export const DesktopWrapper = styled.div`
  ${setFlex({flDir:'column'})};
  position:fixed;
  right:0.5rem;
  bottom:70vw;
  height:auto;
  width:auto;
  padding: ${setPxToRem(16)} ${setPxToRem(4)};
  z-index:200;

  ${media.greaterThan('tablet')`
    right:0.5rem;
    bottom:30vw;
  `}

  ${media.greaterThan('desktop')`
    right:1rem;
    bottom:20vw;
  `}
`

export const MenuBarGroup = styled.div`
  ${setFlex({flDir:"row"})};

  &:first-child {
    ${setFlex({x:"flex-start"})};

  }
  &:last-child {
    ${setFlex({x:"flex-end"})};
  }

  &.desktop {
    ${setFlex({flDir:"column"})};
    opacity:0.8;
    ${setRadius({allPx:8})};
    
    &:hover {
      opacity:1;
    }
    
    .btnIconBar {
      background-color:var(--highlight);
      ${setTransition()};

      &:hover {
        background: var(--highlightHovered);
        ${setRadius({allPx:8})};
      }
    }

    .btnIconBar:first-child {
      ${setRadius({allPx:8})};
    }
    .btnIconBar.isShow {
      position:relative;
      top:0.3rem;
      padding-bottom:0.5rem;
      ${setRadius({tl:8,tr:8,bl:0,br:0})};
    }
    .btnIconBar:last-child {
      ${setRadius({allPx:8})};
    }
  }
`