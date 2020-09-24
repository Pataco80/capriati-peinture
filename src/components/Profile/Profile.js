import React from 'react'

import Avatar from '../Avatar'

import * as S from './ProfileStyled'
const Profile = (props) => {
  const { fluid, altPhoto, name, job } = props

  return (
    <S.ProfileWrapper>
      <Avatar fluid={fluid} alt={altPhoto} />
      <S.ProfileName>{name}</S.ProfileName>
      <S.ProfileJob>{job}</S.ProfileJob>
    </S.ProfileWrapper>
  )
}

export default Profile
