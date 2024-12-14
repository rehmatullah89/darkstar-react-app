'use client';
import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function GetPricing({
  sectionId,
  buttonText,
  className,
}: {
  sectionId: any;
  buttonText: string;
  className: string;
}) {
  const targetSectionRef = useRef<any>(null);

  const scrollToSection = (event: any) => {
    event.preventDefault();

    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <Link href="#">
        <span onClick={scrollToSection}>
          <Button className={className}>{buttonText || 'GET PRICING'}</Button>
        </span>
      </Link>
      <div ref={targetSectionRef} id={sectionId}></div>
    </div>
  );
}

export default GetPricing;
