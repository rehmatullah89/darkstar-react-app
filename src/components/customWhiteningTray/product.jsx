import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './index.module.css';

const Product = ({ isActiveTab }) => {
  const sensitive = [
    {
      id: 1,
      title: 'T9 SENSITIVE SYSTEM',
      type: 'heavy stains',
      description:
        'Perfect for darker stained teeth. No natural sensitivity. Drinks coffee, tea, or wine regularly. May smoke. Wants best value on maintenance gel. Ideal for international customers. Everything you need to get custom-fitted trays and 27 applications (top and bottom) of whitening gel. ',
      productOffer: [
        {
          image:
            'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-trays-and-case-1.png',
          text: '1 set of custom trays (1 upper / 1 lower)',
        },
      ],
    },
  ];
  const noneSensitive = [
    {
      id: 1,
      title: 'T9 non SENSITIVE',
      type: 'heavy stains',
      description:
        'Perfect for darker stained teeth. No natural sensitivity. Drinks coffee, tea, or wine regularly. May smoke. Wants best value on maintenance gel. Ideal for international customers. Everything you need to get custom-fitted trays and 27 applications (top and bottom) of whitening gel. ',
      productOffer: [
        {
          image:
            'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-trays-and-case-1.png',
          text: '1 set of custom trays (1 upper / 1 lower)',
        },
        {
          image:
            'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-whitening-syringes-9-1.png',
          text: `27 whitening  applications (top & bottom) `,
        },
        {
          image:
            'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-whitening-syringes-9-1.png',
          text: '27 whitening  applications  (top & bottom) ',
        },
      ],
    },
  ];

  const products = isActiveTab ? noneSensitive : sensitive;
  return (
    <div className={`pt-5 tray-product ${isActiveTab ? '' : 'opacity-1'}`}>
      {products.map((item, index) => {
        return (
          <Card className="mt-5 rounded-0 pb-4" key={index}>
            <div className="card-top d-flex justify-content-between">
              <div
                className="bg-white mx-5 px-4 d-flex align-items-center sm-w-100 sm-justify-center"
                style={{ marginTop: '-45px' }}
              >
                <span className="pe-2 text-slate-500 montserrat fs-34 fw-400 sm-fs-20">
                  {item?.title?.slice(0, 2)}
                </span>
                <span className="text-uppercase fs-24 pt-2">
                  <span
                    className={`pe-1 montserrat fs-24 sm-fs-15 fw-500 ${
                      isActiveTab ? 'non-sensitive-color' : 'sensitive-color'
                    }`}
                  >
                    {item?.title?.slice(2)}
                  </span>
                  <span className="montserrat text-slate-500 ps-1">SYSTEM</span>
                </span>
                <span className="ps-2 primary-color fs-17 fw-300 montserrat text-slate-500 pt-2">
                  ({item?.type})
                </span>
              </div>
              <div className="px-4 bg-slate-500 pb-2 sm-d-none">
                <em className="text-white fw-400 fs-15 text-slate-500">
                  {item?.type}
                </em>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 product-selection-description-text-wrap">
                <div className="product-selection-description-text">
                  <p> {item.description}</p>
                </div>
              </div>
              <div className="col-md-4 product-selection-table-wrap">
                <table cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td class="product-selection-table-cell-1-image">
                        <img
                          src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-trays-and-case-1.png"
                          alt="image"
                          width={84}
                        />
                      </td>
                      <td className='class="product-selection-table-cell-plus"'>
                        <div>
                          <i class="fa fa-plus"></i>
                        </div>
                      </td>
                      <td className="product-selection-table-cell-2-image">
                        <img
                          src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-whitening-syringes-9-1.png"
                          alt="image"
                          width={90}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        colspan="2"
                        className="product-selection-table-cell-1-text"
                      >
                        <div className="product-selection-table-cell-1-large-number">
                          1
                        </div>
                        <div className="product-selection-table-cell-2-small-text">
                          set of custom trays
                          <br />
                          (1 upper / 1 lower)
                        </div>
                      </td>
                      <td
                        colspan="2"
                        className="product-selection-table-cell-2-text"
                      >
                        <div className="product-selection-table-cell-2-large-number">
                          27
                        </div>
                        <div className="product-selection-table-cell-2-small-text">
                          whitening
                          <br />
                          applications
                          <br />
                          (top &amp; bottom)
                        </div>
                      </td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="price-side mt-4 sm-w-100 sm-px-30 col-md-4">
                <div className="d-flex justify-content-center sm-flex-column sm-w-100 ">
                  <div className="text-center sm-w-100 ">
                    <div className="montserrat fw-400 fs-33 text-slate-500">
                      <span className="fa fa-dollar fs-18">$</span>169
                    </div>
                    <div className="fs-10 fimaly-multiple-opn text-slate-500">
                      one-time payment
                    </div>
                  </div>
                  <div className="text-center text-slate-500 sm-flex fimaly-multiple-opn ps-4 pe-4 xsm-px-0 sm-w-100 sm-justify-center">
                    <div className="sm-d-none">|</div>
                    <div className="text-uppercase pt-1 or-with-line position-relative sm-w-100">
                      or
                    </div>
                    <div className="sm-d-none">|</div>
                  </div>
                  <div className="text-center sm-flex sm-justify-baseline">
                    <div className="montserrat fw-400 fs-33 text-slate-500 sm-fs-22">
                      <span className="fa fa-dollar fs-21">$</span>43/
                      <span className="fs-30 sm-fs-18">mo</span>
                    </div>
                    <div className="fs-10 fimaly-multiple-opn text-slate-500 sm-flex sm-items-center  ps-2">
                      <span>4 months,</span>
                      <span className="mnts-lt ps-1 pe-2">0% APR</span>
                      <br />
                      <a
                        href="#"
                        className="text-decoration-none text-blue-500"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 mt-3 row align-items-center md-flex-column md-px-0 ">
              <div className="card-content align-self-start md-w-100 sm-px-15 col-md-4">
                <div className="text w-380 md-w-100">
                  <p className="text-center fs-14 open-sans sm-pt-20">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className=" md-w-100 md-px-0 sm-pt-20 col-md-4">
                <div className="d-flex position-relative justify-content-cente">
                  <div
                    className="border-bottom mt-2 position-absolute w-100"
                    style={{ top: '110px' }}
                  ></div>

                  <div
                    className="pb-2 position-relative text-center pt-2 md-w-100"
                    style={{ width: '240px' }}
                  >
                    <div className="min-h-120 w-100 pe-4">
                      <img
                        src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-trays-and-case-1.png"
                        alt="image"
                        width={84}
                      />
                    </div>
                    <div
                      className="content text-center w-fit mx-auto w-100"
                      style={{ marginTop: '9px' }}
                    >
                      <div className="pt-1 border-end min-h-130">
                        <div className="fw-light fs-42 montserrat">1</div>
                        <div className="fs-7">
                          set of custom trays
                          <br /> (1 upper / 1 lower){' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pb-2 position-relative text-center pt-2 md-w-100"
                    style={{ width: '240px' }}
                  >
                    <div className="min-h-120 w-100">
                      <span
                        className="fa fa-plus fs-18 position-absolute  mt-4 pt-3"
                        style={{ left: '-10px' }}
                      ></span>
                      <img
                        src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-whitening-syringes-9-1.png"
                        alt="image"
                        width={84}
                      />
                    </div>
                    <div
                      className="content text-center w-fit mx-auto w-100 pe-4"
                      style={{ marginTop: '9px' }}
                    >
                      <div className=" pt-1 border-end min-h-130 md-border-end-0">
                        <div className="fw-light fs-42 montserrat">27</div>
                        <div className="fs-7">
                          whitening
                          <br /> applications
                          <br /> (top & bottom){' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="price-side mt-4 sm-w-100 sm-px-30 col-md-4">
                <div className="d-flex justify-content-center sm-flex-column sm-w-100 ">
                  <div className="text-center sm-w-100 ">
                    <div className="montserrat fw-400 fs-33 text-slate-500">
                      <span className="fa fa-dollar fs-18">$</span>169
                    </div>
                    <div className="fs-10 fimaly-multiple-opn text-slate-500">
                      one-time payment
                    </div>
                  </div>
                  <div className="text-center text-slate-500 sm-flex fimaly-multiple-opn ps-4 pe-4 xsm-px-0 sm-w-100 sm-justify-center">
                    <div className="sm-d-none">|</div>
                    <div className="text-uppercase pt-1 or-with-line position-relative sm-w-100">
                      or
                    </div>
                    <div className="sm-d-none">|</div>
                  </div>
                  <div className="text-center sm-flex sm-justify-baseline">
                    <div className="montserrat fw-400 fs-33 text-slate-500 sm-fs-22">
                      <span className="fa fa-dollar fs-21">$</span>43/
                      <span className="fs-30 sm-fs-18">mo</span>
                    </div>
                    <div className="fs-10 fimaly-multiple-opn text-slate-500 sm-flex sm-items-center  ps-2">
                      <span>4 months,</span>
                      <span className="mnts-lt ps-1 pe-2">0% APR</span>
                      <br />
                      <a
                        href="#"
                        className="text-decoration-none text-blue-500"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <div className="text-slate-500 fw-400 fs-13 fimaly-multiple-opn ">
                    Avg Dentist Price: $715+
                  </div>
                  <div className="mt-3">
                    <button className="py-12 bg-orange-1000 text-uppercase text-white rounded-0  border-0 px-3 w-fit montserrat fs-15 letter-spacing-2 sm-w-100">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center d-none">
                <div className="card-content-mg col-md-8 ps-5 d-flex justify-content-center card-contentmg">
                  {item?.productOffer?.map((pitem, pindex) => {
                    return (
                      <div
                        className="card_content d-flex justify-content-center flex-column align-items-center horzontal-line position-relative"
                        key={pindex + 'p'}
                      >
                        <div className="text-center">
                          <div
                            style={{ height: '130px' }}
                            className="position-relative"
                          >
                            <img
                              src={pitem?.image}
                              alt={pitem?.image}
                              width={90}
                            />
                            {item?.productOffer?.length > pindex + 1 ? (
                              <div className="plus-sign fs-2 fw-bold">+</div>
                            ) : null}
                          </div>

                          <div className="text-center line position-relative mt-3 border-top">
                            <div
                              className={`border-end pt-3 item-text ml5 ${pindex}`}
                            >
                              <div className="fimaly-multiple-opn text-slate-500 px-2">
                                <div className="px-1">
                                  <h4 className="fw-light fs-42 montserrat">
                                    {pitem?.text?.slice(
                                      0,
                                      pitem.text.indexOf(' '),
                                    )}
                                  </h4>
                                  <p className="fs-7 px-4">
                                    {pitem?.text?.slice(
                                      pitem.text.indexOf(' '),
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className='d-flex position-relative mb-2 justify-content-center align-items-center d-none'>
                                            <div>
                                                <img src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-trays-and-case-1.png" alt="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-trays-and-case-1.png" width={80} />
                                            </div>
                                            <div className='px-5 mx-4 fs-2 fw-bold'>+</div>
                                            <div>
                                                <img src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-whitening-syringes-9-1.png" alt="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-whitening-syringes-9-1.png" width={90} />
                                            </div>
                                        </div>

                                        <hr className='m-0 d-none' />

                                        <div className='d-flex position-relative justify-content-between verticle-line pe-5 d-none'>
                                            <div className='text-center w-50 line position-relative pt-4'>
                                                <h4 className='fs-1 fw-light'>1</h4>
                                                <p className='fs-7'>set of custom trays<br />
                                                    (1 upper / 1 lower) </p>
                                            </div>
                                            <div className='text-center w-50 line position-relative pt-4'>
                                                <h4 className='fs-1 fw-light'>27</h4>
                                                <p className='fs-7'>
                                                    whitening
                                                    <br />
                                                    applications
                                                    <br />
                                                    (top & bottom)
                                                </p>
                                            </div>
                                        </div> */}
                </div>

                <div className="card-content-mg col-md-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-center">
                      <span className="fs-4 fw-bold">$</span>
                      <span className="fs-2 t-price">169</span>
                      <p className="fs-7">one-time payment</p>
                    </div>
                    <div className="text-uppercase position-relative px-3 or-line">
                      or
                    </div>
                    <div className="text-center">
                      <span className="fs-4 fw-bold">$</span>
                      <span className="fs-2">
                        <span className="t-price">43</span>/mo
                      </span>
                      <div className="text-center fs-7">
                        <div className="fs-7">
                          <span>4 months,</span>
                          <span className="mnts-lt fw-bold ps-1">0% APR</span>
                        </div>
                        <a
                          href="#"
                          className="text-decoration-none "
                          style={{ color: '#4597cb' }}
                        >
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 text-center t-add-to-cart">
                    <p className="text-center">
                      Avg Dentist Price: <span>$71+</span>
                    </p>
                    <button
                      style={{ background: '#f8a18a' }}
                      className="border-0 add-to-cart-btn sm-w-100"
                    >
                      <a
                        href="#"
                        className="text-decoration-none text-white text-uppercase d-block"
                      >
                        Add to card
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Product;
