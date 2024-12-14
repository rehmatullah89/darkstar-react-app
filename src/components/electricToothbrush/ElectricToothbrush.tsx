"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

import styles from "./Index.module.css";
import graphicelectrictoothbrush from "../../../public/assets/images/electricToothbrush/graphic-electric-toothbrush.png";
import gehalogobluelight from "../../../public/assets/images/electricToothbrush/geha-logo-blue-light.png";
import fdalogobluelight from "../../../public/assets/images/electricToothbrush/fda-logo-blue-light.png";
import forbeslogobluelight from "../../../public/assets/images/electricToothbrush/forbes-logo-blue-light.png";
import foxlogobluelight from "../../../public/assets/images/electricToothbrush/fox-logo-blue-light.png";
import graphicelectrictoothbrushdeluxepackage1 from "../../../public/assets/images/electricToothbrush/graphic-electric-toothbrush-deluxe-package-1.png";
import graphicelectrictoothbrushindividualpackage1 from "../../../public/assets/images/electricToothbrush/graphic-electric-toothbrush-individual-package-1.png";
import graphicelectrictoothbrushcouplespackage2 from "../../../public/assets/images/electricToothbrush/graphic-electric-toothbrush-couples-package-2.png";
import graphictoothbrush from "../../../public/assets/images/electricToothbrush/graphic-toothbrush.png";
import graphicheads from "../../../public/assets/images/electricToothbrush/graphic-heads.png";
import graphicbase from "../../../public/assets/images/electricToothbrush/graphic-base.png";
import yearfullwarrantygrey from "../../../public/assets/images/electricToothbrush/2year-full-warranty-grey.png";
import holdingelectricbrush from "../../../public/assets/images/electricToothbrush/2year-full-warranty-grey.png";
// import holdingelectricbrush from '../../../public/assets/images/electricToothbrush/holding-electric-brush.jpg';
import iconpdfwhite from "../../../public/assets/images/electricToothbrush/icon-pdf-white.png";
import iconteethgumsgreylight from "../../../public/assets/images/electricToothbrush/icon-teeth-gums-grey-light.png";
import graphicsmile from "../../../public/assets/images/electricToothbrush/graphic-smile.png";
import guaranteedresultstextlight from "../../../public/assets/images/electricToothbrush/guaranteed-results-text-light.png";
import yearfullwarrantywhite from "../../../public/assets/images/electricToothbrush/2year-full-warranty-white.png";

import ToothbrushHeadsProduct from "@/components/toothbrushHeadsProduct/toothbrushProduct";
import ToothbrushHeadsModal from "@/components/toothbrushHeadsModal/ToothbrushHeadsModal";
import ProductModal from "@/ui/common/ProductModal";

