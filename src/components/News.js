import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import NewsItem from './NewsItem'

const NewsWrapper = styled.div`
  position: relative;
  .button_text {
    margin-left: 20%;
  }
`

class News extends React.Component {
  constructor (data) {
    super()
    this.state = {
      posts: data.location === 'home' ? data.posts : data.posts,
    }
  }

  render () {
    return (
      <NewsWrapper>
        {this.state.posts.map(post => (
          <NewsItem post={post} />
      ))}
        <Link className="button_text" to="/o_mne">všetky posty</Link>
      </NewsWrapper>
    )
  }
}

export default News
