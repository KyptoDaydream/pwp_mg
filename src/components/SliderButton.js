import * as React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

const Button = styled.svg`
  position: absolute;
  top: 103px;
  left: ${props => props.left}px;
  z-index: 10000;
  cursor: pointer;
  circle {
    fill: var(--blue);
  }
  rect {
    fill: transparent;
  }
  @media (max-width: 930px) {
    left: ${props => props.left === 40 ? 500 : 540}px;
  }
  @media (max-width: 730px) {
    display: none;
  }
  @media (min-width: 1500px) {
    left: ${props => props.left === 40 ? 0 : 40}px;
  }
`
class SliderButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      r: 0,
      move: {
        x: 0,
        y: 0
      }
    }
    this.selectButton = React.createRef()
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove = (e) => {
    const position = this.selectButton.current.getBoundingClientRect()
    const x_mult = ((position.x + 24) > e.pageX) ? -1 : 1
    const y_mult = ((position.y + 24) > e.pageY) ? -1 : 1
  
    this.setState({ move: {
      x: (e.pageX - position.x) * 0.3 * x_mult,
      y: (e.pageY - position.y) * 0.3 * y_mult
    } })
  }

  handleMouseOver = () => {
    this.setState({ r: 24 })
  }

  handleMouseLeave = () => {
    this.setState({ r: 0, move: {
      x: 0,
      y: 0
    } })
  }

  render () {
    let left = this.props.type === 'prev' ? 40 : 80
    const path = this.props.type === 'prev' ? 'M0,11.2c0-0.4,0.2-0.8,0.5-1.1l9.6-9.6c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-8.5,8.5l8.5,8.5c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0l-9.6-9.6C0.2,12,0,11.6,0,11.2z' : 'M12.3,12.3l-9.6,9.6c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2L9,11.2L0.5,2.7c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0l9.6,9.6c0.3,0.3,0.5,0.7,0.5,1.1C12.8,11.6,12.6,12,12.3,12.3z'
    const fill = this.state.move.x === 0 ? "#212D50" : '#FFFFFF'
    return (
      <Motion
        defaultStyle={{
          r: 0,
          x: 0,
          y: 0
        }}
        style={{
          r: spring(this.state.r, { stiffness: 320, damping: 48 }),
          x: spring(this.state.move.x, { stiffness: 320, damping: 48 }),
          y: spring(this.state.move.y, { stiffness: 320, damping: 48 })
        }}
      >
        {({ r, x, y}) => (
          <Button
            viewBox={`0 0 60 60`}
            width="60px"
            height="60px"
            left={left}
            transform={`translate(${x}, ${y})`} 
          >
            <g 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={this.props.handleClick}
              onMouseMove={this.handleMouseMove}
              onMouseOver={this.handleMouseOver}
              onMouseLeave={this.handleMouseLeave}
              ref={this.selectButton}
            >
              <rect x="0" y="0" width="60" height="60" />
              <circle
                cx={30} cy={30} r={r}
              />
              <path 
                transform={`translate(23, 19)`}
                d={path}
                fill={fill}
              />
            </g>
          </Button>
        )
        }
      </Motion>
    )
  }
}

export default SliderButton
