import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const manualPlaySettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500,
  arrows: true,
};

const ManualPlaySlider = ({ children }: { children: any }) => {
  return (
    <Slider {...manualPlaySettings}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
};

export default ManualPlaySlider;
