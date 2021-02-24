import styled from 'styled-components'

// Import helpers
import { setFlex, setTransition } from '@helpers'

// Export Styles for the component
export const ShareBtnWrapper = styled.div`
  ${setFlex({ x: 'space-around' })};
  width: 100%;
  height: 0;
  ${setTransition()};

  &.show-nav {
    height: 4rem;
  }

  .react-share__ShareButton {
    ${setFlex()};
    width: 3rem;
  }

  &.desktop {
    ${setFlex({ flDir: 'column', x: 'flex-end' })};
    flex-flow: column;
    height: 0;
    ${setTransition()};
    position: absolute;
    bottom: 48px;
    right: 0;

    .react-share__ShareButton {
      svg {
        height: 0;
        ${setTransition()};
      }
    }
  }
  &.menu-visible {
    height: min-content;
    background-color: silver;
    position: absolute;
    bottom: 42px;
    right: 0;

    .react-share__ShareButton {
      svg {
        height: 56px;
        padding: 0.5rem 0;
      }
    }
  }
`
