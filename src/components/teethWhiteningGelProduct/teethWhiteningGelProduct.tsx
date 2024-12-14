import React from 'react';
import s from './teethWhiteningGelProduct.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface TeethWhiteningProductProps {
  title?: string;
  orignalPrice?: string;
  newPrice?: string;
  innerTitle?: any;
  innerTitleOne?: any;
  image?: any;
  color?: any;
  bgColor?: any;
  buttonBg?: any;
}
export default function TeethWhiteningProduct({
  title,
  orignalPrice,
  newPrice,
  innerTitle,
  innerTitleOne,
  image,
  color,
  bgColor,
  buttonBg,
}: TeethWhiteningProductProps) {
  return (
    <div className={s.productSelectionBox}>
      <div className={s.productSelectionImageWrap}>
        <Image src={image} alt="syring image" />
        <span style={{ color: color }}>{title}</span>
      </div>
      <div className={s.productSelectionDescription}>
        <b>{innerTitle}</b>
        <div>{innerTitleOne}</div>
      </div>
      <div
        className={s.productSelectionPriceWrap}
        style={{ background: bgColor }}
      >
        <div>
          <div className={s.productSelectionPriceDollarSymbol}>
            <FontAwesomeIcon icon={faDollarSign} />
            <span className={s.productSelectionPriceText}>{orignalPrice}</span>
          </div>
          <div className={s.productSelectionDentistPriceNote}>{newPrice}</div>
          <button style={{ background: buttonBg }} className={s.btnprimaryblue}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
