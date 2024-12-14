import React, { Suspense } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./plaque-highlighters.module.css";
// import Layout from '@/layouts/content-layout';
import Link from "next/link";
import ScrollButton from '@/ui/resuable-componets/ScrollButton';

// import BasicProductLayout from '@/layouts/basicProducLayout';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import type { Metadata, ResolvingMetadata } from "next";
import Product from "./product";

import {
  plaqueBanner,
  sugarImg,
  glutenImg,
  veganImg,
  highLighter,
  adultImg,
  adultImg1,
  adultImg2,
  adultGrinded,
  processImg,
  processOneImg,
  granteeLogo,
  googleTrust,
} from "./assets";
// import assets from "../night-guards/assets";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/711183`
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

const PlaqueHighlighterAdults = () => {
  // function scrollToSection() {
  //   const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
  //   const element = document.getElementById('mySection');
  //   let elementPosition;
  //   if (element) {
  //     const rect = element.getBoundingClientRect();
  //     elementPosition = rect.top + window.scrollY - headerHeight;
  //   }
  //   window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  // }
  // function scrollToHowItWorks() {
  //   const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
  //   const element = document.getElementById('how-it-works');
  //   let elementPosition;
  //   if (element) {
  //     const rect = element.getBoundingClientRect();
  //     elementPosition = rect.top + window.scrollY - headerHeight;
  //   }
  //   window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  // }
  // useEffect(() => {
  //   AOS.init({
  // customize your AOS settings here
  //   });
  // }, []);
  return (
    // <Layout bgColor="productHeader">
    <div className="plaque_highlighter-adults sm-pt-60">
      <div className={styles.plaque_highlighter_adult_wrapper}>
        <div className={styles.plaque_highlighter_container}>
          <div className={styles.plaque_highlighter_detail}>
            <Container className={styles.plaque_adult_container}>
              <Row className={styles.hero_row}>
                <Col md={7} className={styles.seven_column}>
                  <Image
                    src={plaqueBanner}
                    alt="plaque banner"
                    priority={true}
                    quality={100}
                    loading="eager"
                  />
                </Col>
                <Col md={5} className={styles.five_column}>
                  <div className={`${styles.plaque_details_wrapper} sale_padding`}>
                    <div className={styles.plaque_detail}>
                      <h2>Plaque</h2>
                      <h1
                        id="fresh-take-text"
                        className={styles.section_header_teal}
                      >
                        HIGHLIGHTERS
                        <span className={styles.tm_symbal}>™</span>
                      </h1>
                      <div
                        style={{
                          background: "#945aa5",
                          width: "100px",
                          margin: "15px auto 25px auto",
                          height: "4px",
                        }}
                      ></div>
                      <p>
                        Oral disclosing tablets temporarily highlight
                        <br />  plaque &amp; tartar build-up for more effective
                        <br />  brushing.
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
      </div>

      <div className={styles.logos_wrapper}>
        <div className={styles.logos_detail}>
          <div className={styles.title}>
            <h2>
              &quot;You have no idea just how much you’re missing when you
              brush&quot;
            </h2>
          </div>

          <Container className={styles.logos_container}>
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

      <div className={styles.light_color_with_text_image}>
        <div className={styles.light_color_with_text_image_detail}>
          <Container className={styles.light_text_with_image_container}>
            <Row className={styles.light_text_row}>
              <Col md={8} className={styles.eight_column}>
                <ul className={styles.background_graphic}>
                  <li>Temporarily dyes missed plaque &amp; tartar build-up</li>
                  <li>Improves brushing technique</li>
                  <li>Proven to improve overall oral health*</li>
                </ul>
              </Col>
              <Col md={4} className={styles.four_column}>
                <Image src={highLighter} alt="highlighter img" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="choose-your-package" id="mySection">
        <div id="product-plaque-highlighters-adults">
          <div className="content-detail" style={{textAlign:'center'}}>
            <h2 className="fnt-mont">CHOOSE YOUR PACKAGE</h2>
            <h5 className="open-sans">
              Each tablet is individually sealed for freshness.
            </h5>
          </div>

          {/* <Container>
            <Row>
              <Col md={4}>
                <BasicProductLayout
                  title="90 Day Supply"
                  orignalPrice="original Price: $60"
                  newPrice="20"
                  innerTitle="BEST VALUE"
                  image={adultImg2}
                />
              </Col>
              <Col md={4}>
                <BasicProductLayout
                  title="60 Day Supply"
                  orignalPrice="original Price: $40"
                  newPrice="17"
                  innerTitle="MOST POPULAR"
                  image={adultImg1}
                />
              </Col>
              <Col md={4}>
                <BasicProductLayout
                  title="30 Day Supply"
                  orignalPrice="original Price: $20"
                  newPrice="12"
                  innerTitle="TRIAL"
                  image={adultImg}
                />
              </Col>
            </Row>
          </Container> */}
        </div>
        <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
      </div>

      <div className={styles.plaque_page_result_section}>
        <div className={styles.plaque_page_result_detail}>
          <div className={styles.plaque_page_result_content}>
            <h2>HOW IT WORKS</h2>
            <p className={styles.text_detail}>
              Plaque Highlighter technology seeks out plaque and tartar with a
              clearly identifiable pink dye. This temporary dye makes areas of
              missed brushing and plaque accumulation very obvious. Simply chew
              the tablet and see exactly what you’re missing.
            </p>
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
      <div
        className="process-section-wrapper plaque-highlighter-process-section"
        id="how-it-works"
      >
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
              <Col md={6}>
                <div
                  id="the-process-image-1"
                  className="process-container-single-img"
                >
                  <Image src={processImg} alt="graphic" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      1
                    </div>
                    <div className="the-process-title the-process-title-1">
                      <span style={{ color: "#945aa5" }}>Chew</span> the tablet
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      Chew one tablet for 30 seconds and swish it around in your
                      mouth thoroughly. Spit and then rinse with water <br /> for
                      10 seconds.
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div
                  id="the-process-image-2"
                  className="process-container-single-img"
                >
                  <Image src={processOneImg} alt="graphictray" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      2
                    </div>
                    <div className="the-process-title the-process-title-1">
                      Smile & <span style={{ color: "#945aa5" }}> Brush</span>
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      Smile in the mirror to view the highlighted areas. Brush,
                      floss, rinse and repeat until stains are gone.
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
            Want Plaque Hightlighters for{" "}
            <span style={{ color: "#945aa5" }}>Kids</span>?
          </h2>
          <div className={styles.sep_top_xs}>
            <Link
              id="learn-more-shipping-button"
              className="btn btn-primary-transparent-orange btn-sm"
              href="/product/plaque-highlighters-kids"
              rel="nofollow"
            >
              Plaque Highlighters for Kids
            </Link>
          </div>
        </div>
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

export default PlaqueHighlighterAdults;
