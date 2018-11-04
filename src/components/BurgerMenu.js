import * as React from 'react'
import { Motion, spring, presets } from 'react-motion'
import styled from 'styled-components'
import MenuScreen from './MenuScreen';

const MenuWrapper = styled.div`
  position: relative;
  width: 100vw;
  display: block;
`
const Burger = styled.svg`
  overflow: visible;
  cursor: pointer;
  WebkitTapHighlightColor: "rgba(0,0,0,0)";
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 100003;
  line {
    &.blue {
      stroke: var(--blue)
    }
    &.white {
      stroke: var(--white)
    }
  }
`
class HamburgerMenu extends React.Component {
  constructor() {
    super()
  
    this.state = {
      toggle: false,
      class: 'blue'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      toggle: !this.state.toggle,
      class: this.state.toggle ? 'blue' : 'white'
    })
  }
  
  render() {
    return (
      <MenuWrapper>
        <Burger 
          viewBox="0 0 96 96"
          height="40px"
          onClick={this.handleClick.bind(this)}
        >
          <Motion 
            style={{
              x: spring(this.state.toggle ? 1 : 0, presets.wobbly ),
              y: spring(this.state.toggle ? 0: 1, presets.wobbly )
            }}
          >
            {({ x, y }) =>
              <g 
                id="navicon" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="14" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line 
                  transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`} 
                  x1="7" y1="26" x2="89" y2="26" className={this.state.class}
                />
                <line 
                  transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`} 
                  x1="7" y1="70" x2="89" y2="70" className={this.state.class}
                />
                <line 
                  transform={`translate(${x * -96})`} 
                  opacity={y} 
                  x1="7" y1="48" x2="89" y2="48" className={this.state.class}
                />
              </g>
            }
          </Motion>
        </Burger>
        <MenuScreen display={this.state.toggle} handleClick={this.handleClick}/>
      </MenuWrapper>
    )
  }
}

export default HamburgerMenu