import React, { useState, useEffect } from 'react'

// Import Components for App
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'

// Import styledElements for basic styles
import { Button } from '@styledElements/ButtonsStyled'

// Component
const ToTopBtn = ({ className, showBelow }) => {
  // Component Variables
  const [show, setShow] = useState(showBelow ? false : true)

  // Component functions
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  // Hooks Effects
  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [show])

  // Render Component
  return (
    <>
      {show && (
        <Button
          type="button"
          className={show ? `isShow ${className}` : `${className}`}
          showBelow={showBelow}
          onClick={handleClick}
          title="Aller en haut">
          <Arrow />
        </Button>
      )}
    </>
  )
}

export default ToTopBtn
