import Image from 'next/image';
import React from 'react';
import CustomizeCardPrice from './CustomizeCardPrice';
interface priceCardType {
  image?: any;
  data: any;
  handleProductSelection: any;
}

const Pricing = ({ data, handleProductSelection }: priceCardType) => {
  return (
    <div className={`w-100 ${data.cardNumberclass}`}>
      <div className="rounded-0 position-relative card p-30">
        <div
          className="position-absolute card-top1 text-center"
          style={{ top: '-40px' }}
        >
          <div className="fs-13 text-seegreen-700 fimaly-multiple-opn">
            {data.title1}
          </div>
          <div className="fs-30 fw-300 text-slate-500 fimaly-multiple-opn lh-0">
            {data.title2}
          </div>
        </div>
        <div className="product-selection-image-wrap">
          <div className="text-center mt-3 mb-2">
            <Image src={data.footbalcombatproductimage} alt="image" />
            <div className="fw-600 fimaly-multiple-opn fs-16 text-center text-slate-500 text-uppercase">
              {data.heading}
            </div>
          </div>
          {/* <div className="line-divider"></div> */}
          <div className="description-info3">
            <div className="product-selection-description fs-14 open-sans text-slate-500">
              <div className="d-flex align-items-center">
                <span className="fs-14 open-sans text-slate-500 fw-700">
                  Rating:
                </span>
                <Image src={data.stars} alt="image" className="mx-1" />
                <span className="fs-14 open-sans text-slate-500 text-start ">
                  4.9 stars
                </span>
              </div>
              <div className="line-divider mt-2"></div>
              <div>
                <span className="fs-14 open-sans text-slate-500 fw-700 me-1">
                  Material:
                </span>
                <span> 3mm - 5mm (Latex & BPA Free)</span>
              </div>
              <div className="line-divider mt-2"></div>
              <div>
                <span className="fs-14 open-sans text-slate-500 fw-700 me-1">
                  Suggested Usage:
                </span>
                <span>football, mma, boxing, etc</span>
              </div>
              <div className="line-divider mt-2"></div>
              <div className="d-flex align-items-center">
                <span className="fs-14 open-sans text-slate-500 fw-700 me-1">
                  Bite Cushion:
                </span>
                <div className="bg-grey-100 pe-1 mx-2 w-h-16-82">
                  <div className="bg-seegreen-700 d-inline-block w-100 h-100"></div>
                </div>
                <span className="fs-10">max cushion for bite impact</span>
              </div>
              <div className="line-divider mt-2"></div>
              <div className="d-flex align-items-center">
                <span className="fs-14 open-sans text-slate-500 fw-700 me-1">
                  Impact Rating:
                </span>
                <div className="bg-grey-100  mx-2 w-h-16-82">
                  <div className="bg-seegreen-700 d-inline-block w-100 h-100"></div>
                </div>
                <span className="fs-10">optimized for max impact</span>
              </div>
              <div className="line-divider mt-2"></div>
              <div className="d-flex align-items-center">
                <span className="fs-14 open-sans text-slate-500 fw-700 me-1">
                  Ease of Removal:
                </span>
                <div className="bg-grey-100  mx-2 w-h-16-82 pe-4">
                  <span className="d-inline-block w-100 h-100 pe-3">
                    {' '}
                    <div className="bg-yellow-700 d-inline-block w-100 h-100"></div>
                  </span>
                </div>
                <span className="fs-10">reinforced to stay in place</span>
              </div>
              <div className="line-divider mt-2"></div>
              <div className="d-flex align-items-center">
                <span className="fs-14 open-sans text-slate-500 fw-700 me-1">
                  Communication:
                </span>
                <div className="bg-grey-100  mx-2 w-h-16-82 pe-4">
                  <span className="d-inline-block w-100 h-100 pe-2">
                    {' '}
                    <div className="bg-yellow-700 d-inline-block w-100 h-100"></div>
                  </span>
                </div>
                <span className="fs-10">may limit communication</span>
              </div>
            </div>
            <div className="line-divider mt-2"></div>
            <div className="info-des-ja fimaly-multiple text-slate-600 fs-14 mt-3">
              <div className="text-center fimaly-multiple-opn fs-16 text-seegreen-700 fw-500">
                Free Shipping. Free impression kit.
              </div>
              <div className="text-center fimaly-multiple-opn fs-16 fw-600">
                Lifetime reorder for only $40 /guard!
              </div>
            </div>
          </div>
          <div className="product-selection-price-wrap pos-rel bg-transparent mt-0 position-relative">
            <div>
              <span className="fs-34 fw-300 fimaly-multiple-opn">$</span>
              <span className="product-selection-price-text price_ultra4Night2mm fw-400">
                {data.price}
              </span>
            </div>

            <div className="fimaly-multiple-opn fs-13">Compared to $750</div>
            <div className="wrapper flex-wrapper fimaly-multiple-opn">
              <div className="form-group-radio-custom position-relative">
                <input
                  type="radio"
                  name="ultra4night"
                  id={`ultra4_night_guard2mm ${data.cardNumberclass}`}
                  className="fist-btn"
                  // onChange={() => data.setCardState('')}
                />
                <label
                  htmlFor={`ultra4_night_guard2mm ${data.cardNumberclass}`}
                  className="option"
                >
                  <div className="dot"></div>
                  <span className="mmAmount fs-16">Standard Clear</span>
                  <span className="mmpopular">(most popular)</span>
                </label>
              </div>
              <div className="form-group-radio-custom position-relative">
                <div
                  className={`color-div position-absolute start-0 end-0 w-100 ${
                    data.cardState ? 'd-block' : 'd-none'
                  }`}
                  style={{
                    top: '-30px',
                    background: '#5f6c79',
                    height: '40px',
                  }}
                ></div>
                <input
                  type="radio"
                  name="ultra4night"
                  id={data.cardNumberclass}
                  className="second-btn"
                  // onChange={(event) =>
                  //   handleProductSelection(event, data.cardNumberclass)
                  // }
                />
                <label
                  htmlFor={data.cardNumberclass}
                  className={`option ${
                    data.cardState && data.cardState + ' border-0'
                  }`}
                >
                  <div className="dot"></div>
                  <span className="mmAmount">Customized</span>
                  <span className="mmpopular">(+ $15.00)</span>
                </label>
              </div>
              <div
                className={`position-absolute start-0 w-100 ps-5 custom_price_card d-none ${data.cardState}`}
                style={{ top: '-280px' }}
                id={data.cardNumberclass}
              >
                <div
                  style={{ background: '#5f6c79' }}
                  className="py-4 custom-product-selection-card"
                >
                  <CustomizeCardPrice cardState={data.cardState} />
                </div>
              </div>
            </div>
            <button
              className={`hover hover-able btn-md btm-sm btn-lg lg-min-w-100 py-12 border-0 bg-blue-800 text-white montserrat fs-20 mt-4 ${data.isDisabled}`}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
