import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface reviewCardType {
  image: any;
}

export default function ReviwCard({ image }: reviewCardType) {
  return (
    <div className="w-100 border px-3 py-3">
      <div className="review-start d-flex align-items-center">
        <span>
          <FaStar className="fs-24 text-yellow-1000 me-1" />
        </span>
        <span>
          <FaStar className="fs-24 text-yellow-1000 me-1" />
        </span>
        <span>
          <FaStar className="fs-24 text-yellow-1000 me-1" />
        </span>
        <span>
          <FaStar className="fs-24 text-yellow-1000 me-1" />
        </span>
        <span>
          <FaStar className="fs-24 text-yellow-1000 me-1" />
        </span>
      </div>
      <div>
        <h1 className="fs-22 fw-bold text-blue-500 fimaly-multiple-opn text-start pb-3 pt-3">
          How I whiten my teeth at home{' '}
        </h1>
      </div>
      <a
        href="https://www.youtube.com/watch?v=aOBB-n6HLAs"
        rel="nofollow"
        target="_blank"
        className="text-decoration-none "
      >
        <div className="review-thm">
          <Image src={image} alt="mansutti" className="w-100 h-auto" />
        </div>
      </a>
      <div className="d-flex fimaly-multiple-opn justify-content-between">
        <div className="fs-13 fw-normal text-blue-500 w-50">
          Danielle M. - Black Rock, Australia (21 Years Old)
        </div>
        <div>
          <a
            href="https://www.smilebrilliant.com/product/sensitive-teeth-whitening-trays"
            className="text-decoration-none fs-12 text-slate-500"
          >
            Used The T6 Sensitive System
          </a>
        </div>
      </div>
    </div>
  );
}
