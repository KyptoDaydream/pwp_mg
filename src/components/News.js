import * as React from 'react'
import styled from 'styled-components'
import $ from 'jquery'

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
    $.ajax({
      method: 'GET',
      url: 'https://www.mariagalikova.sk/posts',
    }).then(function (response) {
      this.setState({ posts: JSON.parse(response) })
    })
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
