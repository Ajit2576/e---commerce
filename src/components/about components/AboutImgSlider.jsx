import React from "react";
import Slider from "react-slick";
import './aboutComponents.css'
import {slide1, slide2, slide3} from '../../assets'

function AboutImgSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    },
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
    }
    ]
  };

  return (
    <div className="about-slider-main">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Image 1" />
        </div>
        <div>
          <img src={slide2} alt="Image 2" />
        </div>
        <div>
          <img src={slide3} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );

}

export default AboutImgSlider
