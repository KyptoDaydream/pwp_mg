import * as React from 'react'
import styled from 'styled-components'
import slide_1 from '../assets/mg_illustracia_1.png'

const SlideCard = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.props.background};
  &.run_animation {
    animation: slideCard 10s linear;
  }
  @keyframes slideCard {
    0% {margin-left: 100%;}
    5% {margin-left: 0;}
    95% {margin-left: 0;}
    100% {margin-left: 0;}
  }
  .slideImage {
    width: 600px;
    height: 600px;
  }
`

class Slide extends React.Component {
  constructor (props) {
    super(props)

    this.selectSlideCard = React.createRef()
  }

  componentDidUpdate () {
    const slider = this.selectSlideCard.current

    slider.classList.remove('run_animation')
    // hack for restart animation - otherwise not working
    void slider.offsetWidth

    slider.classList.add('run_animation')
  }

  render () {
    const image = this.props.property.index === 0 ? slide_1 : slide_1
    return (
      <SlideCard props={this.props.property} innerRef={this.selectSlideCard} className="run_animation">
        <img alt="slide1" src={image} className="slideImage" />
      </SlideCard>
    )
  }
}

export default Slide
