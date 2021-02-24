import React from 'react'

// Import Components for App
import { ShareAlt as ShareIcon } from '@styled-icons/boxicons-regular/ShareAlt'

// Import styledElements for basic styles
import { Button } from '@styledElements/ButtonsStyled'

// Component
const ShareMenuBtn = ({ isOnClick, className }) => {
  // Component Variables

  // Render Component
  return (
    <Button type='button' onClick={isOnClick} className={className}>
      <ShareIcon />
    </Button>
  )
}

export default ShareMenuBtn
