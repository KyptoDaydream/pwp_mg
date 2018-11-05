import React from 'react'
import { Router, Link, Head } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import Routes from 'react-static-routes'
import Logo from 'components/Logo'
import Linkedin from 'components/Linkedin'
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

const App = () => (
  <Router>
    <AppStyles>
      <Head>
        <meta charSet="UTF-8" />
        <title>Mária Gáliková</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css?family=Pacifico|Poppins:400,700,900&amp;subset=latin-ext" rel="stylesheet" />
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
)

export default App
