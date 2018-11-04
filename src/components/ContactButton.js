import * as React from 'react'
import styled from 'styled-components'
import waveImg from '../assets/wave2.svg'
import ContactModal from './ContactModal'

const ContactWrapper = styled.div`
  position: fixed;
  z-index: 100000;
`
const TextWrapper = styled.div`
  -webkit-transform-origin: 100% 50%;
  -ms-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  -webkit-transform: translateY(-50%) rotate(90deg);
  -ms-transform: translateY(-50%) rotate(90deg);
  transform: translateY(-50%) rotate(90deg);
  position: fixed;
  text-align: center;
  line-height: 1;
  z-index: 5;
  font-size: 1rem;
  font-weight: 500;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  top: 55vh;
  right: 2.3em;
  font-family: var(--titleFontFamily);
  color: var(--blue);
`
const ContactLink = styled.div`
  display: block;
  position: relative;
  padding-bottom: 1.3rem;
  overflow: hidden;
  cursor: pointer;
  :hover span{
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: waving 400s infinite linear;
    animation: waving 400s infinite linear;
  }
  @-webkit-keyframes waving {
    from{background-position:0}
    to {background-position:1000rem}
  }
  @keyframes waving {
    from{background-position:0}
    to{background-position:1000rem}
  }
`
const Wave = styled.span`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: .7rem;
  display: block;
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
  -webkit-transition: .7s ease-in-out;
  transition: .7s ease-in-out;
  overflow: hidden;
  &::after{
    transform: translateZ(0) rotate(180deg);
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: .7rem;
    background-position: 0;
    background-repeat: repeat-x;
    background-image: url(${waveImg});
    background-color: transparent;
    background-size: 5rem .7rem;
    -webkit-transition: background-position 400s linear,-webkit-transform .7s ease-in-out;
    transition: background-position 400s linear,-webkit-transform .7s ease-in-out;
    transition: transform .7s ease-in-out,background-position 400s linear;
    transition: transform .7s ease-in-out,background-position 400s linear,-webkit-transform .7s ease-in-out;
    box-sizing: border-box;
  }
`

class ContactButton extends React.Component {
  constructor () {
    super()
    this.state = {
      toggle: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      toggle: !this.state.toggle,
    })
  }

  render () {
    return (
      <ContactWrapper>
        <TextWrapper>
          <ContactLink onClick={this.handleClick}>Kontakt<Wave /></ContactLink>
        </TextWrapper>
        <ContactModal handleClick={this.handleClick} visible={this.state.toggle} />
      </ContactWrapper>
    )
  }
}

export default ContactButton
