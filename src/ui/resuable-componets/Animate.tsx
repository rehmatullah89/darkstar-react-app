'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = () => {
  useEffect(() => {
    AOS.init({
      // customize your AOS settings here
    });
  }, []);
  return <></>;
};

export default Animate;
