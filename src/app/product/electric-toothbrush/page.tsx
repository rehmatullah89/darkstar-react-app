
import React, { Suspense } from "react";
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Product from './product';
import styles from './Index.module.css'
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import SeeFullWarantee from "@/components/seeFullWarantee/seeFullWarantee";
import ToothbrushHeadPop from "@/components/ElectiricToothbrushPopup/toothBrushHeadPopup";
import graphicelectrictoothbrush from '../../../../public/assets/images/electricToothbrush/graphic-electric-toothbrush.png';
import gehalogobluelight from '../../../../public/assets/images/electricToothbrush/geha-logo-blue-light.png';
import fdalogobluelight from '../../../../public/assets/images/electricToothbrush/fda-logo-blue-light.png';
import forbeslogobluelight from '../../../../public/assets/images/electricToothbrush/forbes-logo-blue-light.png';
import foxlogobluelight from '../../../../public/assets/images/electricToothbrush/fox-logo-blue-light.png';
import graphictoothbrush from '../../../../public/assets/images/electricToothbrush/graphic-toothbrush.png';
import graphicheads from '../../../../public/assets/images/electricToothbrush/graphic-heads.png';
import graphicbase from '../../../../public/assets/images/electricToothbrush/graphic-base.png';
import yearfullwarrantygrey from '../../../../public/assets/images/electricToothbrush/2year-full-warranty-grey.png';
import holdingelectricbrush from '../../../../public/assets/images/electricToothbrush/holding-electric-brush.jpg';
import iconteethgumsgreylight from '../../../../public/assets/images/electricToothbrush/icon-teeth-gums-grey-light.png';
import graphicsmile from '../../../../public/assets/images/electricToothbrush/graphic-smile.png';
import guaranteedresultstextlight from '../../../../public/assets/images/electricToothbrush/guaranteed-results-text-light.png';
import yearfullwarrantywhite from '../../../../public/assets/images/electricToothbrush/2year-full-warranty-white.png';
import ElectricToothbrushAccrodion from "@/components/ElectricToothbruhAccordion/ElectricToothbrushAccordion";
import type { Metadata, ResolvingMetadata } from "next";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/427575`
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
const ElectricToothbrush = () => {


  return (
    <div
      className={`${styles.ElectricToothbrushPage} ElectricToothbrushPage ultrasonic-cleaner enamelArmourMainWrapper retainer-cleaner-product enamel-cleaner-product`}
      id="ElectricToothbrushPage"
    >
      <Container className={`${styles.electricToothbrush_container} pb-2`}>
        <div className={`${styles.mobile_section} toothbrush-heads mt-5 pt-5`}>
          <div className={`${styles.toothbrushHeadsWrapper} sale_padding`}>
            <div className={`${styles.ToothbrushHeadsTitleWrapper}`}>
              <div className={`text-slate-500`}>
                <h1 className="fw-700 fimaly-multiple-mon fs-40">
                  cariPRO™ ELECTRIC TOOTHBRUSH
                </h1>
                <h4 className={`${styles.padding_top4} fs-28 montserrat fw-300 sm-fs-16`}>
                  Simply better oral care for everyone. Delivered to your door.
                </h4>
              </div>
              <div className={styles.toothbrushimg}>
                <Image
                  src={graphicelectrictoothbrush}
                  alt="graphic-electric-toothbrush"
                  quality={100}
                />
              </div>

             
                <ScrollButton
                      className={styles.primaryButton}
                      targetId="mySection"
                      style={{textDecoration:'none'}}
                   
                    >
                       SEE PRICING
                    </ScrollButton>
            
              <div className={styles.learn_more_padding}>
              <ScrollButton
                      className="fimaly-multiple-opn fs-16 text-blue-500 text-decoration-none hover-text-orange"
                      targetId="learn_more"
                      style={{textDecoration:'none'}}
                   
                    >
                        Learn More
                    </ScrollButton>

              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={`${styles.maintainingHealthSection}`}>
        <Container
          className={`${styles.tbSection2Imges} col-lg-8 col-md-10 col-sm-11 col-12 pe-0`}
        >
          <div className={styles.maintaining_Health_Section_Text}>
            <h2>
              &quot;Maintaining a healthy smile is finally enjoyable.&quot;
            </h2>
          </div>

          <div className={`${styles.logos_strip} ${styles.flex_container}`}>
            <div className={`${styles.logo} ${styles.logo2}`}>
           
               <Image
                src={gehalogobluelight.src}
                alt="image"
                width={'210'}
                height={'50'}
              />
            </div>
            <div className={`${styles.logo} ${styles.logo3}`}>
           
               <Image
                src={fdalogobluelight}
                alt="image"
                width={'105'}
                height={'50'}
              />
              </div>
              <div className={`${styles.logo} ${styles.logo4}`}>
              <Image
                src={forbeslogobluelight}
                alt="image"
                width={'200'}
                height={'50'}
              />
              </div>
              <div className={`${styles.logo} ${styles.logo6}`}>
              <Image
                src={foxlogobluelight}
                alt="image"
                width={'140'}
                height={'50'}
              />
              </div>
          </div>
        </Container>
      </div>

      <div className={styles.ultrasonicCleanerPackageWrapper} id="mySection">
        <Container>
          <Row>
            <Col md={12} className={styles.TextContainer}>
              <h1 className={styles.ultrasonicPackageHeading}>CHOOSE YOUR cariPRO<sup>™</sup> ELECTRIC TOOTHBRUSH </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>

      <div className={styles.ship_world_Wide_wrapper} >
     <ToothbrushHeadPop />
      </div>
      <div className={`${styles.feel_difference_wrapper} mb-4 pb-2`}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.feel_difference_detail} id="learn_more">
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
                          </ul>100-240V ~ 50/60Hz (works internationally)
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
                            <li>100-240V ~ 50/60Hz (works internationally)</li>
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
            </Col>
          </Row>
        </Container>
      </div>

        <ElectricToothbrushAccrodion />

      <section id="howit-work-section" className={`${styles.how_it_work} ng-section3 mt-5`} >
        <Container className="pb-4 px-0">
          <div className="mb-3 md-mb-30">
            <h2 className="fw-300 montserrat text-blue-800 text-center pb-5">
              THREE REASONS TO TRY A cariPRO™
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
                      <div
                       
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Image
                          src={iconteethgumsgreylight}
                          alt={'sportsguardpackagemainimage'}
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
                      <div className={`${styles.mobile_margin} fs-22 fw-400 fimaly-multiple-opn `}>
                        Your mouth will be{' '} <span className="text-blue-500 montserrat fw-bold">
                          healthier
                          <br />{' '}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500 px-4">
                      <div className={styles.three_col_text}>
                        Remove 7x more plaque than a manual toothbrush. Improve
                        gum health in as little as 2 weeks.
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.mobile_display} d-flex border-top  mt-3 ps-3 `}>
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
                <div className={`${styles.mobile_0_height} min-h-330 `}>
                  <div className={`${styles.mobile_margin_top} ${styles.img1_tab}`}>
                    <figure className="m-0 img2">
                      <div
                       
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
                      <div  className={`${styles.mobile_margin} fs-22 fw-400 fimaly-multiple-opn `}>
                        Your teeth will be{' '}
                        <span className="text-blue-500 montserrat fw-bold">
                          whiter
                          <br />{' '}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500">
                      <div className={styles.three_col_text}>
                        Daily brushing with your cariPRO™ will remove more
                        surface stains from everyday food and drink, giving you
                        a noticeably brighter smile.
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.mobile_display} d-flex border-top  mt-3 ps-3 `}>
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
                <div className={`${styles.mobile_0_height} min-h-330 `}>
                  <div className={`${styles.mobile_margin_top} ${styles.img1_tab}`}>
                    <figure className="m-0 img3">
                      <div
                       
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Image
                          src={guaranteedresultstextlight}
                          alt={'process-image-three'}
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
                      <div  className={`${styles.mobile_margin} fs-22 fw-400 fimaly-multiple-opn `}>
                        No risk & high{' '}
                        <span className="text-blue-500 montserrat fw-bold">
                          reward
                          <br />{' '}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center fimaly-multiple-opn">
                    <div className="fs-14 fw-500 text-slate-500 px-4">
                      <div className={styles.three_col_text}>
                        You’re getting the best electronic toothbrush for half
                        the price…and shipping is free. If you don’t love it
                        after 60 days, return it for free.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.mobile_display} d-flex border-top  mt-3 ps-3 `}>
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
          <div className={`${styles.order_now_button} text-center mt-5 pt-4`}>
            <div className="text-center mt-3">
             
              <ScrollButton
                     className="min-w-220 text-uppercase text-decoration-none py-8 d-inline-block text-center text-white  fw-300 bg-blue-500  hover-able hover hove-dark-grey montserrat"
                      targetId="mySection"
                      style={{textDecoration:'none'}}
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
          <div className="text-center max-w-670 mx-auto px-2 mb-4">
            <div>
              <div>
                <Image src={yearfullwarrantywhite} alt="image" />
              </div>
              {/* <div className="mt-6 mb-4">
                                <Image src={googletrustedstore} alt='image' />
                            </div> */}
            </div>
            <h3 className="fw-700 text-white fs-34 montserrat pt-4 mt-2">
              {' '}
              60 DAY TRIAL, 2 YEAR WARRANTY
            </h3>
            <div className="mt-3">
              <p className="fw-300 text-white fs-17 montserrat">
                Smile Brilliant is committed to providing professional quality
                oral care products at a price everyone can afford. Your
                cariPRO™ Electric Toothbrush is backed by a 2 year limited
                manufacturer&apos;s warranty and will meet or exceed the features of
                any top quality electric toothbrush.
              </p>
            </div>
            <h3 className={`${styles.last_headind} fw-600 text-white fs-24 montserrat mt-4 pt-1`} style={{lineHeight:'31px'}}>
              If you are anything but 100% satisfied with your cariPRO™
              purchase, we&apos;ll take it back.
            </h3>
            <div className="mt-3">
            
              <ScrollButton
                     className="fw-300 rounded-0 bg-seegreen-800 border-0 fs-18 montserrat text-white  py-8 mt-1 d-inline-block text-decoration-none hover hover-able text-uppercase letter-spacing-2" style={{paddingLeft:'2.5rem',paddingRight:'2.5rem',textDecoration:'none'}}
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

export default ElectricToothbrush;
