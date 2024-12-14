import React, { useEffect, useState } from 'react';
import styles from './shippingProtection.module.css';
import Image from 'next/image';
import shippingimg from '../../../public/assets/shipping-protection.webp';
import { useCartContext } from '@/context/CartContext';
import { useCookies } from '@/lib/TagManager/useCookies';
import { SHIPPING_PROTECTION_ID } from '@/utils/constants';
import { SHIPPING_PROTECTION_PRICE_DEFAULT } from '@/utils/utils';
import { getCookie, cookieExists } from '@/utils/helpers';
import { SET_FUTURE_LOADING } from '@/context/actions';
const ShippingProtection = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { state,dispatch,refreshShippingProtection } = useCartContext();
  const [price, setPrice] = useState(SHIPPING_PROTECTION_PRICE_DEFAULT);
  const [priceNg, setPriceNg] = useState(SHIPPING_PROTECTION_PRICE_DEFAULT);
  const [priceNonNg, setPriceNonNg] = useState(SHIPPING_PROTECTION_PRICE_DEFAULT);
  const [includesNg, setsetIncludesNg] = useState(false);
  const { toggleShippingProtection, getShippingProtection, cookiesList } = useCookies();
  const toggleChecked = () => {
    let id = SHIPPING_PROTECTION_ID
    
    setIsChecked(!isChecked);
    toggleShippingProtection();
    getShippingProtection() == 1 ? refreshShippingProtection('add') : refreshShippingProtection('remove')
    
  };
  useEffect(() => {
    const shipping_protection = getShippingProtection();
    shipping_protection == 1 ? setIsChecked(true) : setIsChecked(false);

    if (cookieExists(cookiesList.shipping_protection_prices_ng)) {

      const price_ng = getCookie(cookiesList.shipping_protection_prices_ng)
      if (price_ng) {
        setPriceNg(price_ng)
      }
    }
    if (cookieExists(cookiesList.shipping_protection_prices_non_ng)) {
      const price_non_ng = getCookie(cookiesList.shipping_protection_prices_non_ng)
      if (price_non_ng) {

        setPriceNonNg(price_non_ng)


      }
    }

  }, []);
  useEffect(() => {
    if (priceNg != SHIPPING_PROTECTION_PRICE_DEFAULT || priceNonNg != SHIPPING_PROTECTION_PRICE_DEFAULT) {
      Object.values(state?.min_cart?.cart_items).map((item: any) => {
        if (state?.ng_wht_ids.length > 0) {
          const ng_wht_ids = state?.ng_wht_ids;
          const includes = ng_wht_ids.includes(item?.product_id);
          if (includes) {
            setsetIncludesNg(true)


          }
        }
      });

      if (includesNg) {
        setPrice(priceNg);
      } else {
        setPrice(priceNonNg);

      }
    }
  }, [priceNg, priceNonNg, includesNg]);
  useEffect(() => {
    setsetIncludesNg(false)
    Object.values(state?.min_cart?.cart_items).map((item: any) => {
      if (state?.ng_wht_ids.length > 0) {
        const ng_wht_ids = state?.ng_wht_ids
        let includes = ng_wht_ids.includes(item?.product_id);
        if (includes) {
          setsetIncludesNg(true)

        }
      }


      if (item?.product_id == SHIPPING_PROTECTION_ID) {

        setPrice(item.line_subtotal)
      }
    })
  }, [state?.min_cart?.cart_items])

  return (
    <div>
      <div className={styles.shipping_protection}>
        <div className={styles.flex_row}>
          <div className={styles.imgProtection}>
            <Image
              src={shippingimg}
              width={60}
              height={55}
              alt="SmileBrilliant"
            />
          </div>
          <div className={styles.protection_content_text}>
            <div className={styles.protection_tp}>
              <h3 className={styles.font_monst}>Shipping Protection</h3>
              <div className={styles.addon_module_price}>
                <span className={styles.upcart_addons_price}>${price}</span>
              </div>
            </div>
            <p>
              Protect your order from damage, loss, <br />
              or theft during shipping.{' '}
            </p>
          </div>
          <div className={styles.toggle_button}>
            <div className={styles.switch}>
              <span>
                <input
                  type="checkbox"
                  id="toggleInput"
                  checked={isChecked}
                  onChange={() => { }}
                />
                <button
                  aria-label="toggle"
                  className={styles.slider}
                  type="button"
                  onClick={toggleChecked}
                ></button>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.shipping_free_text}>
            Domestic shipping will be free for orders with a value of <b>$35</b> or more.
            </div>
      </div>
     
    </div>
  );
};

export default ShippingProtection;
