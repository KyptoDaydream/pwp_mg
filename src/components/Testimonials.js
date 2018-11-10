import * as React from 'react'
import styled from 'styled-components'
import data from '../data/testimonialData'

const TestimonialWrapper = styled.div`
  width: 100%;
  position: relative;
`
const Slide = styled.div`
  .carousel_navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
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
  .testimonial_info {
    display: flex;
    justify-content: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 70px;
      border: 5px solid var(--white);
    }
    .testemonial_name {
      padding-left: 30px;
      display: inline-block;
      h2.title {
        font-size: 18px;
        margin-bottom: 0;
        margin-top: 20px;
        line-height: 18px;
      }
    }
  }
  .testimonial_text {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 30px;
    p.testimonial {
      text-align: center;
      padding: 30px;
      background: white;
      border-radius: 10px;
    }
  }
`
class Testimonials extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      property: data.properties[0],
    }
    this.handleNavigation = this.handleNavigation.bind(this)
    this.nav_0 = React.createRef()
    this.nav_1 = React.createRef()
    this.nav_2 = React.createRef()
    this.nav_3 = React.createRef()
    this.nav_4 = React.createRef()
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.handleInterval()
    }, 15000)
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
        this.nav_4.current.classList.remove('active')
        break
      case 2:
        this.nav_2.current.classList.add('active')
        this.nav_0.current.classList.remove('active')
        this.nav_1.current.classList.remove('active')
        this.nav_3.current.classList.remove('active')
        this.nav_4.current.classList.remove('active')
        break
      case 3:
        this.nav_3.current.classList.add('active')
        this.nav_0.current.classList.remove('active')
        this.nav_1.current.classList.remove('active')
        this.nav_2.current.classList.remove('active')
        this.nav_4.current.classList.remove('active')
        break
      case 4:
        this.nav_3.current.classList.remove('active')
        this.nav_0.current.classList.remove('active')
        this.nav_1.current.classList.remove('active')
        this.nav_2.current.classList.remove('active')
        this.nav_4.current.classList.add('active')
        break
      default:
        this.nav_0.current.classList.add('active')
        this.nav_1.current.classList.remove('active')
        this.nav_2.current.classList.remove('active')
        this.nav_3.current.classList.remove('active')
        this.nav_4.current.classList.remove('active')
        break
    }
  }

  handleInterval = () => {
    const newIndex = this.state.property.index + 1 === data.properties.length ? 0 : this.state.property.index + 1
    this.setState({ property: data.properties[newIndex] })
  }

  handleNavigation = param => {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.handleInterval()
    }, 15000)
    this.setState({ property: data.properties[param] })
  }

  render () {
    return (
      <TestimonialWrapper>
        <Slide>
          <div className="testimonial_info">
            <img alt={this.state.property.name} src={this.state.property.url} />
            <div className="testemonial_name">
              <h2 className="title">
                {this.state.property.name}
              </h2>
              <h3 className="sub_title">
                {this.state.property.info}
              </h3>
            </div>
          </div>
          <div className="testimonial_text">
            <p className="testimonial">
              {this.state.property.text}
            </p>
          </div>
          <div className="carousel_navigation">
            <div ref={this.nav_0} className="nav_0 active" onClick={() => this.handleNavigation(0)} onKeyDown={() => this.handleNavigation(0)} />
            <div ref={this.nav_1} className="nav_1" onClick={() => this.handleNavigation(1)} onKeyDown={() => this.handleNavigation(1)} />
            <div ref={this.nav_2} className="nav_2" onClick={() => this.handleNavigation(2)} onKeyDown={() => this.handleNavigation(2)} />
            <div ref={this.nav_3} className="nav_3" onClick={() => this.handleNavigation(3)} onKeyDown={() => this.handleNavigation(3)} />
            <div ref={this.nav_4} className="nav_4" onClick={() => this.handleNavigation(4)} onKeyDown={() => this.handleNavigation(4)} />
          </div>
          <div />
        </Slide>
      </TestimonialWrapper>
    )
  }
}

export default Testimonials
