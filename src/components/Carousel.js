import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import data from '../data/carouselData'

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
`
const Slide = styled.div`
  flex-basis: 100%;
  width: 75%;
  padding-left:25%;
  img {
    animation: fadein 0.5s linear;
    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  }
  .text_blok {
    margin-top: 25px;
    padding: 30px;
    background-color: var(--lightBlue);
    border-radius: 10px;
  }
  .carousel_navigation {
    display: flex;
    justify-content: center;
    div {
      flex-basis: 12px;
      height: 12px;
      padding: 0 5px 0 5px;
      cursor: pointer;
    }
    div:after {
      content: '';
      box-sizing: border-box;
      display: block;
      height: 12px;
      background: transparent;
      border-radius:12px;
      border: 2px solid var(--red);
    }
    div.active:after {
      background-color: var(--red);
    }
    div:hover:after {
      border-color: var(--blue);
      background: var(--blue);
    }
  }
`
class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      property: data.properties[0],
    }
    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleInterval = this.handleInterval.bind(this)
    this.nav_0 = React.createRef()
    this.nav_1 = React.createRef()
    this.nav_2 = React.createRef()
    this.nav_3 = React.createRef()
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.handleInterval()
    }, 5000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  componentDidUpdate () {
    const index = this.state.property.index
    switch (index) {
      case 1:
        this.nav_1.current.classList.add('active')
        this.nav_0.current.classList.remove('active')
        this.nav_2.current.classList.remove('active')
        this.nav_3.current.classList.remove('active')
        break
      case 2:
        this.nav_2.current.classList.add('active')
        this.nav_0.current.classList.remove('active')
        this.nav_1.current.classList.remove('active')
        this.nav_3.current.classList.remove('active')
        break
      case 3:
        this.nav_3.current.classList.add('active')
        this.nav_0.current.classList.remove('active')
        this.nav_1.current.classList.remove('active')
        this.nav_2.current.classList.remove('active')
        break
      default:
        this.nav_0.current.classList.add('active')
        this.nav_1.current.classList.remove('active')
        this.nav_2.current.classList.remove('active')
        this.nav_3.current.classList.remove('active')
        break
    }
  }

  handleInterval = () => {
    const newIndex = this.state.property.index + 1 === data.properties.length ? 0 : this.state.property.index + 1
    console.log(newIndex)
    this.setState({ property: data.properties[newIndex] })
  }

  handleNavigation = param => {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.handleInterval()
    }, 5000)
    this.setState({ property: data.properties[param] })
  }

  render () {
    return (
      <SliderWrapper>
        <Slide>
          <h2 className="secondary_title">
            {this.state.property.title}
          </h2>
          <img alt={this.state.property.title} src={this.state.property.url} />
          <div className="carousel_navigation">
            <div ref={this.nav_0} className="nav_0 active" onClick={() => this.handleNavigation(0)} onKeyDown={() => this.handleNavigation(0)} />
            <div ref={this.nav_1} className="nav_1" onClick={() => this.handleNavigation(1)} onKeyDown={() => this.handleNavigation(1)} />
            <div ref={this.nav_2} className="nav_2" onClick={() => this.handleNavigation(2)} onKeyDown={() => this.handleNavigation(2)} />
            <div ref={this.nav_3} className="nav_3" onClick={() => this.handleNavigation(3)} onKeyDown={() => this.handleNavigation(3)} />
          </div>
          <div className="text_blok">
            <p>{this.state.property.text}
            </p>
          </div>
          <Link className="button_text" to="/sluzby">moje služby</Link>
        </Slide>
      </SliderWrapper>
    )
  }
}

export default Carousel
