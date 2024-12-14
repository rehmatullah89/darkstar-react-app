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
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};

const MySlider = ({ children }: { children: any }) => {
  return (
    <Slider {...settings}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
};

export default MySlider;
