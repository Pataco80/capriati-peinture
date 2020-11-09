import React from 'react'

// Import Components for App
import Avatar from '../Avatar'

// Import styled-components and helpers
import * as S from './ProfileStyled'

// Component
const Profile = props => {
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

export default Profile
