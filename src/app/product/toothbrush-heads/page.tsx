import React, { Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from './toothbrush-heads.module.css'
import Image from "next/image";
import ToothbrushHeadPop from "@/components/toothbrushHeadPopup/toothBrushHeadPopup";
import type { Metadata, ResolvingMetadata } from "next";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import Product from "./product";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";

import {
    toothbrushHead,
    Doupot,
  } from './assets';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/427576`
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

const ToothbrushHeads = () => {


  return (
    <>
      <Container>
        <div className="toothbrush-heads">
          <div className={styles.toothbrushHeadsWrapper}>
            <div className={styles.ToothbrushHeadsTitleWrapper}>
              <div className={`${styles.ToothbrushHeadsTitle} sale_padding `}>
                <h1>TOOTHBRUSH HEADS</h1>
                <h4>Premium brush heads at a price you can appreciate.</h4>
              </div>
              <div className={styles.toothbrushimg}>
                <Image src={toothbrushHead} alt="tooth brush head img" />
              </div>

              <ScrollButton
                className={styles.primaryButton}
                targetId="mySection"
              >
                SEE PRICING
              </ScrollButton>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.maintainingHealthSection}>
        <Container>
          <div className={styles.maintaining_Health_Section_Text}>
            <h2>
              &quot; Maintaining a healthy mouth just became the easiest part of{" "}
              <br />
              your routine.&quot;
            </h2>
          </div>
        </Container>
      </div>

      <div className={styles.choose_your_replacement_package} id="mySection">

          <h2>CHOOSE YOUR REPLACEMENT PACKAGE</h2>

        <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
      </div>

      <ToothbrushHeadPop />

      <div className={styles.feel_difference_wrapper}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.feel_difference_detail}>
                <h3>FEEL THE DIFFERENCE</h3>
                <Image src={Doupot} alt="douput image" />
              </div>

              <div className={styles.text_wrapper}>
                <h4>
                  Each of our replacement brush heads are tufted with premium
                  DuPont™ bristles. Thousands of micro bristles are cut to exact
                  length and angled for optimal cleaning. The cariPRO™ Electric
                  Toothbrush, cleans both the surface of your teeth and
                  in-between each tooth, reducing plaque buildup and improving
                  gum health. If you’re not completely satisfied with the
                  cleaning results of your cariPRO™ brush heads, we will take
                  them back!
                </h4>
              </div>

              <ScrollButton
                className={styles.btn_primary}
                targetId="mySection"
                // onClick={scrollToSection}
              >
                ORDER NOW
              </ScrollButton>
              {/* 
              <button className={styles.btn_primary} onClick={scrollToSection}>
                ORDER NOW
              </button> */}
            </Col>
          </Row>
        </Container>
      </div>
      {/* </Layout> */}
    </>
  );
};

export default ToothbrushHeads;
