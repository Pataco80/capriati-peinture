import React from 'react'
import Title from '../Title'

import styled from 'styled-components'
import { media} from '../../theme/helpers'


const Teamtable = (props) => {
  const {team, title} = props

  console.log(team)
  return (
    <TeamWrapper>
      <Title tag='h3' title={title} />
      <ul>
        {
          team.map(({name}) => {
            return <TeamItem>{name}</TeamItem>
          })
        }
  
      </ul>
    </TeamWrapper>
  )
}

const TeamWrapper = styled.article`
  padding:1rem;
  ${media.greaterThan('tablet')`
    max-width:48%;
  `}
`
const TeamItem = styled.li`
  text-align:center;
`

export default Teamtable
