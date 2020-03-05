import React from "react";
import styled from "styled-components";
import { withRouteData, Link } from "react-static";
import { Controller, Scene } from "react-scrollmagic";
import logoImg from "../assets/mg_welcome_photo.png";
import bg_branches from "../assets/bg_branches.svg";
import bg_branches_2 from "../assets/bg_branches_2.svg";
import bg_branch_2 from "../assets/bg_branch_2.svg";
import bg_branch_3 from "../assets/bg_branch_3.svg";
import olive_branch from "../assets/olive_branch.png";
import foto_1 from "../assets/mg_foto_1.jpg";
import foto_2 from "../assets/illustration_foto_1.jpg";
import SliderWelcome from "../components/SliderWelcome";
import MouseScrollIcon from "../components/MouseScrollIcon";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import slide_2 from "../assets/mg_illustracia_2.png";
import slide_3 from "../assets/mg_illustracia_3.png";

const Home = styled.div`
  overflow: hidden;
`;
const WelcomeScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--white);
  .welcomePhoto {
    position: absolute;
    bottom: 0;
    left: calc(37.5% - 136px);
    z-index: 9990;
  }
  @media (max-width: 930px) {
    background: var(--sliderBackground);
    .welcomePhoto {
      left: 310px;
    }
  }
  @media (max-width: 730px) {
    .welcomePhoto {
      left: 10px;
    }
  }
  @media (max-width: 500px) {
    .welcomePhoto {
      left: 0;
      width: 450px;
    }
  }
  @media (min-width: 1500px) {
    .welcomePhoto {
      left: calc(37.5% - 250px);
      width: 600px;
    }
  }
`;
const WelcomeTitle = styled.h1`
  position: absolute;
  font-family: var(--titleFontFamily);
  font-size: 80px;
  line-height: 1.1em;
  left: calc(37.5% - 246px);
  bottom: 120px;
  color: var(--red);
  z-index: 9991;
  max-width: 400px;
  animation: showup 1s;
  @keyframes showup {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 930px) {
    left: 200px;
  }
  @media (max-width: 730px) {
    left: 150px;
    bottom: 70px;
  }
  @media (max-width: 500px) {
    left: 90px;
    font-size: 62px;
  }
  @media (max-width: 320px) {
    left: 80px;
    font-size: 48px;
  }
  @media (min-width: 1500px) {
    bottom: 30%;
    left: calc(37.5% - 346px);
  }
`;
const WelcomeSubTitle = styled.h2`
  position: absolute;
  font-family: var(--titleFontFamily);
  font-size: 24px;
  text-transform: uppercase;
  line-height: 1.1em;
  left: calc(37.5% - 246px);
  bottom: 110px;
  color: var(--blue);
  z-index: 9991;
  font-weight: 400;
  max-width: 400px;
  @media (max-width: 930px) {
    left: 200px;
  }
  @media (max-width: 730px) {
    left: 150px;
    bottom: 60px;
    background: white;
    padding: 10px;
    border-radius: 10px;
  }
  @media (max-width: 500px) {
    left: 90px;
    font-size: 18px;
  }
  @media (max-width: 320px) {
    bottom: 50px;
    left: 80px;
    font-size: 14px;
  }
  @media (min-width: 1500px) {
    bottom: 30%;
    left: calc(37.5% - 346px);
  }
`;
const SliderSpace = styled.div`
  width: 62.5%;
  height: 100vh;
  float: right;
  background-color: var(--white);
  position: relative;
  @media (max-width: 930px) {
    width: 100%;
    background: var(--sliderBackground);
  }
