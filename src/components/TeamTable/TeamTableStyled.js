import styled from 'styled-components'

// Import helpers
import { media } from '@helpers'

// Export Styles for the component
export const TeamWrapper = styled.article`
  padding: 1rem;

  ${media.greaterThan('tablet')`
    max-width: 48%;
  `}
`

export const TeamItem = styled.li`
  text-align: center;
  color:var(--text);
`
