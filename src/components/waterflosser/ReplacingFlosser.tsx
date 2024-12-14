import React from 'react';
import Image from 'next/image';
import { Col } from 'react-bootstrap';

interface types {
  image: any;
  h3: string;
  price: string;
  btnLabel: string;
  styleSetting?: any;
}

export default function ReplacingFlosser({
  image,
  h3,
  price,
  btnLabel,
  styleSetting,
}: types) {
  return (
    <div className="inner-content border pt-4 h-100 d-flex flex-wrap border-color-slate-900">
      <div className="image text-center w-100">
        <a href="#" className="d-block">
          <Image src={image} alt="image" />
        </a>
      </div>
      <div className={`bg-sky-100 px-3 pt-4 pb-3 ${styleSetting.bottomArea}`}>
        <div className="text-uppercase fimaly-multiple-opn mt-auto pt-2 sm-text-center">
          <h3 className="fw-700 fs-16 text-slate-500 sm-text-center">{h3}</h3>
          <div className="text-slate-500  montserrat">
            $<span className="fw-500 fs-24">{price}</span>
          </div>
        </div>
        <div className={styleSetting.button}>
          <button
            className={`hover hover-able mt-0 bg-blue-500 border-0 w-100 text-uppercase text-white sm-fs-16 py-11 fs-18 montserrat fw-300 sm-py-7`}
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
