import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import mg_avatar from '../assets/mg_avatar.jpg'

const Status = styled.div`
  position: relative;
  display: block;
  background-color: var(--lightBlue);
  border-radius: 10px;
  width: 70%;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 40px;
  .image_wrapper {
    width: 80px;
    flex-basis: 80px;
    min-width: 80px;
    img {
      width: 70px;
      border: 5px solid var(--white);
      border-radius: 50px;
    }
  }
  .text_wrapper {
    padding-left: 50px;
    h3.sub_title {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1175px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    .image_wrapper {
      display: none;
    }
    .text_wrapper {
    padding-left: 0px;
    }
  }
`
const PostLink = styled.a`
  .post_wrapper {
    position: relative;
    display: block;
    border-radius: 10px;
    width: 70%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0px;
    display: flex;
    text-align: left;
    transition: 0.3s;
    margin-bottom: 40px;
    .image_wrapper {
      flex-basis: 200px;
      min-width: 200px;
      height: 150px;
      background-size: cover;
    }
    .text_wrapper {
      padding-left: 50px;
      height: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      position: relative;
      h2.title {
        font-size: 24px;
        line-height: 24px;
      }
      p {
        font-weight: normal;
      }
    }
    @media (max-width: 1175px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      flex-wrap: wrap;
    .image_wrapper {
      flex-basis: 100%;
      min-width: 100%;
      height: 150px;;
      }
      .text_wrapper {
        padding-left: 0;
        flex-basis: 100%;
        min-width: 100%;
      }
    }
  }
  &:hover h2 {
    text-decoration: underline;
  }
`
const Post = styled.div`
  .post_wrapper {
    position: relative;
    display: block;
    border-radius: 10px;
    width: 70%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0px;
    display: flex;
    text-align: left;
    transition: 0.3s;
    margin-bottom: 40px;
    .image_wrapper {
      flex-basis: 200px;
      min-width: 200px;
      height: 150px;
      background-size: cover;
    }
    .text_wrapper {
      padding-left: 50px;
      height: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      position: relative;
      h2.title {
        font-size: 24px;
        line-height: 24px;
      }
      p {
        font-weight: normal;
      }
    }
    @media (max-width: 1175px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      flex-wrap: wrap;
    .image_wrapper {
      flex-basis: 100%;
      min-width: 100%;
      height: 150px;;
      }
      .text_wrapper {
        padding-left: 0;
        flex-basis: 100%;
        min-width: 100%;
      }
    }
  }
  &:hover h2 {
    text-decoration: underline;
  }
`
class NewsItem extends React.Component {
  constructor (data) {
    super()
    this.state = {
      type: data.post.data.type,
      post: data.post
    }
  }

  render () {
    let item
    console.log(this.state.post.data)
    if (this.state.type === 'status') {
      item = (
        <Status>
          <div className="image_wrapper">
            <img src={mg_avatar} alt="Mária Gálikova" />
          </div>
          <div className="text_wrapper">
            <h3 className="sub_title">
              {this.state.post.data.start}
            </h3>
            <p>
              {this.state.post.data.title}
            </p>
          </div>
        </Status>)
    } else if (this.state.type === 'clanok') {
      const imageBg = {
        backgroundImage: 'url(' + this.state.post.data.thumbnail + ')'
      }
      const text = this.state.post.content.slice(0, 120) + ' ...'
      item = (
        <Link to={`/aktuality/clanky/${this.state.post.data.slug}`}>
          <Post href={this.state.post.data.url} target="_blank">
            <div className="post_wrapper">
              <div className="image_wrapper" style={imageBg} />
              <div className="text_wrapper">
                <h2 className="title">
                  {this.state.post.data.title}
                </h2>
                <p>
                  {text}
                </p>
              </div>
            </div>
          </Post>
        </Link>)
    } else {
      const imageBg = {
        backgroundImage: 'url(' + this.state.post.data.thumbnail + ')'
      }
      const text = this.state.post.data.vycuc.slice(0, 120) + ' ...'
      item = (
        <PostLink href={this.state.post.data.url} target="_blank">
          <div className="post_wrapper">
            <div className="image_wrapper" style={imageBg} />
            <div className="text_wrapper">
              <h2 className="title">
                {this.state.post.data.title}
              </h2>
              <p>
                {text}
              </p>
            </div>
          </div>
        </PostLink>)
    }

    return (
      <div>
        {item}
      </div>
    )
  }
}

export default NewsItem
