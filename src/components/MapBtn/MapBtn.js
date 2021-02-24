import React from 'react'

// Import functions map
import mapsSelector from '../../utils/getGoogleMap'

// Import Components for App
import { Map } from '@styled-icons/boxicons-regular/Map'

// Import styles from component styled file
import * as S from './MapBtnStyled'

// Component
const MapBtn = ({ className }) => {
  // Render Component
  return (
    <S.MapButton
      type='button'
      className={className}
      onClick={mapsSelector}
      title='Nous Trouver'
    >
      <Map />
    </S.MapButton>
  )
}

export default MapBtn

// Styles from styled-components
