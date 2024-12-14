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
  speed: 500,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  arrows: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    }],

};

const SkincareSlider = ({ children }: { children: any }) => {
  return (
    <Slider {...settings}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
};

export default SkincareSlider;
