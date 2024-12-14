'use client';
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const index = ({ index }: { index: any }) => {
  const [radioBtnState, setRadioBtnState] = useState(0);
  return (
    <>
      <Col md={4} sm={12}>
        <Card
          className="rounded-0 position-relative"
          style={{ padding: '30px' }}
        >
          <div
            className="position-absolute card-top1"
            id="mobileProduct_night_gaurd"
          >
            <div
              className="fs-13 text-seegreen-800 fimaly-multiple-opn"
              style={{ color: '#331f97', fontWeight: '600' }}
            >
              BEST VALUE
            </div>
            <div
              className="fs-26  text-slate-500 fimaly-multiple-opn"
              style={{ fontWeight: '300' }}
            >
              {' '}
              DELUXE PACKAGE
            </div>
          </div>
          <div className="product-selection-image-wrap pt-4">
            <img
              src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/night-guards.png"
              className="w-100 "
            />
          </div>
          <b className="mb-3 text-uppercase fw-600 fs-14 open-sans text-slate-500">
            4 ULTRA-DURABLE NIGHT GUARDS
          </b>
          <div className="line-divider"></div>

          <div className="description-info3">
            <div className="product-selection-description fs-14 open-sans text-slate-500">
              <b className="fw-600 fs-14 open-sans text-slate-500">Rating: </b>
              <img
                src="https://www.smilebrilliant.com/wp-content/uploads/2020/09/4.9-stars.png"
                className="stars"
              />{' '}
              <span className="fs-14 open-sans text-slate-500 text-start">
                4.9
              </span>
              <div className="line-divider"></div>
              <b className="fw-600 fs-14 open-sans text-slate-500">
                Material:{' '}
              </b>
              <span>Soft </span>
              <span className="">2mm</span>
              <span className="ps-1">(Latex &amp; BPA free)</span>
              <div className="line-divider"></div>
              <b className="fw-600 fs-14 open-sans text-slate-500">Usage: </b>
              <img
                src="https://www.smilebrilliant.com/wp-content/uploads/2020/09/90-bar.png"
                className="bar"
              />
              <span className="ps-2">Lasts 1 yr with heavy grinding.</span>
              <div className="line-divider"></div>
            </div>
            <br />
            <div className="info-des-ja fimaly-multiple-opn text-slate-500 fs-14">
              <b>Description: </b>Includes 4 custom-fitted night guards &amp;
              travel cases. Your dental impressions are kept on file for easy
              reorder.
              <br />
              <span className="text-seegreen-600 mt-4 d-inline-block">
                Free Shipping. Free impression kit.
              </span>
              <br />
              <b>
                Lifetime reorder for only <span className="2mmdd4">$25</span>{' '}
                <span className="3mmdd4">$35</span> /guard!
              </b>
            </div>
          </div>

          <div className="product-selection-price-wrap pos-rel bg-transparent">
            <div className="text-slate">
              {/* <i role="presentation" className="fa fa-dollar product-selection-price-dollar-symbol fs-20 fw-300"></i> */}
              <span className="fs-20 montserrat">$</span>
              <span className="product-selection-price-text price_ultra4Night2mm fs-32 montserrat">
                149.00
              </span>
            </div>

            <div className="product-selection-dentist-price-note getinfo-four fimaly-multiple-opn">
              <p>Compared to $750</p>
            </div>
          </div>
          <div className="w-100 mt-2">
            <div className="fimaly-multiple-opn text-slate-500 mb-2 d-flex gap-3">
              <div className={`w-50 position-relative`}>
                <input
                  type="radio"
                  name="price_card_size"
                  className="d-none"
                  id={`radion_btn_${index}`}
                />
                <label
                  className="m-0 d-block h-100 w-100 position-absolute  top-0 zIndex-2 radion-btn-active"
                  htmlFor={`radion_btn_${index}`}
                ></label>
                <div
                  className={`border min-h-50 max-h-50 pb-3 w-100 position-relative d-flex align-items-center justify-content-center flex-column`}
                >
                  2mm
                  <br />
                  <span className="fs-12 lh0 d-block ps-2 pt-1">
                    (most popular)
                  </span>
                  <span className="circle-20 d-flex align-items-center justify-content-center check-colored border rounded-pill position-absolute start-0 transform-y-50percent top-50percent ms-3"></span>
                </div>
              </div>
              <div className={`w-50 position-relative`}>
                <input
                  type="radio"
                  name="price_card_size"
                  className="d-none"
                  id={`radion2_btn_${index}`}
                />
                <label
                  className="m-0 d-block h-100 w-100 position-absolute  top-0 zIndex-2 radion-btn-active"
                  htmlFor={`radion2_btn_${index}`}
                ></label>
                <div
                  className={`border min-h-50 max-h-50 w-100 position-relative d-flex align-items-center justify-content-center flex-column`}
                >
                  2mm
                  <span className="circle-20 d-flex align-items-center justify-content-center check-colored border rounded-pill position-absolute start-0 transform-y-50percent top-50percent ms-3"></span>
                </div>
              </div>
            </div>

            <button className="w-100 montserrat fs-14 border-color-seegreen-900 border min-h-30 bg-seegreen-800 text-white letter-spacing-2 fw-300 py-1">
              ADD TO CART
            </button>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default index;
