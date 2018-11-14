import * as React from 'react'
import styled from 'styled-components'
import mouse from '../assets/mouse.svg'

const MouseIcon = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  div {
    float: right;
  }
  img {
    float: right;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    animation: bounce 1s infinite alternate;
    -webkit-animation: bounce 1s infinite alternate;
  }
  @keyframes bounce {
  from {transform: translateY(0px);}
  to {transform: translateY(-15px);}
  }
  @media (max-width: 320px) {  
    display: none;
  }
`
const TooltipWrapper = styled.div`
  position: relative;
  width: 0px;
  height: 0px;
`
const Tooltip = styled.div`
  position: absolute;
  left: -140px;
  top: -5px;
  padding: 7px 15px 7px 15px;
  border-radius: 20px;
  background-color: var(--blue);
  color: var(--white);
  font-family: var(--titleFontFamily);
  font-size: 13px;
  transition: 0.4s;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
`

class MouseScrollIcon extends React.Component {
  constructor () {
    super()

    this.state = {
      alt_visible: 'hidden',
    }
    this.handleHover = this.handleHover.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleHover () {
    this.setState({ alt_visible: 'visible' })
  }

  handleMouseLeave () {
    this.setState({ alt_visible: 'hidden' })
  }

  render () {
    return (
      <MouseIcon>
        <img src={mouse} alt="preskrolujte nizsie" onMouseOver={this.handleHover}
          onFocus={this.handleHover}
          onMouseLeave={this.handleMouseLeave} />
        <TooltipWrapper>
          <Tooltip className={this.state.alt_visible}>
            Skrolujte ďalej :)
          </Tooltip>
        </TooltipWrapper>
      </MouseIcon>
    )
  }
}

export default MouseScrollIcon
