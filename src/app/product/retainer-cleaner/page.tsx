import React, { Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Layout from '@/layouts/content-layout';
import styles from "./RetainerCleaner.module.css";
import Image from "next/image";
import RetainBanner from "~/public/assets/smilebrilliant-retainer-cleaner-large-banner.webp";
import Icon1 from "~/public/assets/graphic-kills-backteria.webp";
import Icon2 from "~/public/assets/graphic-remove-stains.webp";
import Icon3 from "~/public/assets/graphic-eleminate-odor.webp";
import Icon4 from "~/public/assets/graphic-lab-tested.webp";
import resultGurantee from "~/public/assets/results-guarantedd-img.webp";
import graphincdisolve from "~/public/assets/graphic-disolve-wram-water.webp";
import graphincSoack from "~/public/assets/graphic-soak-5-minutes.webp";
import graphincRinse from "~/public/assets/graphic-rinse-dry.webp";
import granteeLogo from "~/public/assets/guarantee-logo-blue-large.png";
import googleTrust from "~/public/assets/google-trust.webp";

import type { Metadata, ResolvingMetadata } from "next";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import Product from "./product";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/746732`
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

const RetainCleaner = () => {
  return (
    // <Layout bgColor="productHeader">
    <div className="retainerMainWrapper retainer-cleaner-product">
      <div className="retainCleanerProduct sm-pt-80">
        <div className={styles.retainCleanerWrapper}>
          <div className={styles.retainCleanerInnerWrapper}>
            <div className={styles.container}>
              <div className="retainCleanerRow">
                <Row className={styles.retainCleanerRowTop}>
                  <Col md={6} className={styles.retainCleanerColumn}>
                    <Image
                      src={RetainBanner}
                      alt="retain cleaner banner image"
                      quality={100}
                    />
                  </Col>
                  <Col md={6} className={styles.retainCleanerColumn}>
                    <div className={styles.retainerCleanerBannerDetails}>
                      <div className={styles.retainerDetailInner}>
                        <div className={styles.retainerDetail}>
                          <h2>
                            <span className={styles.cariproTop}>
                              cariPRO
                              <span className={styles.tmSymbol}>TM</span>
                            </span>
                          </h2>
                          <h1 className="sale_padding">RETAINER CLEANER</h1>
                          <div
                            style={{
                              background: "#0eb4ba",
                              width: "100px",
                              margin: "15px auto 25px auto",
                              height: "4px",
                            }}
                          ></div>
                          <p>
                            Maximum strength effervescent cleaning tablets
                            specially formulated to remove stains and kill
                            99.99% of bacteria &amp; fungus on oral appliances!
                          </p>
                          <ScrollButton
                            className={styles.btnPrimaryDarkBlue}
                            style={{
                              marginTop: "0px",
                              marginBottom: "20px",
                              minWidth: "284px",
                              textDecoration: "none",
                            }}
                            targetId="mySection"
                          // onClick={scrollToSection}
                          >
                            GET PRICING
                          </ScrollButton>
                          <br />
                          <ScrollButton
                            className={styles.howItWorkText}
                            style={{
                              marginBottom: "0px",
                              minWidth: "284px",
                              fontSize: "16px",
                              lineHeight: "16px",
                              textDecoration: "none",
                            }}
                            targetId="how-it-work"
                          // onClick={scrollToSection}
                          >
                            HOW IT WORKS
                          </ScrollButton>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.reatinCleanerIconSection}>
        <div className={styles.retainCleanerIconSectionInner}>
          <h2>“Putting bacteria &amp; fungus back in your mouth is gross”</h2>

          <div className={styles.retainerIconSectionWraper}>
            <div className={styles.retainerIconSection}>
              <Row>
                <Col md={3} className={styles.columnIcon}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconImage}>
                      <Image
                        src={Icon1}
                        alt="icon 1"
                        className={styles.icon1}
                        width={81}
                        height={81}
                      />
                    </div>

                    <div className={styles.iconText}>
                      <p className={styles.iconOneDetail}>
                        KILLS 99.99% OF <br /> BACTERIA
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3} className={styles.columnIcon}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconImage}>
                      <Image
                        src={Icon2}
                        alt="icon 1"
                        className={styles.icon2}
                        width={81}
                        height={81}
                      />
                    </div>
                    <div className={styles.iconText}>
                      <p className={styles.iconTwoDetail}>
                        REMOVES STAINS <br /> & RESTORES CLARITY
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3} className={styles.columnIcon}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconImage}>
                      <Image
                        src={Icon3}
                        alt="icon 1"
                        className={styles.icon3}
                        width={81}
                        height={81}
                      />
                    </div>
                    <div className={styles.iconText}>
                      <p className={styles.iconThreeDetail}>ELIMINATES ODOR</p>
                    </div>
                  </div>
                </Col>
                <Col md={3} className={styles.columnIcon}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconImage}>
                      <Image
                        src={Icon4}
                        alt="icon 1"
                        className={styles.icon4}
                        width={81}
                        height={81}
                      />
                    </div>
                    <div className={styles.iconText}>
                      <p className={styles.iconFourDetail}>
                        3RD PARTY <br /> LAB TESTED
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.listIconSectionWrapper}>
        <div className={styles.listIconSectionInner}>
          <div className={styles.listIconSectionContainer}>
            <Row>
              <Col md={4} className={styles.listMobileONe}>
                <div className={styles.listIconDetail}>
                  <ul className={styles.listItems}>
                    <li>Nightguards</li>
                    <li>Whitening Trays</li>
                    <li>Clear Aligners</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className={styles.listMobileTwo}>
                <div className={styles.listIconDetail}>
                  <ul className={styles.listItems}>
                    <li className={styles.listItem}>Retainers</li>
                    <li className={styles.listItem}>Dentures & Partials</li>
                    <li className={styles.listItem}>Toothbrush Heads</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <Image
                  className={styles.retainerGuranteeImg}
                  src={resultGurantee}
                  alt="gurantee Image"
                  width={191}
                  height={191}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={styles.choosePackageWarpper} id="mySection">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.choosePackageDetail}>
                <h2>CHOOSE YOUR PACKAGE</h2>
                <h5>Each tablet is individually sealed for freshness.</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.retainCleanerProductWrapper}>
        <div className={styles.retainerCleanerProduct}>
          {/* <Row>
              <Col md={4} className={styles.retainerCol}>
                <RetainCleanerProduct
                  image={retainerimg}
                  title="270 Day Supply"
                  priceNote="original Price:  $49.95"
                  price="32"
                  ValueText="BEST VALUE"
                  bgColor="#f7fcfc"
                />
              </Col>
              <Col md={4} className={styles.retainerCol}>
                <RetainCleanerProduct
                  image={retainerimg2}
                  title="180 Day Supply"
                  priceNote="original Price: $39.95"
                  price="24"
                  ValueText="MOST POPULAR"
                  bgColor="#f7fcfc"
                />
              </Col>
              <Col md={4} className={styles.retainerCol}>
                <RetainCleanerProduct
                  image={retainerimg3}
                  title="90 Day Supply"
                  priceNote="original Price: $19.95"
                  price="16"
                  ValueText="TRIAL"
                  bgColor="#f7fcfc"
                />
              </Col>
            </Row> */}
        </div>
        <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
      </div>

      <div className={styles.seprator}></div>

      <div className="process-section-wrapper" id="how-it-work">
        <Container>
          <Row>
            <Col md={12}>
              <div className="heading-content-mbt">
                <h2>HOW IT WORKS</h2>
                <p>For best results, soak daily.</p>
              </div>
            </Col>
          </Row>
          <div className="processSectionInnerRow">
            <Row
              className="process-container"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Col md={4} className="first-process">
                <div
                  id="the-process-image-1"
                  className="process-container-single-img"
                >
                  <Image src={graphincdisolve} alt="graphincdisolve" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      1
                    </div>
                    <div className="the-process-title the-process-title-1">
                      <span
                        style={{ color: "#00b5bb", fontFamily: "Montserrat" }}
                      >
                        Dissolve
                      </span>{" "}
                      <span> in warm water</span>
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      Dissolve one tablet in one cup of water (or use 1/2 tablet
                      in cariPRO Ultrasonic + UV Cleaner)
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div
                  id="the-process-image-2"
                  className="process-container-single-img"
                >
                  <Image src={graphincSoack} alt="graphincSoack" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      2
                    </div>
                    <div className="the-process-title the-process-title-1">
                      <span
                        style={{ color: "#00b5bb", fontFamily: "Montserrat" }}
                      >
                        Soak{" "}
                      </span>
                      <span> for 5 minutes</span>
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      Place dental appliances into water. Keep appliances
                      immersed for 5 minutes. Stubborn stains may soak overnight
                      or require repeat applications.
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} className="second-process">
                <div
                  id="the-process-image-3"
                  className="process-container-single-img"
                >
                  <Image src={graphincRinse} alt="graphincRinse" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      3
                    </div>
                    <div className="the-process-title the-process-title-1">
                      <span
                        style={{ color: "#0fb7bc", fontFamily: "Montserrat" }}
                      >
                        Rinse
                      </span>{" "}
                      <span> & dry</span>
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      Rinse and wash appliances with running water after soak.
                      Dry before wearing. Discard all remaining solution.
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
                      className="btn-primary-blue btn-lg"
                      targetId="mySection"
                    // onClick={scrollToSection}
                    >
                      ORDER CLEANING TABLETS
                    </ScrollButton>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className={styles.seprator}></div>

<div className="moneyback_granteee">
        <Container>
          <div className="money-back-detail">
            <Image src={granteeLogo} alt="grantee logo" quality={100} />
            <div className="google-trust-logo">
              <Image src={googleTrust} alt="google trust logo" quality={100} />

              <div className="try-it-text">
                <p>
                  <span className="medium-500">
                    TRY IT. <span style={{ color: "#945aa5" }}>LOVE IT</span>
                  </span>{" "}
                  …or return it
                </p>
              </div>

              <div className="grantee-paragraph">
                <p>
                  Smile Brilliant is committed to providing professional quality
                  products at a price everyone can <br /> afford. Our mission is to
                  improve oral care through real science and innovation. If you
                  are not <br /> completely satisfied with your purchase, we’ll take it
                  back.
                </p>

                <p className="no-string-attach">
                NO STRINGS ATTACHED
                </p>

                <div className="order-btn">
                <ScrollButton
                          className={styles.btn_primary_dark_pink}
                          targetId="mySection"
                          // onClick={scrollToSection}
                        >
                         BUY NOW
                        </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    // </Layout>
  );
};

export default RetainCleaner;
