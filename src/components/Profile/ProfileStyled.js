import styled from 'styled-components'

// Import helpers
import { setFlex } from '@helpers'

// Export Styles for the component
export const ProfileWrapper = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
`

export const ProfileName = styled.h4`
  text-align: center;
`

export const ProfileJob = styled.h6`
  text-align: center;
`
