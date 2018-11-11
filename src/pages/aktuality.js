import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import bg_branch_2 from '../assets/bg_branch_2.svg'
import bg_branch_3 from '../assets/bg_branch_3.svg'
import olive_branch from '../assets/olive_branch.png'
import News from '../components/News'

const NewsWrapper = styled.div`
overflow: hidden;
`
const ContentWrapper = styled.div`
  margin-top: 100px;
  background-color: var(--white);
  position: relative !important;
  .home_content {
    max-width: 1230px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 50px;
    .content_full_width {
      flex-basis: 100%;
      padding: 0 185px 120px 185px;
      text-align: right;
      .qoute_wrapper {
        position: relative;
        text-align: center;
      }
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
  .floating_branch_3 {
    position: absolute;
    top: 800px;
    right: 0px;
    height: 600px;
    width: 300px;
    }
  }
  .news_button {
    margin-bottom: 100px;
    margin-right: 20%;
  }
`
class Ahoj extends React.Component {
  render () {
    const items = this.props.posts
    console.log(items)
    return (
      <NewsWrapper>
        <ContentWrapper>
          <div className="floating_branch_1">
            <img alt="branch_bg_1" src={bg_branch_2} />
          </div>
          <div className="floating_branch_2">
            <img alt="branch_bg_2" src={bg_branch_3} />
          </div>
          <div className="floating_branch_3">
            <img alt="olive_branch" src={olive_branch} />
          </div>
          <div className="home_content">
            <div className="content_full_width">
              <a className="button_text news_button" target="_blank" href="https://www.linkedin.com/in/m%C3%A1ria-g%C3%A1likov%C3%A1/">
                viac info
              </a>
              <News posts={items} location="home" />
            </div>
          </div>
        </ContentWrapper>
      </NewsWrapper>
    )
  }
}

export default withRouteData(Ahoj)
