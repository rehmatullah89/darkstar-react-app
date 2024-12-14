'use client';
import React from 'react';
import Link from 'next/link';

type ScrollButtonProps = {
  targetId: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({
  children,
  style = {},
  className = '',
  targetId,
}) => {
  const handleClick = (event: any) => {
    event.preventDefault();

    const targetElement = document.getElementById(removeHashPrefix(targetId));
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      // targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      href={targetId}
      onClick={handleClick}
      style={style}
      className={className}
    >
      {children}
    </Link>
  );
};
const removeHashPrefix = (inputString: string) =>
  inputString.startsWith('#') ? inputString.substring(1) : inputString;

export default ScrollButton;
