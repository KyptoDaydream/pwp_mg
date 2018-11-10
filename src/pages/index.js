import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Controller, Scene } from 'react-scrollmagic'
import logoImg from '../assets/mg_welcome_photo.png'
import bg_branch from '../assets/bg_branch.svg'
import bg_branches from '../assets/bg_branches.svg'
import bg_branch_2 from '../assets/bg_branch_2.svg'
import bg_branch_3 from '../assets/bg_branch_3.svg'
import olive_branch from '../assets/olive_branch.png'
import foto_1 from '../assets/mg_foto_1.jpg'
import foto_2 from '../assets/illustration_foto_1.jpg'
import SliderWelcome from '../components/SliderWelcome'
import MouseScrollIcon from '../components/MouseScrollIcon'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'

const Home = styled.div`
overflow: hidden;
`
const WelcomeScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--white);  
  .welcomePhoto {
    position: absolute;
    bottom: 0;
    left: 340px;
    z-index: 9990;
  }
`
const WelcomeTitle = styled.h1`
  position: absolute;
  font-family: var(--titleFontFamily);
  font-size: 80px;
  line-height: 1.1em;
  left: 230px;
  bottom: 120px;
  color: var(--red);
  z-index: 9991;
  max-width: 400px;
  animation: showup 1s;
  @keyframes showup {
    0% {opacity:0;}
    50% {opacity:0;}
    100% {opacity:1;}
}
`
const WelcomeSubTitle = styled.h2`
  position: absolute;
  font-family: var(--titleFontFamily);
  font-size: 24px;
  text-transform: uppercase;
  line-height: 1.1em;
  left: 230px;
  bottom: 110px;
  color: var(--blue);
  z-index: 9991;
  font-weight: 400;
  max-width: 400px;
`
const SliderSpace = styled.div`
  width: var(--menuWidth);
  height: 100vh;
  float: right;
  background-color: var(--white);
  position: relative;
`
const ContentWrapper = styled.div`
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
  .hide {
    display: none;
  }
`

export default class Index extends React.Component {
  render () {
    return (
      <Home>
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
          <Scene pin>
            <WelcomeScreen>
              <WelcomeTitle>Život je zmena.</WelcomeTitle>
              <WelcomeSubTitle>Akú potrebuje ten Váš?</WelcomeSubTitle>
              <img alt="maria galikova" src={logoImg} className="welcomePhoto" />
              <SliderSpace>
                <SliderWelcome />
              </SliderSpace>
              <MouseScrollIcon />
            </WelcomeScreen>
          </Scene>
          <Scene pin>
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
              <div className="home_content" id="trigger_foto1">
                <div className="content_left">
                  <h2 className="title first_title">Vitajte</h2>
                  <h3 className="sub_title">Som PhDr. Mária Gáliková, Váš životný kouč a poradca.</h3>
                  <p>Pomáham ženám žiť v prítomnosti a netrápiť sa minulosťou.</p>
                  <p>Spolu prekonáme strach, ktorý Vás paralyzuje a vydáme sa na cestu za šťastnejším a plnohodnotnejším životom.</p>
                  <Link className="button_text" to="/o_mne">viac o mne</Link>
                </div>
                <div className="content_right">
                  <Controller>
                    <Scene classToggle="reveal_animation" triggerElement="#trigger_foto1">
                      <div className="mg_foto_1 photo_wrapper">
                        <img alt="maria galikova" src={foto_1} className="mg_foto_1" />
                      </div>
                    </Scene>
                  </Controller>
                </div>
                <div className="content_full_width">
                  <h4 className="quote">Želám si</h4>
                  <div className="qoute_wrapper">
                    <h4 className="sub_quote">aby ľudia začali viac rozpoznávať skutočné hodnoty a dostali medziľudské
                      vzťahy na vyššiu úroveň
                    </h4>
                  </div>
                </div>
                <div className="content_left padded" id="trigger_foto2">
                  <p>Veľkú časť mojich služieb tvoria konzultácie s klientkami naživo.</p>
                  <p>Zdieľam so ženami svoje skúsenosti, svoje pohľady, a svoje princípy, ktoré som
                    vyselektovala pri svojej ceste životom, a ktoré budú fungovať aj Vám.
                  </p>
                  <Controller>
                    <Scene classToggle="reveal_animation" triggerElement="#trigger_foto2">
                      <div className="illustration_foto_1 photo_wrapper">
                        <img alt="girls chating" src={foto_2} className="illustration_foto_1" />
                      </div>
                    </Scene>
                  </Controller>
                  <p>Podstatou je zmeniť svoju energiu a svoje vibrácie, ktoré vysielate navonok. Zmeniť svoj
                    postoj k jednotlivým situáciám. Ak zmeníte svoj postoj, otvoria sa Vám nové možnosti a
                    príležitosti žiť šťastnejší život.
                  </p>
                  <p>Chcem pomôcť všetkým ženám nájsť odvahu a čeliť neznámemu. Ak chcete mať
                    sebavedomie, musíte predovšetkým spoznať samú seba. Potom viete veriť vo svoje
                    schopnosti, a teda konať, prejavovať sa a rozprávať ako zdravo sebavedomý človek.
                  </p>
                  <p>Medzi moje základné hodnoty, na ktorých staviam svoje služby sú: úprimnosť,
                    autentickosť, spoľahlivosť, ústretovosť a empatia.
                  </p>
                  <Link className="button_text" to="/o_mne">viac o mne</Link>
                </div>
                <div className="content_right">
                  <Carousel />
                </div>
              </div>
              <div className="altered_bg">
                <div className="home_content">
                  <div className="content_full_width">
                    <h4 className="quote">PREČO</h4>
                    <div className="qoute_wrapper">
                      <h4 className="sub_quote">si myslím, že Vám viem pomôcť
                      </h4>
                    </div>
                  </div>
                  <Testimonials />
                </div>
              </div>
            </ContentWrapper>
          </Scene>
        </Controller>
      </Home>
    )
  }
}
