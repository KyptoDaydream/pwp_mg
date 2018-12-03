import React from 'react'
import { withRouteData, Head } from 'react-static'
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
    top: 1200px;
    right: 0px;
    height: 600px;
    width: 300px;
    }
  }
  .news_button {
    margin-bottom: 100px;
    margin-right: 20%;
  }
  @media (max-width: 1175px) {
    .home_content {
      padding-top: 0;
      .content_left, .content_right, .content_full_width {
      flex-basis: 70%;
      width: 70%;
      padding: 0;
      margin-left: 15%;
      &.padding_bottom_mquery {
        padding-bottom: 40px;
      }
      &.padding_top_mquery {
        padding-top: 40px;
      }
      h4.quote {
        font-size: 72px;
        line-height: 72px;
      }
      h4.sub_quote_wide {
        font-size: 18px;
        font-weight: normal;
        position: relative;
        top: 0;
      }
      &.padded {
        padding-top: 40px;
      }
      }
    }
    .first_title {
      margin-top: 0;
    }
    .floating_branch_3 {
      right: -150px;
    }
    .hide_mquery {
      display: none;
    }
    .mg_foto_1 {
      margin: 0 auto !important;
    }
    .news_button {
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
  @media (max-width: 940px) {
    .floating_branch_1 {
      left: -230px;
    }
    .floating_branch_2 {
      right: -200px;
    }
  }
`
class Ahoj extends React.Component {
  render () {
    return (
      <NewsWrapper>
        <Head>
          <meta name="keywords" content="phdr maria galikova,maria galikova clanky,maria galikova facebook,maria galikova kniha" />
        </Head>
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
              <a className="button_text news_button" target="_blank" href="https://www.facebook.com/profile.php?id=100005008548203">
                viac info
              </a>
              <News posts={this.props.posts} location="aktuality" />
            </div>
          </div>
        </ContentWrapper>
      </NewsWrapper>
    )
  }
}

export default withRouteData(Ahoj)
