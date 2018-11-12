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
        <a target="_blank" href="https://www.linkedin.com/in/m%C3%A1ria-g%C3%A1likov%C3%A1/">
          <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width={`${this.state.size * 2}px`} height={`${this.state.size * 2}px`} viewBox={`0 0 ${this.state.size * 2} ${this.state.size * 2}`}
          >
            <g>
              <circle className="st0" cx={this.state.size} cy={this.state.size} r={this.state.size} />
              <g>
                <path className="st1" d="M89.6,60.6v23.1H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5H48.7
                  c0,0,0.2-36.5,0-40.3h13.4v5.7c0,0-0.1,0.1-0.1,0.1h0.1v-0.1c1.8-2.7,5-6.7,12.1-6.7C83,42.5,89.6,48.2,89.6,60.6L89.6,60.6z
                  M34.7,24c-4.6,0-7.6,3-7.6,7c0,3.9,2.9,7,7.4,7h0.1c4.7,0,7.6-3.1,7.6-7C42.1,27,39.2,24,34.7,24L34.7,24z M27.9,83.7h13.4V43.4
                  H27.9V83.7z" />
              </g>
            </g>
          </svg>
        </a>  
      </IconWrapper>
    )
  }
}

export default Icon
