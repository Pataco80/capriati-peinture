import React from 'react'
import { ToTopBtn, ThemeBtn } from '@components'
// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { setColor, setTransition, setRadius } from '@helpers'

// Component

const MenuRightBar = () => {
  return (
    <MenuRightBarWrapper>
      <ToTopBtn showBelow={500} />
      <ThemeBtn />
    </MenuRightBarWrapper>
  )
}

export default MenuRightBar

export const MenuRightBarWrapper = styled.div`
  background: ${setColor.primaryColorL2};
  ${setRadius({allPx:12})};
  position: fixed;
  bottom: 10vh;
  z-index: 500;
  right: 3%;
  width:3rem;
  height:auto;
  color: ${setColor.mainWhite};
`