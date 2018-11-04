import * as React from 'react'
import styled from 'styled-components'
// import { Motion, spring } from 'react-motion'

const InfoWrapper = styled.div`
  position: absolute;
  top: 120px;
  left: -246px;
`
const TimeIndicator = styled.div`
  display: block;
  height: 6px;
  background-color: var(--blue);
  border-radius: 30px;
  z-index: 9999;
  &.run_animation {
    animation: slide 10s linear;
  }
  @keyframes slide {
    0% {width: 0px;}
    100% {width: 290px;}
  }
`
const SliderCounter = styled.div`
  float: left;
  margin-top: 20px;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: var(--red);
  line-height: 30px;
  color: var(--white);
  font-family: var(--titleFontFamily);
  text-align: center;
  font-weight: bold;
`
const SliderText = styled.p`
  overflow: hidden;
  float: left;
  max-width: 240px;
  font-family: var(--titleFontFamily);
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  margin-top: 21px;
  text-transform: uppercase;
  color: var(--blue);
  &.run_animation {
    animation: appear 10s linear;
  }
  @keyframes appear {
    0% {opacity: 0;}
    10% {opacity: 1;}
    100% {opacity: 1;}
  }
`
class SliderInfo extends React.Component {
  constructor (props) {
    super(props)
    this.selectIndicator = React.createRef()
    this.selectText = React.createRef()
  }

  componentDidUpdate () {
    const indicator = this.selectIndicator.current
    const text = this.selectText.current

    indicator.classList.remove('run_animation')
    text.classList.remove('run_animation')
    // hack for restart animation - otherwise not working
    void indicator.offsetWidth
    void text.offsetWidth

    indicator.classList.add('run_animation')
    text.classList.add('run_animation')
  }

  render () {
    return (
      <InfoWrapper>
        <TimeIndicator innerRef={this.selectIndicator} className="run_animation" />
        <SliderCounter>{this.props.property.index + 1}</SliderCounter>
        <SliderText innerRef={this.selectText} className="run_animation">{this.props.property.text}</SliderText>
      </InfoWrapper>
    ) 
  }
}

export default SliderInfo
