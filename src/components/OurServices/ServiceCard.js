import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Title from '../Title'

const ServiceCard = ({name, shortName, alt, fluidImage, text }) => {
  return (
    <CardWrapper>
      <CardIcon name={name} shortName={shortName} alt={alt} fluid={fluidImage} style={{ height: '400px' }}/>
      <Title tag='h3' title={name}/>
      <CardDescription>
        {text}
      </CardDescription>
    </CardWrapper>
  )
}

const CardWrapper = styled.article`
  background-color:green;
  border: 2px solid red;
  padding:1rem;
`

const CardIcon = styled(Img)`
  border:1px solid violet;
  max-width:400px;
  margin:0 auto;
`

const CardDescription = styled.p`
  background-color:silver;
  border: 1px solid yellow;
  padding:1rem;
`

export default ServiceCard
