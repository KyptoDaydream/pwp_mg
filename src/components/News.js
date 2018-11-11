import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const NewsWrapper = styled.div`
  position: relative;
`

class News extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: [],
    }
  }

  componentWillMount () {
    axios
      .get('http://codepen.io/jobs.json')
      .then(result => {
        this.setState({ posts: result })
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

export default News
