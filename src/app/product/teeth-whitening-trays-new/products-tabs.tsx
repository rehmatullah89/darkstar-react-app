// components/Tabs.js
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faPlus } from "@fortawesome/free-solid-svg-icons";
import assets from "./assets";
import Image from "next/image";
import AddToCart from "../../../ui/resuable-componets/addtocart";
import { Suspense } from "react";

type ProductType = {
  id: string;
  image: string;
  name: string;
  description: string;
  orignalPrice: string;
  oldPrice?: string;
  newPrice: string;
  innerTitle: string;
  price: string;
  affirm_months: string;
  affirm_price: string;
};

type TabsProps = {
  nonsensitive: ProductType[];
  sensitive: ProductType[];
};

const Tabs = ({ nonsensitive, sensitive }: TabsProps) => {
  // console.log('sensitive', sensitive)
  console.log("nonsensitive", sensitive[0]);
  const [activeTab, setActiveTab] = useState("non-sensitive");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="productWrapper row">
      <div className="col-md-9 mx-auto text-center mt-3 pt-3">
        <ul className="tabs">
          <li
            className={
              activeTab === "non-sensitive" ? "vc_active" : "vc_tta-tab"
            }
            data-vc-tab=""
          >
            <a
              className="non-sensitive-text montserrat fw-300 text-uppercase  border fs-18 px-0 text-decoration-none px-5 d-inline-block"
              href="#non-sensitive"
              onClick={() => handleTabClick("non-sensitive")}
            >
              <span className="vc_tta-title-text">NON-SENSITIVE</span>
            </a>
          </li>
          <span className="or"> OR</span>
          <li
            className={activeTab === "sensitive" ? "vc_active sensitive" : "vc_tta-tab"}
          >
            <a
              className="sensitive-text montserrat  fw-300 text-uppercase  border fs-18 px-0 text-decoration-none px-5 d-inline-block"
              href="#sensitive"
              onClick={() => handleTabClick("sensitive")}
            >
              <span className="vc_tta-title-text">SENSITIVE</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="wrapper col-sm-12">
        <div
          id="non-sensitive"
          style={{ display: activeTab === "non-sensitive" ? "block" : "none" }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span className="product-selection-title-text-name">
                      <span className="lrge-fnt text-gray">T9&nbsp;</span>
                      <span className="non-sensitive blue-text">
                        NON-SENSITIVE
                      </span>
                      <span className="text-gray">SYSTEM </span>
                    </span>
                    <span className="product-selection-title-text-small">
                      (heavy stains)
                    </span>
                    <div className="product-selection-title-right">
                      heavy stains
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 product-selection-description-text-wrap">
                  <div className="product-selection-description-text">
                    Perfect for darker stained teeth. No natural sensitivity.
                    Drinks coffee, tea, or wine regularly. May smoke. Wants best
                    value on maintenance gel. Ideal for international customers.
                    Everything you need to get custom-fitted trays and 27
                    applications (top and bottom) of whitening gel.
                  </div>
                </div>
                <div className="col-md-4 product-selection-table-wrap">
                  <table>
                    <tbody>
                      <tr>
                        <td className="product-selection-table-cell-1-image">
                        <Image
                            src={assets.travelcase}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                          <Image
                            src={assets.sensitive9}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td
                          className="product-selection-table-cell-1-text"
                          colSpan={2}
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
                        <td className="product-selection-table-cell-2-text mobile-no-right-border desktop_no_border">
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
                        <td className="product-selection-table-cell-2-text empty_mbl_td"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-6 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        {nonsensitive[0]?.price}
                      </span>
                      <div className="product-price-meta">one-time payment</div>
                    </div>
                    <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      className="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr>
                    <div className="col-md-6 column-two">
                      <span className="product-selection-installment-price-text">
                        <p className="permonth_price">
                          <span className="dollar_symbol">
                            <FontAwesomeIcon icon={faDollarSign} />
                          </span>
                          <span className="affirm_price">
                            {nonsensitive[0]?.affirm_price}
                          </span>
                          <span className="per_month">/mo</span>
                        </p>
                      </span>
                      <div className="mnts-lt">
                        <span className="text-turquoise">
                         <span className="tray_white_months_color"> {nonsensitive[0]?.affirm_months} months,</span> <span className="deep_purple_color">0% APR</span> 
                        </span>
                        <br className="hidden-xs hidden-sm" />
                        <a className="affirm-modal-trigger">Learn more</a>
                      </div>
                    </div>
                  </div>
                  <div className="avg-price">Avg Dentist Price: $715+</div>
                  <div className="product-selection-price-button-wrap">
                    <div className="">
                      <Suspense fallback={<div>Loading Buttons</div>}>
                        <AddToCart product={nonsensitive[0]} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sensitive"
          style={{ display: activeTab === "sensitive" ? "block" : "none" }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span className="product-selection-title-text-name">
                      <span className="lrge-fnt text-gray">T9&nbsp;</span>
                      <span className="non-sensitive blue-text">SENSITIVE</span>
                      <span className="text-gray">SYSTEM </span>
                    </span>
                    <span className="product-selection-title-text-small">
                      (heavy stains)
                    </span>
                    <div className="product-selection-title-right">
                      heavy stains
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 product-selection-description-text-wrap">
                  <div className="product-selection-description-text">
                    The best value for deeply stained teeth. For those who drink
                    coffee, tea, or wine regularly. May smoke or have stains due
                    to childhood medication. This system is best for those who
                    have heightened tooth sensitivity which will require more
                    sessions (shorter duration). Preferred package for
                    international customers. Everything you need to get
                    custom-fitted trays and 27 applications (top and bottom)
                  </div>
                </div>
                <div className="col-md-4 product-selection-table-wrap">
                  <table>
                    <tbody>
                      <tr>
                        <td className="product-selection-table-cell-1-image">
                        <Image
                            src={assets.travelcase}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                        <Image
                            src={assets.sensitive9}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                          <Image
                            src={assets.dsensitive9}
                            alt="sensitive nine"
                            width={90}
                            quality={100}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td
                          className="product-selection-table-cell-1-text"
                          colSpan={2}
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
                        <td className="product-selection-table-cell-2-text">
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
                          className="product-selection-table-cell-2-text desktop_no_border"
                          colSpan={2}
                        >
                          <div className="product-selection-table-cell-2-large-number">
                            27
                          </div>
                          <div className="product-selection-table-cell-2-small-text">
                            desensitizing
                            <br />
                            applications
                            <br />
                            (top &amp; bottom)
                          </div>
                        </td>
                        <td
                          className="product-selection-table-cell-2-text empty_mbl_td"
                          colSpan={2}
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
                        {sensitive[0]?.price}
                      </span>
                      <div className="product-price-meta">one-time payment</div>
                    </div>
                    <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      className="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr>
                    <div className="col-md-6 column-two">
                      <span className="product-selection-installment-price-text">
                        <p className="permonth_price">
                          <span className="dollar_symbol">
                            <FontAwesomeIcon icon={faDollarSign} />
                          </span>
                          <span className="affirm_price">
                            {sensitive[0]?.affirm_price}
                          </span>
                          <span className="per_month">/mo</span>
                        </p>
                      </span>
                      <div className="mnts-lt">
                        <span className="text-turquoise">
                         <span className="tray_white_months_color">{sensitive[0]?.affirm_months} months,</span> <span className="deep_purple_color">0% APR</span> 
                        </span>
                        <br className="hidden-xs hidden-sm" />
                        <a className="affirm-modal-trigger">Learn more</a>
                      </div>
                    </div>
                  </div>
                  <div className="avg-price">Avg Dentist Price: $850+</div>
                  <div className="product-selection-price-button-wrap">
                    <div className=" ">
                      <Suspense fallback={<div>Loading Buttons</div>}>
                        <AddToCart product={sensitive[0]} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second product  */}

      <div className="wrapper col-sm-12 second-tweleve-div">
        <div
          id="non-sensitive"
          style={{ display: activeTab === "non-sensitive" ? "block" : "none" }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span className="product-selection-title-text-name">
                      <span className="lrge-fnt text-gray">T6&nbsp;</span>
                      <span className="non-sensitive blue-text">
                        NON-SENSITIVE
                      </span>
                      <span className="text-gray">SYSTEM </span>
                    </span>
                    <span className="product-selection-title-text-small">
                      (average stains)
                    </span>
                    <div className="product-selection-title-right">
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
                  <table>
                    <tbody>
                      <tr>
                        <td className="product-selection-table-cell-1-image">
                        <Image
                            src={assets.travelcase}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                          <Image
                            src={assets.sensitive6}
                            alt="sensitive nine"
                            width={90}
                            quality={100}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td
                          className="product-selection-table-cell-1-text"
                          colSpan={2}
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
                        <td className="product-selection-table-cell-2-text desktop_no_border">
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
                        <td className="product-selection-table-cell-2-text empty_mbl_td"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-12 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        {nonsensitive[1]?.price}
                      </span>
                      {/* <div className="product-price-meta">one-time payment</div> */}
                    </div>
                    {/* <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      className="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr> */}
                    {/* <div className="col-md-6 column-two">
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
                    </div> */}
                  </div>
                  <div className="avg-price">Avg Dentist Price: $659+</div>
                  <div className="product-selection-price-button-wrap">
                    <div className="">
                      <Suspense fallback={<div>Loading Buttons</div>}>
                        <AddToCart product={nonsensitive[1]} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sensitive"
          style={{ display: activeTab === "sensitive" ? "block" : "none" }}
        >
          <div id="teeth-whitening_non-sensitive ">
            <div className="heavy-stains-cont sensitive_three_divs">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span className="product-selection-title-text-name">
                      <span className="lrge-fnt text-gray">T6&nbsp;</span>
                      <span className="non-sensitive blue-text">Sensitive</span>
                      <span className="text-gray">SYSTEM </span>
                    </span>
                    <span className="product-selection-title-text-small">
                      (heavy stains)
                    </span>
                    <div className="product-selection-title-right">
                      heavy stains
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 product-selection-description-text-wrap">
                  <div className="product-selection-description-text">
                    Perfect for average stained teeth. For those with some
                    sensitivity to cold food/drink or those who have been unable
                    to use other whitening products due to teeth
                    &quot;aching&quot;. Drinks coffee, tea, or wine with some
                    regularity. Everything you need to get custom-fitted trays
                    and 18 applications (top and bottom).
                  </div>
                </div>
                <div className="col-md-4 product-selection-table-wrap">
                  <table>
                    <tbody>
                      <tr>
                        <td className="product-selection-table-cell-1-image">
                        <Image
                            src={assets.travelcase}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                        <Image
                            src={assets.sensitive6}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                          <Image
                            src={assets.dsensitive6}
                            alt="sensitive nine"
                            width={90}
                            quality={100}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td
                          className="product-selection-table-cell-1-text"
                          colSpan={2}
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
                          className="product-selection-table-cell-2-text"
                          colSpan={2}
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
                          className="product-selection-table-cell-2-text desktop_no_border"
                          colSpan={2}
                        >
                          <div className="product-selection-table-cell-2-large-number">
                            18
                          </div>
                          <div className="product-selection-table-cell-2-small-text">
                            desensitizing
                            <br />
                            applications
                            <br />
                            (top &amp; bottom)
                          </div>
                        </td>
                        <td
                          className="product-selection-table-cell-2-text empty_mbl_td"
                          colSpan={2}
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-12 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        {sensitive[1]?.price}
                      </span>
                      {/* <div className="product-price-meta">one-time payment</div> */}
                    </div>
                    {/* <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      className="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr> */}
                    {/* <div className="col-md-6 column-two">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-installment-price-text"> */}
                    {/* <p>{nonsensitiveProduct.AFFIRM_PRICE}</p> */}
                    {/* </span>
                      <span>/mo</span>
                      <div className="mnts-lt">
                        <span className="text-gray">
                        
                          <p> */}
                    {/* {nonsensitiveProduct.AFFIRM_MONTHS} */}
                    {/* </p> months,
                        </span>
                        <span className="text-turquoise">0% APR</span>
                        <br className="hidden-xs hidden-sm" />
                        <a className="affirm-modal-trigger">Learn more</a>
                      </div>
                    </div> */}
                  </div>
                  <div className="avg-price">Avg Dentist Price: $750+</div>
                  <div className="product-selection-price-button-wrap">
                    <div className="">
                      <Suspense fallback={<div>Loading Buttons</div>}>
                        <AddToCart product={sensitive[1]} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd product */}

      <div className="wrapper col-sm-12 second-tweleve-div">
        <div
          id="non-sensitive"
          style={{ display: activeTab === "non-sensitive" ? "block" : "none" }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span className="product-selection-title-text-name">
                      <span className="lrge-fnt text-gray">T3&nbsp;</span>
                      <span className="non-sensitive blue-text">
                        NON-SENSITIVE
                      </span>
                      <span className="text-gray">SYSTEM </span>
                    </span>
                    <span className="product-selection-title-text-small">
                      (light stains)
                    </span>
                    <div className="product-selection-title-right">
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
                  <table>
                    <tbody>
                      <tr>
                        <td className="product-selection-table-cell-1-image">
                        <Image
                            src={assets.travelcase}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                          <Image
                            src={assets.sensitive3}
                            alt="sensitive nine"
                            width={90}
                            quality={100}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td
                          className="product-selection-table-cell-1-text"
                          colSpan={2}
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
                        <td className="product-selection-table-cell-2-text desktop_no_border">
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
                        <td className="product-selection-table-cell-2-text empty_mbl_td"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-12 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        {nonsensitive[2]?.price}
                      </span>
                      {/* <div className="product-price-meta">one-time payment</div> */}
                    </div>
                    {/* <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      className="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr> */}
                    {/* <div className="col-md-6 column-two">
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
                    </div> */}
                  </div>
                  <div className="avg-price">Avg Dentist Price: $600+</div>
                  <div className="product-selection-price-button-wrap">
                    <div className="">
                      <Suspense fallback={<div>Loading Buttons</div>}>
                        <AddToCart product={nonsensitive[2]} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sensitive"
          style={{ display: activeTab === "sensitive" ? "block" : "none" }}
        >
          <div id="teeth-whitening_non-sensitive">
            <div className="heavy-stains-cont  sensitive_three_divs">
              <div className="row">
                <div className="col-sm-12 position-relative">
                  <div className="product-selection-title-text-wrap">
                    <span className="product-selection-title-text-name">
                      <span className="lrge-fnt text-gray">T3&nbsp;</span>
                      <span className="non-sensitive blue-text">Sensitive</span>
                      <span className="text-gray">SYSTEM </span>
                    </span>
                    <span className="product-selection-title-text-small">
                      (heavy stains)
                    </span>
                    <div className="product-selection-title-right">
                      heavy stains
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 product-selection-description-text-wrap">
                  <div className="product-selection-description-text">
                    Great for lightly stained teeth. For those who have whitened
                    in the past but experienced sensitivity or have natural
                    sensitivity to cold food/drink. Does not regularly drink
                    coffee, tea, or wine and does not smoke. Everything you need
                    to get custom-fitted trays and 9 applications (top and
                    bottom).
                  </div>
                </div>
                <div className="col-md-4 product-selection-table-wrap">
                  <table>
                    <tbody>
                      <tr>
                        <td className="product-selection-table-cell-1-image">
                        <Image
                            src={assets.travelcase}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image">
                        <Image
                            src={assets.sensitive3}
                            alt="sensitive nine"
                            width={84}
                            quality={100}
                          />
                        </td>
                        <td className="product-selection-table-cell-plus">
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </td>
                        <td className="product-selection-table-cell-2-image  mbl_border_right">
                          <Image
                            src={assets.dsensitive3}
                            alt="sensitive nine"
                            width={90}
                            quality={100}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td
                          className="product-selection-table-cell-1-text"
                          colSpan={2}
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
                          className="product-selection-table-cell-2-text mbl_border_right"
                          colSpan={2}
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
                          className="product-selection-table-cell-2-text desktop_no_border"
                          colSpan={2}
                        >
                          <div className="product-selection-table-cell-2-large-number">
                            9
                          </div>
                          <div className="product-selection-table-cell-2-small-text">
                            desensitizing
                            <br />
                            applications
                            <br />
                            (top &amp; bottom)
                          </div>
                        </td>
                        <td
                          className="product-selection-table-cell-2-text empty_mbl_td"
                          colSpan={2}
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4 product-selection-price-wrap pos-rel">
                  <div className="row row-divided w-100">
                    <div className="col-md-12 column-one">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-price-text">
                        {sensitive[2]?.price}
                      </span>
                      {/* <div className="product-price-meta">one-time payment</div> */}
                    </div>
                    {/* <div className="vertical-divider hidden-xs hidden-sm">
                      or
                    </div>
                    <hr
                      className="hr-text visible-xs visible-sm"
                      data-content="OR"
                    ></hr> */}
                    {/* <div className="col-md-6 column-two">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span className="product-selection-installment-price-text"> */}
                    {/* <p>{nonsensitiveProduct.AFFIRM_PRICE}</p> */}
                    {/* </span>
                      <span>/mo</span>
                      <div className="mnts-lt">
                        <span className="text-gray">
                         */}
                    {/* <p> */}
                    {/* {nonsensitiveProduct.AFFIRM_MONTHS} */}
                    {/* </p> months,
                        </span> */}
                    {/* <span className="text-turquoise">0% APR</span>
                        <br className="hidden-xs hidden-sm" />
                        <a className="affirm-modal-trigger">Learn more</a>
                      </div>
                    </div> */}
                  </div>
                  <div className="avg-price">Avg Dentist Price: $600+</div>
                  <div className="product-selection-price-button-wrap">
                    <div className="">
                      <Suspense fallback={<div>Loading Buttons</div>}>
                        <AddToCart product={nonsensitive[0]} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
