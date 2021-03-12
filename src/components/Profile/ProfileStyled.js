import styled from 'styled-components'

// Import helpers
import { setFlex, setColor } from '@helpers'

// Export Styles for the component
export const ProfileWrapper = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  text-shadow: 2px 2px 2px ${setColor.mainGreyL1};
`

export const ProfileName = styled.h4`
  text-align: center;
`

export const ProfileJob = styled.h6`
  text-align: center;
`
