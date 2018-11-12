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
  padding-bottom: 1.1rem;
  overflow: hidden;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: .7rem;
    background-position: -200px;
    background-repeat: no-repeat;
    background-image: url(${waveImg});
    background-color: transparent;
    background-size: 5rem .7rem;
    transition: .7s ease-in-out;
  }
  :hover:after{
    background-repeat: repeat-x;
    -webkit-animation: waving 400s infinite linear;
    animation: waving 400s infinite linear;
  }
  @keyframes waving {
    from{background-position:0;}
    to{background-position:1000rem;}
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
          <ContactLink onClick={this.handleClick}>Kontakt</ContactLink>
        </TextWrapper>
        <ContactModal handleClick={this.handleClick} visible={this.state.toggle} />
      </ContactWrapper>
    )
  }
}

export default ContactButton
