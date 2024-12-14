// components/Tabs.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPlus } from '@fortawesome/free-solid-svg-icons';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('non-sensitive');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="productWrapper row">
      <div className="col-md-9 mx-auto text-center mt-3 pt-3">
        <ul className="tabs">
          <li
            className={
              activeTab === 'non-sensitive' ? 'vc_active' : 'vc_tta-tab'
            }
            data-vc-tab=""
          >
            <a
              className="non-sensitive-text montserrat fw-300 text-uppercase  border fs-18 px-0 text-decoration-none px-5 d-inline-block"
              href="#non-sensitive"
              onClick={() => handleTabClick('non-sensitive')}
            >
              <span className="vc_tta-title-text">NON-SENSITIVE</span>
            </a>
          </li>
          <li>
            <span>
              <span className="text-uppercase px-4">or</span>
            </span>
          </li>
          <li
            className={activeTab === 'sensitive' ? 'vc_active' : 'vc_tta-tab'}
          >
            <a
              className="sensitive-text montserrat  fw-300 text-uppercase  border fs-18 px-0 text-decoration-none px-5 d-inline-block"
              href="#sensitive"
              onClick={() => handleTabClick('sensitive')}
            >
              <span className="vc_tta-title-text">SENSITIVE</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="wrapper col-sm-12">
        <div
          id="non-sensitive"
          style={{ display: activeTab === 'non-sensitive' ? 'block' : 'none' }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span class="product-selection-title-text-name">
                      <span class="lrge-fnt text-gray">T9&nbsp;</span>
                      <span class="non-sensitive blue-text">
                        NON-SENSITIVE{' '}
                      </span>
                      <span class="text-gray">SYSTEM </span>
                    </span>
                    <span class="product-selection-title-text-small">
                      (heavy stains)
                    </span>
                    <div class="product-selection-title-right">
                      heavy stains
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 product-selection-description-text-wrap">
                  <div className="product-selection-description-text">
                    <p>
                      Perfect for darker stained teeth. No natural sensitivity.
                      Drinks coffee, tea, or wine regularly. May smoke. Wants
                      best value on maintenance gel. Ideal for international
                      customers. Everything you need to get custom-fitted trays
                      and 27 applications (top and bottom) of whitening gel.
                    </p>
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
                        <td className="product-selection-table-cell-plus">
                          <div>
                            {' '}
                            <FontAwesomeIcon icon={faPlus} />
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
                        <td
                          colspan="2"
                          className="product-selection-table-cell-2-text"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-6 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        169.00
                      </span>
                      <div className="product-price-meta">one-time payment</div>
                    </div>
                    <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      class="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr>
                    <div className="col-md-6 column-two">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-installment-price-text">
                        43
                      </span>
                      <span>/mo</span>
                      <div className="mnts-lt">
                        <span className="text-gray">4 months, </span>
                        <span className="text-turquoise">0% APR</span>
                        <br className="hidden-xs hidden-sm" />
                        <a className="affirm-modal-trigger">Learn more</a>
                      </div>
                    </div>
                  </div>
                  <div className="avg-price">Avg Dentist Price: $715+</div>
                  <div className="product-selection-price-button-wrap">
                    <button class="btn btn-primary-orange  position-relative ">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sensitive"
          style={{ display: activeTab === 'sensitive' ? 'block' : 'none' }}
        >
          <h1>sensitive</h1>
        </div>
      </div>

      {/* second product  */}

      <div className="wrapper col-sm-12">
        <div
          id="non-sensitive"
          style={{ display: activeTab === 'non-sensitive' ? 'block' : 'none' }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span class="product-selection-title-text-name">
                      <span class="lrge-fnt text-gray">T6&nbsp;</span>
                      <span class="non-sensitive blue-text">
                        NON-SENSITIVE{' '}
                      </span>
                      <span class="text-gray">SYSTEM </span>
                    </span>
                    <span class="product-selection-title-text-small">
                      (average stains)
                    </span>
                    <div class="product-selection-title-right">
                      average stains
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 product-selection-description-text-wrap">
                  <div className="product-selection-description-text">
                    <p>
                      Perfect for average stained teeth. No natural sensitivity.
                      Drinks coffee, tea, or wine with some regularity.
                      Everything you need to get custom-fitted trays and 18
                      applications (top and bottom) of whitening gel.
                    </p>
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
                        <td className="product-selection-table-cell-plus">
                          <div>
                            {' '}
                            <FontAwesomeIcon icon={faPlus} />
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
                            18
                          </div>
                          <div className="product-selection-table-cell-2-small-text">
                            whitening
                            <br />
                            applications
                            <br />
                            (top &amp; bottom)
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="product-selection-table-cell-2-text"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-6 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        159.00
                      </span>
                      <div className="product-price-meta">one-time payment</div>
                    </div>
                    <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      class="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr>
                    <div className="col-md-6 column-two">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-installment-price-text">
                        135
                      </span>
                      <span>/mo</span>
                      <div className="mnts-lt">
                        <span className="text-gray">4 months, </span>
                        <span className="text-turquoise">0% APR</span>
                        <br className="hidden-xs hidden-sm" />
                        <a className="affirm-modal-trigger">Learn more</a>
                      </div>
                    </div>
                  </div>
                  <div className="avg-price">Avg Dentist Price: $659+</div>
                  <div className="product-selection-price-button-wrap">
                    <button class="btn btn-primary-orange  position-relative ">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sensitive"
          style={{ display: activeTab === 'sensitive' ? 'block' : 'none' }}
        >
          <h1>sensitive</h1>
        </div>
      </div>

      {/* 3rd product */}

      <div className="wrapper col-sm-12">
        <div
          id="non-sensitive"
          style={{ display: activeTab === 'non-sensitive' ? 'block' : 'none' }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span class="product-selection-title-text-name">
                      <span class="lrge-fnt text-gray">T3&nbsp;</span>
                      <span class="non-sensitive blue-text">
                        NON-SENSITIVE{' '}
                      </span>
                      <span class="text-gray">SYSTEM </span>
                    </span>
                    <span class="product-selection-title-text-small">
                      (light stains)
                    </span>
                    <div class="product-selection-title-right">
                      light stains
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 product-selection-description-text-wrap">
                  <div className="product-selection-description-text">
                    <p>
                      Great for lightly stained teeth. No natural sensitivity.
                      Has whitened in the past. Does not regularly drink coffee,
                      tea, or wine. Does not smoke. Everything you need to get
                      custom-fitted trays and 9 applications (top and bottom) of
                      whitening gel.
                    </p>
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
                        <td className="product-selection-table-cell-plus">
                          <div>
                            {' '}
                            <FontAwesomeIcon icon={faPlus} />
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
                            9
                          </div>
                          <div className="product-selection-table-cell-2-small-text">
                            whitening
                            <br />
                            applications
                            <br />
                            (top &amp; bottom)
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="product-selection-table-cell-2-text"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-6 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        149.00
                      </span>
                      <div className="product-price-meta">one-time payment</div>
                    </div>
                    <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      class="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr>
                    <div className="col-md-6 column-two">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-installment-price-text">
                        127
                      </span>
                      <span>/mo</span>
                      <div className="mnts-lt">
                        <span className="text-gray">4 months, </span>
                        <span className="text-turquoise">0% APR</span>
                        <br className="hidden-xs hidden-sm" />
                        <a className="affirm-modal-trigger">Learn more</a>
                      </div>
                    </div>
                  </div>
                  <div className="avg-price">Avg Dentist Price: $659+</div>
                  <div className="product-selection-price-button-wrap">
                    <button class="btn btn-primary-orange  position-relative ">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sensitive"
          style={{ display: activeTab === 'sensitive' ? 'block' : 'none' }}
        >
          <h1>sensitive</h1>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