`;
const ContentWrapper = styled.div`
  background-color: var(--white);
  position: relative !important;
  .hide {
    position: absolute;
    width: 0;
    height: 0;
    display: none;
  }
  .home_content {
    position: relative;
    max-width: 1230px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 50px;
    .content_left{
      flex-basis: 50%;
      padding-left: 185px;
      box-sizing: border-box;
      &.padded {
        padding-top: 120px;
      }
    }
    .content_right{
      flex-basis: 50%;
      padding-right: 185px;
      box-sizing: border-box;
    }
    .content_full_width {
      flex-basis: 100%;
      padding: 120px 185px 120px 185px;
      .qoute_wrapper {
        position: relative;
        text-align: center;
      }
    }
  }
  .altered_bg {
    background-color: var(--sliderBackground);
    margin-top: 100px;
    background-image: url(${bg_branches});
    background-position: center center;
    background-size: cover;
    h4.quote {
      color: var(--white);
    }
    .content_full_width {
      padding-top: 50px;
      padding-bottom: 50px;
    }
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
    top: 1350px;
    right: 0px;
    height: 600px;
    width: 300px;
    }
  }
  .floating_branch_4 {
    position: absolute;
    top: 3000px;
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
  .floating_branch_5 {
    position: absolute;
    top: 3200px;
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
  .news_link {
    margin-left: 20% !important;
  }
  .hide_normal {
    display: none !important;
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
        &.margin_top {
          margin-top: 40px;
        }
      }
      h4.sub_quote {
        font-size: 18px;
        font-weight: normal;
        position: relative;
        top: 0;
      }
      &.padded {
        padding-top: 40px;
      }
      }
      .button_text {
        margin-bottom: 40px;
      }
      .hide_normal {
        display: inline-block !important;
        margin-right: 20px;
      }
      .no_bottom_margin {
        margin-bottom: 0;
      }
      .hide_mquery {
        display: none;
      }
      .news_link {
        margin-left: 0 !important;
      }
      .content_full_width {
        padding-top: 40px;
        padding-bottom: 40px;
      }
    }
    .first_title {
      margin-top: 100;
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
    .margin_top_mquery {
      margin-top: 50px;
    }
  }
  @media (max-width: 940px) {
    .floating_branch_1, .floating_branch_4 {
      left: -230px;
    }
    .floating_branch_2, .floating_branch_5 {
      right: -200px;
    }
    .floating_branch_3 {
      right: -150px;
    }
    .altered_bg {
    background-image: url(${bg_branches_2});
    }
  }
  @media (max-width: 600px) {
    .floating_branch_3 {
      display: none;
    }
    .floating_branch_4 { 
      top: 3500px;
    }
    .floating_branch_5 { 
      top: 3700px;
    }
    .home_content {
      .content_left, .content_right, .content_full_width {
        h4.sub_quote {
        font-size: 14px;
        line-height: 18px;
        }
      }
    }
  }
  @media (max-width: 340px) {
    h4.quote {
        font-size: 48px;
        line-height: 72px;
      }
  }