const ElectricToothbrush = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalState, setModalState] = useState<any>(false);

  useEffect(() => {}, [modalState]);

  function scrollToSection() {
    const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
    const element = document.getElementById("mySection");
    let elementPosition;
    if (element) {
      const rect = element.getBoundingClientRect();
      elementPosition = rect.top + window.scrollY - headerHeight;
    }
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  }

  return (
    <div
      className={`${styles.ElectricToothbrushPage} ElectricToothbrushPage`}
      id="ElectricToothbrushPage"
    >
      <Container className="pb-2">
        <div className="toothbrush-heads mt-5 pt-5">
          <div className={`${styles.toothbrushHeadsWrapper} pt-5 mt-5`}>
            <div className={`${styles.ToothbrushHeadsTitleWrapper} pt-4`}>
              <div className={`text-slate-500`}>
                <h1 className="fw-700 fimaly-multiple-mon fs-40">
                  cariPRO™ ELECTRIC TOOTHBRUSH
                </h1>
                <h4 className="fs-28 montserrat fw-300 sm-fs-16">
                  Simply better oral care for everyone. Delivered to your door.
                </h4>
              </div>
              <div className={styles.toothbrushimg}>
                <Image
                  src={graphicelectrictoothbrush}
                  alt="graphic-electric-toothbrush"
                />
              </div>

              <div className={styles.primaryButton} onClick={scrollToSection}>
                SEE PRICING
              </div>
              <div className="pt-3">
                <a
                  href="#learn_more"
                  className="fimaly-multiple-opn fs-16 text-blue-500 text-decoration-none hover-text-orange"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={`${styles.maintainingHealthSection} mt-4`}>
        <Container
          className={`${styles.tbSection2Imges} col-lg-8 col-md-10 col-sm-11 col-12 pe-0`}
        >
          <div className={styles.maintaining_Health_Section_Text}>
            <h2>
              &quot;Maintaining a healthy smile is finally enjoyable.&quot;
            </h2>
          </div>
          <div
            className={`row mx-0 align-items-end pb-2 mt-5 justify-content-between`}
          >
            <div className="tb-img1 col-md-3 col-5">
              <Image
                src={gehalogobluelight.src}
                alt="image"
                width={"210"}
                height={"50"}
              />
            </div>
            <div className="tb-img2 col-md-3 col-5">
              <Image
                src={fdalogobluelight}
                alt="image"
                width={"105"}
                height={"50"}
              />
            </div>
            <div className="tb-img3 col-md-3 col-5">
              <Image
                src={forbeslogobluelight}
                alt="image"
                width={"200"}
                height={"50"}
              />
            </div>
            <div className="tb-img4 col-md-3 col-5 pe-0">
              <Image
                src={foxlogobluelight}
                alt="image"
                width={"140"}
                height={"50"}
              />
            </div>
          </div>
        </Container>
      </div>

      <div
        className={`${styles.choose_your_replacement_package}`}
        id="mySection"
      >
        <div className={styles.replacement_package_wrapper}>
          <div className={styles.replacement_package_container}>
            <Row>
              <Col md={12}>
                <h3 className={styles.replacement_package}>
                  CHOOSE YOUR cariPRO™ ELECTRIC TOOTHBRUSH
                </h3>
              </Col>
            </Row>
            <Row
              className={`${styles.replacement_package_product} pt-4 sm-pt-0`}
            >
              <Col md={4} className={styles.replacement_package_column}>
                <div className={`${styles.content_detail} pt-0`}>
                  <ToothbrushHeadsProduct
                    title="DELUXE PACKAGE"
                    image={graphicelectrictoothbrushdeluxepackage1}
                    description={
                      <div className="text-slate-500 fs-14 lh-22 fimaly-multiple-opn">
                        <span className="fs-18 fw-500">x1</span> cariPRO™
                        Electric Toothbrush
                        <br />
                        <span className="fs-18 fw-500">x4</span> premium
                        replacement heads with tongue scraper & DuPont™ bristles
                        <br />
                        <span className="fs-18 fw-500">x1</span> wireless
                        charging doc doc
                        <br />
                        <p className="text-blue-800 pt-4 m-0">
                          2 year limited warranty
                        </p>
                        <p>60 day trial </p>
                      </div>
                    }
                    orignalPrice="129"
                    newPrice="Compared to $250"
                  />
                </div>
              </Col>
              <Col md={4} className={styles.replacement_package_column}>
                <div className={`${styles.content_detail} pt-0`}>
                  <ToothbrushHeadsProduct
                    title=" INDIVIDUAL PACKAGE"
                    image={graphicelectrictoothbrushindividualpackage1}
                    description={
                      <div className="text-slate-500 fs-14 lh-22 fimaly-multiple-opn">
                        <span className="fs-18 fw-500">x1</span> cariPRO™
                        Electric Toothbrush
                        <br />
                        <span className="fs-18 fw-500">x2</span> premium
                        replacement heads with tongue scraper & DuPont™ bristles
                        <br />
                        <span className="fs-18 fw-500">x1</span> wireless
                        charging doc doc
                        <br />
                        <p className="text-blue-800 pt-4 m-0">
                          2 year limited warranty
                        </p>
                        <p>60 day trial </p>
                      </div>
                    }
                    orignalPrice="119"
                    newPrice="Compared to $50"
                  />

                  <div className={styles.product_selection_title}></div>
                </div>
              </Col>
              <Col md={4} className={styles.replacement_package_column}>
                <div className={`${styles.content_detail} pt-0`}>
                  <ToothbrushHeadsProduct
                    title=" COUPLES PACKAGE"
                    image={graphicelectrictoothbrushcouplespackage2}
                    description={
                      <div className="text-slate-500 fs-14 lh-22 fimaly-multiple-opn">
                        <span className="fs-18 fw-500">x1</span> cariPRO™
                        Electric Toothbrush
                        <br />
                        <span className="fs-18 fw-500">x4</span> premium
                        replacement heads with tongue scraper & DuPont™ bristles
                        <br />
                        <span className="fs-18 fw-500">x1</span> wireless
                        charging doc doc
                        <br />
                        <p className="text-blue-800 pt-4 m-0">
                          2 year limited warranty
                        </p>
                        <p>60 day trial </p>
                      </div>
                    }
                    orignalPrice="199"
                    newPrice="Compared to $25"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={styles.ship_world_Wide_wrapper} id="learn_more">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.ship_world_title}>
                <h2>
                  <svg
                    className={styles.firstSvg}
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z" />
                  </svg>
                  YES, WE SHIP WORLDWIDE
                  <svg
                    className={styles.secondSvg}
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z" />
                  </svg>
                </h2>
                <Button
                  className={
                    styles.popupBtn + " bg-transparent rounded-0 lh-3 py-2"
                  }
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Learn More
                </Button>

                <ToothbrushHeadsModal
                  title="Do you ship the electric toothbrushes internationally?"
                  text={
                    "Smile Brilliant ships all over the world! We have customers in over 90 countries and are very familiar with international shipments, customs, and duties. The cost to ship your cariPRO™ electric toothbrush anywhere in the world is free!"
                  }
                  italic_text={
                    " (unless an alternative shipping method is requested)"
                  }
                  btn_text={"got it!"}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={`${styles.feel_difference_wrapper} mb-4 pb-2`}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.feel_difference_detail}>
                <h3 className="sm-fs-28">WHAT’S IN THE BOX?</h3>
                <div className="two-column-section">
                  <div className="row m-0">
                    <div className="col-lg-6 col-12 two-leftside">
                      <div className="d-flex align-items-center">
                        <div className="min-w-138">
                          <Image src={graphictoothbrush} alt="image" />
                        </div>
                        <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22 ps-5 ms-2">
                          <h5 className="m-0 fs-16 fw-bold">
                            1 cariPRO™ Electric Toothbrush
                          </h5>
                          <ul className="m-0 fs-14 ps-4">
                            <li>
                              40,000 vibrations / minute dynamic cleaning action
                            </li>
                            <li>
                              5 brush modes (clean, white, massage, gum care,
                              sensitive)
                            </li>
                            <li>30 day battery life (on full charge)</li>
                            <li>
                              Ergonomic slim design with graphite gray
                              soft-touch grip
                            </li>
                            <li>
                              Waterproof design is safe for shower or bath
                            </li>
                            <li>
                              Auto-interval smart timer for even & timed
                              brushing
                            </li>
                            <li>Wireless charging dock</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12  two-rightside ps-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="min-w-138">
                          <Image src={graphicheads} alt="image" />
                        </div>
                        <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22 ps-5 ms-2">
                          <h5 className="m-0 fs-16 fw-bold">
                            2 Premium Brush Heads with Tongue Scraper
                          </h5>
                          <ul className="m-0 fs-14 ps-4">
                            <li>Angled and tufted DuPont™ bristles</li>
                            <li>
                              Graphite gray with vibrant blue silicon exterior
                            </li>
                            <li>Quick-click attachment</li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-4">
                        <div className="min-w-138">
                          <Image src={graphicbase} alt="image" />
                        </div>
                        <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22 ps-5 ms-2">
                          <h5 className="m-0 fs-16 fw-bold">
                            1 Wireless Induction Charger Dock
                          </h5>
                          <ul className="m-0 fs-14 ps-4">
                            <li>100-240v ~ 50/60Hz (works internationally)</li>
                            <li>
                              No exposed metal (charges by setting brush on
                              dock)
                            </li>
                            <li>Matte gray graphite with soft-touch grip</li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="min-w-138">
                          <Image src={yearfullwarrantygrey} alt="image" />
                        </div>
                        <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22 ps-5 ms-2">
                          <h5 className="m-0 fs-16 fw-bold">
                            Full 2-Year Warranty
                          </h5>
                          <ul className="m-0 fs-14 ps-4">
                            <li>Full warranty against manufacturer</li>
                            <li>Retail packaging (individually sealed)</li>
                            <li>Instruction booklet</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2">
                <button
                  className={`${styles.btn_primary} hover hover-able`}
                  onClick={scrollToSection}
                >
                  ORDER NOW
                </button>
                <br />
                <a
                  href="#best_brush_accordion"
                  className="border-0 bg-transparent text-decoration-none d-inline-block fs-14 hover-text-orange fimaly-multiple-opn cursor-pointer text-blue-800 mt-2 pt-1"
                  onClick={scrollToSection}
                >
                  See full technical specifications
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={`${styles.image_text_wrapper} position-relative`}
        style={{ backgroundImage: `url(${holdingelectricbrush.src})` }}
      >
        <div className="color-layer top-0 start-0 position-absolute color-layer-opacity-white d-none sm-d-block"></div>
        <Container className="pt-5 position-relative">
          <div className="text-slate-500 montserrat text-center col-4 ms-auto pt-3">
            <h2 className="fs-34 fw-700">
              THE BEST ELECTRIC TOOTHBRUSH AT HALF THE PRICE
            </h2>
            <p className="fs-17 mt-4">
              Introducing the cariPRO™ Electric Toothbrush by Smile Brilliant.
              Same quality, better features, and much better value. Considering
              an electric toothbrush or in the market for a replacement? Know
              what you’re paying for.
            </p>
          </div>
        </Container>
      </div>
      <div className={`bg-blue-500 py-4 mb-5`}>
        <Container className="px-5">
          <div className="accordion bg-transparent" id="best_brush_accordion">
            <div className="accordion-item bg-transparent border-0 text-white fw-300 fs-21 montserrat">
              <h2
                className="accordion-header  bg-transparent border-0"
                id="headingOne"
              >
                <button
                  className="accordion-button text-center d-block text-white fw-300 fs-21 montserrat bg-transparent border-0 shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  SEE FULL TECHNICAL SPECIFICATIONS
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse  bg-transparent border-0"
                aria-labelledby="headingOne"
                data-bs-parent="#best_brush_accordion"
              >
                <div className="accordion-body mt-5">
                  <div className="row m-0">
                    <div className="col-lg-6 col-12 pe-5">
                      <div>
                        <h5 className="text-start fw-700 fs-21 montserrat">
                          Power &amp; Charging
                        </h5>
                        <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                          <div>
                            <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                              <li className="fw-700">CHARGING: </li>
                              <li className="fw-700"> BATTERY TYPE: </li>
                              <li className="fw-700"> VOLTAGE:</li>
                              <li className="fw-700"> BATTERY LIFE: </li>
                            </ul>
                          </div>
                          <div>
                            <p className="m-0 fw-400 fs-16">
                              Wireless induction charging dock
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              800 mAh rechargeable Lithium ION
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              110-240V (US & International use)
                            </p>
                            <p className="m-0 fw-400 fs-16 text-start">
                              Up to 4 weeks on full charge*
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3">
                        <h5 className="text-start fw-700 fs-21 montserrat">
                          Finish & Ease of Use
                        </h5>
                        <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                          <div>
                            <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                              <li className="fw-700">COOR: </li>
                              <li className="fw-700"> HANDLE: </li>
                              <li className="fw-700"> DESIGN:</li>
                              <li className="fw-700"> HEAD REPLACEMENT: </li>
                              <li className="fw-700"> BATTERY INDICATOR: </li>
                              <li className="fw-700"> DISPLAY: </li>
                            </ul>
                          </div>
                          <div>
                            <p className="m-0 fw-400 fs-16">
                              Graphite matte gray
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              Soft-touch silicone rubber grip{" "}
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              Ergonomic slim design{" "}
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              Quick-click brush head replacement{" "}
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              {" "}
                              lluminated icon indicates charge
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              Operating mode indicator lights{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3">
                        <h5 className="text-start fw-700 fs-21 montserrat">
                          Warranty & Durability
                        </h5>
                        <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                          <div>
                            <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                              <li className="fw-700">WARRANTY:</li>
                              <li className="fw-700">WATERPROOF:</li>
                            </ul>
                          </div>
                          <div>
                            <p className="m-0 fw-400 fs-16">
                              {" "}
                              2 year limited warranty
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              {" "}
                              PVx7 Rated (3ft water for 30 mins)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 ps-5">
                      <div>
                        <h5 className="text-start fw-700 fs-21 montserrat">
                          Modes
                        </h5>
                        <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                          <div>
                            <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                              <li className="fw-700">CLEAN: </li>
                              <li className="fw-700">WHITE: </li>
                              <li className="fw-700">MASSAGE: </li>
                              <li className="fw-700">GUM CARE: </li>
                              <li className="fw-700">SENSITIVE: </li>
                            </ul>
                          </div>
                          <div>
                            <p className="m-0 fw-400 fs-16">
                              {" "}
                              Optimal cleaning results
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              {" "}
                              High speed polishing
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              Gentle stimulation{" "}
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              {" "}
                              Timed pulse gum & gumline health
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              Ideal for sensitive teeth{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3">
                        <h5 className="text-start fw-700 fs-21 montserrat">
                          Performance
                        </h5>
                        <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                          <div>
                            <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                              <li className="fw-700">BRUSHING ACTION: </li>
                              <li className="fw-700">AUTO-TIMER: </li>
                              <li className="fw-700">INTERVAL TIMER: </li>
                            </ul>
                          </div>
                          <div>
                            <p className="m-0 fw-400 fs-16">
                              40,000 vibrations / minute (VPM){" "}
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              2 minute routine timer{" "}
                            </p>
                            <p className="m-0 fw-400 fs-16">
                              30 second quadrant timer
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3">
                        <a
                          className="fs-14 fw-400 fimaly-multiple-opn d-inline-block text-decoration-none text-white"
                          href="/wp-content/uploads/2020/09/cariPRO-CP2001A-Instruction-Manual.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={iconpdfwhite} alt="image" />
                          &nbsp; Download PDF instruction manual
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <section id="howit-work-section" className="ng-section3 mt-5 ">
        <Container className="pb-4 px-0">
          <div className="mb-3 md-mb-30">
            <h2 className="fw-300 fs-40 montserrat text-blue-800 text-uppercase text-center pb-5">
              THREE REASONS TO TRY A cariPRO™
            </h2>
          </div>
          <Row>
            <div
              className="col-md-4 aos-init aos-animate row1"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-center">
                <div className="min-h-330">
                  <div>
                    <figure className="m-0 img1">
                      <div
                        style={{ height: "100px" }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Image
                          src={iconteethgumsgreylight}
                          alt={"sportsguardpackagemainimage"}
                          width={110}
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="mb-2 text-slate-500  mt-4 pt-3">
                    <div className="open-sans">
                      <div className="the-process-circle the-process-circle-1 mb-3">
                        1
                      </div>
                      <div className="fs-22 fw-400 fimaly-multiple-opn">
                        Your mouth will be{" "}
                        <span className="text-blue-500 montserrat fw-bold">
                          healthier
                          <br />{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500 px-4">
                      <div>
                        Remove 7x more plaque than a manual toothbrush. Improve
                        gum health in as little as 2 weeks.
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" d-flex border-top  mt-3 ps-3">
                  <div className="border-end  pe-2 pt-3">
                    <p className="fs-42 fw-300 montserrat mb-0 lh-22 text-slate-500 pb-2">
                      7x
                    </p>
                    <small className="fs-13 text-slate-600 fimaly-multiple-opn lh-0">
                      plaque
                    </small>
                    <small className="fs-13 text-slate-600 fimaly-multiple-opn lh-0 d-block">
                      remova
                    </small>
                  </div>
                  <div className="ps-2 text-start pt-2">
                    <p className="text-uppercase fs-14 max-w-220 fimaly-multiple-opn text-slate-700 ">
                      REMOVES 7X MORE PLAQUE AND IMPROVES GUM HEALTH IN LESS
                      THAN 2 WEEKS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 aos-animate row2"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-center px-4">
                <div className="min-h-330">
                  <div>
                    <figure className="m-0 img2">
                      <div
                        style={{ height: "100px" }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Image
                          src={graphicsmile}
                          alt="processimagetwo"
                          width={200}
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="mb-2 text-slate-500 mt-4 pt-3">
                    <div>
                      <div className="the-process-circle the-process-circle-1 mb-3">
                        2
                      </div>
                      <div className="fs-22 fw-400 fimaly-multiple-opn">
                        Your teeth will be{" "}
                        <span className="text-blue-500 montserrat fw-bold">
                          whiter
                          <br />{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500">
                      <div>
                        Daily brushing with your cariPRO™ will remove more
                        surface stains from everyday food and drink, giving you
                        a noticeably brighter smile.
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" d-flex border-top  mt-3 ps-3">
                  <div className="border-end  pe-2 min-fit pt-3">
                    <p className="fs-42 fw-300 montserrat mb-0 lh-0 text-slate-500 lh-22 pb-2">
                      2x
                    </p>
                    <small className="fs-14 text-slate-600 fimaly-multiple-opn lh-0">
                      whiter
                    </small>
                  </div>
                  <div className="ps-2  text-start pt-2">
                    <p className="text-uppercase fs-14 max-w-250 fimaly-multiple-opn text-slate-700">
                      YOU WILL HAVE NOTICEABLY WHITER TEETH IN JUST A SINGLE
                      WEEK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 aos-animate row3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-center">
                <div className="min-h-330">
                  <div>
                    <figure className="m-0 img3">
                      <div
                        style={{ height: "100px" }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Image
                          src={guaranteedresultstextlight}
                          alt={"process-image-three"}
                          width={215}
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="mb-2 text-slate-500  mt-4 pt-3">
                    <div>
                      <div className="the-process-circle the-process-circle-1 mb-3">
                        3
                      </div>
                      <div className="fs-22 fw-400 fimaly-multiple-opn">
                        No risk & high{" "}
                        <span className="text-blue-500 montserrat fw-bold">
                          reward
                          <br />{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500 px-4">
                      <div>
                        You’re getting the best electronic toothbrush for half
                        the price…and shipping is free. If you don’t love it
                        after 60 days, return it for free.
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" d-flex border-top mt-3 ps-3">
                  <div className="border-end  pe-2 min-fit pt-3">
                    <p className="fs-42 fw-300 montserrat mb-0 lh-0 text-slate-500 lh-22 pb-2">
                      60
                    </p>
                    <small className="fs-14 text-slate-600 fimaly-multiple-opn lh-0">
                      day trial
                    </small>
                  </div>
                  <div className="ps-2 text-start pt-2">
                    <p className="text-uppercase fs-14 fimaly-multiple-opn text-slate-700  max-w-250 last12">
                      SAVE TIME AND MONEY, REDUCE COSTLY DENTAL BILLS,
                      EXPERIENCE THE CARIPRO DIFFERENCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <div className="text-center mt-5 pt-4">
            <div className="text-center mt-3">
              <a
                href="#mySection"
                className="min-w-220 px-5 text-uppercase text-decoration-none py-8 d-inline-block text-center fs-20 text-white  fw-300 bg-blue-500  hover-able hover hove-dark-grey montserrat"
              >
                order now
              </a>
            </div>
          </div>
        </Container>
      </section>
      <section
        id="ng-section7"
        className="ng-section7 pt-5 mb-5 pb-1 bg-blue-500"
      >
        <Container>
          <div className="text-center max-w-670 mx-auto px-2 mb-5">
            <div>
              <div>
                <Image src={yearfullwarrantywhite} alt="image" />
              </div>
              {/* <div className="mt-6 mb-4">
                                <Image src={googletrustedstore} alt='image' />
                            </div> */}
            </div>
            <h3 className="fw-700 text-white fs-34 montserrat pt-4 mt-2">
              {" "}
              60 DAY TRIAL, 2 YEAR WARRANTY
            </h3>
            <div className="mt-3">
              <p className="fw-300 text-white fs-17 montserrat">
                Smile Brilliant is committed to providing professional quality
                oral care products at a price everyone can afford. Your cariPRO™
                Electric Toothbrush is backed by a 2 year limited
                manufacturer&apos;s warranty and will meet or exceed the
                features of any top quality electric toothbrush.
              </p>
            </div>
            <h3 className="fw-600 text-white fs-24 montserrat mt-4 pt-1">
              If you are anything but 100% satisfied with your cariPRO™
              purchase, we&apos;ll take it back.
            </h3>
            <div className="mt-3">
              <a
                href="#mySection"
                className="fw-300 rounded-0 bg-seegreen-800 border-0 fs-18 montserrat text-white  px-2 py-8 mt-1 d-inline-block px-5 text-decoration-none hover hover-able text-uppercase letter-spacing-2"
              >
                buy now
              </a>
              <div>
                <Button
                  className="bg-transparent border-0 d-inline-block fw-600 fs-15 text-white fimaly-multiple-opn text-decoration-none mt-3 cursor-pointer warranty-btn"
                  variant="primary"
                  onClick={() => setModalState(true)}
                >
                  See full warranty
                </Button>
              </div>
              {
                <div className={`${modalState ? "openModal" : "closeModal"}`}>
                  <ProductModal
                    setterFunction={setModalState}
                    h2={
                      "What is the cariPRO™ Electric Toothbrush 2 year limited warranty?"
                    }
                    btnText={"got it!"}
                    borderStyle="border-width border-color border"
                    btnStyle="text-white text-uppercase bg-blue-500 hover hover-able"
                  >
                    <div className="text-center fs-13 text-slate-500 pt-4 mt-3">
                      <p className="text-center fs-13 text-slate-500 mb-3">
                        Smile Brilliant warrants the cariPRO™ Electric
                        Toothbrush for a period of twenty-four (24) months from
                        date of purchase. Defects due to faulty workmanship or
                        materials will be repaired or replaced at the expense of
                        Smile Brilliant so long as proof of purchase or warranty
                        registration can be substantiated at time of claim*. Use
                        of replacement parts other than authentic cariPRO™ parts
                        will void the warranty. Users should adhere to all
                        instructions included in the user manual and should
                        refrain from actions or uses that are deemed unnecessary
                        or which are warned against in the user manual. Smile
                        Brilliant cannot be held responsible for powering
                        failures due to improper voltage supply to the
                        appliance. Warranty does not cover replacement brush
                        heads.
                      </p>
                      <div className="mb-3 pb-1">
                        You may make a warranty claim by clicking
                        <a
                          href="#"
                          className="text-decoration-none fs-13 text-uppercase text-blue-500 px-1 hover-text-orange"
                        >
                          HERE
                        </a>
                      </div>
                      <div className="pb-2">
                        <h4 className="fs-13 fimaly-multiple-opn fw-700 text-slate-500">
                          HOW TO REGISTER FOR YOUR WARRANTY
                        </h4>
                      </div>
                      <div>
                        <p className="text-center fs-13 text-slate-500">
                          <em>I purchased from the Smile Brilliant Website</em>
                        </p>
                      </div>
                      <div>
                        <p className="text-center fs-13 text-slate-500">
                          Great! Your warranty is automatically registered and
                          store in our system. There is nothing more you need to
                          do!
                        </p>
                      </div>
                      <div>
                        <p className="text-center fs-13 text-slate-500">
                          <em>
                            I received the toothbrush through my dentist or
                            insurance company.
                          </em>
                        </p>
                      </div>
                      <div>
                        <p className="text-center fs-13 text-slate-500">
                          Lucky you! When you buy (or receive) a cariPRO from
                          your dentist or insurance provider, you must fill out
                          the{" "}
                          <Link
                            href="/contact"
                            className="text-decoration-none fs-13 text-uppercase text-blue-500 hover:text-orange"
                          >
                            warranty registration form
                          </Link>
                          .If you are unable to do so, you can register your
                          toothbrush over the phone by calling
                          <a
                            href="tel:855-944-8361"
                            className="text-decoration-none fs-13 text-uppercase text-blue-500 px-1 hover-text-orange"
                          >
                            {" "}
                            855-944-8361
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </ProductModal>
                </div>
              }
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ElectricToothbrush;
