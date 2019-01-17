import React from 'react'
import { Router, Link, Head } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Routes from 'react-static-routes'
import Logo from 'components/Logo'
import Linkedin from 'components/Linkedin'
import ReactGA from 'react-ga'
import ContactButton from './components/ContactButton'
import HamburgerMenu from './components/BurgerMenu'
import title_bg from './assets/title_bg.svg'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`
const AppStyles = styled.div`
--white: #FFFFFF;
--red: #F69676; 
--pink: #F6C2AD;
--sliderBackground: #F2EFEA;
--blue: #212D50;
--brightBlue: #3A74BA;
--lightBlue: #EBF1F9;
--blueTransparent: rgba(33,45,80,0.7);
--titleFontFamily: 'Poppins', sans-serif;
--welcomeFontFamily: 'Pacifico', cursive;
--menuWidth: 800px;
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  nav {
    display: none;
    width: 100%;
    background: #108db8;
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }
  .content {
    padding: 0;
  }
  img {
    max-width: 100%;
  }
  p {
    color: #7d8292;
    font-size: 13px;
    font-weight: 300;
    font-family: var(--titleFontFamily);

  }
  h2.title {
    color: var(--red);
    font-family: var(--titleFontFamily);
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 44px;
  }
  h2.secondary_title {
    color: var(--blue);
    font-family: var(--titleFontFamily);
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 44px;
    padding-left: 20px;
    background-image: url(${title_bg});
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  h3.sub_title {
    font-family: var(--titleFontFamily);
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 1.04px
    line-height: 21px;
    margin-bottom: 40px;
    margin-top: 0px;
    text-transform: uppercase;
    color: var(--blue);
  }
  h4.quote {
    font-family: var(--titleFontFamily);
    font-weight: 900;
    font-size: 185px;
    line-height: 200px;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    color: var(--lightBlue);
  }
  h4.sub_quote {
    font-family: var(--titleFontFamily);
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    margin: 0;
    position: absolute;
    text-align: center;
    width: 60%;
    padding-left: 20%;
    top: -70px;
    color: var(--red);
  }
  a.button_text {
    color: var(--blue);
    font-weight: 700;
    font-family: var(--titleFontFamily);
    font-size: 15px;
    line-height: 50px;
    margin-top: 30px;
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
`
const PreloaderWindow = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #F2EFEA;
  position: fixed;
  transition: 0.5s;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #F69676;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
  .loader_wrapper {
    color: #212D50;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 1.04px
    line-height: 21px;
    margin-top: 20px;
    text-transform: uppercase;
    flex-basis: 100%;
    text-align: center;
    width: 100%;
    min-width: 100%;
  }
	.st0{fill:#F69676;}
	.st1{fill:#89A4AF;}
	.st2{fill:#05444E;}
	.st3{fill:#FAA61A;}
	.st4{fill:#393D3F;}
  @media (max-width: 600px) {  
    .loader_wrapper {
      margin-top: 0;
    }
  }
`
const loading_style = {
  zIndex: 100000000,
}

ReactGA.initialize('UA-130310753-1')
ReactGA.pageview('/homepage')

const App = () => (
  <Preloader className="preload" style={loading_style}>
    <Placeholder>
      <PreloaderWindow>
        <div>
          <svg version="1.1" x="0px" y="0px" width="250px" height="125px" viewBox="0 0 766.5 245.1" preserveAspectRatio="xMinYMin">
            <g>
              <path id="XMLID_10_" className="st0" d="M211.2,126.2c0,50.8-32.4,91.9-91.9,91.9s-86.8-47.9-91.9-91.9s7.6-91.9,91.9-91.9
                C174.5,34.3,211.2,75.5,211.2,126.2z"/>
              <path id="XMLID_9_" className="st1" d="M170.2,152.7c0,17.4-14.1,31.5-31.5,31.5s-28.3-12-31.5-31.5c-3.2-19.5,3.9-36.5,31.5-31.5
                S170.2,135.3,170.2,152.7z"/>
              <path id="XMLID_8_" className="st2" d="M266.6,58.9c0,33.9-23.2,48.6-55,55c-31.8,6.5-54.6-37.4-55-55s0-39,55-55S266.6,25,266.6,58.9z
                "/>
              <path id="XMLID_5_" className="st3" d="M52.9,218.2c0,14.6-10.1,23.1-26.4,26.4S0,232.8,0,218.2s4.5-23,26.4-26.4
                C48.3,188.3,52.9,203.6,52.9,218.2z"/>
              <g>
                <path className="st4" d="M333.7,49.6h10.2l1,5.6h0.3c1.7-3.7,4.6-6.7,9.9-6.7c4,0,6.8,2.6,7.9,7.5c1.6-4.1,4.9-7.5,10.1-7.5
                  c6.5,0,10.2,5.6,10.2,14.7v32h-12.9V64.2c0-2.8-0.7-4.2-2.5-4.2c-1.7,0-2.9,1.4-4.2,4.4v30.8h-10.6V64.2c0-2.8-0.8-4.2-2.6-4.2
                  c-1.7,0-2.8,1.4-4,4.4v30.8h-12.9V49.6z"/>
                <path className="st4" d="M391.4,82.6c0-10.2,8.5-15.4,30-16.8c-0.5-4.1-3.6-6.6-9.7-6.6c-4.4,0-8.8,1.7-13.9,4.3l-4.8-8.9
                  c6.3-3.6,13.6-6.2,21.4-6.2c12.8,0,20.6,6.7,20.6,20.7v26.1h-11.1l-1-5.1h-0.3c-4.6,3.5-10.3,6.3-16.2,6.3
                  C397.2,96.4,391.4,90.3,391.4,82.6z M421.5,81.5V74c-13.4,0.7-17,3.6-17,7.5c0,2.9,2.5,4.4,6.3,4.4
                  C414.8,85.9,418.2,84,421.5,81.5z M408,37l14.1-16.8l9.2,9l-16.6,14.4L408,37z"/>
                <path className="st4" d="M451.6,49.6h11.1l1.1,10h0.3c4.5-7.5,11.2-11.1,18.5-11.1c4,0,6.1,0.7,8.8,1.8l-2.7,11.4
                  c-2.9-0.9-4.7-1.3-8.1-1.3c-5.7,0-11.5,2.9-15.4,11.1v23.8h-13.6V49.6z"/>
                <path className="st4" d="M521.9,60.2h-18.4V49.6h31.9v45.7h-13.6V60.2z M519,34.2c0-5,3.8-8.4,9-8.4c5.2,0,9,3.5,9,8.4
                  c0,5-3.8,8.3-9,8.3C522.8,42.5,519,39.2,519,34.2z"/>
                <path className="st4" d="M557.1,82.6c0-10.2,8.5-15.4,30-16.8c-0.5-4.1-3.6-6.6-9.7-6.6c-4.4,0-8.8,1.7-13.9,4.3l-4.8-8.9
                  c6.3-3.6,13.6-6.2,21.4-6.2c12.8,0,20.6,6.7,20.6,20.7v26.1h-11.1l-1-5.1h-0.3c-4.6,3.5-10.3,6.3-16.2,6.3
                  C562.9,96.4,557.1,90.3,557.1,82.6z M587.2,81.5V74c-13.4,0.7-17,3.6-17,7.5c0,2.9,2.5,4.4,6.3,4.4
                  C580.5,85.9,583.9,84,587.2,81.5z"/>
                <path className="st4" d="M335.3,213.5c0-3.7,2.4-6.8,7.1-9.1V204c-2.5-1.6-4.6-3.9-4.6-7.8c0-3.1,2.2-6.3,5.5-8.6v-0.4
                  c-3.4-2.2-6.1-6.4-6.1-11.7c0-11,9.2-16.6,19.6-16.6c2.7,0,5.3,0.4,7.5,1.1h18.6v10h-9.2c1,1.4,2,3.6,2,6
                  c0,10.5-8.2,15.3-18.8,15.3c-1.8,0-4-0.3-6.3-0.9c-1.4,1-2,1.8-2,3.4c0,2.4,2.4,3.4,7.8,3.4h8.4c12,0,18.6,3.3,18.6,11.6
                  c0,9.5-10.6,16.5-27.3,16.5C344.1,225.2,335.3,221.7,335.3,213.5z M370.3,211.1c0-2.9-2.8-3.5-8-3.5h-5.8c-3.3,0-5.3-0.2-6.9-0.6
                  c-2.3,1.4-3.3,2.8-3.3,4.5c0,3.4,4.5,5.2,11.6,5.2C365.3,216.6,370.3,214.2,370.3,211.1z M363.7,175.5c0-4.8-3.1-7.4-6.9-7.4
                  c-3.8,0-6.9,2.6-6.9,7.4c0,5,3.1,7.6,6.9,7.6C360.6,183.1,363.7,180.5,363.7,175.5z"/>
                <path className="st4" d="M391.4,193.1c0-10.2,8.5-15.4,30-16.8c-0.5-4.1-3.6-6.6-9.7-6.6c-4.4,0-8.8,1.7-13.9,4.3l-4.8-8.9
                  c6.3-3.6,13.6-6.2,21.4-6.2c12.8,0,20.6,6.7,20.6,20.7v26.1h-11.1l-1-5.1h-0.3c-4.6,3.5-10.3,6.3-16.2,6.3
                  C397.2,206.9,391.4,200.8,391.4,193.1z M421.5,192v-7.5c-13.4,0.7-17,3.6-17,7.5c0,2.9,2.5,4.4,6.3,4.4
                  C414.8,196.4,418.2,194.5,421.5,192z M408,147.5l14.1-16.8l9.2,9l-16.6,14.4L408,147.5z"/>
                <path className="st4" d="M459.9,187.9v-36h-14.4v-10.6h27.9v47.2c0,5.6,3.6,7.5,7.4,7.5c2.1,0,4.3-0.4,7.1-1.5l3,10
                  c-4.7,1.6-8,2.5-13.6,2.5C465.9,206.9,459.9,199.5,459.9,187.9z"/>
                <path className="st4" d="M521.9,170.7h-18.4v-10.6h31.9v45.7h-13.6V170.7z M519,144.7c0-5,3.8-8.4,9-8.4c5.2,0,9,3.5,9,8.4
                  c0,5-3.8,8.3-9,8.3C522.8,152.9,519,149.6,519,144.7z"/>
                <path className="st4" d="M558.4,141.3H572v37.2h0.4l16.8-18.4h14.8l-32,34.2v11.5h-13.6V141.3z M577.5,185.1l7.8-8.4l20.2,29.1h-14.7
                  L577.5,185.1z"/>
                <path className="st4" d="M611.1,182.9c0-15.2,11.2-24,23.3-24s23.3,8.8,23.3,24c0,15.2-11.2,23.9-23.3,23.9S611.1,198.1,611.1,182.9z
                  M643.8,182.9c0-7.9-3.2-13-9.4-13c-6.2,0-9.4,5.1-9.4,13c0,7.9,3.2,13,9.4,13C640.6,195.9,643.8,190.8,643.8,182.9z"/>
                <path className="st4" d="M664.9,160.1h13.6l7.2,21.5c1.5,4.6,2.7,9.3,4.1,14.1h0.4c1.4-4.8,2.6-9.5,4.1-14.1l7.2-21.5h12.9l-16.7,45.7
                  h-15.5L664.9,160.1z"/>
                <path className="st4" d="M722.9,193.1c0-10.2,8.5-15.4,30-16.8c-0.5-4.1-3.6-6.6-9.7-6.6c-4.4,0-8.8,1.7-13.9,4.3l-4.8-8.9
                  c6.3-3.6,13.6-6.2,21.4-6.2c12.8,0,20.6,6.7,20.6,20.7v26.1h-11.1l-1-5.1h-0.3c-4.6,3.5-10.3,6.3-16.2,6.3
                  C728.6,206.9,722.9,200.8,722.9,193.1z M752.9,192v-7.5c-13.4,0.7-17,3.6-17,7.5c0,2.9,2.5,4.4,6.3,4.4
                  C746.2,196.4,749.7,194.5,752.9,192z M739.5,147.5l14.1-16.8l9.2,9l-16.6,14.4L739.5,147.5z"/>
              </g>
            </g>
          </svg>
        </div>
        <div className="loader_wrapper">
          stránka sa načítava
        </div>
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </PreloaderWindow>
    </Placeholder>
    <Router>
      <AppStyles>
        <Head>
          <meta charSet="UTF-8" />
          <title>Mária Gáliková</title>
          <meta name="keywords" content="maria galikova,zivotny kouc,zivotny poradca,zivotna zmena,poradca pre zeny" />
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Pacifico|Poppins:300,400,700,900&amp;subset=latin-ext" rel="stylesheet" />
        </Head>
        <Logo />
        <HamburgerMenu />
        <Linkedin />
        <ContactButton />
        <nav>
          <Link exact to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </AppStyles>
    </Router>
  </Preloader>
  
)

export default App


