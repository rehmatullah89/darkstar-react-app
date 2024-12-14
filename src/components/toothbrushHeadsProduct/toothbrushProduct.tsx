import React from 'react';
import s from './toothbrushProduct.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

type ToothbrushHeadsProductType = {
  title?: string;
  description?: any;
  orignalPrice?: any;
  newPrice?: string;
  innerTitle?: any;
  innerTitleOne?: any;
  image?: any;
  color?: any;
  bgColor?: any;
  buttonBg?: any;
  classes?: string;
  freeShipping?: string;
};
export default function ToothbrushHeadsProduct({
  title,
  orignalPrice,
  description,
  newPrice,
  innerTitle,
  innerTitleOne,
  image,
  color,
  bgColor,
  buttonBg,
  classes,
  freeShipping,
}: ToothbrushHeadsProductType) {
  return (
    <div className={s.productSelectionBox}>
      <div className={s.product_selection_title} style={{ color: color }}>
        {title}
      </div>
      <div className={classes}>
        <div className={`${s.productSelectionImageWrap} common w-auto`}>
          <Image src={image} alt="image" />
        </div>
        <div className="pr-description">
          <div className={s.productSelectionDescription}>
            {description}
            <div>{innerTitleOne}</div>
          </div>
          <div
            className={`${s.productSelectionPriceWrap} mt-0 pt-0`}
            style={{ background: bgColor }}
          >
            <div className="icon-btn">
              <div className={s.productSelectionPriceDollarSymbol}>
                <FontAwesomeIcon icon={faDollarSign} />
                <span className={`${s.productSelectionPriceText} orignalPrice`}>
                  {orignalPrice}
                </span>
              </div>
              <div className={`${s.productSelectionDentistPriceNote} cr-price`}>
                {newPrice}
              </div>
              <div className="freeShipping text-orange-500 fs-12 fimaly-multiple-opn">
                {freeShipping}
              </div>
              <button
                style={{ background: buttonBg }}
                className={`hover hover-able mt-4 ${s.btnprimaryblue}`}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
