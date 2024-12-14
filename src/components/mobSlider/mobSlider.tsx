'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 6,
      },
    },
  ],
};

// const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 992px)').matches;

const MobSlider = ({ children }: { children: any }) => {
    // if (typeof window !== 'undefined' && !isMobile) {
  //   return <>{children}</>; // Render children directly if not on mobile
  // }
  return (
    <Slider {...settings}>
      {React.Children.map(children, (child) => (
        <div >{child}</div>
      ))}
    </Slider>
  );
};

export default MobSlider;
