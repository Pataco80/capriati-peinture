import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Title from '../Title'

const ServiceCard = ({name, shortName, alt, fixedImage, text }) => {
  return (
    <CardWrapper>
      <CardIcon name={name} shortName={shortName} alt={alt} fixed={fixedImage}/>
      <Title tag='h3' title={name}/>
      <CardDescription>
        <p>texte</p>
      </CardDescription>
    </CardWrapper>
  )
}

const CardWrapper = styled.article`
  background-color:yellow;
  border: 2px solid red;
  padding:1rem;
`

const CardIcon = styled(Img)`
  border:1px solid violet;
`

const CardDescription = styled.p`
  background-color:silver;
  border: 1px solid green;
  padding:1rem;
`

export default ServiceCard
