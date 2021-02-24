import React from 'react'
import PropTypes from 'prop-types'

// Import styles from styled-components file
import * as S from './AvatarStyled'

// Component
const Avatar = ({ fluid, alt }) => {
  // Render Component
  return <S.AvatarImage fluid={fluid} alt={alt} />
}

// React PropTypes and more...
Avatar.defaultProps = {
  alt: ``,
}

Avatar.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Avatar
