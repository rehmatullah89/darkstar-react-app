import React, { Suspense } from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./water-flosser.module.css";
import graphiccariproflosser from "../../../../public/assets/images/waterflosser/graphic-caripro-flosser-1.png";
import gehalogowaterflosser from "../../../../public/assets/images/waterflosser/geha-logo-water-flosser.webp";
import fdalogowaterflosser from "../../../../public/assets/images/waterflosser/fda-logo-water-flosser.webp";
import healthlogowaterflosser from "../../../../public/assets/images/waterflosser/health-logo-water-flosser.webp";
import forbeslogowaterflosser from "../../../../public/assets/images/waterflosser/forbes-logo-water-flosser.webp";
import foxlogowaterflosser from "../../../../public/assets/images/waterflosser/fox-logo-water-flosser.webp";
import newyorklogowaterflosser from "../../../../public/assets/images/waterflosser/new-york-logo-water-flosser.webp";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import ToothbrushHeadPop from "@/components/WaterFlosserPopup/toothBrushHeadPopup";
import ElectricToothbrushAccrodion from "@/components/waterFlosserAccordion/ElectricToothbrushAccordion";
import iconteethgumsgreylight from "../../../../public/assets/icon-stop-messing-with-string-1.png";
import graphicsmile from "../../../../public/assets/images/electricToothbrush/graphic-smile.png";
import guaranteedresultstextlight from "../../../../public/assets/images/electricToothbrush/guaranteed-results-text-light.png";
import yearfullwarrantywhite from "../../../../public/assets/images/electricToothbrush/2year-full-warranty-white.png";
import SeeFullWarantee from '@/components/waterflosserSeeWarantyButton/seeFullWarantee'
import yearWrantee from "../../../../public/assets/2year-full-warranty-grey.webp";
import graphicFlosser from "../../../../public/assets/graphic-flosser.webp";
import right_image_top from "../../../../public/assets/graphic-premium-floss-tips.webp";
import right_image_bottom from "../../../../public/assets/graphic-usb-adaptor.webp";
import Product from "./product";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/428535`
    ).then((res) => res.json());
    const metadata = product.yoast_head_json;
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
    // return metadata;

    const {
      title,
      description,
      robots,
      canonical,
      og_locale,
      og_type,
      og_title,
      og_description,
      og_url,
      og_site_name,
      article_modified_time,
      og_image,
      twitter_card,
      twitter_misc,
      schema,
    } = metadata;

    return {
      metadataBase: new URL(`${BASE_URL}`),
      title: title,
      description: description,
      openGraph: {
        locale: og_locale,
        type: og_type,
        title: og_title,
        description: og_description,
        url: og_url,
        siteName: og_site_name,
        modifiedTime: article_modified_time,

        images: [...og_image], //   images: ['/some-specific-page-image.jpg', ...previousImages],
      },
      twitter: {
        card: twitter_card,
      },
      // alternates:{
      //   canonical:
      // }
    };
  } catch (e) {
    return {};
  }
}

const WaterFlosser = () => {
  return (
    <div>
      <div
        className={`${styles.ElectricToothbrushPage} ${styles.waterFlosserPage} waterFlosserPage`}
        id={styles.waterFlosserPage}
      >
        <Container className="pb-2 pt-5">
          <div className="toothbrush-heads">
            <div className={styles.toothbrushHeadsWrapper}>
              <div className={styles.ToothbrushHeadsTitleWrapper}>
                <div className={styles.ToothbrushHeadsTitle}>
                  <h1>cariPRO™ CORDLESS WATER FLOSSER</h1>
                  <h4>The healthier way to floss. Delivered to your door.</h4>
                </div>
                <div className={styles.toothbrushimg}>
                  <Image
                    src={graphiccariproflosser}
                    quality={100}
                    alt="graphic-caripro-flosser"
                  />
                </div>

                <div>
                <ScrollButton
                    className={styles.primaryButton}
                    targetId="mySection"
                    style={{textDecoration:'none'}}
                  >
                 SEE PRICING
                  </ScrollButton>
                  </div>
                <div className={`${styles.learn_more_text}  pt-3 `}>
                <ScrollButton
                  
                    targetId="learn-more"
                    style={{textDecoration:'none'}}
                   className="fimaly-multiple-opn fs-16 text-blue-500 text-decoration-none hover-text-orange"
                  >
                  Learn More
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={`${styles.maintainingHealthSection} mt-4 bg-grey-1000`}>
        <div
          className={`${styles.tbSection2Imges} col-md-12 col-sm-12 col-12 pe-0 mx-auto`}
        >
          <div className={styles.maintaining_Health_Section_Text}>
            <h2>“Stop messing with string. This is fun flossing.”</h2>
          </div>
          <div
            className={`${styles.mobile_logo} d-flex mx-0 align-items-end pb-2  justify-content-center`}
          >
            <div className={`${styles.logo} ${styles.logo_img_1} tb-img1 `}>
              <Image src={gehalogowaterflosser} alt="image"  />
            </div>
            <div className={`${styles.logo} tb-img2 `} >
              <Image src={fdalogowaterflosser} alt="image"  />
            </div>
            <div className={`${styles.logo} ${styles.logo_img_1} tb-img3 `}>
              <Image src={healthlogowaterflosser} alt="image"  />
            </div>
            <div className={`${styles.logo} ${styles.logo_img_1} tb-img4 `}>
              <Image src={forbeslogowaterflosser} alt="image"  />
            </div>
            <div className={`${styles.logo} ${styles.logo_img_2} tb-img4 `}>
              <Image src={foxlogowaterflosser} alt="image"  />
            </div>
            <div className={`${styles.logo} ${styles.logo_img_1} tb-img4 `}>
              <Image src={newyorklogowaterflosser} alt="image"  />
            </div>
          </div>
        </div>
      </div>

<div className={styles.product_section_wrapper}>
  <div className={styles.product_section_heading}>
    <h2>COMPLETE cariPRO™ WATER FLOSSER PACKAGE</h2>
    <p>The healthiest and most convenient way to floss is delivered directly to your <br /> door. Save up to 50% on comparable high quality water flossers.</p>
  </div>
</div>
<div id="mySection">
<Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
        </div>
      <div className={styles.ship_world_Wide_wrapper}>
        <ToothbrushHeadPop />
      </div>
      <div className={`${styles.feel_difference_wrapper} mb-4 pb-2`}>
        <Container className={styles.ul_container}>
          <Row className={styles.ul_row}>
            <Col md={12} className={styles.ul_col}>
              <div className={styles.feel_difference_detail} id="learn-more">
                <h3 className="sm-fs-28">WHAT’S IN THE BOX?</h3>
                <div className="two-column-section">
                  <div className="row m-0">
                    <div className="col-lg-6 col-12 two-leftside">
                      <div className="d-flex align-items-start">
                        <div className="min-w-138">
                          <Image
                            src={graphicFlosser}
                            className={styles.graphicFlosserImage}
                            alt="image"
                          />
                        </div>
                        <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22  padding-top-20px">
                          <h5 className="m-0 fs-16 water-flosser-ul-heading">
                            1 cariPRO™ Cordless Water Flosser
                          </h5>
                          <ul className="m-0 fs-14 water-flosser-ul-list">
                            <li>
                              155ml reservoir (45 secs of flossing per fill)
                            </li>
                            <li>44-75 psi floss jet</li>
                            <li>3 floss modes (normal, soft, pulse)</li>
                            <li>28 day battery life (on full charge)*</li>
                            <li>
                              Ergonomic slim design with graphite gray
                              soft-touch <br /> grip
                            </li>
                            <li>
                              Waterproof design is is safe for shower or bath
                            </li>
                            <li>
                              Auto-interval smart timer for even & timed
                              brushing
                            </li>
                            <li>
                              5 Hour rapid charge (universal USB & wall charging
                            </li>
                          </ul>

                        <div className="mobile-hidden-waranty">
                        <div className={styles.warantee_img}>
                            <Image
                              src={yearWrantee}
                              quality={100}
                              alt="two year warantee"
                            />
                          </div>

                          <h5 className="m-0 fs-16 water-flosser-ul-heading">
                            Full 2-Year Warranty
                          </h5>
                          <ul className="m-0 fs-14 water-flosser-ul-list">
                            <li>Full warranty against manufacturer</li>
                            <li>Retail packaging (individually sealed)</li>
                            <li>Instruction booklet</li>
                          </ul>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12  ">
                      <div className="two-rightside water-flosser ">
                        <div className="d-flex align-items-center mb-4">
                          <div className="two-column-text mobile-flex text-start fimaly-multiple-opn text-slate-500 lh-22">
                            <div className={styles.two_column_right_image}>
                              <Image
                              className="image-4-primium"
                                src={right_image_top}
                                alt="two column right image"
                              />
                            </div>
                           <div className="four_premium_point">
                           <h5 className="m-0 fs-16">4 Premium Floss Tips</h5>
                            <ul className="m-0 fs-14 ps-4">
                              <li>Standard tip (general use)</li>
                              <li>Ortho tip – Ideal for braces</li>
                              <li>Brush tip – Implants, crowns, and bridges</li>
                              <li>
                                Pocket tip – periodontal pockets / furcations
                              </li>
                            </ul>
                           </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                          <div className="two-column-text mobile-flex text-start fimaly-multiple-opn text-slate-500 lh-22 ms-2">
                            <div className={styles.two_column_right_image}>
                              <Image
                               
                                className={`${styles.right_img_bottom} image-4-primium `}
                                src={right_image_bottom}
                                alt="two column right image"
                              />
                            </div>
                            <div className="four_premium_point">
                            <h5 className="m-0 fs-16">
                              1 USB adaptor & universal wall charger
                            </h5>
                            <ul className="m-0 fs-14 ps-4">
                              <li>
                                3.7V Li-ion high capacity battery (160 mAh)
                              </li>
                              <li>
                                100-240v ~ 50/60Hz (US & international use)
                              </li>
                              <li>420±50mAh Charging current</li>
                            </ul>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mb-4 desktop-hiiden-waranty">
                          <div className="two-column-text mobile-flex text-start fimaly-multiple-opn text-slate-500 lh-22 ms-2">
                            <div className={styles.two_column_right_image}>
                              <Image
                              src={yearWrantee}
                              className={`${styles.right_img_bottom} image-4-primium `}
                              quality={100}
                              alt="two year warantee"
                            />
                            </div>
                            <div className="four_premium_point">
                            <h5 className="m-0 fs-16 water-flosser-ul-heading">
                            Full 2-Year Warranty
                          </h5>
                            <ul className="m-0 fs-14 ps-4">
                              <li>Standard tip (general use)</li>
                              <li>Ortho tip – Ideal for braces</li>
                              <li>Brush tip – Implants, crowns, and bridges</li>
                              <li>
                                Pocket tip – periodontal pockets / furcations
                              </li>
                            </ul>
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ElectricToothbrushAccrodion />

      <section
        id="howit-work-section"
        className={`${styles.how_it_work} process-section-water-flosser ng-section3`}
      >
        <Container className={`${styles.how_it_work_container} pb-4 px-0 `}>
          <div className="mb-3 md-mb-30">
            <h2 className="fw-300 montserrat text-blue-800 text-center">
              3 REASONS TO TRY A cariPRO™ WATER FLOSSER
            </h2>
          </div>
          <Row className={styles.three_col_row}>
            <div
              className="col-md-4 aos-init aos-animate row1"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-center">
                <div className={`${styles.mobile_0_height} min-h-330 `}>
                  <div className={styles.img1_tab}>
                    <figure className="m-0 img1">
                      <div className="d-flex align-items-center justify-content-center">
                        <Image
                          src={iconteethgumsgreylight}
                          alt={"sportsguardpackagemainimage"}
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="mb-2 text-slate-500  process-section-boxes">
                    <div className="open-sans">
                      <div className="the-process-circle the-process-circle-1 mb-3">
                        1
                      </div>
                      <div
                        className={`${styles.mobile_margin} ${styles.three_col_heading} fs-22 fw-400 fimaly-multiple-opn `}
                      >
                        Stop messing with{" "}
                        <span className="text-blue-500 montserrat fw-bold">
                          string
                          <br />{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500 px-4">
                      <div className={styles.three_col_text}>
                        {" "}
                        Face it, flossing is annoying! Stop wasting time with
                        silly string and make flossing a routine you look
                        forward to.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.mobile_display} ${styles.table_cnt} d-flex border-top  mt-3 ps-3 `}
                >
                  <div
                    className="border-end  pe-2"
                    style={{ paddingTop: "7px" }}
                  >
                    <p
                      className={`${styles.font_36} fs-42 fw-300 montserrat mb-0 lh-22 text-slate-500 `}
                    >
                      50%
                    </p>
                    <small
                      className={`${styles.font_point_nine} fs-14 text-slate-600 fimaly-multiple-opn lh-0 `}
                    >
                      better floss
                    </small>
                  </div>
                  <div className="ps-2 text-start pt-2">
                    <p className={`${styles.bottom_p} text-uppercase fs-14 max-w-220 fimaly-multiple-opn text-slate-700 `}>
                      50% MORE EFFECTIVE FOR IMPROVING GUM HEALTH VS. STRING
                      FLOSS
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
                <div className={`${styles.mobile_0_height} min-h-330 `}>
                  <div
                    className={`${styles.mobile_margin_top} ${styles.img1_tab}`}
                  >
                    <figure className="m-0 img2">
                      <div className="d-flex align-items-center justify-content-center">
                        <Image src={graphicsmile} alt="processimagetwo" />
                      </div>
                    </figure>
                  </div>

                  <div className="mb-2 text-slate-500 process-section-boxes">
                    <div>
                      <div className="the-process-circle the-process-circle-1 mb-3">
                        2
                      </div>
                      <div
                        className={`${styles.mobile_margin}  ${styles.three_col_heading} fs-22 fw-400 fimaly-multiple-opn `}
                      >
                        Your mouth will be{" "}
                        <span className="text-blue-500 montserrat fw-bold">
                          healthier
                          <br />{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500">
                      <div className={styles.three_col_text}>
                        2x more effective around implants. 3x more effective
                        around braces (vs. string floss). Yep, your mouth is
                        about to get a lot healthier.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.mobile_display} ${styles.table_cnt} d-flex border-top  mt-3 ps-3 `}
                >
                  <div
                    className="border-end  pe-2 min-fit"
                    style={{ paddingTop: "7px" }}
                  >
                    <p
                      className={`${styles.font_32} fs-42 fw-300 montserrat mb-0 lh-22 text-slate-500  `}
                    >
                      99.9%
                    </p>
                    <small
                      className={`${styles.font_point_nine} fs-14 text-slate-600 fimaly-multiple-opn lh-0 `}
                    >
                      less plaque
                    </small>
                  </div>
                  <div className="ps-2  text-start pt-2 d-flex align-items-center">
                    <p className={`${styles.bottom_p} text-uppercase fs-14 max-w-250 fimaly-multiple-opn text-slate-700  mb-0 `}>
                      REMOVES 99.9% OF PLAQUE FROM TREATED AREAS
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
                <div className={`${styles.mobile_0_height} min-h-330 `}>
                  <div
                    className={`${styles.mobile_margin_top} ${styles.img1_tab}`}
                  >
                    <figure className="m-0 img3">
                      <div className="d-flex align-items-center justify-content-center">
                        <Image
                          src={guaranteedresultstextlight}
                          alt={"process-image-three"}
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="mb-2 text-slate-500  process-section-boxes">
                    <div>
                      <div className="the-process-circle the-process-circle-1 mb-3">
                        3
                      </div>
                      <div
                        className={`${styles.mobile_margin}  ${styles.three_col_heading} fs-22 fw-400 fimaly-multiple-opn `}
                      >
                        Zero risk & high{" "}
                        <span className="text-blue-500 montserrat fw-bold">
                          reward
                          <br />{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500 px-4">
                      <div className={styles.three_col_text}>
                        Experience the health benefits and cost savings of a
                        premium water flosser risk free. Delivered to your door!
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.mobile_display} ${styles.table_cnt} d-flex border-top  mt-3 ps-3 `}
                >
                  <div
                    className="border-end  pe-2 min-fit"
                    style={{ paddingTop: "7px" }}
                  >
                    <p
                      className={`${styles.font_36} fs-42 fw-300 montserrat mb-0 lh-22 text-slate-500 `}
                    >
                      60
                    </p>
                    <small
                      className={`${styles.font_point_nine} fs-14 text-slate-600 fimaly-multiple-opn lh-0 `}
                    >
                      day trial
                    </small>
                  </div>
                  <div className="ps-2 text-start pt-2">
                    <p className={`${styles.bottom_p} text-uppercase fs-14 fimaly-multiple-opn text-slate-700  max-w-250 last12 `}>
                      SAVE TIME AND MONEY, REDUCE COSTLY DENTAL BILLS,
                      EXPERIENCE THE CARIPRO DIFFERENCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <div
            className={`${styles.order_now_button} ${styles.order_now_button_bottom} text-center mt-5`}
          >
            <div className="text-center mt-3">
              <ScrollButton
                className={`${styles.order_now_btn_bottom} min-w-220 text-uppercase text-decoration-none py-8 d-inline-block text-center text-white  fw-300 bg-blue-500  hover-able hover hove-dark-grey montserrat`}
                targetId="mySection"
                style={{ textDecoration: "none" }}
              >
                ORDER NOW
              </ScrollButton>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="ng-section7"
        className={`${styles.last_section} ng-section7 mb-5 pb-1 bg-blue-500`}
      >
        <Container>
          <div className={`${styles.margin_bottom_20} text-center mx-auto px-2 `}>
            <div>
              <div>
                <Image src={yearfullwarrantywhite} alt="image" />
              </div>
              {/* <div className="mt-6 mb-4">
                                <Image src={googletrustedstore} alt='image' />
                            </div> */}
            </div>
            <h3 className="fw-700 text-white fs-34 open-sans pt-4 mt-2" style={{lineHeight:'37px'}}>
              {" "}
              60 DAY TRIAL, 2 YEAR WARRANTY
            </h3>
            <div className="mt-3">
              <p className="fw-300 text-white fs-17 open-sans" style={{lineHeight:'27px'}}>
                Smile Brilliant is committed to providing professional quality
                oral care products at a price everyone can afford. Your<br />cariPRO™
                Ultrasonic is backed by a 2 year limited manufacturer’s warranty
                and will meet or exceed the features of any top<br className={styles.end_br} />quality electric
                toothbrush.
              </p>
            </div>
            <h3
              className={`${styles.last_headind} fw-600 text-white fs-24 open-sans mt-4 pt-1`}
              style={{ lineHeight: "31px" }}
            >
              If you are anything but 100% satisfied with your cariPRO™
              purchase, we&apos;ll take it <br /> back.
            </h3>
            <div className="mt-3">
              <ScrollButton
                className="fw-300 rounded-0 bg-seegreen-800 border-0 fs-18 montserrat text-white  py-8 d-inline-block text-decoration-none hover hover-able letter-spacing-2"
                style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  textDecoration: "none",
                  marginTop:'19px',
                  textTransform:'capitalize'
                }}
                targetId="mySection"
              >
                buy now
              </ScrollButton>
              <div>
                <SeeFullWarantee />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default WaterFlosser;
