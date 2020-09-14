import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
const Historyitem = (props) => {
    // Component Variables
    const {name, shortName, imgProfile, altPhoto, actions} = props

    const actionsList = actions

  return (
    // chaque item est une row
    <ItemWrapper>
      <ImageContainer>
        <ItemPhoto name={name} shortName={shortName} alt={altPhoto} fluid={imgProfile}/>
        <p>{name}</p>
      </ImageContainer>
      <HistoryContent>
        {
          actionsList.map((item,i) => {
            return (
              <HistoryItem key={i}>
                <Date>{item.date}</Date>
                <Text>{item.text}</Text>
              </HistoryItem>
            )
          })
        }
      </HistoryContent>


    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  background-color:cyan;
`

const ImageContainer = styled.div`
  background-color:cyan;
`

const HistoryContent = styled.div`
  background-color:cyan;
`

const HistoryItem = styled.div`
  background-color:cyan;
`

const Date = styled.p`

`
const Text = styled.p`
  
`

const ItemPhoto = styled(Img)`
  max-width:200px;

`



export default Historyitem
