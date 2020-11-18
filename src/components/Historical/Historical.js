import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title } from '@components'

// Import styles from styled-components file
import * as S from './HistoricalStyled'

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
  // Component Variables
  const data = useStaticQuery(getData)
  const historyJsonData = data.hisoryData.nodes

  // Render Component
  return (
    <S.HistoricalWrapper>
      <Title tag="h3" title="Historique" />
      <S.HistoricalTable>
        {historyJsonData.map((item, i) => {
          // Return Historic Items
          return (
            <S.HistoricalItem Key={i}>
              <S.HistoricalDate>{item.date}</S.HistoricalDate>
              <S.HistoricaText>{item.text}</S.HistoricaText>
            </S.HistoricalItem>
          )
        })}
      </S.HistoricalTable>
    </S.HistoricalWrapper>
  )
}

export default Historical
