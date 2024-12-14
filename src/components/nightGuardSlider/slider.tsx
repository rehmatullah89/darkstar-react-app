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
  speed: 10000,
  autoplaySpeed: 500,
  cssEase: 'linear',
  arrows: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
  slidesToScroll: 1,

      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: false,


      }
    }
  ]
};

const NightGuardSlider = ({ children }: { children: any }) => {
  return (
    <Slider {...settings}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
};

export default NightGuardSlider;
