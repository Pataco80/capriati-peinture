import React from 'react'
import mapsSelector from '../utils/getGoogleMap'
import { Map } from '@styled-icons/boxicons-regular'
import styled from 'styled-components'
import { Button } from '@styledElements/ButtonsStyled'
import { setTransition, setColor, setFlex } from '@helpers'

const MapBtn = ({ className }) => {
  return (
    <MapButton className={className} onClick={mapsSelector}>
      <Map />
    </MapButton>
  )
}

export default MapBtn

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
