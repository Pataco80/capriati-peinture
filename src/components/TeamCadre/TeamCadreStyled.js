import styled from 'styled-components'

// Import helpers
import { setFlex, media } from '@helpers'

// Export Styles for the component
export const CadreItemWrapper = styled.div`
  ${setFlex({ flDir: 'column', y: 'center' })};
  margin-bottom: 2rem;
  width: 100%;
  max-width: 25rem;
  text-align: center;

  ${media.greaterThan('tablet')`
    width: 50%;
    margin-bottom: 0;
    padding: 0 1.5rem;
  `}

  ${media.greaterThan('desktop')`
    width: 30%;
    margin-bottom: 0;
    padding: 0 1.5rem;
  `}
`
