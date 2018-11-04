import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import foto_1 from '../assets/mg_foto_1.jpg'
import foto_3 from '../assets/mg_foto_2.jpg'
import foto_4 from '../assets/mg_foto_3.jpg'
import bg_branch_2 from '../assets/bg_branch_2.svg'
import bg_branch_3 from '../assets/bg_branch_3.svg'
import olive_branch from '../assets/olive_branch.png'

const Services = styled.div`
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
`
export default class AbouteMe extends React.Component {
  render () {
    return (
      <Services>
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
              <h2 className="title first_title">Každá žena je iná</h2>
              <h3 className="sub_title">V živote som však zažívala strach tak ako aj Vy.</h3>
              <p className="block_padded">Mária Gáliková začala svoj príbeh premeny na Ministerstve zahraničných vecí v
Prahe, kde absolvovala kurz diplomatickej praxe. Ďalších 5 rokov prežila v
Západnom Berlíne, ako manželka diplomata. Absolvovala tu štúdium nemeckého
jazyka na Herbert Universität Berlín. Po návrate do Prahy založila cestovnú
agentúru ITIS Reisen s.r.o. kde riadila tím 10 zamestnancov.
              </p>
              <p className="block_padded" id="trigger_foto2">Nie dlho po tom ako sa usadila nasledovalo sťahovanie na Veľvyslanectvo SR
v Bonne, ako manželka vojenského pridelenca. Bolo to práve tu, kde vycibrila svoje
diplomatické schopnosti.
              </p>
              <p className="block_padded">Po získaní titulu profesionálneho manažéra na The Open University London jej
ďalšie kroky smerovali do Bratislavy.
              </p>
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
              <Controller>
                <Scene classToggle="reveal_animation" triggerElement="#trigger_foto2">
                  <div className="illustration_foto_2 photo_wrapper">
                    <img alt="girls chating" src={foto_3} className="illustration_foto_2" />
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="content_left">
              <p className="block_padded">Vyštudovala tu medzinárodné vzťahy a následne získala doktorát na Paneurópskej
vysokej škole, Fakulta masmédií.
              </p>
              <p className="block_padded">Nasledovala premena v súkromnom živote - rozvod a nový začiatok v Bratislave.
Popri svojom pracovnom nasadení vychovávala dve dcéry a stretla nového partnera.
              </p>
              <p className="block_padded" id="trigger_foto3">Postupne sa kariéra Márie Gálikovej začala špecializovať na oblasť marketingu.
Zastávala pozíciu Account manažér v globálnej agentúre EURO RSCG
ARTMEDIA a.s.. Riadila tu prípravu a realizáciu projektov pre TOP klientov
spoločnosti.
              </p>
              <Controller>
                <Scene classToggle="reveal_animation" triggerElement="#trigger_foto3">
                  <div className="illustration_foto_1 photo_wrapper">
                    <img alt="girls chating" src={foto_4} className="illustration_foto_1" />
                  </div>
                </Scene>
              </Controller>
              <p className="block_padded">Do širšieho povedomia sa dostala v pozícii marketingový riaditeľ a mediálny
reprezentant v TV JOJ. Neskôr riadila tím 20 ľudí z pozície Výkonný riaditeľ Prvej
Univerzitnej a.s. a tiež Marketingový a obchodný riaditeľ spoločnosti Media
Vision s.r.o.
              </p>
              <p className="block_padded">Mária vie čo je to zodpovednosť. Strach zo zmeny. Tlak vysokej pozície. Tlak
spoločnosti a tlak vlastných ambícií.
              </p>
            </div>
            <div className="content_right" />
            <div className="content_full_width">
              <h4 className="quote">Myslím,</h4>
              <div className="qoute_wrapper sub_qoute_wide">
                <h4 className="sub_quote_wide">že osud človeka sa odvíja na základe volieb, ktoré človek učiní a ja som si bola
istá, že moja voľba je tá správna. Vedela som, že môj život už nebude tým čím bol, a že
ma stretne niečo krásne, možno dokonca zázračné. Bolo to úžasné precitnutie.
                </h4>
              </div>
            </div>
            <div className="content_left padded last_block">
              <p className="block_padded">Práve preto sa rozhodla založiť si firmu a vziať svoj osud do vlastných rúk.
Prostredníctvom MG Prime, s.r.o. sa dnes venuje marketingovému poradenstvu,
organizuje eventy, módne prehliadky či prestížne podujatie Beckovské slnko.
              </p>
              <p className="block_padded">Mária Gáliková však nie je len manažérka a podnikateľka. Je vydatá, má dve dospelé
dcéry a vnučku. Žije šťastný život a váži si to. Svoje schopnosti, skúsenosti a
vedomosti sa preto rozhodla predať ďalej ľuďom, ktorým rozumie najlepšie. Ženám
ako ste Vy.
              </p>
            </div>
          </div>
        </ContentWrapper>
      </Services>
    )
  }
}
