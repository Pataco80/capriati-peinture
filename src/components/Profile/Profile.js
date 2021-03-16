import React from 'react'
import PropTypes from 'prop-types'

// Import Components for App
import { Avatar } from '@components'

// Import styles from component styled file
import * as S from './ProfileStyled'

// Component
const Profile = (props) => {
  // Component Variables
  const { fluid, altPhoto, name, job } = props
  // Render Component
  return (
    <S.ProfileWrapper>
      <Avatar fluid={fluid} alt={altPhoto} />
      <S.ProfileName>{name}</S.ProfileName>
      <S.ProfileJob>{job}</S.ProfileJob>
    </S.ProfileWrapper>
  )
}

// React PropTypes and more...
Profile.defaultProps = {
  altPhoto: `Photo de Profile`,
}

Profile.propTypes = {
  fluid: PropTypes.object.isRequired,
  altPhoto: PropTypes.string.isRequired,
  name: PropTypes.string,
  job: PropTypes.string,
}
export default Profile
