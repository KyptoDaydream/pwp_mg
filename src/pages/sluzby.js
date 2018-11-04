import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import foto_4 from '../assets/mg_foto_4.jpg'
import foto_5 from '../assets/mg_foto_5.jpg'
import foto_6 from '../assets/mg_foto_6.jpg'
import foto_7 from '../assets/mg_foto_7.jpg'
import foto_8 from '../assets/mg_foto_8.jpg'
import bg_branch_2 from '../assets/bg_branch_2.svg'
import bg_branch_3 from '../assets/bg_branch_3.svg'
import olive_branch from '../assets/olive_branch.png'
import data from '../data/carouselData'

const ServicesWrapper = styled.div`
overflow: hidden;
`
const ContentWrapper = styled.div`
  margin-top: 100px;
  background-color: var(--white);
  position: relative !important;
  .home_content {import { Link } from 'react-static';

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
      position: relative;
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
    top: 3000px;
    right: -120px;
    height: 500px;
    width: 500px;
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
  .service_illustration {
    width: 70%;
    margin: 200px 0 0 30%;
  }
`
export default class Services extends React.Component {
  render () {
    return (
      <ServicesWrapper>
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
          <div className="floating_branch_4">
            <img alt="branch_bg_2" src={bg_branch_3} />
          </div>
          <div className="home_content">
            <div className="content_left" id="trigger_foto1">
              <h2 className="title first_title">Vitajte</h2>
              <h3 className="sub_title">Myslím pozitívne a žijem vedome</h3>
              <p className="block_padded">Svoju víziu sa snažím dosiahnuť práve prostredníctvom žien, ktoré si začnú viac
uvedomovať svoju hodnotu a pri rozhodnutiach sa riadia viac srdcom ako len
rozumom. Svojim klientkam poskytujem nasledovné služby:
              </p>
            </div>
            <div className="content_right">
              <Controller>
                <Scene classToggle="reveal_animation" triggerElement="#trigger_foto1">
                  <div className="mg_foto_1 photo_wrapper">
                    <img alt="maria galikova" src={foto_4} className="mg_foto_1" />
                  </div>
                </Scene>
              </Controller>
            </div>

            <div className="content_left first_title">
              <h2 className="secondary_title">
                {data.properties[0].title}
              </h2>
              <p className="block_padded first_title" id="trigger_foto3">Naša myseľ prúdi neustále ako voda. Neobmedzený tok myšlienok na povinnosti, a
milión iných vecí vyčerpá každého.
              </p>
              <p className="block_padded">Pomôžem Vám získať nadhľad, iný uhol pohľadu
a sebadôveru. Podelím sa s Vami o moje skúsenosti a princípy, ktoré fungujú.
              </p>
              <p className="block_padded">Zmeníte svoj postoj k životu.
              </p>
              <Controller>
                <Scene classToggle="reveal_animation" triggerElement="#trigger_foto3">
                  <div className="illustration_foto_1 photo_wrapper">
                    <img alt="girls chating" src={foto_5} className="illustration_foto_1" />
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="content_right">
              <img className="service_illustration" alt={data.properties[0].title} src={data.properties[0].url} />
            </div>

            <div className="content_left first_title">
              <h2 className="secondary_title">
                {data.properties[3].title}
              </h2>
              <p className="block_padded first_title" id="trigger_foto2">V zdravom tele zdravý duch.
              </p>
              <p className="block_padded">Základné princípy vždy fungovali a na mojich klientkach
to rozhodne vidno. Pomôžem Vám nájsť motiváciu na zmenu životného štýlu - pohyb,
osobný tréner, životospráva, strava.
              </p>
              <p className="block_padded">Naučíte sa pravidelnosti, lebo len tak sa dajú dosiahnuť úspechy.
              </p>
              <Controller>
                <Scene classToggle="reveal_animation" triggerElement="#trigger_foto2">
                  <div className="illustration_foto_1 photo_wrapper">
                    <img alt="girls chating" src={foto_6} className="illustration_foto_1" />
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="content_right">
              <img className="service_illustration" alt={data.properties[0].title} src={data.properties[3].url} />
            </div>

            <div className="content_left first_title">
              <h2 className="secondary_title">
                {data.properties[2].title}
              </h2>
              <p className="block_padded first_title" id="trigger_foto4">Príležitosť vzbudiť dobrý prvý dojem máte vždy len jednu. Pomôžem Vám pri zmene
vizáže, budovaní štýlu či výbere kozmetiky a salónu.
              </p>
              <p className="block_padded">Zistíte čo Vám sluší, ako sa obliekať a ako by mal vyzerať Váš šatník.
              </p>
              <Controller>
                <Scene classToggle="reveal_animation" triggerElement="#trigger_foto4">
                  <div className="illustration_foto_1 photo_wrapper">
                    <img alt="girls chating" src={foto_7} className="illustration_foto_1" />
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="content_right">
              <img className="service_illustration" alt={data.properties[0].title} src={data.properties[2].url} />
            </div>

            <div className="content_left first_title">
              <h2 className="secondary_title">
                {data.properties[1].title}
              </h2>
              <p className="block_padded first_title" id="trigger_foto5">Niekedy sa ženy ocitnú v pozícii, na ktorú ich nikto nepripravil.
              </p>
              <p className="block_padded">Pomôžem Vám zhostiť
sa novej roli, rozvinúť Vaše prirodzené "soft skills" a osvojiť si bontón pre rôzne
príležitosti.
              </p>
              <p className="block_padded">Zbavíte sa pocitu menejcennosti v spoločnosti, lebo Vám chýbajú znalosti etikety.
              </p>
              <Controller>
                <Scene classToggle="reveal_animation" triggerElement="#trigger_foto5">
                  <div className="illustration_foto_1 photo_wrapper">
                    <img alt="girls chating" src={foto_8} className="illustration_foto_1" />
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="content_right">
              <img className="service_illustration" alt={data.properties[0].title} src={data.properties[1].url} />
            </div>
            
          </div>
        </ContentWrapper>
      </ServicesWrapper>
    )
  }
}
