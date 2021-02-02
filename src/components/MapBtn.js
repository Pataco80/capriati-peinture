import React from 'react'
import { Map } from '@styled-icons/boxicons-regular'
import { Button } from '@styledElements/ButtonsStyled'
import styled from 'styled-components'

// Import helpers
import { setTransition, setPxToRem, setShadow, setColor } from '@helpers'

const ToTopBtn = () => {
  const mapsSelector = () => {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPod') != -1 ||
      navigator.platform.indexOf('iPad') != -1
    )
      window.open(
        'https://www.google.com/maps/dir//Capriati+SA,+Z.A+La+Pièce,+Rolle/@46.461034,6.2502239,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x478c45cd8d86ae71:0x17c367dba8727fac!2m2!1d6.3202635!2d46.4609371'
      )
    /* else use Google */ else
      window.open(
        'https://www.google.com/maps/dir//Capriati+SA,+Z.A+La+Pièce,+Rolle/@46.461034,6.2502239,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x478c45cd8d86ae71:0x17c367dba8727fac!2m2!1d6.3202635!2d46.4609371'
      )
  }

  return (
    <MapButton onClick={mapsSelector} title="Ouvrir Google Maps">
      <Map />
    </MapButton>
  )
}

export default ToTopBtn

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
