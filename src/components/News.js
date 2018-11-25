import * as React from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'

const NewsWrapper = styled.div`
  position: relative;
`

class News extends React.Component {
  constructor (data) {
    super()
    this.state = {
      posts: data.location === 'home' ? (data.posts.length > 3 ? data.posts.reverse().slice(0, 3) : data.posts.reverse()) : data.posts.reverse(),
    }
  }
  render () {
    return (
      <NewsWrapper>
        {this.state.posts.map(post => (
          <NewsItem post={post} />
      ))}
      </NewsWrapper>
    )
  }
}

export default News
