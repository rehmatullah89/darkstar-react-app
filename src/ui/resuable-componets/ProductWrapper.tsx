'use client';
import Head from 'next/head';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { useCartContext } from '@/context/CartContext';
import {
  ADD_ITEM_IN_CART,
  OPEN_MIN_CART,
  SHOW_LOADER,
} from '@/context/actions';
import { BASE_URL } from '@/utils/constants';

import { useApi } from '@/hooks/useRequest';

interface ProductWrapperProps {
  title: string;
  orignalPrice: string;
  newPrice: string;
  oldPrice?: string;
  innerTitle: string;
  image: any;
  product?: any;
}

export default function ProductWrapper({
  title,
  orignalPrice,
  newPrice,
  innerTitle,
  image,
  oldPrice,
  product,
}: ProductWrapperProps) {
  const { state, dispatch } = useCartContext();
  const { get, post } = useApi();

  const addToCartEvent = async (event: any, product: any) => {
    event.preventDefault();
    const data = new URLSearchParams({
      product_id: '12',
      action: 'custom_add_to_cart',
    });
    const cart = await post('/wp-admin/admin-ajax.php', data);
  };

  return (
    <div>
      <div className="product-selection-box">
        <div className="product-selection-image-wrap">
          <img src={image} width={306} height={227} alt="image1" />
        </div>
        <div className="product-selection-description">
          <b> {title}</b>
        </div>
        <div className="backOrderList alert alert-danger font-mont">
          This product is backordered with an estimated shipping date in late
          January 2023.
        </div>
        <div className="product-selection-price-wrap">
          <div>
            <div className="product-selection-dentist-price-note">
              {orignalPrice}
            </div>
            {oldPrice ? (
              <span className="product-selection-price-text">
                <del aria-hidden="true" className="del_tag">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      {oldPrice}
                    </bdi>
                  </span>
                </del>
                <ins>
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      {newPrice}
                    </bdi>
                  </span>
                </ins>
              </span>
            ) : (
              <span className="product-selection-price-text default_price">
                <ins>
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      {newPrice}
                    </bdi>
                  </span>
                </ins>
              </span>
            )}
          </div>
          <div className="value-text text-center">{innerTitle}</div>
          <button
            className={`btn btn btn-primary-purple product_type_composite add_to_cart_button ajax_add_to_cart position-relative py-2 ${
              state.show_loader == product?.id ? 'loading' : null
            }`}
            onClick={(event: any) => addToCartEvent(event, product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
