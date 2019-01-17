import React from 'react'
import styled from 'styled-components'

const NotFound = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
font-size: 24px;
font-weight: bold;
`

export default class AbouteMe extends React.Component {
  render () {
    return (
      <NotFound>
        Stránka sa nenašla
      </NotFound>
    )
  }
}
