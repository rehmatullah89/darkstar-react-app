'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 2500,
  cssEase: 'linear',
  arrows: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1, // Show 2 slides on tablet
        centerPadding: '40px',
        pauseOnHover: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // Show 2 slides on tablet
        centerPadding: '40px',
        pauseOnHover: true,
      },
    }
  ],
  
};

const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 991px)').matches;

const ReviewSlider = ({ children }: { children: any }) => {
    if (typeof window !== 'undefined' && !isMobile) {
    return <>{children}</>; // Render children directly if not on mobile
  }

  return (
    <div className="review-slider">
    <Slider {...settings}>
      {React.Children.map(children, (child) => (
        <div >{child}</div>
      ))}
    </Slider>
    </div>
  );
};

export default ReviewSlider;
