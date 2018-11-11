import * as React from 'react'
import styled from 'styled-components'

const NewsWrapper = styled.div`
  position: relative;
`

class ContactButton extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: [],
    }
  }

  componentWillMount () {
    const items = 'asd'
    this.setState({ posts: items })
  }

  render () {
    console.log(this.state.posts)
    return (
      <NewsWrapper>
        asd
      </NewsWrapper>
    )
  }
}

export default ContactButton
