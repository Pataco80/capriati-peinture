import React, { useState, useEffect } from 'react'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import {Button} from '@styledElements/ButtonsStyled'
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

  return (
    <>
      {show && (
        <Button className={show ? `isShow ${className}` : `${className}`} showBelow={showBelow} onClick={handleClick} title='Aller en haut'>
          <Arrow />
        </Button>
      )}
    </>
  )
}

export default ToTopBtn