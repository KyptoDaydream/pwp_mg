import React from "react";
import { Head } from "react-static";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import foto_1 from "../assets/mg_foto_1.jpg";
import foto_3 from "../assets/mg_foto_2.jpg";
import foto_4 from "../assets/mg_foto_3.jpg";
import bg_branch_2 from "../assets/bg_branch_2.svg";
import bg_branch_3 from "../assets/bg_branch_3.svg";
import olive_branch from "../assets/olive_branch.png";

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
export default class AbouteMe extends React.Component {
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
          <div className="floating_branch_3">
            <img alt="olive_branch" src={olive_branch} />
          </div>
          <div className="floating_branch_4">
            <img alt="branch_bg_2" src={bg_branch_3} />
          </div>
          <div className="home_content">
            <div
              className="content_left padding_bottom_mquery"
              id="trigger_foto1"
            >
              <h2 className="title first_title">Každá žena je iná</h2>
              <h3 className="sub_title">
                V živote som však zažívala strach tak ako aj Vy.
              </h3>
              <p className="block_padded">
                Môj príbeh sa začal v Prahe, kde som v tom čase žila. Mala som
                20 rokov, keď som na ministerstve zahraničných vecí absolvovala
                kurz diplomatickeho protokolu. Tento kurz obsahoval spoločenskú
                etiketu, diplomatický protokol, etiketu stolovania, dress code.
              </p>
              <p className="block_padded" id="trigger_foto2">
                Nasledoval 5-ročný zahraničný pobyt s exmanželom v západnom
                Berlíne v pozícii manželky diplomata. Tu som mohla v praxi
                zúročiť všetky znalosti z oblasti protokolu a spoločenskej
                etikety.
              </p>
              <p className="block_padded">
                Počas pobytu v zahraničí som študovala nemecký jazyk na Herbert
                Universität v Berlíne.
              </p>
              <p className="block_padded">
                Po návrate do Prahy som založila cestovnú kanceláriu ITIS
                Reisen, s.r.o. V rámci môjho podnikania som pre klientov
                organizovala rôzne spoločenské podujatia, recepcie a bankety.
              </p>
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
            <div className="content_full_width hide_mquery">
              <Controller>
                <Scene
                  classToggle="reveal_animation"
                  triggerElement="#trigger_foto2"
                >
                  <div className="illustration_foto_2 photo_wrapper">
                    <img
                      alt="girls chating"
                      src={foto_3}
                      className="illustration_foto_2"
                    />
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="content_left padding_top_mquery">
              <p className="block_padded">
                Po niekoľkých rokoch som opäť vycestovala s exmanželom
                diplomatom do Bonnu. Absolvovala som nespočetné množstvo
                spoločenských podujatí za účasti významných VIP hostí, dokonca
                aj recepcie s členmi anglickej kráľovskej rodiny.
              </p>
              <p className="block_padded" id="trigger_foto3">
                Moje diplomatické skúsenosti a znalosti business etikety som
                žila v praxi. Po niekoľkých rokoch som sa rozviedla a
                presťahovala do Bratislavy, kde žijem aj dnes.
              </p>
              <p className="block_padded">
                Opäť som sa vydala a začala žiť nový šťastný súkromný život.
              </p>
              <p className="block_padded">
                Titul profesionálny manager som získala na The Open University v
                Londýne.
              </p>
              <Controller>
                <Scene
                  classToggle="reveal_animation"
                  triggerElement="#trigger_foto3"
                >
                  <div className="illustration_foto_1 photo_wrapper">
                    <img
                      alt="girls chating"
                      src={foto_4}
                      className="illustration_foto_1"
                    />
                  </div>
                </Scene>
              </Controller>
              <p className="block_padded">
                Následne som vyštudovala medzinárodné vzťahy, kde som tiež
                absolvovala skúšku z diplomatického protokolu. Titul PhDr. som
                získala na Fakulte masmédií PEVŠ.
              </p>
              <p className="block_padded">
                Pracovala som v súkromnej firme na pozícii account managera pre
                TOP klientov. Do širšieho povedomia som sa dostala ako
                marketingová riaditeľka TV JOJ. Na tejto pozícii som pracovala 5
                rokov.
              </p>
              <p className="block_padded">
                Neskôr som pôsobila ešte na pozíciách výkonnej a obchodnej
                riaditeľky iných firiem.
              </p>
              <p className="block_padded">
                Viem, čo znamenalo pre mňa rozhodnutie skončiť na rôznych
                riadiacich pozíciách – strach zo zmeny na jednej strane, a na
                druhej strane oslobodenie a naplnenie vlastných ambícií.
              </p>
            </div>
            <div className="content_right" />
            <div className="content_full_width">
              <h4 className="quote">Myslím,</h4>
              <div className="qoute_wrapper sub_qoute_wide">
                <h4 className="sub_quote_wide">
                  že osud človeka sa odvíja na základe volieb, ktoré človek
                  učiní a ja som si bola istá, že moja voľba je tá správna.
                  Vedela som, že môj život už nebude tým čím bol, a že ma
                  stretne niečo krásne, možno dokonca zázračné. Bolo to úžasné
                  precitnutie.
                </h4>
              </div>
            </div>
            <div className="content_left padded last_block">
              <p className="block_padded">
                Vďaka obrovskej podpore môjho manžela som zobrala osud do
                svojich rúk a založila vlastnú firmu MG Prime, s.r.o. Okrem
                marketingu sa venujem aj ženám, ich premenám, spoločenskej
                etikete, business etikete, etikete stolovania.
              </p>
              <p className="block_padded">
                Som vydatá, mám dve dospelé dcéry, jednu úžasnú vnučku a žijem
                šťastný a spokojný život. Mojím životným krédom je pomáhať tým,
                ktorí pomoc potrebujú. Robím to z lásky a bez očakávaní.
              </p>
              <p className="block_padded">
                Želám si, aby boli ľudia k sebe slušní a zdvorilí. Aby poznali
                pravidlá spoločenského správania. To je etiketa. Preto som sa
                rozhodla svoje vedomosti a dlhoročné skúsenosti zdieľať s
                ostatnými, ktorí sa chcú naučiť správať sa kultivovane.
              </p>
              <p className="block_padded">
                Vzhľadom na to, že prechovávam úctu a obdiv k osobnostiam, ktoré
                vo svojom živote dosiahli úspech a sú uznávaní aj za hranicami
                Slovenska, organizujem prestížne podujatie Beckovské slnko, na
                ktorom oceňujem týchto výnimočných ľudí.
              </p>
            </div>
          </div>
        </ContentWrapper>
      </Services>
    );
  }
}
