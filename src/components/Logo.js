import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import logo from '../assets/logo.png'

const LogoWrapper = styled.div`
  width: 92px;
  height: 84.5px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 99999;
  
  .logo {
    background-image: url(${logo});
    background-size: cover;
    width: 76px;
    height: 70px;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  svg {
    max-width: 100%;
    max-height: 100%; 
  }

  .st0{fill:#F69676;}
  .st1{fill:#89A4AF;}
  .st2{fill:#05444E;}
  .st3{fill:#FAA61A;}
`

class Logo extends React.Component {
  /*
        <svg version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px" y="0px" width="166.1px" height="152.7px" viewBox="0 0 166.1 152.7"
        >
          <path id="XMLID_4_" className="st0" d="M131.7,78.7c0,31.6-20.2,57.3-57.3,57.3s-54.1-29.9-57.3-57.3s4.8-57.3,57.3-57.3
          C108.7,21.4,131.7,47,131.7,78.7z" />
          <path id="XMLID_3_" className="st1" d="M106.1,95.2c0,10.8-8.8,19.6-19.6,19.6s-17.6-7.5-19.6-19.6s2.5-22.7,19.6-19.6
          C103.6,78.7,106.1,84.3,106.1,95.2z" />
          <path id="XMLID_2_" className="st2" d="M166.1,36.7c0,21.1-14.4,30.3-34.3,34.3c-19.8,4-34-23.3-34.3-34.3s0-24.3,34.3-34.3
          S166.1,15.6,166.1,36.7z" />
          <path id="XMLID_1_" className="st3" d="M32.9,136c0,9.1-6.3,14.4-16.5,16.5S0,145.1,0,136s2.8-14.3,16.5-16.5
          C30.1,117.4,32.9,126.9,32.9,136z" />
        </svg>
        */
  render () {
    return (
      <LogoWrapper>
        <Link to="/">
          <div className="logo" />
        </Link>
      </LogoWrapper>
    )
  }
}

export default Logo
