import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../Title'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, media } from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
    hisoryData: allHistoryDataJson {
      nodes {
        id
        date
        text
      }
    }
  }
`

// Component
const Historical = () => {

  const data = useStaticQuery(getData)
  const historyJsonData = data.hisoryData.nodes

  return (
    <HistoricalWrapper>
      <Title tag='h3' title='Historique'/>
      <HistoricalTable>
      {
        historyJsonData.map((item,i) => {
          return(
            <HistoricalItem Key={i}>
              <HistoricalDate>{item.date}</HistoricalDate>
              <HistoricaText>{item.text}</HistoricaText>
            </HistoricalItem>
          )
        })
      }
      </HistoricalTable>
    </HistoricalWrapper>
  )
}

const HistoricalWrapper = styled.div`
  ${setFlex({flDir:'column'})};
`

const HistoricalTable = styled.table`
  ${setFlex({flDir:'column'})};
`

const HistoricalItem = styled.tr`
  ${setFlex({flDir:'column'})};
  width:100%;
  margin-bottom:2.5rem;

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row', x:'flex-start', y:'flex-start', wrap:'nowrap'})};
    margin-bottom:1.5rem;
  `}

  &:last-child {
    margin-bottom:0;
  }
`

const HistoricalDate = styled.td`
  ${media.greaterThan('tablet')`
    margin-right:1rem;
  `}

`

const HistoricaText = styled.td`
  margin-top:1rem;
  ${media.greaterThan('tablet')`
    margin:0;
  `}
`

export default Historical
