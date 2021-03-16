import React from 'react'
import PropTypes from 'prop-types'

// Import styles from styled-components file and helpers
import * as S from './TitleStyled'

// Component
const Title = ({
  title,
  tag: Tag,
  className,
  hidden,
  noShadow,
  notMargin,
  children,
}) => {
  // Render Component
  return (
    <S.TitleWrapper hidden={hidden} notMargin={notMargin} noShadow={noShadow}>
      <Tag className={className} noShadow={noShadow}>
        {title || children}
      </Tag>
    </S.TitleWrapper>
  )
}

// React PropTypes and more...
Title.defaultProps = {
  tag: `h1`,
  title: `Mon Titre`,
}

Title.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Title
