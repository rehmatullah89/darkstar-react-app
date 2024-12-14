'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  // infinite: true,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  autoplay: true,
//  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  arrows: true,
  infinite: true,
  centerMode: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: false,


      }
    }
  ]
};

const NightGuardReviewSlider = ({ children }: { children: any }) => {
  return (
    <Slider {...settings}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
};

export default NightGuardReviewSlider;
