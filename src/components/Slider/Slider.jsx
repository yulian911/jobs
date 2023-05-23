import React from 'react'
import Slick from 'react-slick'
import './slider.css'

const Slider = props => {
  let settings = {
    ...props,
  }
  settings = {
    ...settings,
    infinite: true,
    swipe: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <Slick {...settings} autoplaySpeed={5000}>
      {props.children}
    </Slick>
  )
}

export default Slider