`;

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      screen_width: typeof window !== "undefined" ? window.innerWidth : 3000
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ screen_width: window.innerWidth });
  }

  render() {
    return (
      <Home>
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene pin>
            <WelcomeScreen>
              <WelcomeTitle>Život je zmena.</WelcomeTitle>
              <WelcomeSubTitle>Akú potrebuje ten Váš?</WelcomeSubTitle>
              <img
                alt="maria galikova"
                src={logoImg}
                className="welcomePhoto"
              />
              <SliderSpace>
                <SliderWelcome />
              </SliderSpace>
              <MouseScrollIcon />
            </WelcomeScreen>
          </Scene>
          <Scene pin>
            <ContentWrapper>
              <img src={slide_2} alt="" className="hide" />
              <img src={slide_3} alt="" className="hide" />
              <div className="floating_branch_1">
                <img alt="branch_bg_1" src={bg_branch_2} />
              </div>
              <div className="floating_branch_2">
                <img alt="branch_bg_2" src={bg_branch_3} />
              </div>
              <div className="floating_branch_3">
                <img alt="olive_branch" src={olive_branch} />
              </div>
              <div className="floating_branch_4">
                <img alt="branch_bg_1" src={bg_branch_2} />
              </div>
              <div className="floating_branch_5">
                <img alt="branch_bg_2" src={bg_branch_3} />
              </div>
              <div className="home_content" id="trigger_foto1">
                <div className="content_left">
                  <h2 className="title first_title">Vitajte</h2>
                  <h3 className="sub_title">
                    Som PhDr. Mária Gáliková, MBE, váš osobný kouč a poradca,
                    odborníčka na spoločenskú etiketu.
                  </h3>
                  <p>
                    Ženy boli po celé stáročia chránené, boli zárukou zachovania
                    rodu a muži im dvorili. Ženy sú v spoločnosti považované za
                    významnejšie a muži sa k nim správajú galantne, vytvárajú im
                    maximálny komfort, jednoducho ich rozmaznávajú. Dovoľme im
                    to, nechajme sa, milé dámy, rozmaznávať.
                  </p>
                  <p>
                    Pomáham ženám získať zdravé sebavedomie, lebo ono je
                    predpokladom vyššej kvality života.
                  </p>
                  <Link className="button_text" to="/o_mne">
                    viac o mne
                  </Link>
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
                <div className="content_full_width">
                  <h4 className="quote margin_top">Želám si</h4>
                  <div className="qoute_wrapper">
                    <h4 className="sub_quote">
                      aby ľudia začali viac rozpoznávať skutočné hodnoty a
                      dostali medziľudské vzťahy na vyššiu úroveň
                    </h4>
                  </div>
                </div>
                <div className="content_left padded" id="trigger_foto2">
                  <p>
                    Veľkú časť mojich služieb tvoria konzultácie s klientkami
                    naživo.
                  </p>
                  <p>
                    Zdieľam so ženami svoje skúsenosti, svoje pohľady, a svoje
                    princípy, ktoré som vyselektovala pri svojej ceste životom,
                    a ktoré budú fungovať aj Vám.
                  </p>
                  <Controller>
                    <Scene
                      classToggle="reveal_animation"
                      triggerElement="#trigger_foto2"
                    >
                      <div className="illustration_foto_1 photo_wrapper">
                        <img
                          alt="girls chating"
                          src={foto_2}
                          className="illustration_foto_1"
                        />
                      </div>
                    </Scene>
                  </Controller>
                  <p>
                    Dôležité je žiť v prítomnosti a vedome. Minulosť nás
                    limituje a bráni nám dosahovať nové ciele. Všetko, čo v
                    živote máme, si priťahujeme vlastnými myšlienkmi, vedomými a
                    podvedomými vzorcami.
                  </p>
                  <p>
                    Spoločne prokonáme strachy, ktoré nás paralyzujú, a spolu sa
                    vydáme na cestu za šťastnejším plnohodnotným životom.
                  </p>
                  <p>
                    Naučím vás aj to, ako zvládnuť spoločenskú etiketu,
                    bezchybne stolovať a suverénne sa správať na rôznych
                    spoločenských podujatiach. Čím pozitívnejšie a istejšie
                    vystupujete, tým vás lepšie okolie hodnotí a prijíma.
                  </p>
                  <Link
                    className="button_text no_bottom_margin"
                    to="/kurzy_etikety"
                  >
                    viac o kurzoch
                  </Link>
                  <Link className="button_text hide_normal" to="/sluzby">
                    moje služby
                  </Link>
                </div>
                <div className="content_right hide_mquery">
                  <Carousel />
                </div>
              </div>
              <div className="altered_bg">
                <div className="home_content">
                  <div className="content_full_width">
                    <h4 className="quote">PREČO</h4>
                    <div className="qoute_wrapper">
                      <h4 className="sub_quote">
                        si myslím, že Vám viem pomôcť
                      </h4>
                    </div>
                  </div>
                  <Testimonials />
                </div>
              </div>
              <div className="home_content">
                <div className="content_full_width margin_top_mquery">
                  <News posts={this.props.posts} location="home" />
                  <Link className="button_text news_link" to="/aktuality">
                    všetky aktuality
                  </Link>
                </div>
              </div>
            </ContentWrapper>
          </Scene>
        </Controller>
      </Home>
    );
  }
}

export default withRouteData(Index);
