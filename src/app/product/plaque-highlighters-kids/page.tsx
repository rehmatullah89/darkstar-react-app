import React, { Suspense } from "react";

import { Container, Row, Col, Button } from 'react-bootstrap';
// import Layout from '@/layouts/content-layout';
import styles from './plaqueHighlighterKids.module.css';
import Image from 'next/image';
// import BasicProductLayout from '@/layouts/basicProducLayout';
import Link from 'next/link';
import MoneyBackGurantee from '@/components/masterLayouts/moneyBackGurantee/moneyBackGurantee';
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import type { Metadata, ResolvingMetadata } from "next";
import Product from "./product";
import ScrollButton from '@/ui/resuable-componets/ScrollButton';

import {
  adultGrinded,
  glutenImg,
  googleTrust,
  granteeLogo,
  KidsProcessImg2,
  kids,
  kids1,
  kids2,
  kidsImg,
  kidsProcessImg,
  kidsProcessImg1,
  kidsTeeth,
  sbrKids,
  sugarImg,
  veganImg,
} from './assets';
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/711181`
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
const PlaqueHighlighterKids = () => {
 
  return (
    <>
      {/* <Layout bgColor="productHeader"> */}
      <div className="plaque_highlighter-adults plaque_highlighters_kids">
        <div className="plaque-highlighter-kids sm-pt-60">
          <div className={styles.plaque_highlighter_kids_wrapper}>
            <div className={styles.plaque_highlighter_kids_details}>
              <Container className={styles.plaque_kids_container}>
                <Row className={styles.kids_hero_row}>
                  <Col md={7} className={styles.kids_seven_column}>
                    <Image src={kidsImg} alt="kids image " />
                  </Col>
                  <Col md={5} className={styles.kids_five_column}>
                    <div className={styles.plaque_kids_content_wrapper}>
                      <div className={styles.kids_content_detail}>
                        <h2 className={styles.plaque}>PLAQUE</h2>
                        <h1 id="fresh-take-text" className={styles.heading}>
                          HIGHLIGHTERS
                          <span className={styles.tm_symbal}>™</span>
                        </h1>
                        <h2 className={styles.for_kids}>FOR KIDS!</h2>
                        <div
                          style={{
                            background: '#58c3b8',
                            width: '100px',
                            margin: '15px auto 25px auto',
                            height: '4px',
                          }}
                        ></div>
                        <p>
                          Oral disclosing tablets temporarily highlight <br />{' '}
                          plaque build-up for a fun & effective way to <br />
                          brush!
                        </p>

                        <div className={styles.button_wrapper}>
                        <ScrollButton
                          className={styles.btn_primary_dark_pink}
                          targetId="mySection"
                          // onClick={scrollToSection}
                        >
                          GET PRICING
                        </ScrollButton>
                        <br />
                       <ScrollButton
                          className={styles.how_it_work}
                          targetId="how-it-works"
                          // onClick={scrollToHowItWorks}
                        >
                          HOW IT WORKS
                        </ScrollButton>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className={styles.kids_logo_Wrapper}>
            <div className={styles.kids_logo_detail}>
              <h2>“Makes effective brushing fun!”</h2>

              <Container className={styles.kids_container}>
                <div className={styles.logos_strip}>
                  <div className={styles.glucan_logo}>
                    <Image src={glutenImg} alt="" width="102" height="105" />
                  </div>
                  <div className={styles.glucan_logo}>
                    <Image src={sugarImg} alt="" width="102" height="105" />
                  </div>
                  <div className={styles.glucan_logo}>
                    <Image src={veganImg} alt="" width="102" height="105" />
                  </div>
                </div>
              </Container>
            </div>
          </div>

          <div className={styles.kids_teeth_wrapper}>
            <Image src={kidsTeeth} alt="kids teeth image" />
          </div>

          <div className={styles.light_color_text_image}>
            <div className={styles.light_color_detail}>
              <Container className={styles.kids_container}>
                <Row className={styles.ul_row}>
                  <Col md={8} className={styles.eight_columns}>
                    <ul className={styles.background_graphic}>
                      <li>Gets kids excited about oral care!</li>
                      <li>Helps prevent germ and plaque build-up</li>
                      <li>Improves brushing technique and habits</li>
                    </ul>
                  </Col>
                  <Col md={4} className={styles.four_column}>
                    <Image src={sbrKids} alt="sbr kids image" />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="choose-your-package" id="mySection">
            <div id="product-plaque-highlighters-adults">
              <div className="content-detail"  style={{textAlign:'center'}}>
                <h2 className="fnt-mont">CHOOSE YOUR PACKAGE</h2>
                <h5 className="open-sans">
                  Each tablet is individually sealed for freshness.
                  <span style={{ color: '#945aa5' }}> Ages 5+</span>
                </h5>
              </div>

              {/* <Container className={styles.kids_container}> */}
                {/* <Row>
                  <Col md={4}>
                    <BasicProductLayout
                      title="layouts/basicProducLayout"
                      orignalPrice="original Price: $60"
                      newPrice="20"
                      innerTitle="BEST VALUE"
                      image={kids}
                    />
                  </Col>
                  <Col md={4}>
                    <BasicProductLayout
                      title="layouts/basicProducLayout"
                      orignalPrice="original Price: $40"
                      newPrice="17"
                      innerTitle="MOST POPULAR"
                      image={kids1}
                    />
                  </Col>
                  <Col md={4}>
                    <BasicProductLayout
                      title="layouts/basicProducLayout"
                      orignalPrice="original Price: $20"
                      newPrice="12"
                      innerTitle="TRIAL"
                      image={kids2}
                    />
                  </Col>
                </Row> */}
              {/* </Container> */}
            </div>
            <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
          </div>

          <div className={styles.home_page_result_section}>
            <div className={styles.home_page_resut_detail}>
              <div className={styles.home_page_conent}>
                <div className={styles.section_header_content}>
                  Turn your child’s brushing routine into a game!
                </div>
                <h2 style={{ letterSpacing: '0.20em', color: '#fdf357' }}>
                  HOW IT WORKS
                </h2>

                <div className={styles.txt_detl_mbt}>
                  Let’s face it, getting kids to brush well is a challenge. So
                  we decided to turn it into a game! Plaque Highlighters™
                  temporarily highlight plaque & tartar buildup with a temporary
                  pink dye. Kids are challenged to brush away all the color as
                  fast as they can. Brushing teeth can be fun AND effective!
                </div>
              </div>

              <div
                className={styles.image_container}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className={styles.image_detail}>
                  <div className={styles.image_content}>
                    <Image src={adultGrinded} alt="adult grinded image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="process-section-wrapper plaque-highlighter-process-section kid-highlighter-process-section" id="how-it-works">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="heading-content-mbt">
                    <h2>THE PROCESS</h2>
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
                      <Image src={kidsProcessImg} alt="graphic" />
                    </div>

                    <div className="heading-text">
                      <div className="heading-text-detail">
                        <div className="the-process-circle the-process-circle-1">
                          1
                        </div>
                        <div className="the-process-title the-process-title-1">
                          <span style={{ color: '#58c3b9' }}>Chew</span> the
                          tablet
                        </div>
                      </div>

                      <div className="text-block-mbt">
                        <div className="the-process-content-text">
                          Chew 1 tablet and swish around in your mouth for 30
                          seconds . Spit the excess out into the sink. The the
                          temporary dye will highlight that yucky stuff!
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div
                      id="the-process-image-2"
                      className="process-container-single-img"
                    >
                      <Image src={kidsProcessImg1} alt="graphictray" />
                    </div>

                    <div className="heading-text">
                      <div className="heading-text-detail">
                        <div className="the-process-circle the-process-circle-1">
                          2
                        </div>
                        <div className="the-process-title the-process-title-1">
                          Rinse & Smile
                        </div>
                      </div>

                      <div className="text-block-mbt">
                        <div className="the-process-content-text">
                          After spitting, rinse your mouth with water. This
                          removes all the excess dye and makes the plaque and
                          tartar more obvious.
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div
                      id="the-process-image-2"
                      className="process-container-single-img"
                    >
                      <Image src={KidsProcessImg2} alt="graphictray" />
                    </div>

                    <div className="heading-text">
                      <div className="heading-text-detail">
                        <div className="the-process-circle the-process-circle-1">
                          2
                        </div>
                        <div className="the-process-title the-process-title-1">
                          Let’s start{' '}
                          <span style={{ color: '#58c3b9' }}> brushing</span>
                        </div>
                      </div>

                      <div className="text-block-mbt">
                        <div className="the-process-content-text">
                          Brush, rinse, floss and repeat until all the stains
                          are gone. Have fun seeing how quickly you can get your
                          teeth squeaky clean!
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
                          className={styles.btn_primary_dark_pink}
                          targetId="mySection"
                          // onClick={scrollToSection}
                        >
                          BUY NOW
                        </ScrollButton>
                        <br />
                     
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          <div className={styles.want_PlaqueHighlighterKids_section}>
            <div className={styles.want_highlither_kids_detail}>
              <h2 id="we-ship-worldwide-text">
                Want Plaque Hightlighters for{' '}
                <span style={{ color: '#945aa5' }}>Adults</span>?
              </h2>
              <div className={styles.sep_top_xs}>
                <Link
                  id="learn-more-shipping-button"
                  className="btn btn-primary-transparent-orange btn-sm kids-plaque-btn" 
                  href="plaque-highlighters-adults"
                  rel="nofollow"
                >
                  Plaque Highlighters for Adults
                </Link>
              </div>
            </div>
          </div>

          {/* <MoneyBackGurantee
            description="Smile Brilliant is committed to providing professional quality products at a price everyone can afford. Our mission is to improve oral care through real science and innovation. If you are not completely satisfied with your purchase, we’ll take it back."
            BoldTitle={
              <p
                style={{
                  color: '#945aa5',
                  fontSize: '38px',
                  fontWeight: '500',
                }}
              >
                {' '}
                NO STRINGS ATTACHED
              </p>
            }
            ButtonText="BUY NOW"
            image={granteeLogo}
            alt="yellow"
            image2={googleTrust}
          /> */}
        </div>
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
                          className={styles.how_it_work}
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
      {/* </Layout> */}
    </>
  );
};

export default PlaqueHighlighterKids;
