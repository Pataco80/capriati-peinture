import React from 'react'
import PropTypes from 'prop-types'

// Import styles from component styled file
import * as S from './BcgImageStyled'

// Import Helpers
import { setColor } from '@helpers'

// Component
const BcgImage = (props) => {
  // Component Variables
  const {
    className,
    tag,
    fluid,
    altBcgImage,
    children,
    error,
    notOverlay,
  } = props
  // Render Component
  return (
    <S.BcgImageWrapper
      className={className}
      Tag={tag}
      fluid={fluid}
      title={altBcgImage}
      backgroundColor={setColor.mainWhite}
    >
      {error ? (
        <S.BcgImageOverlay className={notOverlay ? `notOverlay` : ``} />
      ) : (
        ''
      )}
      {children}
    </S.BcgImageWrapper>
  )
}

// React PropTypes and more...
BcgImage.defaultProps = {
  tag: `div`,
  title: `Background Image`,
  error: false.toString(),
}

BcgImage.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.bool.toString(),
  notOverlay: PropTypes.bool.toString(),
}

export default BcgImage
