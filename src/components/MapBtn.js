import React from 'react'

// Import functions map
import mapsSelector from '../utils/getGoogleMap'

// Import Components for App
import { Map } from '@styled-icons/boxicons-regular'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { Button } from '@styledElements/ButtonsStyled'
import { setTransition, setColor, setFlex } from '@helpers'

// Component
const MapBtn = ({ className }) => {
  // Render Component
  return (
    <MapButton type="button" className={className} onClick={mapsSelector} title="Nous Trouver">
      <Map />
    </MapButton>
  )
}

export default MapBtn

// Styles from styled-components
export const MapButton = styled(Button)`
  background: transparent;

  padding: 0.25rem;
  border: none;
  ${setTransition()};
  width: 3rem;
  height: auto;
  color: ${setColor.mainWhite};

  &:hover {
    background: ${setColor.primaryColor};
    border-radius: inherit;
  }
  &:focus,
  &:active {
    outline: none;
  }
`
