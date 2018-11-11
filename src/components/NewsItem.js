import * as React from 'react'
import styled from 'styled-components'
import mg_avatar from '../assets/mg_avatar.jpg'

const Status = styled.div`
  position: relative;
  display: block;
  background-color: var(--lightBlue);
  border-radius: 10px;
  width: 60%;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  text-align: left;
  .image_wrapper {
    width: 80px;
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
`
const Post = styled.a`
  div {
    position: relative;
    display: block;
    background-color: var(--white);
    border-radius: 10px;
    width: 60%;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    text-align: left;
    transition: 0.3s;
    .image_wrapper {
      width: 80px;
      img {
        width: 150px;
      }
    }
    .text_wrapper {
      padding-left: 50px;
      h2.title {
        font-size: 24px;
        line-height: 24px;
      }
    }
  }
  &:hover div {
    background-color: var(--sliderBackground);
  }
`
class NewsItem extends React.Component {
  constructor (data) {
    super()
    this.state = {
      type: data.post.data.type,
      data: data.post.data
    }
  }

  render () {
    let item
    console.log(this.state)
    if (this.state.type === 'status') {
      item = (
        <Status>
          <div className="image_wrapper">
            <img src={mg_avatar} alt="Mária Gálikova" />
          </div>
          <div className="text_wrapper">
            <h3 className="sub_title">
              Statusík
            </h3>
            <p>
              {this.state.data.title}
            </p>
          </div>
        </Status>)
    } else {
      item = (
        <Post href={this.state.data.url}>
          <div className="image_wrapper">
            <img src={this.state.data.thumbnail} alt="" />
          </div>
          <div className="text_wrapper">
            <h2 className="title">
              {this.state.data.title}
            </h2>
            <p>
              {this.state.data.vycuc}
            </p>
          </div>
        </Post>)
    }

    return (
      <div>
        {item}
      </div>
    )
  }
}

export default NewsItem
