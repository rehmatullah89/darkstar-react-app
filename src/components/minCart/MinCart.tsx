
'use client';
import { useCartContext } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import Loading from './loading';
import CartSlider from './CartSlider';
import ShippingProtection from '../../components/shippingProtection/shippingProtection';
import { useEffect, useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import backImg from "../../../public/assets/back_icon_v2.svg"

// import '@/css/minCart.css';

export default function MinCart() {
  const { state, dispatch, getCart, removeFromCart } = useCartContext();
  const [hideAndShowDiscount, setHideAndShowDiscount] =
    useState<boolean>(false);


  const closeMinCartEvent = () => {
    dispatch({ type: 'OPEN_MIN_CART', payload: false });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div
        className={`row m-0 fixed-top  end-0 top-0 bottom-0 h-100 bg-white min-cart ms-auto montserrat px-1 pt-2 ${state.is_open_cart ? 'cart_open' : 'cart_open_close'}`}
        style={{ opacity: '0', visibility: 'hidden' }}
      >
        {(state?.min_cart?.cart_items &&
          Object.values(state?.min_cart?.cart_items)?.length > 0) ||
          state.futureLoading.length > 0 ? (
          <div className="position-relative main--box">
            <div className="h-100">
              <div className="cart-menu-header top-0 d-flex w-100 justify-content-between align-items-center bg-white position-absolute pe-3 pb-1  zIndex-2">
                <h5 className="fs-18 text-uppercase fw-600 text-slate-500 pt-4">
                  items
                </h5>
                <div
                  className="text-end times-icon"
                  onClick={closeMinCartEvent}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                  {/* <span className="sp1 sp"></span>
                  <span className="sp2 sp"></span> */}
                </div>
                <div
                  className="text-end times-icon new-cart-close-icon"
                  onClick={closeMinCartEvent}
                >
                  <Image src={backImg} alt='back image' />
                  {/* <span className="sp1 sp"></span>
                  <span className="sp2 sp"></span> */}
                </div>
              </div>
              <div className="main-content-scrolled mt-4 position-relative pt-3">
                <div>
                  {Object.values(state.min_cart?.cart_items).map(
                    (item: any) => {
                      return (
                        <div
                          className="item-detail d-flex justify-content-between pt-3 border-bottom-dashed  pb-4 pe-2{"
                          key={item.key}
                        >
                          {state.removeLoadingStates[item.product_id] ||
                            state.loadingStates[item.product_id] ||
                            state.requestQueue.some(
                              (request: any) => request.id === item.product_id,
                            ) ? (
                            <Loading />
                          ) : (
                            <>
                              <div>
                                <a
                                  href="#"
                                  className="text-decoration-none text-slate-500 montserrat fw-500 fs-13 d-flex single-product"
                                  style={{ color: '#343434' }}
                                >
                                  <div
                                    className="pe-1 minCart_img"
                                    style={{ minWidth: '75px' }}
                                  >
                                    <Image
                                      src={item?.product_feature_image_url}
                                      alt="image"
                                      className="product-img min-cart-product"
                                      width={75}
                                      height={75}
                                    />
                                  </div>
                                  <div className="product-title ps-1 fw-500 montserrat" style={{lineHeight:'22px'}}>
                                    {item?.name}
                                    <div className="product-price ps-1 text-slate-500 fs-13" style={{lineHeight:'22px'}}>
                                      {item.quantity > 0 ? (
                                        <>
                                          <span style={{color:'#949494',fontWeight:'500',fontSize:'14px',lineHeight:'22px'}}> {item.quantity} <span className="cart_cross">x</span></span>{' '}
                                          {/* <span className="fs-11 d-inline-block px-1" style={{color:'#979797',fontWeight:'500',fontSize:'14px'}}>
                                           
                                          </span>{' '} */}
                                        </>
                                      ) : null}
                                      {!item?.price ? (
                                        item?.line_subtotal
                                      ) : item?.product_id == 899226 ? <span style={{color:'#565759',fontWeight:'600'}} > ${item?.line_subtotal}</span>  :  item?.on_sale ? (
                                        <>
                                          <span className="" style={{color:'#979797',fontWeight:'600',fontSize:'14px',lineHeight:'22px'}}>
                                            <del> ${item.regular_price} </del>
                                          </span>
                                          <span className=""style={{color:'#565759',fontWeight:'600',fontSize:'14px'}}>
                                            {/* ${item.price} */}
                                            ${item?.vip_sale_price?item.vip_sale_price :item.price}
                                          </span>
                                        </>
                                      ) : (
                                        <span className=""style={{color:'#565759',fontWeight:'600',fontSize:'14px'}}>
                                          ${item?.vip_sale_price ? item.vip_sale_price : item?.price ? item?.price : item.line_subtotal}
                                          {/* ${item?.vip_sale_price ? item.vip_sale_price : item?.line_subtotal ? item?.line_subtotal : item.price} */}
                                          {/* ${item?.line_subtotal ? item?.line_subtotal : item.price } */}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="text-end times-icon icon2 fs-14 rounded-pill border fw-500 text-slate-500 me-2"
                                onClick={(event: any) =>
                                  removeFromCart(event, item)
                                }
                              >
                                <span>x</span>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    },
                  )}
                </div>
                {state.futureLoading.length > 0 &&
                  state.futureLoading.map((obj: any, index: any) => {
                    // Check if the current value is a duplicate
                    const isDuplicate =
                      state.futureLoading.indexOf(obj) !== index;

                    // Render Loading component only if it's not a duplicate
                    if (!isDuplicate) {
                      return (
                        <div key={index}>
                          <Loading />
                        </div>
                      );
                    }

                    // Return null for duplicates to skip rendering
                    return null;
                  })}
                {state.up_sell_products.length > 0 ? (
                  <div
                    className="border mt-3 bg-grey-700  border-style-dashed pt-3 pb-3  related-prod"
                    id="accordionExample"
                  >
                    <div className=" one-time-main-heading text-slate-500 fimaly-multiple-opn text-center border-bottom mb-4 border-2">
                   <div className='oneTImeHeader'>
                   <h4 className=" fw-800 text-uppercase one-offer ">
                        ONE-TIME OFFER
                      </h4>
                      <p className="fs-14 text-slate-700 itallic">
                       Discounts limited to this checkout
                      </p>
                    </div>
                    </div>
                    <div>
                      <Accordion
                        defaultActiveKey="0"
                        className="min-cart-accordian"
                      >
                        <Accordion.Item eventKey="0">
                          <Accordion.Body>
                            {state.up_sell_products?.length ? (
                              <CartSlider
                                relatedProducts={state.up_sell_products}
                              />
                            ) : null}
                          </Accordion.Body>
                          <Accordion.Header className="min-cart-upsell-accordian">
                            <div
                              className="w-100  hide-discount"
                              id="headingOne"
                            >
                              <div
                                className="montserrat fw-500 border border-transparent fs-13 fw-400 fimaly-multiple-opn text-slate-500 hover hover-able text-uppercase py-11 bg-grey-600 text-white w-100 "
                                style={{ letterSpacing: '2px' }}
                                onClick={() =>
                                  setHideAndShowDiscount(!hideAndShowDiscount)
                                }
                              >
                                {hideAndShowDiscount
                                  ? 'SEE ONE-TIME DISCOUNTS'
                                  : 'Hide Discounts'}
                              </div>
                            </div>
                          </Accordion.Header>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className="w-100 position-absolute zIndex-99999 pe-4 pb-5 pt-1 bg-white"
              style={{ bottom: '-30px' }}
            >
              {state?.min_cart?.cart_totals?.discount_total ? (
                <div className="fimaly-multiple-opn d-flex align-items-center justify-content-between fs-18 text-slate-500 text-uppercase fw-600 pb-3">
                  <span>DISCOUNT</span>
                  <span
                    style={{
                      color: '#3c98cc',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'capitalize',
                    }}
                  >
                    {' '}
                    Coupon:{' '}
                    <span style={{ textTransform: 'lowercase' }}>
                      {state?.min_cart?.cart_totals?.coupons[0]}
                    </span>{' '}
                    - ${state?.min_cart?.cart_totals?.discount_total}
                  </span>
                </div>
              ) : (
                ''
              )}

              <div className="fimaly-multiple-opn d-flex align-items-center justify-content-between fs-18 text-slate-500 text-uppercase fw-600 pb-3">
                <span>sub total</span>
                <span>${state?.min_cart?.cart_totals?.subtotal}</span>
              </div>

              <ShippingProtection />

              <div className="min-btns d-flex align-items-center gap-2">
                <button
                  className="continue-shoping-btn border fs-14 fw-400  border-color-dark fimaly-multiple-opn text-slate-500 hover hover-able text-uppercase py-11 bg-transparent"
                  onClick={closeMinCartEvent}
                >
                  continue shopping
                </button>
                <Link
                  className="border custom-checkout-btn  border-transparent fs-14 fw-400 fimaly-multiple-opn text-slate-500 hover hover-able text-uppercase py-11 bg-blue-500 text-white "
                  style={{ letterSpacing: '2px', color: '#fff', textDecoration: 'none', textAlign:'center' }}
                  href="/checkout"
                  prefetch={false}
                >
                  checkout
                </Link>

              </div>
            </div>
          </div>
        ) : (
          <div className="h-100 d-flex align-content-center flex-wrap px-4 position-relative when-empty-cart">
            <div
              className="text-end times-icon cart-empty position-absolute end-0"
              onClick={closeMinCartEvent}
            >
              <span className="sp1 sp"></span>
              <span className="sp2 sp"></span>
            </div>
            <div
                  className="text-end times-icon new-cart-close-icon"
                  onClick={closeMinCartEvent}
                >
                  <Image src={backImg} alt='back image' />
                  {/* <span className="sp1 sp"></span>
                  <span className="sp2 sp"></span> */}
                </div>
            <h5 className="text-center fs-22 fimaly-multiple-opn text-slate-700 px-3 pb-3">
              There Are Currently No Items In Your Shopping Cart
            </h5>
            <div className="w-100 px- ">
              <Link
                href="/product/custom-whitening-tray"
                className="d-block text-center text-decoration-none fs-14 fw-300 fimaly-multiple-opn text-slate-500 hover hover-able text-uppercase py-11 bg-blue-500 text-white w-100"
                onClick={closeMinCartEvent}
              >
                shop now
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
