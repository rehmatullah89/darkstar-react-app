import React from 'react';
import styles from './ultrasonicCleanerPackage.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface ultrasonicCleanerPackageProps {
  title?: string;
  cleaningFrequency?: any;
  price?: string;
  rating?: any;
  image?: any;
  ratingImage?: any;
  color?: any;
  bgColor?: any;
  buttonBg?: any;
  tankCapacity?: any;
  description?: any;
  offer?: any;
  warranty?: any;
}
export default function ultrasonicCleanerPackage({
  title,
  cleaningFrequency,
  rating,
  tankCapacity,
  image,
  color,
  bgColor,
  buttonBg,
  description,
  offer,
  warranty,
  ratingImage,
}: ultrasonicCleanerPackageProps) {
  return (
    <>
      <div className={styles.retainProductWrapper}>
        <div className={styles.productSelectionBox}>
          <div className={styles.productSelectionInnerBox}>
            <div className={styles.productSelectionImageWwrap}>
              <Image
                src={image}
                alt="retainer product"
                className={styles.productImage}
              />
            </div>

            {/* <div className={styles.productSelectiondDescription}>
                        <b>{title}</b>
                    </div> */}
            <div className={styles.productDescriptionBox}>
              <div className={styles.descriptionHeading}>{description}</div>
              <div className={styles.divider}></div>
              <div className={styles.productSelectionDentistPriceNote}>
                <span className={styles.descriptionHeading}>Rating:</span>
                <Image src={ratingImage} alt="star rating" />
              </div>
              <div className={styles.divider}></div>
              <div className={styles.productSelectionDentistPriceNote}>
                <span className={styles.descriptionHeading}>
                  Cleaning Frequency:
                </span>{' '}
                {cleaningFrequency}
              </div>
              <div className={styles.divider}></div>
              <div className={styles.productSelectionDentistPriceNote}>
                <span className={styles.descriptionHeading}>
                  Tank Capacity:
                </span>{' '}
                {tankCapacity}
              </div>
              <div className={styles.divider}></div>

              <div className={styles.trialContainer}>
                <div className={styles.ValueText}>{offer}</div>
                <span>{warranty}</span>
              </div>
              <div className={styles.priceOffer}>
                <s>
                  {' '}
                  <span className={styles.priceOne}>$79.00</span>
                </s>{' '}
                <span className={styles.priceTwo}> $49.00</span>
              </div>
              <div>
                <p>Compared to $129</p>
              </div>

              <button
                style={{ backgroundColor: '#3C98CC', marginBottom: 30 }}
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
