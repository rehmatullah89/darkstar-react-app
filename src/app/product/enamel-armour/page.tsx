import React, { Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Layout from '@/layouts/content-layout';
import Image from "next/image";
import styles from "./enamelArmour.module.css";
import EnamelArmourProduct from "@/components/enamelArmourProduct/enamelArmour";
// import MoneyBackGurantee from '@/components/masterLayouts/moneyBackGurantee/moneyBackGurantee';
import type { Metadata, ResolvingMetadata } from "next";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import Product from "./product";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import {
  RetainBanner,
  enamelImg,
  enamelSmilieImg,
  retainerimg,
  retainerimg2,
  retainerimg3,
  enamelLoss,
  toothDehydration,
  sealPores,
  stepOneImg,
  stepTwoImg,
  stepThreeImg,
  granteeLogo,
  googleTrust,
} from "./assets";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/752433`
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

const EnamelArmour = () => {
  return (
    // <Layout bgColor="">
    <div className="enamelArmourMainWrapper retainer-cleaner-product enamel-cleaner-product">
      <div className="retainCleanerProduct">
        <div className={`${styles.enamelArmourrWrapper} sale_padding `}>
          <div className={styles.retainCleanerInnerWrapper}>
            <div className={styles.container}>
              <div className="retainCleanerRow sm-pt-60">
                <Row className={styles.retainCleanerRowTop}>
                  <Col md={6} className={styles.retainCleanerColumn}>
                    <Image src={enamelImg} alt="enamle armour banner image"
                    quality={100}
                    />
                  </Col>
                  <Col md={6} className={styles.retainCleanerColumn}>
                    <div className={styles.retainerCleanerBannerDetails}>
                      <div className={styles.retainerDetailInner}>
                        <div className={styles.retainerDetail}>
                          <h2 >
                            <span className={styles.cariproTop}>
                              cariPRO
                              <span className={styles.tmSymbol}>TM</span>
                            </span>
                          </h2>
                          <h1>ENAMEL ARMOUR</h1>
                          <div
                            style={{
                              background: "#0eb4ba",
                              width: "100px",
                              margin: "15px auto 25px auto",
                              height: "4px",
                            }}
                          ></div>
                          <p>
                            <i>Leave-in,</i> sustained release treatment repairs{" "}
                            <br /> enamel and reduces chronic tooth <br />
                            sensitivity. Brush on, leave in, and <br />
                            sleep..that’s it!
                          </p>


                          <ScrollButton
                     className={styles.btnPrimaryDarkBlue}
                     style={{
                       marginTop: "0px",
                       marginBottom: "20px",
                       minWidth: "286px",
                     }}
                      targetId="mySection"
                    // onClick={scrollToSection}
                    >
                       GET PRICING
                    </ScrollButton>
                      <br />
                          <ScrollButton
                     className={styles.btnlearnScience}
                     style={{ marginBottom: "0px", minWidth: "284px" }}
                      targetId="learn-the-science"
                    // onClick={scrollToSection}
                    >
                       LEARN THE SCIENCE
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

      <div className={styles.lightTextWithImage}>
        <div className={styles.lightTextDetail}>
          <h2>“1 in 8 Americans have sensitive teeth...don’t be like them!”</h2>

          <Container className={styles.lightTextcontainer}>
            <Row className={styles.lightTextImage}>
              <Col md={8} className={styles.lightTextColumn}>
                <ul className={styles.backgroundGraphics}>
                  <li>Seals pores & repairs enamel</li>
                  <li>Improves tooth hydration</li>
                  <li>Stimulates healthy saliva production</li>
                  <li>Improves resistance to cavities & stains</li>
                </ul>
              </Col>
              <Col md={4} className={styles.lightTextColumn}>
                <Image src={enamelSmilieImg} alt="enamelSmilieImg" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className={styles.choosePackageWarpper} id="mySection">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.choosePackageDetail}>
                <h2>CHOOSE YOUR PACKAGE</h2>
                <h5>
                  Daily use <i>leave-in</i> Enamel Armour rebuilds enamel &
                  reduces chronic sensitivity
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.retainCleanerProductWrapper}>
        <div className={styles.retainerCleanerProduct}>
          {/* <Row>
            <Col md={4} className={styles.retainerCol}>
              <EnamelArmourProduct
                image={retainerimg}
                title="90 Day Supply"
                priceNote="original Price:  $64.95"
                price="59"
                ValueText="BEST VALUE"
                bgColor="#cff0f1"
              />
            </Col>
            <Col md={4} className={styles.retainerCol}>
              <EnamelArmourProduct
                image={retainerimg2}
                title="60 Day Supply"
                priceNote="original Price: $43.95"
                price="32"
                ValueText="COUPLE'S PACKAGE"
                bgColor="#cff0f1"
              />
            </Col>
            <Col md={4} className={styles.retainerCol}>
              <EnamelArmourProduct
                image={retainerimg3}
                title="30 Day Supply"
                priceNote="original Price: $21.95"
                price="18"
                ValueText="1 MONTH SUPPLY"
                bgColor="#cff0f1"
              />
            </Col>
          </Row> */}
        </div>
        <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
      </div>

      <div className={styles.scienceOfSensitiveTeethWrapper} id="learn-the-science">
        <Container className={styles.sensitiveTeethContainer}>
          <div className={styles.sensitiveTeethDetails}>
            <h4 style={{ color: "#0eb4ba" }}>THE SCIENCE OF SENSITIVE TEETH</h4>
            <p>
              1 in 8 Americans suffer from tooth sensitivity. The harsh products
              we use in our oral care routines can do just as much harm as they
              do good. Destruction of enamel and tooth dehydration are primary
              causes of tooth sensitivity  <span style={{ color: "#0eb4ba" }}>THAT CAN BE FIXED!</span> Your
              teeth have the natural ability to heal (just like bone) but at
              some point, the damage becomes irreversible.  <span style={{ color: "#0eb4ba" }}>
                Arm yourself with education and start repairing today!
              </span>
            </p>
          </div>
        </Container>
      </div>

      <div className={styles.scienceHealthSection}>
        <Container className={styles.scienceContainer}>
          <Row className={styles.scienceColumns}>
            <Col md={6} className={styles.sixCol}>
              <div className={styles.enamelLoss}>
                <h3 style={{ color: "#555759" }}>ENAMEL LOSS</h3>
                <h5 style={{ color: "#1b4764" }}>
                  Worn tooth enamel leads to tooth sensitivity
                </h5>

                <div className={styles.enamelLosImage}>
                  <Image src={enamelLoss} alt="enamel Loss" />
                </div>
                <div className={styles.scienceDetailsSection}>
                  <p>
                    <strong>
                      You can destroy tooth enamel with poor <br />
                      hygiene or aggressive habits. Loss of <br />
                      enamel can be caused by:
                    </strong>
                  </p>

                  <p>
                    Tooth decay (cavities) <br />
                    Aggressive brushing <br />
                    Excessive use of whitening toothpaste <br />
                    Poor oral microbiome (acidic pH) <br />
                    Teeth grinding (bruxism)
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className={styles.sixCol}>
              <div className={styles.toothDehydration}>
                <h3 style={{ color: "#ff928d" }}>TOOTH DEHYDRATION</h3>
                <h5 style={{ color: "#1b4764" }}>
                  Dry mouth & tooth dehydration cause enamel loss & nerve
                  sensitivity
                </h5>
                <div className={styles.enamelLosImage}>
                  <Image src={toothDehydration} alt="enamel Loss" />
                </div>
                <div className={styles.scienceDetailsSection}>
                  <p>
                    <strong>
                      Dehydrated teeth are more susceptible <br />
                      to erosion. Dehydration also constricts <br />
                      the tooth putting a “squeeze” on the <br />
                      nerve, allowing temperature change to <br />
                      be felt through the pores and cause <br />
                      aches. Teeth get dehydrated because of:
                    </strong>
                  </p>

                  <p>
                    Dry Mouth
                    <br /> Alcohol-based mouthwash
                    <br />  Excessive whitening <br />  Not drinking enough water <br />  Smoking or drinking
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles.sealPores}>
            <div className={styles.sealporesContainer}>
              <Row>
                <Col md={12}>
                  <div className={styles.sealPresDetail}>
                    <h1 style={{ color: "#1a4664" }}>
                      SEAL PORES & REBUILD ENAMEL
                    </h1>
                    <h2>
                      WITH{" "}
                      <span className={styles.cariproTOp}>
                        cariPRO{" "}
                        <span className={styles.tmSymbol}>
                          <sup>TM</sup>
                        </span>
                      </span>{" "}
                      ENAMEL ARMOUR{" "}
                    </h2>
                    <h6>
                      Shield your teeth while they heal from the inside out!
                    </h6>
                    <Image src={sealPores} alt="sealpores" />
                    <div className={styles.sealpresParagraph}>
                      <p>
                        Teeth are constantly under attack from food, drink, and
                        harsh products. At the <br /> same time, they are
                        constantly fighting back and repairing. Good saliva
                        flow, <br /> healthy eating, and enamel protection
                        facilitate healing.
                      </p>
                    </div>

                    <div className={styles.getEnamelArmourBtn}>
                    <ScrollButton
                     className={styles.btnPrimaryDarkBlue}
                     style={{
                       marginTop: "0px",
                       marginBottom: "20px",
                       minWidth: "286px",
                     }}
                      targetId="mySection"
                    // onClick={scrollToSection}
                    >
                       GET ENAMEL ARMOUR
                    </ScrollButton>
                   
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div className="process-section-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <div className="heading-content-mbt">
                <h2
                  className={styles.headingProcess}
                  style={{
                    color: "#0eb4ba",
                    fontWeight: "400",
                    fontSize: "38px",
                    letterSpacing: "0.1em",
                  }}
                >
                  HOW TO USE ENAMEL ARMOUR
                </h2>
              </div>
            </Col>
          </Row>

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
                <Image
                  src={stepOneImg}
                  alt="graphic"
                  width={200}
                  height={199}
                />
              </div>

              <div className="heading-text">
                <div className="heading-text-detail">
                  <div className="the-process-circle the-process-circle-1">
                    1
                  </div>
                  <div className="the-process-title the-process-title-1">
                    Brush & floss{" "}
                    <span style={{ color: "#0eb4ba" }}>like normal</span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Before applying Enamel Armour, brush and floss with your{" "}
                    <br /> normal toothpaste as you would any other night.
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">2</div>
                            <div className="minuts-text">minutes</div>
                          </td>
                          <td className="bdy-txt">
                            DENTIST RECOMMENDED TIME TO
                            <br />
                            THOROUGHLY BRUSH YOUR TEETH.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div
                id="the-process-image-2"
                className="process-container-single-img"
              >
                <Image
                  src={stepTwoImg}
                  alt="graphictray"
                  width={165}
                  height={198}
                />
              </div>

              <div className="heading-text">
                <div className="heading-text-detail">
                  <div className="the-process-circle the-process-circle-1">
                    2
                  </div>
                  <div className="the-process-title the-process-title-1">
                    Brush{" "}
                    <span style={{ color: "#0eb4ba" }}>with Enamel Armour</span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Apply a pea-sized amount of Enamel Armour to the brush head.
                    Brush on for 1 minute. After brushing, discard excess but DO
                    NOT rinse. Leave on teeth.
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">1</div>
                            <div className="minuts-text">minute</div>
                          </td>
                          <td className="bdy-txt">
                            TIME NEEDED TO GENTLY BRUSH ENAMEL
                            <br />
                            ARMOUR INTO THE TEETH.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div
                id="the-process-image-3"
                className="process-container-single-img"
              >
                <Image src={stepThreeImg} alt="smile" width={210} height={99} />
              </div>

              <div className="heading-text">
                <div className="heading-text-detail">
                  <div className="the-process-circle the-process-circle-1">
                    3
                  </div>
                  <div className="the-process-title the-process-title-1">
                    <span style={{ color: "#0eb4ba" }}>
                      Leave on teeth &nbsp;
                    </span>
                    & sleep
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Leave on teeth for 20 minutes prior to food or drink. For
                    optimal results, sleep immediately after. Allow the Gel to{" "}
                    <br /> work overnight.
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">20</div>
                            <div className="minuts-text">minutes</div>
                          </td>
                          <td className="bdy-txt">
                            LEAVE ON TEETH FOR 20 MINUTES.
                            <br />
                            FOR OPTIMAL RESULTS, SLEEP
                            <br />
                            AFTER APPLICATION.
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                     className=" btn-primary-blue btn-lg"
                     style={{
                       backgroundColor: "#0db4ba",
                       borderColor: "#0db4ba",
                     }}
                      targetId="mySection"
                    // onClick={scrollToSection}
                    >
                       ORDER ENAMEL ARMOUR
                    </ScrollButton>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.seprator}></div>

      {/* <MoneyBackGurantee
        description="Smile Brilliant’s line of cariPRO™ oral care products are custom-formulated with the latest science and clinical research to support oral health. Each tube of cariPRO™ Enamel Armour is guaranteed fresh. Our mission is to improve oral care through real science and innovation. If you are not completely satisfied with your purchase, we’ll take it back."
        BoldTitle={
          <p style={{ color: '#b8b8dc', fontSize: '31px', fontWeight: '500' }}>
            {' '}
            NO STRINGS ATTACHED
          </p>
        }
        ButtonText="BUY NOW"
        image={granteeLogo}
        alt="yellow"
        image2={googleTrust}
      /> */}
      <div className="moneyback_granteee">
        <Container>
          <div className="money-back-detail">
            <Image src={granteeLogo} alt="grantee logo" quality={100} />
            <div className="google-trust-logo">
              <Image src={googleTrust} alt="google trust logo" quality={100} />

              <div className="try-it-text">
                <p>
                  <span className="medium-500">
                    TRY IT. <span style={{ color: "#b8b8dc" }}>LOVE IT</span>
                  </span>{" "}
                  …or return it
                </p>
              </div>

              <div className="grantee-paragraph">
                <p>
                  Smile Brilliant’s line of cariPRO™ oral care products are
                  custom-formulated with the latest science <br  /> and clinical
                  research to support oral health. Each tube of cariPRO™ Enamel
                  Armour is guaranteed <br /> fresh. Our mission is to improve oral
                  care through real science and innovation. If you are not <br />
                  completely satisfied with your purchase, we’ll take it back.
                </p>

                <p className="no-string-attach">NO STRINGS ATTACHED</p>

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

export default EnamelArmour;
