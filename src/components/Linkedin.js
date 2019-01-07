import * as React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  transition: 0.2s;
  z-index: 9988;
  &:hover {
    width: 50px;
    height: 50px;
    bottom: 15px;
    left: 15px;
    transform: scale(1.1);
  }

  svg {
    max-width: 100%;
    max-height: 100%; 
    transition: 0.4s;
  }

  .st0{fill:#212D50;}
  .st1{fill:#F1F2F2;}
`
class Icon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      size: 56.1
    }
  }

  render () {
    return (
      <IconWrapper>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100005008548203">
          <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width={`${this.state.size * 2}px`} height={`${this.state.size * 2}px`} viewBox={`0 0 ${this.state.size * 2} ${this.state.size * 2}`}
          >
            <g>
              <circle className="st0" cx={this.state.size} cy={this.state.size} r={this.state.size} />
              <g>
              <path className="st1" d="M71.6,56h-10v36.7H46.4V56h-7.2V43.1h7.2v-8.3c0-6,2.8-15.3,15.3-15.3l11.2,0v12.5h-8.2c-1.3,0-3.2,0.7-3.2,3.5
	v7.6h11.3L71.6,56z"/>
              </g>
            </g>
          </svg>
        </a>  
      </IconWrapper>
    )
  }
}

export default Icon
