import React ,{Suspense} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import teethWhiteninggel from '../../../../public/assets/custom-whitnin-tray.webp'
import styles from './whitening-tray.module.css'
import assets from "./assets";
import WhiteningTrayPopup from "@/components/whiteningTrayPopup/toothBrushHeadPopup";
import ScrollButton from '@/ui/resuable-componets/ScrollButton';
import Link from "next/link";
import Tabs from "./products-tabs";
import Product from "./product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


const TeethwhiteningTray = () => {
  return (
    <div
      className={`${styles.whitening_tray_wrappper} custom-whitening-tray xs-screen xs-container`}
      id="custom-whitening-tray"
    >
      <Container as="section" className={`${styles.top_wrapper} t-section1 section1 pt-5 md-pt-0 `}>
        <Row>
          <Col md={12} className={`${styles.top_heading} text-center whitning-t-img cm-head`}>
            <h1 className="text-light-grey fw-bold fimaly-multiple-mon fs-42 mb-0 sm-fs-28">
              {" "}
              A FRESH TAKE ON TEETH WHITENING{" "}
            </h1>
            <h4 className="text-light-grey ">
              Teeth whitening trays backed by science. From dental lab to your
              door.
            </h4>
            <div className="pt-4 mt-2">
              <Image src={teethWhiteninggel} alt="teeth whitening gel"
              quality={100}
              priority={true}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <section
        style={{ background: '#3C98CC' }}
        className={`${styles.logo_wrapper} t-section2 sm-mt-25 section2 `}
      >
        <Container className="px-5 sm-px-0">
          <h3 className={`${styles.logos_heading} text-white text-center fw-700 fimaly-multiple-mon fs-28 sm-fs-22 `}>
            &quot;Finally, a teeth whitening system engineered for
            everyone.&quot;
          </h3>
          <div
            className={`${styles.logos_section} images d-flex justify-content-center align-items-centerpt-3 px-5 `}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
           <div className={`${styles.logos_strip} ${styles.flex_container}`}>
              <div className={`${styles.logo} ${styles.logo2}`}>
              <Image src={assets.ghea} alt="ghea" />

              </div>
              <div className={`${styles.logo} ${styles.logo3}`}>
              <Image src={assets.knot} alt="ghea" />

              </div>
              <div className={`${styles.logo} ${styles.logo4}`}>
              <Image src={assets.forbee} alt="ghea" />

              </div>
              <div className={`${styles.logo} ${styles.logo6}`}>
              <Image src={assets.usa} alt="ghea" />
              </div>
             

           </div>
          </div>
        </Container>
      </section>

<div className={`${styles.whitening_product_section} product_section_wrapper`} id="choosePackageWarpper">
<Container id="teeth-whitening-trays-page">
        <section className="row first_row">
          <div className={`${styles.mobile_no_margin} col-md-9 mx-auto text-center mt-5 pt-3 `}>
            <h3 className="text-center fw-300  mb-4 t-heading-h3 text-blue-500 fs-34 ">
              A PACKAGE CUSTOMIZED FOR YOU
            </h3>
            <p className={`${styles.mobile_no_padding} lh-base  fw-300 mb-4 text-slate-500 fs-22 px-5 sm-px-0 primary-fimaly `}>
              Smile Brilliant’s innovative business model takes away dentist
              inefficiencies and passes savings directly to you.
              <span className="text-decoration-none text-blue-500">
                Simply choose the amount of whitening gel and your sensitivity
                level to find the right package for you.
              </span>
            </p>
           
            <p className="fs-16 text-slate-500 fimaly-multiple-opn fw-normal mb-4">
              Choose whether or not your teeth are sensitive
            </p>
          </div>
          <div className="col-md-12">
          <Suspense fallback={<div>Fetching products...</div>}>
              <Product />
            </Suspense>
          </div>
        
        </section>
      </Container>
</div>
<WhiteningTrayPopup />
<section className={`${styles.packages_include_Section} container t-section6 section6 `}>
        <div
          className="col-md-9 mx-auto text-center mt-5 pt-3"
          style={{ maxWidth: '770px' }}
        >
          <h3 className="fw-light fs-34 mb-4 sm-fs-24 montserrat text-blue-500">
            EVERY PACKAGE INCLUDES
          </h3>
          <h4 className="lh-base fw-300 fs-24 mb-4 montserrat text-slate-500">
            Smile Brilliant custom-fitted teeth whitening trays are hand-
            crafted by our dental lab technicians (proudly made in the USA).
            Your package will include the following:
          </h4>
          <div className="mt-5">
            <Image
              width="360"
              height="280"
              src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-system.png"
              className="vc_single_image-img attachment-large"
              alt=""
              decoding="async"
              loading="lazy"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </section>

      <section className={styles.six_col_section}>
        <Container className={styles.six_col_container}>
          <Row className={styles.six_row}>
            <Col md={6} className={styles.six_col}>
              <div className={styles.six_col_content}>
                <div className={styles.six_col_img}>
                  <Image src={assets.img1} alt="img 1" />
                </div>

                <div className={styles.six_col_paragraph}>
                  <p>Professional Lab Service <br /> Professional dental lab will receive your impressions, create an exact model of your teeth, and fashion a truly custom-fitted tray</p>
                </div>
              </div>
            </Col>
            <Col md={6} className={styles.six_col}>
              <div className={styles.six_col_content}>
                <div className={styles.six_col_img}>
                  <Image src={assets.img2} alt="img 1" />
                </div>

                <div className={styles.six_col_paragraph}>
                  <p>Custom-fitted Teeth Whitening Trays Exactly like your dentist would make. Finished trays include 1 upper and 1 lower tray.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className={styles.six_col}>
              <div className={styles.six_col_content}>
                <div className={styles.six_col_img}>
                  <Image src={assets.img3} alt="img 1" />
                </div>

                <div className={styles.six_col_paragraph}>
                  <p>2 Impression Trays <br /> Used in combination with impression material to create mold</p>
                </div>
              </div>
            </Col>
            <Col md={6} className={styles.six_col}>
              <div className={styles.six_col_content}>
                <div className={styles.six_col_img}>
                  <Image src={assets.img4} alt="img 1" />
                </div>

                <div className={styles.six_col_paragraph}>
                  <p>3 Sets of Impression Material <br /> To make your own dental impressions (1 extra set of material in case you mess up)</p>
                </div>
              </div>
            </Col>
            <Col md={6} className={styles.six_col}>
              <div className={styles.six_col_content}>
                <div className={styles.six_col_img}>
                  <Image src={assets.img5} alt="img 1" />
                </div>

                <div className={styles.six_col_paragraph}>
                  <p>3-Way Postage <br /> All postage between you and the lab is covered (2-way for orders outside of United States)</p>
                </div>
              </div>
            </Col>
            <Col md={6} className={styles.six_col}>
              <div className={styles.six_col_content}>
                <div className={styles.six_col_img}>
                  <Image src={assets.img6} alt="img 1" />
                </div>

                <div className={styles.six_col_paragraph}>
                  <p>Professional Teeth Whitening Gel & Desensitizing Gel (If Applicable) Dentist-strength 22% Carbamide Peroxide in 3ml syringes (you choose quantity). Desensitizing gel included with “sensitive” packages.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        style={{ background: '#f1f2f2' }}
        className={`${styles.teeth_images_section} t-section8 section8`}
      >
        <div className="pb-3 container-w-1100 mx-auto ">
          <div
            className="col-md-9 mx-auto text-center pb-3"
            style={{ maxWidth: '600px' }}
          >
            <h3 className="fw-300 mb-4 fimaly-multiple-mon fs-34 text-blue-500 ">
              OUR CUSTOMERS SPEAK FOR US
            </h3>
            <h4 className="lh-base fs-22 fw-300 mb-4 montserrat text-slate-500 px-3">
              <strong className="fw-bold ">Thousands</strong> of happy
              customers. See what our customers from around the world have to
              say.
            </h4>
          </div>

          <div className={styles.teeth_images_wrapper}>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth1} alt="teeth one"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth2} alt="teeth two"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth3} alt="teeth three"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth4} alt="teeth four"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth5} alt="teeth five"  />
            </div>
           

          </div>
          <div className={styles.teeth_images_wrapper}>
           
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth6} alt="teeth six"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth7} alt="teeth seven"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth8} alt="teeth eight"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth9} alt="teeth nine"  />
            </div>
            <div className={styles.teeth_images_box}>
              <Image src={assets.teeth10} alt="teeth ten"  />
            </div>

          </div>
         
            <div className="mt-4">
              <div className="wpb_wrapper">
                <aside
                  className={`${styles.social_icons_wrapper} socials page-social-icon mx-auto d-flex justify-content-between `}
                  
                >
                  <Link className={styles.youtube} href="https://www.youtube.com/user/smilebrilliant">
                 <Image src={assets.youtube} alt="youtube"/>
                  </Link>
                  <Link className={styles.fb} href="https://www.facebook.com/SmileBrilliant">
                  <Image src={assets.fb} alt="fb"/>

                  </Link>
                  <Link className={styles.insta} href="https://www.instagram.com/smilebrilliant/">
                  <Image src={assets.insta} alt="insta"/>

                  </Link>
                  <Link className={styles.twiter} href="https://twitter.com/SBwhitening">
                  <Image src={assets.twitter} alt="twiter"/>

                  </Link>
                  <Link className={styles.pintrest} href="https://www.pinterest.com/search/pins/?q=smilebrilliant">
                  <Image src={assets.pintrest} alt="pintrest"/>

                  </Link>
                </aside>
              </div>
              <div className={styles.see_our_view_btn}>
                <p className="text-center">
                  <Link
                    href="/product/reviews/"
                    className="py-11 fimaly-multiple-opn d-block mx-auto text-decoration-none text-uppercase text-white w-300 bg-blue-500 letter-spacing-2 fs-18 fw-300 hover hover-able h-auto"
                    style={{ lineHeight: 'unset' }}
                  >
                    SEE OUR REVIEWS
                  </Link>
                </p>
              </div>
            </div>
       
        </div>
      </section>

      <div className="process-section-wrapper process-product-section whitening_tray_process_section">
          <Container>
            <Row>
              <Col md={12}>
                <div className="heading-content-mbt">
                  <h2>TRAY CREATION PROCESS</h2>
                  <p>
                  Backed by science. From dental lab to your door.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="processSectionInnerRow">
              <Row
                className="process-container"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <Col md={4}>
                  <div
                    id="the-process-image-1"
                    className="process-container-single-img"
                  >
                    <Image src={assets.procces1} alt="graphic" />
                  </div>

                  <div className="heading-text">
                    <div className="heading-text-detail">
                      <div className="the-process-circle the-process-circle-1">
                        1
                      </div>
                      <div className="the-process-title the-process-title-1">
                        <span style={{ fontWeight: '400', color: '#3c98cc' }}>
                        Make Your Impressions At Home
                        </span>
                      </div>
                    </div>

                    <div className="text-block-mbt">
                      <div className="the-process-content-text">
                      Make your impressions with the putty & plastic trays included with your package. Mail everything back to our lab in the envelope included.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    id="the-process-image-2"
                    className="process-container-single-img"
                  >
                   <Image src={assets.procces2} alt="graphic" />

                  </div>

                  <div className="heading-text">
                    <div className="heading-text-detail">
                      <div className="the-process-circle the-process-circle-1">
                        2
                      </div>
                      <div className="the-process-title the-process-title-1">
                        <span style={{ fontWeight: '400', color: '#3c98cc' }}>
                        Our Lab Crafts Your Trays
                        </span>
                      </div>
                    </div>

                    <div className="text-block-mbt">
                      <div className="the-process-content-text">
                      Once our lab receives your impressions, your custom-fitted trays will be created and mailed back to you within 3-5 business days.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    id="the-process-image-3"
                    className="process-container-single-img"
                  >
                    <Image src={assets.procces3} alt="graphic" />

                  </div>

                  <div className="heading-text">
                    <div className="heading-text-detail">
                      <div className="the-process-circle the-process-circle-1">
                        3
                      </div>
                      <div className="the-process-title the-process-title-1">
                        <span style={{ fontWeight: '400', color: '#3c98cc' }}>
                        Whiten & Relax!
                        </span>
                      </div>
                    </div>

                    <div className="text-block-mbt">
                      <div className="the-process-content-text">
                      Using your custom-fitted whitening trays & our carefully engineered whitening gel to get the white smile you have always wanted.
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <div className="order-button">
                    <p className="text-center">
                    <ScrollButton
                      targetId="choosePackageWarpper"
                      className="btn btn-primary-blue btn-lg"
                      style={{ marginBottom: '50px', minWidth: '237px' }}
                    >
                       ORDER NOW
                    </ScrollButton>
                    </p>
                    <div className={styles.download_instructions}>
                      <Link href="/assets/pdf/SmileBrilliant_-_Whitening_Impression_Instructions.pdf"> Download Instructions </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
    </div>
  );
};

export default TeethwhiteningTray;

