
import React, { Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./dental-floss-picks.module.css";
import type { Metadata, ResolvingMetadata } from "next";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import Product from "./product";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import Link from "next/link";

import {
  flossPickimg,
  personImage,
  flossPickBanner,
  handImage,
  flossPickimg2,
  flossPickimg3,
  granteeLogo,
  googleTrust,
  healthy,
  gigvitns,
  preodontitis,
  advance,
  flossalpickbanner,
  flossarImage,
  flossImage1,
  flossImage2,
  flossImage3,
  blueTick,
} from "./assets";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/856651`
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

const DentalFlossPicks = () => {
  return (
    <div className="dentalFlossPicksMainWrapper retainer-cleaner-product enamel-cleaner-product dental-floss-pick-product">
      <div className="retainCleanerProduct">
        <div className={styles.flossPicksWrapper}>
          <div className={styles.retainCleanerInnerWrapper}>
            <div className={styles.container}>
              <div className="retainCleanerRow">
                <Container>
                  <Row className={styles.retainCleanerRowTop}>
                    <Col md={8} className={styles.flossPicksColumn}>
                      <Image
                        src={flossPickBanner}
                        quality={100}
                        alt="flossal picks banner image"
                      />
                      <div className={styles.handImage}>
                        <Image src={handImage} alt="hand image" />
                      </div>
                    </Col>
                    <Col md={4} className={styles.flossPicksColumn}>
                      <div className={styles.retainerCleanerBannerDetails}>
                        <div className={styles.retainerDetailInner}>
                          <div className={`${styles.retainerDetail} sale_padding `}>
                            <h2>
                              <span className={styles.cariproTop}>
                                cariPRO
                                <span className={styles.tmSymbol}>TM</span>
                              </span>
                            </h2>
                            <h2 className={styles.premiumText}>PREMIUM</h2>
                            <h1 className={styles.flossTitleText}>
                              FLOSS PICKS
                            </h1>
                            <div className={styles.separatorLine}></div>
                            <p>Frustrated with cumbersome string floss?</p>
                            <p>cariPRO floss picks make flossing easy!</p>
                            <p>Simply grab the handle and floss. Your</p>
                            <p>teeth (and fingers) will thank you!</p>
                            <ScrollButton
                      className={styles.btnPrimaryDarkBlue}
                      style={{
                        marginTop: 32,
                        marginBottom: 20,
                        minWidth: 290,
                      }}
                      targetId="mySection"
                   
                    >
                      GET PRICING
                    </ScrollButton>
                        <br />
                        <ScrollButton
                      className={styles.btnlearnScience}
                      style={{ marginBottom: 0, minWidth: 284 }}
                      targetId="learn-section"
                   
                    >
                      SCIENCE OF FLOSSING
                    </ScrollButton>
                           
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teethCleanerWarpper}>
        <Container className={styles.teeth_cleaner_container}>
          <Row>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginTop: 40,
                fontWeight: 700,
                fontSize: 35,
                zIndex: 99,
              }}
            >
              <h2 className={styles.textFumbling}>
              &ldquo;I&apos;m done fumbling with rolls of strings!&rdquo;
              </h2>
            </div>
            <Col md={8}>
              <div className={styles.listContainer}>
                <div className={styles.listItemOne}>
                  <Image src={blueTick} alt="blue tick image" />
                  <span> Easy to hold & handle</span>
                </div>
                <div className={styles.listItemTwo}>
                  <Image src={blueTick} alt="blue tick image" />
                  <span>Slides easily between tight teeth</span>
                </div>
                <div className={styles.listItemThree}>
                  <Image src={blueTick} alt="blue tick image" />
                  <span>Designed to stimulate & massage</span>
                </div>
                <div className={styles.listItemFour}>
                  <Image src={blueTick} alt="blue tick image" />
                  <span>
                    Great for <b>adults & children!</b>
                  </span>
                </div>
              </div>
            </Col>
            <Col md={4} className={styles.flossPicksColumnImg}>
              <Image
                src={personImage}
                alt="flossal picks banner image"
                className={styles.peronImage}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.retainCleanerProductWrapper} id="mySection">
        <div className={styles.retainerCleanerProduct}>
          <Row>
            <Col md={12}>
              <div className={styles.choosePackageDetail}>
                <h2>CHOOSE YOUR QUANTITY</h2>                                                           
                <h5>
                  Convenient ordering in a variety of package sizes. Save on
                  shipping by purchasing in bulk!
                </h5>
              </div>
            </Col>
          </Row>

         
        </div>
        <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
      </div>
      <div className={styles.cordlessFlossalWrapper}>
        <div className={styles.cordlessFlossalDetail}>
          <h3>Want to floss with water? Checkout the cariPRO Water Flosser!</h3>
          <Link 
          href="/product/water-flosser"
            className={styles.btnCordlessFlossal}
            style={{ marginBottom: "0px", minWidth: "284px" }}
          >
            See Cordless Water Flosser
          </Link>
        </div>
      </div>
      <div className={styles.avoidGinivitisWrapper} id="learn-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.avoidGinivitisDetail} id="flossingScience">
                <h2>
                  AVOID GINGIVITIS & PERIODONTITIS<br></br>
                  YEP, FLOSSING MATTERS!
                </h2>
                <p>
                  How many times have we been told to floss! Flossing once a day
                  WILL dramatically reduce the chances of <br /> bad breath,
                  gingivitis, and decay. You feel great now but once the
                  problems start, they dont magically go <br /> away. Regular
                  flossing eliminates plaque and gum inflammation commonly
                  associated with gingivitis <br /> and periodontitis.
                </p>

                <div className={styles.askhygenic}>
                  <p style={{ fontWeight: 500 }}>
                    Seriously, just ask your hygienist!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.askHygenicWarpper}>
        <Container className={styles.askhugenicContainer}>
          <Row>
            <Col md={3} className={styles.first_col}>
              <div className={styles.askhygenicHealthyDetail}>
                <Image
                  src={healthy}
                  alt="healthy teeth image"
                  className={styles.teethImage}
                />
                <h4>HEALTHY GUMS & TOOTH</h4>
                <p>
                  Plaque free. Healthy gum and <br /> bone tissue surrounding
                  the tooth.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.askhygenicGigvitnsDetail}>
                <Image
                  src={gigvitns}
                  alt="gigvitns teeth image"
                  className={styles.teethImage}
                />
                <h4>GINGIVITIS</h4>
                <p>
                  Early onset of periodontal disease. <br /> Plaque accumulation
                  and inflamed <br /> gums bleed easily.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.askhygenicPreodontitisDetail}>
                <Image
                  src={preodontitis}
                  alt="preodontitis teeth image"
                  className={styles.teethImage}
                />
                <h4>PERIODONTITIS</h4>
                <p>
                  Pockets begin to form where gums <br /> meet the tooth. Gums
                  are <br />
                  continuously inflamed. Bone loss <br />
                  begins.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.askhygenicAdvanceDetail}>
                <Image
                  src={advance}
                  alt="advance teeth image"
                  className={styles.teethImage}
                />
                <h4>ADVANCED PERIODONTITIS</h4>
                <p>
                  Severe bone loss and deep <br />
                  pocketing around gum line. Heavy <br />
                  decay with high probability of <br /> tooth loss.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.flossalpickbanner}>
        <Container>
          <Row>
            <Col md={8} className={styles.flossPicksColumnOne}>
            <div className={styles.floss_img_wrapper}>
              <div className={styles.floss_img_inner_wrapper}>
              <Image
                src={flossalpickbanner}
                alt="flossal picks banner image"
                className={styles.womenImage}
                quality={100}
              />
              </div>
            </div>
             
            </Col>
            <Col md={4} className={styles.flossPicksColumnTwo}>
              <Image
                src={flossarImage}
                alt="flossal picks image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.askHygenicWarpper}>
        <Container className={styles.container_custom}>
          <Row className={styles.custom_row}>
            <div className={styles.useDentalFlossContainer}>
              <h2>HOW TO USE A DENTAL FLOSS PICK</h2>
            </div>
            <Col md={4}>
              <div>
                <div className={styles.flossPickImage}>
                  <Image
                    src={flossImage1}
                    alt="floss pick image One"
                    className={styles.teethStageImage}
                  />
                </div>
                <div className={styles.theprocesscircle}>1</div>
                <h3 className={styles.useDentalFlossStepOne}>
                  Slide floss{" "}
                  <p
                    style={{
                      color: "#0eb4ba",
                      display: "inline",
                      fontFamily: "Open Sans",
                      fontSize: 25,
                      fontWeight: 400,
                    }}
                  >
                    between teeth
                  </p>
                </h3>
                <p className={styles.teethStagesText}>
                  Slide the floss pick slowly between teeth being <br /> careful
                  not to hurt the gum.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className={styles.flossPickImage}>
                  <Image
                    src={flossImage2}
                    alt="floss pick image two"
                    className={styles.teethStageImage}
                  />
                </div>
                <div className={styles.theprocesscircle}>2</div>
                <h3 className={styles.useDentalFlossStepTwo}>
                  Use{" "}
                  <p style={{ color: "#0eb4ba", display: "inline" }}>
                    up & down
                  </p>{" "}
                  motion
                </h3>
                <p className={styles.teethStagesText}>
                  Move the floss pick gently up and down to clean <br /> the
                  adjacent teeth.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className={styles.flossPickImage}>
                  <Image
                    src={flossImage3}
                    alt="floss pick image three"
                    className={styles.teethStageImage}
                  />
                </div>
                <div className={styles.theprocesscircle}>3</div>
                <h3 className={styles.useDentalFlossStepThree}>
                  Clean up residue &{" "}
                  <p style={{ color: "#0eb4ba", display: "inline" }}>discard</p>
                </h3>
                <p className={styles.teethStagesText}>
                  Use the other side of the floss pick to clean larger <br />{" "}
                  residue between the teeth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.order_loss_btn} style={{ textAlign: "center", marginTop: 49 }}>
      <ScrollButton
                      className={styles.btnOrderFlossPick}
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        minWidth: "350px",
                        alignSelf: "center",
                        fontFamily: "Montserrat",
                        letterSpacing: ".2em"
                      }}
                      targetId="mySection"
                   
                    >
                      ORDER FLOSS PICKS
                    </ScrollButton>
       
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
                    TRY IT. <span style={{ color: "#555759" }}>LOVE IT</span>
                  </span>{" "}
                  …or return it
                </p>
              </div>

              <div className="grantee-paragraph">
                <p>
                  Smile Brilliant’s line of cariPRO™ oral care products are
                  clinically researched to optimize <br /> oral health. Our cariPRO™
                  disposable floss picks are a cost effective way to reduce bad <br />
                  breath and gingivitis. Disposable floss picks are recommended
                  by leading hygienists <br /> nationwide. Our mission is to improve
                  oral care through real science and innovation. If <br /> you are not
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
  );
};

export default DentalFlossPicks;
