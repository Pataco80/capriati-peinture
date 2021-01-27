import React, { useState, useEffect } from 'react'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'

import styled from 'styled-components'

// Import helpers
import { setTransition, setPxToRem, setShadow, setColor } from '@helpers'

const ToTopBtn = ({className, showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }
  console.log(show)
  return (
    <>
      {show && (
        <TopButton className={className} onClick={handleClick} title='Aller en haut'>
          <Arrow />
        </TopButton>
      )}
    </>
  )
}

export default ToTopBtn


export const TopButton = styled.button`
background:transparent;
  padding: 0.5rem;
  border: none;
  ${setTransition()};
  width:3rem;
  height:auto;
  color: ${setColor.mainWhite};

  &:hover {
    background: ${setColor.primaryColor};
        border-radius:inherit;

  }
  &:focus,
  &:active {
    outline: none;
  }
  &.test {
    position:fixed;
    top:100px;
    left:10px;
    background-color:red;
  }
`