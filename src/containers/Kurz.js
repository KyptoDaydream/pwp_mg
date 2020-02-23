import React from "react";
import { withRouteData } from "react-static";
import { Head } from "react-static";
import styled from "styled-components";
import Markdown from "react-markdown";
import menu_bg from "../assets/menu_bg.svg";
import bg_branch_2 from "../assets/bg_branch_2.svg";
import bg_branch_3 from "../assets/bg_branch_3.svg";
import menu_branch from "../assets/menu_branch.svg";

const PostWrapper = styled.div`
  width: 100vw;
  .post_header {
    position: relative;
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
      strong {
        color: var(--brightBlue);
      }
      p {
        font-weight: 400;
        font-size: 16px;
        margin: 0;
        padding: 20px 0;
      }
      h1 {
        color: var(--red);
        font-family: var(--titleFontFamily);
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        margin: 0;
        padding: 40px 0;
        strong {
          color: var(--blue);
        }
      }
      h2 {
        font-family: var(--titleFontFamily);
        font-size: 15px;
        letter-spacing: 1.04px;
        line-height: 22px;
        text-transform: uppercase;
        color: var(--blue);
        margin: 0;
        padding: 20px 0 10px 0;
        font-weight: 600;
        strong {
          color: var(--blue);
        }
      }
      blockquote {
        margin: 50px 0;
        padding: 20px 35px;
        background: var(--lightBlue);
        p {
          font-size: 15px;
          font-style: italic;
          color: var(--brightBlue);
        }
      }
      ul {
        padding-bottom: 30px;
      }
      ul li {
        font-weight: 400;
        font-size: 16px;
        margin: 0;
        padding: 7px 0;
        color: #7d8292;
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
        0% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(6deg);
        }
        50% {
          transform: rotate(0deg);
        }
        75% {
          transform: rotate(-6deg);
        }
        100% {
          transform: rotate(0deg);
        }
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
        0% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(-6deg);
        }
        50% {
          transform: rotate(0deg);
        }
        75% {
          transform: rotate(6deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
  }
  @media (max-width: 950px) {
    .floating_branch_2,
    .floating_branch_1 {
      display: none;
    }
    .post_content,
    .post_header {
      padding-left: 80px;
      padding-right: 80px;
      max-width: 950px;
      box-sizing: border-box;
    }
  }
`;
const ModalBranch = styled.div`
  position: absolute;
  bottom: -100px;
  right: 0px;
  height: 350px;
  width: 200px;
  background-image: url(${menu_branch});
  background-size: cover;
  @media (max-width: 950px) {
    display: none;
  }
`;
class Clanok extends React.Component {
  render() {
    const button =
      this.props.post.data.book === "nie" ? (
        ""
      ) : (
        <a
          className="button_text news_link"
          href="https://www.mariagalikova.sk/kontakt"
        >
          objednať kurz
        </a>
      );
    return (
      <PostWrapper>
        <Head>
          <meta name="description" content={this.props.post.data.brief} />
          <meta property="og:image" content={this.props.post.data.thumbnail} />
        </Head>
        <div className="post_header">
          <ModalBranch />
          <h2 className="post_header_title">{this.props.post.data.title}</h2>
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
            {button}
          </div>
        </div>
      </PostWrapper>
    );
  }
}

export default withRouteData(Clanok);
