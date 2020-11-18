import React from 'react'

// Import Components for App
import { Avatar } from '@components'

// Import styles from component styled file
import * as S from './ProfileStyled'

// Component
const Profile = ({ fluid, altPhoto, name, job }) => {
  // Component Variables

  // Render Component
  return (
    <S.ProfileWrapper>
      <Avatar fluid={fluid} alt={altPhoto} />
      <S.ProfileName>{name}</S.ProfileName>
      <S.ProfileJob>{job}</S.ProfileJob>
    </S.ProfileWrapper>
  )
}

export default Profile
