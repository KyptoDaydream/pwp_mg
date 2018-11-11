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

class NewsItem extends React.Component {
  constructor (data) {
    super()
    this.state = {
      type: data.post.data.type,
      title: data.post.data.title
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
              {this.state.title}
            </p>
          </div>
        </Status>)
    } else {
      item = ''
    }

    return (
      <div>
        {item}
      </div>
    )
  }
}

export default NewsItem
