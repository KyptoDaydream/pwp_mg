import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import menu_bg from '../assets/menu_bg.svg'
import bg_branch_2 from '../assets/bg_branch_2.svg'
import bg_branch_3 from '../assets/bg_branch_3.svg'

const PostWrapper = styled.div`
  width: 100vw;
  .post_header {
    background-image: url(${menu_bg});
    background-repeat: no-repeat;
    background-color: var(--red);
    background-size: 3000px;
    background-position: left;
    h2.post_header_title {
      color: var(--blue);
      font-size: 32px;
      line-height: 46px;
      max-width: 600px;
      margin: 0 auto;
      padding-top: 100px;
      padding-bottom: 150px;
    }
  }
  .post_content {
    position: relative;
    width: 100vw;
    padding-top: 70px;
    padding-bottom: 70px;
    .content_wrapper {
      max-width: 600px;
      margin: 0 auto;
      img {
        width: 100%;
        margin-bottom: 70px;
        margin-top: 70px;
      }
      img.thumbnail_image {
        margin-top: 0px;
      }
    }
    .floating_branch_1 {
    position: absolute;
    top: 100px;
    left: -130px;
    height: 300px;
    width: 300px;
    animation: move_branch_1 15s infinite linear;
    @keyframes move_branch_1 {
    0% {transform: rotate(0deg);}
    25% {transform: rotate(6deg);}
    50% {transform: rotate(0deg);}
    75% {transform: rotate(-6deg);}
    100% {transform: rotate(0deg);}
    }
    }
    .floating_branch_2 {
      position: absolute;
      top: 300px;
      right: -120px;
      height: 300px;
      width: 300px;
      animation: move_branch_2 10s infinite linear;
      @keyframes move_branch_2 {
      0% {transform: rotate(0deg);}
      25% {transform: rotate(-6deg);}
      50% {transform: rotate(0deg);}
      75% {transform: rotate(6deg);}
      100% {transform: rotate(0deg);}
      }
    }
  }
`
class Clanok extends React.Component {
  render () {
    return (
      <PostWrapper>
        <div className="post_header">
          <h2 className="post_header_title">
            {this.props.post.data.title}
          </h2>
        </div>
        <div className="post_content">
          <div className="floating_branch_1">
            <img alt="branch_bg_1" src={bg_branch_2} />
          </div>
          <div className="floating_branch_2">
            <img alt="branch_bg_2" src={bg_branch_3} />
          </div>
          <div className="content_wrapper">
            <Markdown source={this.props.post.content} escapeHtml={false} />
            <Link className="button_text" to="/aktuality">všetky články</Link>
          </div>
        </div>
      </PostWrapper>
    )
  }
}

export default withRouteData(Clanok)
