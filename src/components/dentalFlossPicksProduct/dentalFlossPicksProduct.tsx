import React from 'react';
import styles from './dentalFlossPicksProduct.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface dentalFlossPicksProductProps {
  title?: string;
  priceNote?: any;
  price?: string;
  ValueText?: any;
  image?: any;
  color?: any;
  bgColor?: any;
  buttonBg?: any;
}
export default function dentalFlossPicksProduct({
  title,
  priceNote,
  price,
  ValueText,
  image,
  color,
  bgColor,
  buttonBg,
}: dentalFlossPicksProductProps) {
  return (
    <>
      <div className={styles.retainProductWrapper}>
        <div className={styles.productSelectionBox}>
          <div className={styles.productSelectionImageWwrap}>
            <Image src={image} alt="retainer product" />
          </div>

          <div className={styles.productSelectiondDescription}>
            <b>{title}</b>
          </div>
          <div
            className={styles.productSelectionPriceWrap}
            style={{ background: bgColor }}
          >
            <div>
              <div className={styles.productSelectionDentistPriceNote}>
                {priceNote}
              </div>
              <FontAwesomeIcon
                className={styles.productSelectionDollarSymbol}
                icon={faDollarSign}
              />
              <span className={styles.productSelectionPriceText}>{price}</span>
              <div className={styles.ValueText}>{ValueText}</div>
              <button
                style={{ background: buttonBg }}
                className={styles.btnprimaryPurple}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
