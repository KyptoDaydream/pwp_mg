import React from "react";
import { Head } from "react-static";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import foto_1 from "../assets/mg_foto_1.jpg";
import check from "../assets/check.png";
import bg_branch_2 from "../assets/bg_branch_2.svg";
import bg_branch_3 from "../assets/bg_branch_3.svg";

const Services = styled.div`
  overflow: hidden;
`;
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
    .content_left{
      z-index: 10;
      flex-basis: 50%;
      padding-left: 185px;
      box-sizing: border-box;
      &.padded {
        padding-top: 120px;
      }
    }
    .content_right{
      z-index: 10;
      position: relative;
      flex-basis: 50%;
      padding-right: 185px;
      box-sizing: border-box;
    }
    .content_full_width {
      z-index: 10;
      flex-basis: 100%;
      padding: 120px 185px 120px 185px;
      width: 100%;
      box-sizing: border-box;
      .qoute_wrapper {
        position: relative;
        text-align: center;
      }
    }
  }
  form p {
    margin-bottom: 10px;
  }
  form button {
    color: var(--blue);
    font-weight: 700;
    font-family: var(--titleFontFamily);
    font-size: 15px;
    line-height: 50px;
    margin-top: 30px;
    margin-bottom: 50px;
    border: 0;
    padding: 0 20px 0 20px;
    display: inline-block;
    text-align: center;
    background-image: linear-gradient(120deg, var(--red) 0%, var(--red) 100%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 45px;
    transition: 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background-position: 0 0;
    }
  }
  form input,
  form textarea {
    border: 1px solid var(--lightBlue);
    background: var(--lightBlue);
    border-radius: 4px;
    box-shadow: none;
    padding: 15px 25px;
    font-size: 16px;
    width: 80%;
    margin-bottom: 10px;
  }

  form input:focus,
  form textarea:focus {
    border: 1px solid var(--brightBlue);
    outline: none;
  }
  form input[type="checkbox"] {
    border-radius: 50% !important;
    background: var(--lightBlue);
    -webkit-appearance: none;
    position: relative;
    width: 20px;
    height: 20px;
    padding: 0;
    float: left;
    cursor: pointer;
    margin: 0;
  }
  form input[type="checkbox"]:focus {
    border: 0;
  }
  form input[type="checkbox"]:checked,
  form input[type="checkbox"]:checked:active {
    background: var(--brightBlue);
    border: 1px solid var(--white);
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
  }
  form input[type="checkbox"]:checked:after,
  form input[type="checkbox"]:checked:active:after {
    content: '';
    display: block;
    background: url(${check}) center center;
    background-size: 10px 10px;
    background-repeat: no-repeat;
    height: 18px;
    width: 18px;
    position: absolute;
    border-radius: 50%;
  }

  form .checkbox_label {
    float: left;
    line-height: 20px;
    margin-left: 10px;
    font-size: 12px;
    cursor: pointer;
  }

  form .checkbox_wrapper {
    height: 22px;
  } 
  .first_title {
    margin-top: 100px;
  }
  .photo_wrapper {
    position: relative;
    img {
      transition: 0s;
      transition-delay: 0.4s;
      opacity: 0;
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      background-image: linear-gradient(120deg, var(--red) 0%, var(--red) 100%);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: 0.5s ease-in;
    }
    &.reveal_animation img {
      transition-delay: 0.75s;
      opacity: 1;
    }
  }
  div.mg_foto_1 {
    margin-left: 100px;
    height: 375px;
    width: 300px;
    &:after {
      background-position: 300px 0;
      animation: hide_img_1 0.8s;
    }
    &.reveal_animation:after {
      animation: reveal_1 1.5s;
    }
    @keyframes reveal_1 {
    0% {background-position: 300px 0px;}
    50% {background-position: 0px 0px;}
    100% {background-position: 300px 0px;}
    }
    @keyframes hide_img_1 {
    0% {background-position: -300px 0px;}
    50% {background-position: 0px 0px;}
    100% {background-position: 300px 0px;}
    }
  } 
  div.illustration_foto_1 {
    margin: 70px 0 70px -185px;
    height: 410px;
    width: 615px;
    &:after {
      background-position: 615px 0;
      animation: hide_img_2 0.8s;
    }
    &.reveal_animation:after {
      animation: reveal_2 1.5s;
    }
    @keyframes reveal_2 {
    0% {background-position: 615px 0px;}
    50% {background-position: 0px 0px;}
    100% {background-position: 615px 0px;}
    }
    @keyframes hide_img_2 {
    0% {background-position: -615px 0px;}
    50% {background-position: 0px 0px;}
    100% {background-position: 615px 0px;}
    }
  } 
  div.illustration_foto_2 {
    margin: 0;
    height: 210px;
    width: 860px;
    &:after {
      background-position: 860px 0;
      animation: hide_img_2 0.8s;
    }
    &.reveal_animation:after {
      animation: reveal_2 1.5s;
    }
    @keyframes reveal_2 {
    0% {background-position: 860px 0px;}
    50% {background-position: 0px 0px;}
    100% {background-position: 860px 0px;}
    }
    @keyframes hide_img_2 {
    0% {background-position: -860px 0px;}
    50% {background-position: 0px 0px;}
    100% {background-position: 860px 0px;}
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
  .floating_branch_4 {
    position: absolute;
    top: 2700px;
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
    top: 1000px;
    right: 0px;
    height: 600px;
    width: 300px;
    }
  }
  h4.sub_quote_wide {
    font-family: var(--titleFontFamily);
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    margin: 0;
    position: absolute;
    text-align: center;
    width: 80%;
    padding-left: 10%;
    top: -70px;
    color: var(--red);
  }
  .block_padded {
    margin-bottom: 40px;
  }
  .last_block {
    padding-bottom: 100px;
  }
  @media (max-width: 1175px) {
    .home_content {
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
  }
  @media (max-width: 940px) {
    .floating_branch_1 {
      left: -230px;
    }
    .floating_branch_2 {
      right: -200px;
    }
    .floating_branch_3 {
      right: -150px;
    }
  }
  @media (max-width: 600px) {
    .floating_branch_3 {
      display: none;
    }
    .home_content {
      .content_left, .content_right, .content_full_width {
        h4.sub_quote_wide {
        font-size: 14px;
        line-height: 18px;
        }
      }
    }
  }
  @media (max-width: 340px) {
    .home_content {
      .content_left, .content_right, .content_full_width {
        h4.quote {
        font-size: 48px;
        line-height: 72px;
      }
      }
    } 
  }
`;
export default class Contact extends React.Component {
  render() {
    return (
      <Services>
        <Head>
          <meta
            name="keywords"
            content="maria galikova,marketingovy riaditel,tv joj,mg prime,beckovske slnko"
          />
        </Head>
        <ContentWrapper>
          <div className="floating_branch_1">
            <img alt="branch_bg_1" src={bg_branch_2} />
          </div>
          <div className="floating_branch_2">
            <img alt="branch_bg_2" src={bg_branch_3} />
          </div>
          <div className="home_content">
            <div
              className="content_left padding_bottom_mquery"
              id="trigger_foto1"
            >
              <h2 className="title first_title">Kontakt</h2>
              <p className="block_padded">
                Hlaváčikova 35, 841 05 Bratislava
                <br />
                0911 544 533
                <br />
                <a href="mailto:ahoj@mariagalikova.sk">ahoj@mariagalikova.sk</a>
              </p>
              <form
                method="post"
                action="https://www.briskforms.com/go/715a785ffead4b4dbb21f0a42a2a7896"
              >
                <p>Prihláste sa na kurz:</p>
                <div>
                  <input
                    placeholder="Meno"
                    type="text"
                    id="name"
                    name="Meno"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Telefón"
                    type="text"
                    id="phone"
                    name="Telefón"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    id="mail"
                    name="Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Správa"
                    id="msg"
                    name="Správa"
                    required
                  />
                </div>
                <div className="checkbox_wrapper">
                  <input type="checkbox" name="q" id="a-0" required autofocus />
                  <label className="checkbox_label" for="a-0">
                    Súhlasím s odoslaním údajov. (
                    <a
                      className="poucenie"
                      href="https://www.mariagalikova.sk/GDPR.pdf"
                    >
                      poučenie
                    </a>
                    )
                  </label>
                </div>
                <div className="button">
                  <button type="submit">
                    <span>Prihlásiť sa na kurz</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="content_right">
              <Controller>
                <Scene
                  classToggle="reveal_animation"
                  triggerElement="#trigger_foto1"
                >
                  <div className="mg_foto_1 photo_wrapper">
                    <img
                      alt="maria galikova"
                      src={foto_1}
                      className="mg_foto_1"
                    />
                  </div>
                </Scene>
              </Controller>
            </div>
          </div>
        </ContentWrapper>
      </Services>
    );
  }
}
