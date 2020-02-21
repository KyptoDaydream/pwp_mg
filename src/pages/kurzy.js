import React from "react";
import styled from "styled-components";
import { withRouteData, Head } from "react-static";
import { Controller, Scene } from "react-scrollmagic";
import foto_9 from "../assets/mg_foto_9.jpg";
import bg_branch_2 from "../assets/bg_branch_2.svg";
import bg_branch_3 from "../assets/bg_branch_3.svg";
import bg_branch_4 from "../assets/bg_branch_4.svg";
import bg_branch_5 from "../assets/bg_branch_5.svg";
import olive_branch from "../assets/olive_branch.png";

const ServicesWrapper = styled.div`
  overflow: hidden;
`;
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
    .content_wrapper {
      display: flex;
      flex-basis: 100%;
      width: 100%;
      max-width: 100%;
      flex-direction: row;
      &.reverse {
        flex-direction: row-reverse;
        .content_left {
          padding-left: 0;
          padding-right: 185px;
        }
      }
    }
    .content_full_width {
      z-index: 10;
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
      object-fit:cover;
      height: 100%;
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
  .floating_branch_4 {
    position: absolute;
    top: 3500px;
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
  .floating_branch_5 {
    position: absolute;
    top: 2500px;
    left: -230px;
    height: 600px;
    width: 600px;
    animation: move_branch_1 15s infinite linear;
    @keyframes move_branch_1 {
    0% {transform: rotate(0deg);}
    25% {transform: rotate(6deg);}
    50% {transform: rotate(0deg);}
    75% {transform: rotate(-6deg);}
    100% {transform: rotate(0deg);}
    }
  }
  .floating_branch_6 {
    position: absolute;
    top: 4500px;
    left: -230px;
    height: 600px;
    width: 600px;
    animation: move_branch_1 15s infinite linear;
    @keyframes move_branch_1 {
    0% {transform: rotate(0deg);}
    25% {transform: rotate(6deg);}
    50% {transform: rotate(0deg);}
    75% {transform: rotate(-6deg);}
    100% {transform: rotate(0deg);}
    }
  }
  .floating_branch_3 {
    position: absolute;
    top: 1300px;
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
    .content_wrapper .content_right {
      display: none;
    }
    .home_content .content_wrapper.reverse {
      flex-direction: row;
    }
    .home_content .content_wrapper.reverse .content_left {
      padding: 0;
    }
    .floating_branch_3 {
      right: -150px;
    }
    .floating_branch_4 {
      display: none;
    }
    .floating_branch_5 {
      display: none;
    }
    .floating_branch_6 {
      display: none;
    }
    .hide_mquery {
      display: none;
    }
    .mg_foto_1 {
      margin: 0 auto !important;
      padding-bottom: 20px;
    }
    .service_illustration {
      width: 70%;
      margin: 0 15% 40px 15%;
    }
    #trigger_foto1 {
      padding-bottom: 40px;
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
    .floating_branch_4 {
      right: -260px;
    }
    .first_title {
      margin-top: 50px;
    }
  }
  @media (max-width: 600px) {
    .floating_branch_3 {
      display: none;
    }
  }
`;
const StrongTitle = styled.span`
  display: block;
  padding-top: 20px;
  font-weight: 600;
`;
class Courses extends React.Component {
  render() {
    console.log(this.props.posts_courses);
    const rendered_elements = [];
    let iterator = 0;
    let block_id = "";
    let wrapper_class = "content_wrapper";
    let title_class = "secondary_title";
    this.props.posts_courses.forEach(post => {
      iterator++;
      wrapper_class =
        iterator % 2 === 1 ? "content_wrapper" : "content_wrapper reverse";
      title_class =
        iterator === 1 ? "secondary_title first_title" : "secondary_title";
      block_id = `trigger_photo_${iterator}`;
      rendered_elements.push(
        <div className={wrapper_class}>
          <div className="content_left">
            <h2 className={title_class}>{post.data.title}</h2>
            <p className="block_padded first_title" id={block_id}>
              {post.data.brief}
            </p>
            <a
              className="button_text news_button"
              href={`/kurzy/${post.data.slug}`}
            >
              viac info
            </a>
            <Controller>
              <Scene
                classToggle="reveal_animation"
                triggerElement={"#" + block_id}
              >
                <div className="illustration_foto_1 photo_wrapper">
                  <img
                    alt="cours_photo"
                    src={post.data.thumbnail}
                    className="illustration_foto_1"
                  />
                </div>
              </Scene>
            </Controller>
          </div>
          <div className="content_right" />
        </div>
      );
    });
    return (
      <ServicesWrapper>
        <Head>
          <meta
            name="keywords"
            content="maria galikova mbe,etiketa kurzy,kurzy etikety,s etiketou na slovicko,business manners"
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
          <div className="floating_branch_5">
            <img alt="branch_bg_4" src={bg_branch_4} />
          </div>
          <div className="floating_branch_6">
            <img alt="branch_bg_5" src={bg_branch_5} />
          </div>
          <div className="home_content">
            <div className="content_left" id="trigger_foto1">
              <h2 className="title first_title">S etiketou na slovíčko</h2>
              <h3 className="sub_title">
                "Slušnosť nič nestojí, ale môže priniesť veľké zisky tak
                jednotlivcovi, ako aj firme." B. C. Forbes
              </h3>
              <p className="block_padded">
                Etiketa je súbor pravidiel spoločenského správania. V
                skutočnosti nás tieto pravidlá vedú k citlivému prístupu k
                ostatným, k ohľaduplnosti a empatii.
              </p>
              <p>
                Etiketa nie je strašiak, je to návod, ktorý vám pomáha počas
                pracovných či spoločenských udalostí, ale aj v bežnom živote.
                Čím lepšie ste pripravení, tým sa na rôznych akciách pohybujete
                s väčšou istotou, samozrejmosťou a uvoľnenosťou. Bez rozpakov z
                toho, ako sa pozdraviť, ako sa obliecť na rokovanie, ako správne
                držať pohár, či ktorý príbor použiť, si budete výnimočné
                podujatia užívať plnými dúškami. Pravidlá etikety nás chránia
                pred spoločenskými prešľapmi
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
                      src={foto_9}
                      className="mg_foto_1"
                    />
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="content_full_width">
              <h4 className="quote">Etiketa</h4>
              <div className="qoute_wrapper sub_qoute_wide">
                <h4 className="sub_quote_wide">
                  otvára dvere k akémukoľvek kontaktu. Či už ide o spoločenskú
                  udalosť, komunikáciu na úradoch, obchodných rokovaniach alebo
                  v osobnom živote.
                </h4>
              </div>
            </div>
            <div className="content_left">
              <p>
                Je to ako so šoférovaním. Ak si pravidlá osvojíte, budete ich
                považovať za súčasť svojho života. Vaše správanie bude
                prirodzené a pritom v súlade s pravidlami etikety. Budete
                príjemnými spoločníkmi, ktorí bez stresu komunikujú, a ľudia sa
                s vami budú chcieť stretnúť aj nabudúce.
                <StrongTitle>Vyberte si svoj kurz etikety:</StrongTitle>
              </p>
            </div>
            <div className="content_right"></div>

            {rendered_elements}
          </div>
        </ContentWrapper>
      </ServicesWrapper>
    );
  }
}

export default withRouteData(Courses);
