import styled, { css } from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContent } from '@styledElements/SectionStyled'
import { GatsbyButtonLink } from '@styledElements/ButtonsStyled'

// Import helpers
import { layout, setFlex, media, setColor, setRadius, setBorder } from '@helpers'

// Styled CSS
const ArticleCSS = css`
  ${setFlex()};

  ${media.greaterThan('tablet')`
    width: 50%;
  `}
`

// Export Styles for the component
export const AboutWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background: var(--background);
`

export const AboutContent = styled(SectionContent)`
  ${layout()};
  ${setFlex({ flDir: 'column', wrap: 'nowrap' })};

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row' })};
  `}
`

export const AboutArticle = styled.article`
  ${ArticleCSS}
  margin-bottom: 1rem;
  color: var(--text);

  ${media.greaterThan('tablet')`
    margin-bottom: 2rem;
  `}
`

export const Blockuote = styled.blockquote`
  ${ArticleCSS}
  justify-content: flex-end;

  footer {
    text-align: right;
    border-right: ${setBorder({ size: 4, style: 'solid', color: 'var(--border)' })};
    padding-right: 1rem;
    color: var(--highlight);

    h6 {
      margin: 0.5rem 0;
    }

    em {
      color: ${setColor.mainBlack};
      font-style: italic;
    }
  }
`

export const AboutAuthorContainer = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  padding-left: 0;

  ${media.greaterThan('tablet')`
  padding-left: 2rem;
  `}

  small {
    color: var(--text);
  }

  ${({ about }) =>
    about &&
    `
    ${setFlex({ flDir: 'column-reverse' })};
    background-color: var(--mediumBackground);
    ${setRadius({ allPx: 12 })};
    padding: 2rem;
  `}

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row' })};
    max-width: 18rem;
    margin-bottom: 0;

    ${({ about }) =>
      about &&
      `
      max-width: 100%;
    `}
  `}
`

export const AuthorImgContainer = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  max-width: 250px;
  padding: 2rem 0 1rem 0;
  text-align: center;

  ${media.greaterThan('tablet')`
    padding: 0 0 0 2.5rem;
  `}
`

export const AuthorName = styled.h3`
  margin-bottom: 0.5rem;
  text-align: center;
`

export const AboutLink = styled(GatsbyButtonLink)`
  margin: 3rem 0 1rem;
`
