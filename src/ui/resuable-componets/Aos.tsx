'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aos = ({
  children,
  animationType,
}: {
  children: any;
  animationType: any;
}) => {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 1200,
        anchorPlacement: 'top-bottom',
        easing: 'ease',
        ...((animationType && { 'data-aos': animationType }) || {
          'data-aos': 'fade-up',
        }),
      });
    };

    const timeoutId = setTimeout(initAOS, 1000);
    return () => clearTimeout(timeoutId);
  }, [animationType]);

  return <div data-aos={animationType || 'fade-up'}>{children}</div>;
};

export default Aos;
