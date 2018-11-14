import * as React from 'react'
import styled from 'styled-components'
import Slide from './Slide'
import data from '../data/sliderData'
import SliderButton from './SliderButton'
import SliderInfo from './SliderInfo'
import slide_1 from '../assets/mg_illustracia_1.png'
import slide_2 from '../assets/mg_illustracia_2.png'
import slide_3 from '../assets/mg_illustracia_3.png'

const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
class SliderWelcome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      properties: data.properties,
      property: data.properties[0],
    }
    this.previousProperty = this.previousProperty.bind(this)
    this.nextProperty = this.nextProperty.bind(this)
  }

  componentDidMount () {
    const images = [slide_1, slide_2, slide_3]
    images.forEach(picture => {
      const img = new Image()
      img.src = picture.fileName
    })

    this.interval = setInterval(() => {
      this.nextProperty()
    }, 10000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  nextProperty = () => {
    let newIndex = this.state.property.index + 1
    if (newIndex > this.state.properties.length - 1) {
      newIndex = 0
    }
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.nextProperty()
    }, 10000)
    this.setState({ property: data.properties[newIndex] })
  }

  previousProperty = () => {
    let newIndex = this.state.property.index - 1
    if (newIndex < 0) {
      newIndex = this.state.properties.length - 1
    }
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.nextProperty()
    }, 10000)
    this.setState({ property: data.properties[newIndex] })
  }

  render () {
    return (
      <SliderWrapper>
        <SliderButton handleClick={this.previousProperty} type="prev">Prev</SliderButton>
        <SliderButton handleClick={this.nextProperty} type="next">Next</SliderButton>
        <SliderInfo property={this.state.property} />
        <Slide property={this.state.property} />
      </SliderWrapper>
    )
  }
}

export default SliderWelcome
