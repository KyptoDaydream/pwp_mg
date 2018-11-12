import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { Link } from 'react-static'
import close from '../assets/close.png'
import styled from 'styled-components'
import menu_bg from '../assets/menu_bg.svg'
import menu_branch from '../assets/menu_branch.svg'

const MenuScreenWrapper = styled.div`
  position: fixed;
  z-index: 100002;
`
const MenuScreenBackgroud = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--blueTransparent);
  cursor: url(${close}), auto;
  @media (max-width: 800px) {
    display: none;
  }
`
const MenuScreenContent = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: var(--menuWidth);
  background-color: var(--pink);
  background-image: url(${menu_bg});
  background-size: cover;
  @media (max-width: 800px) {
    width: 100vw;
  }
`
const MenuBranch = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 350px;
  width: 200px;
  background-image: url(${menu_branch});
  background-size: cover;
  @media (max-width: 500px) {
    background-position: 100px 0;
    background-repeat: no-repeat;
    background-image: none;
  }
`
const WelcomeTitle = styled.h4`
  font-family: var(--welcomeFontFamily);
  color: var(--blue);
  font-size: 62px;
  padding-left: 60px;
  margin: 20px 0 60px 0;
  cursor: pointer;
`
const MenuLink = styled.h4`
  font-family: var(--titleFontFamily);
  color: var(--white);
  font-size: 48px;
  padding-left: 60px;
  margin: 20px 0 0 0;
  span {
    position: relative;
    background-image: linear-gradient(120deg, #f69675 0%, #faa619 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: -230px 88%;
    transition: 0.5s ease-in;
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
      line-height: 67px;
    }
    &:hover:before {
      max-width: 100%;
    }
    &:hover {
      background-position: 0 88%;
    }
  }
`
const MenuLinkAlt = styled.p`
  font-family: var(--titleFontFamily);
  font-weight: 400;
  font-size: 13px;
  padding-left: 60px;
  margin: 0;
  max-width: 350px;
  &.blue {
    color: var(--blue);
  }
  @media (max-width: 500px) {
    max-width: 260px;
  }
`
class MenuScreen extends React.Component {
  constructor (props) {
    super()
 
    this.state = {
      screen_width: typeof window !== 'undefined' ? window.innerWidth : 3000,
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    this.setState({ screen_width: window.innerWidth })
  }

  render () {
    const x_background = this.props.display ? 0 : this.state.screen_width
    const x_content = this.props.display ? (this.state.screen_width < 800 ? 0 : this.state.screen_width - 800) : this.state.screen_width
    return (
        <Motion 
          defaultStyle={{
            x_background: this.state.screen_width,
            x_content: this.state.screen_width * 1.5
          }}
          style={{
            x_background: spring( x_background, {stiffness: 120, damping: 48 }),
            x_content: spring( x_content, {stiffness: 120, damping: 48 })
          }}
        >
          {style => (
            <MenuScreenWrapper style={{
              transform: `translateX(${style.x_background}px)`,
            }}>
              <MenuScreenBackgroud style={{
                transform: `translateX(${style.x_background}px)`,
              }} onClick={this.props.handleClick}/>
              <MenuScreenContent style={{
                transform: `translateX(${style.x_content}px)`,
              }}>
                <WelcomeTitle>Vitajte</WelcomeTitle>
                <Link to="/o_mne" onClick={this.props.handleClick}>
                  <MenuLink><span data-hover="o mne">o mne</span></MenuLink>
                </Link>
                <MenuLinkAlt className="blue">Každá žena je iná. V živote som však zažívala strach tak ako aj Vy.</MenuLinkAlt>
                <Link to="/sluzby" onClick={this.props.handleClick}>
                  <MenuLink><span data-hover="služby">služby</span></MenuLink>
                </Link>
                <MenuLinkAlt className="blue">Želám si aby ľudia začali viac rozpoznávať skutočné hodnoty.</MenuLinkAlt>
                <Link to="/aktuality" onClick={this.props.handleClick}>
                  <MenuLink><span data-hover="aktuality">aktuality</span></MenuLink>
                </Link>
                <MenuLinkAlt className="blue">To najnovšie z môjho profesného života.</MenuLinkAlt>
                <MenuBranch />
              </MenuScreenContent>
            </MenuScreenWrapper>
          )}
        </Motion>
    )
  }
}

export default MenuScreen
