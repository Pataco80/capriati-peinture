import React from 'react'
import PropTypes from 'prop-types'

// Import styles from styled-components file
import * as S from './PartenersItemStyled'

// Component
const PartenersItem = (props) => {
  // Component Variables
  const { fluid, altLogo, url, urlTitle } = props
  // Render Component
  return (
    <S.PartenersItemWrapper href={url} title={urlTitle} target='_blank'>
      <S.PartenersLogo fluid={fluid} alt={altLogo} />
    </S.PartenersItemWrapper>
  )
}

// React PropTypes and more...
PartenersItem.defaultProps = {
  altLogo: `Logo du partenaire`,
  url: `#`,
  urlTitle: `Visiter notre partenaire`,
}

PartenersItem.propTypes = {
  fluid: PropTypes.object.isRequired,
  altLogo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlTitle: PropTypes.string.isRequired,
}
export default PartenersItem
