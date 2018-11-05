import * as React from 'react'
import styled from 'styled-components'
import close from '../assets/close.png'
import menu_bg from '../assets/menu_bg.svg'
import menu_branch from '../assets/menu_branch.svg'

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: ${props => props.props ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 10002;
`
const ModalBackground = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--blueTransparent);
  cursor: url(${close}), auto;
`
const Modal = styled.div`
  margin: 0;
  width: 930px;
  height: 450px;
  background-color: var(--pink);
  background-image: url(${menu_bg});
  background-position: left;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  background-size: 2000px;
`
const ModalBranch = styled.div`
  position: absolute;
  bottom: -100px;
  right: -10px;
  height: 350px;
  width: 200px;
  background-image: url(${menu_branch});
  background-size: cover;
`
const Close = styled.svg`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  stroke: var(--white);
  &:hover g{
    stroke: var(--blue);
  }
  line {
    transition: all 0.2s;
  }
`
const ModalText = styled.h4`
  font-family: var(--titleFontFamily);
  color: var(--white);
  font-size: 32px;
  padding-left: 60px;
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
  span {
    position: relative;
    background-image: linear-gradient(120deg, #f69675 0%, #faa619 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: -400px 88%;
    transition: 0.5s ease-in;
    a {
      color: var(--white);
    }
    &::before {
      transition: max-width 0.8s ease-out;
      content: attr(data-hover);
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      white-space: nowrap;
      max-width: 0;
      color: var(--blue);
      line-height: 45px;
    }
    &:hover:before {
      max-width: 100%;
    }
    &:hover {
      background-position: 0 88%;
    }
  }
`
class ContactModal extends React.Component {
  render () {
    return (
      <ModalWrapper props={this.props.visible}>
        <ModalBackground onClick={this.props.handleClick} />
        <Modal>
          <ModalText top={60} bottom={0}>Hlaváčikova  35,</ModalText>
          <ModalText top={0} bottom={60}>841 05 Bratislava</ModalText>
          <ModalText top={0} bottom={60}>0911 544 533</ModalText>
          <ModalText top={0} bottom={0}><span data-hover="ahoj@mariagalikova.sk"><a href="mailto:ahoj@mariagalikova.sk">ahoj@mariagalikova.sk</a></span></ModalText>
          <Close
          viewBox="0 0 96 96"
          height="40px"
          onClick={this.props.handleClick}
          >
            <g 
              id="navicon" 
              fill="none" 
              strokeWidth="14" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line 
                transform={`translate(12, -7) rotate(45, 7, 26)`} 
                x1="7" y1="26" x2="89" y2="26"
              />
              <line 
                transform={`translate(12, 7) rotate(-45, 7, 70)`} 
                x1="7" y1="70" x2="89" y2="70"
              />
            </g>
          </Close>
          <ModalBranch />
        </Modal>
      </ModalWrapper>
    );
  }
}

export default ContactModal
