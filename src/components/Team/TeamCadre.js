import React from 'react'
import Profile from '../Profile/Profile'
import styled from 'styled-components'
import { setFlex, media} from '../../theme/helpers'
const Teamcadre = (props) => {
  const {fluid,altPhoto,name,job,certifications,date} = props
  return (
    <CadreItemWrapper>
      <Profile fluid={fluid} alt={altPhoto} name={name} job={job}/>
      {
        certifications.map((item,i) => {
        return <p Key={i}>{item}</p>
        })
      }
      <p>{date}</p>
    </CadreItemWrapper>
  )
}
const CadreItemWrapper = styled.div`
${setFlex({flDir:'column', y:'center'})};
  margin-bottom:2rem;
  width:100%;
  max-width:25rem;
  text-align:center;

${media.greaterThan('tablet')`
  width:50%;
  margin-bottom:0;
  padding:0 1.5rem;
`}

${media.greaterThan('desktop')`
  width:50%;
  margin-bottom:0;
  padding:0 1.5rem;
`}
`

export default Teamcadre
