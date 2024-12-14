import React, { Suspense } from "react";
import Image from "next/image";
import PriceCard from "@/ui/resuable-componets/price-card/index";
import HeadingandParagraph from "@/ui/resuable-componets/headingandparagraph";
import assets from "./assets";
import styles from "./nightguard.module.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NightGuardSlider from "@/components/nightGuardSlider/slider";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import NightGuardFaqs from "@/components/nightGuard/NightGuardFaqs";
import Aos from "@/ui/resuable-componets/Aos";
import Get_Pricing from "@/ui/resuable-componets/Button/Get_Pricing";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import type { Metadata, ResolvingMetadata } from "next";
import Product from "./product";
import NightGuardReviewSlider from "@/components/nightGuardReviewSlider/slider";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import NightGuardVideoPopup from "@/components/nightGuardPopup/page";
import Countdown from "@/components/countDownBanner/Countdown";


export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/884484`
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

const NightGuard = () => {
  return (
    <div className="night-guard-page">
      <div className={styles.night_guard_wrapper}>
        <div className={styles.night_guard_inner_wrapper}>
          <Container className={styles.container_night_guard}>
            <Countdown/>
            <Row className={styles.rowReverse}>
              <Col md={7} className={styles.seven_col}>
                <div className={styles.night_guard_hero_img}>
                  <Image
                    className={styles.hero_image}
                    priority={true}
                    src={assets.heroImage}
                    style={{ maxWidth: "100%" }}
                    quality={100}
                    alt="night-guard"
                  />
                  <div className={styles.grantee_logo}>
                    <Image
                      className={styles.hero_image}
                      priority={true}
                      src={assets.percent}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="night-guard"
                    />
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <div className={styles.night_guard_hero_text}>
                  <p> Custom Teeth Grinding & Clenching</p>
                  <h1>NIGHT GUARDS</h1>

                  <div
                    className="d-flex justify-content-between"
                    style={{ padding: "0px 0px 0px 10px" }}
                  >
                    <div className={styles.reviews_section}>
                      <Image
                        className={styles.hero_image}
                        priority={true}
                        src={assets.stars}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="night-guard"
                      />

                      <span>
                        4.9
                        <span className="review-text"> (32,000+ Reviews) </span>
                      </span>
                    </div>
                    <div className={styles.images}>
                      <Image
                        className={styles.hero_image}
                        priority={true}
                        src={assets.hsa}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="hsa"
                      />
                      <Image
                        className={styles.hero_image}
                        priority={true}
                        src={assets.fsa}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                  </div>
                  <div className={styles.seprator_line}></div>
                  <Image
                    className={`${styles.hero_image} ${styles.clone_hero_image}`}
                    priority={true}
                    src={assets.teethKit}
                    style={{ maxWidth: "100%" }}
                    quality={100}
                    alt="fsa"
                  />
                  <div
                    className={`${styles.small_inner_content} ${styles.clone_small_inner_content}`}
                  >
                    <div className={styles.product_description_f}>
                      <div>
                        70% Less. Lab-Direct with <b>NO Dentist Visit.</b>
                      </div>
                      <div> 45 Day Risk-Free Trial.</div>
                      <div>100% Money Back Guarantee.</div>
                      <div> Lifetime Reorders.</div>
                      <div>
                        <b>FREE</b> Impression Kit &amp; <b>FREE</b> 3-Way
                        Shipping.
                      </div>
                    </div>
                    <ScrollButton
                      className={styles.primary_btn}
                      targetId="productSection"
                    // onClick={scrollToSection}
                    >
                      GET PRICING
                    </ScrollButton>
                    {/* <Get_Pricing
                      sectionId="targetSectionId"
                      buttonText="GET PRICING"
                      className={styles.primary_btn}
                    /> */}
                    {/* <button
                      className={styles.primary_btn}
                      style={{
                        marginTop: "0px",
                        marginBottom: "20px",
                        minWidth: "284px",
                      }}
                      data-section="product-list"
                    >
                      GET PRICING
                    </button> */}
                    <br />
                    <ScrollButton
                      className={styles.secondary_btn}
                      style={{ marginBottom: "20px", minWidth: "284px" }}
                      targetId="weAreBest"
                    // onClick={scrollToSection}
                    >
                      WHY CHOOSE US?
                    </ScrollButton>

                    <br />
                    <ScrollButton
                      className={styles.see_thr_reviews}
                      style={{ cursor: "pointer" }}
                      targetId="reviewSection"
                    // onClick={scrollToSection}
                    >
                      see the reviews
                    </ScrollButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.dark_blue_bg}>
          <h1>America’s #1 Custom Night Guard. Delivered to Your Door.</h1>
        </div>
        <div className={styles.logo_slider_wrapper}>
          <div className={styles.light_blue}>
            <div className={styles.container_night_guard}>
              <Image
                className={styles.top_stars}
                priority={false}
                src={assets.starsLarge}
                style={{ maxWidth: "100%" }}
                quality={100}
                alt="fsa"
              />
              <div className={styles.beneth_starts_rating}>
                Nearly <i>1 million happy customers...</i> and growing!
              </div>
              <div className={styles.slider_wrapper}>
                <NightGuardSlider>
                  <Image
                    className={styles.hero_image}
                    priority={false}
                    src={assets.health}
                    style={{ maxWidth: "100%" }}
                    quality={100}
                    alt="fsa"
                  />

                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.forbe}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.fox}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.newyork}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.sleep}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.clent}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.allure}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.twentynine}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                </NightGuardSlider>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clone} style={{ display: "none" }}>
          <Container>
            <Image
              className={styles.hero_image}
              priority={true}
              src={assets.teethKit}
              style={{ maxWidth: "100%", margin: "auto" }}
              quality={100}
              alt="fsa"
            />
            <div className={styles.small_inner_content}>
              <div className={styles.product_description_f}>
                <div>
                  70% Less. Lab-Direct with <b>NO Dentist Visit.</b>
                </div>
                <div> 45 Day Risk-Free Trial.</div>
                <div>100% Money Back Guarantee.</div>
                <div> Lifetime Reorders.</div>
                <div>
                  <b>FREE</b> Impression Kit &amp; <b>FREE</b> 3-Way Shipping.
                </div>
              </div>
              <button
                className={styles.primary_btn}
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  minWidth: "284px",
                }}
                data-section="product-list"
              >
                GET PRICING
              </button>
              <br />
              <button
                className={styles.secondary_btn}
                style={{ marginBottom: "20px", minWidth: "284px" }}
              >
                WHY CHOOSE US?
              </button>
              <br />
              <a
                className={styles.see_thr_reviews}
                style={{ cursor: "pointer" }}
              >
                see the reviews
              </a>
            </div>
          </Container>
        </div>
      </div>

      <div className={styles.section_three}>
        <div className={styles.curve_blue_top}>
          <Image
            className={`${styles.hero_image} ${styles.mobileMoodCurveImg}`}
            priority={false}
            src={assets.curveTop}
            style={{ maxWidth: "100%" }}
            quality={100}
            alt="curveTop"
          />
        </div>
        <div className={styles.curve_blue_bottom}>
          <Image
            className={styles.hero_image}
            priority={false}
            src={assets.curveTop}
            style={{ maxWidth: "100%" }}
            quality={100}
            alt="curveTop"
          />
        </div>
        <div className={styles.section_three_container} id="weAreBest">
          <div className={styles.section_three_heading}>
            <h2>WE&apos;RE THE BEST FOR A REASON</h2>
            <p>
              45 Day Risk-Free Trail. 100% Money Back Guarantee. Free 3-way
              shipping.
            </p>
            <div className={styles.content_section_three}>
              <Row
                style={{ marginBottom: "4rem" }}
                className={styles.align_center_row}
              >
                <Col md={6} className={styles.order_1}>

                  <Aos animationType={"fade-left"}>
                    <div
                      className={styles.graphic_content}
                      style={{ position: "relative" }}
                    >
                      <Image
                        priority={false}
                        src={assets.betterFit}
                        style={{ maxWidth: "100%", height: "auto" }}
                        quality={100}
                        alt="curveTop"
                        className={styles.betterFitImg}
                      />
                      <div className={styles.overlay}>
                        <NightGuardVideoPopup />
                      </div>
                    </div>
                  </Aos>
                </Col>
                <Col md={6} className={styles.order_1}>
                  <Aos animationType={"fade-right"}>
                    <div
                      className={`${styles.sec_content_ll} ${styles.ao_init}${styles.aos_animate}`}
                    >
                      <h4 className="text-blue font-mont">
                        <strong>Better fit. Better sleep!</strong> Laser scanned
                        &amp; 3D printed for optimal comfort
                      </h4>
                      <p>
                        No one wants a loose mouthguard falling out or
                        inhibiting breathing. We use the latest in laser
                        scanning and 3D printing to ensure a precision fit that
                        won’t fall out.
                      </p>

                      <ScrollButton
                        className={styles.primary_btn}
                        targetId="productSection"
                        style={{
                          marginTop: "0px",
                          marginBottom: "20px",
                          minWidth: "284px",
                        }}
                        data-section="product-list"
                      >
                        GET PRICING
                      </ScrollButton>
                    </div>
                  </Aos>
                </Col>
              </Row>
              <Row
                style={{ marginBottom: "4rem" }}
                className={styles.order_2_Row}
              >
                <Col md={6} className={styles.order_2}>
                  <Aos animationType={"fade-left"}>
                    <div
                      className={`${styles.sec_content_ll} ${styles.ao_init}${styles.aos_animate}`}
                    >
                      <h4 className="text-blue font-mont">
                        Your dental impressions can be used for
                        <strong> more than just night guards!</strong>
                      </h4>
                      <p>
                        Your dental impressions are stored digitally for fast,
                        one-click reordering.{" "}
                        <strong style={{ color: "#331f97" }}>
                          {" "}
                          These same models can be used anytime in the future to
                          purchase night guards, custom teeth whitening <br />{" "}
                          trays or sports guards!
                        </strong>{" "}
                        As a client with dental models on file,
                        <br /> you are able to purchase any of our custom-fitted
                        products at <br /> any time.
                      </p>
                      <ScrollButton
                        className={styles.primary_btn}
                        targetId="productSection"
                        style={{
                          marginTop: "0px",
                          marginBottom: "20px",
                          minWidth: "284px",
                        }}
                        data-section="product-list"
                      >
                        GET PRICING
                      </ScrollButton>
                    </div>
                  </Aos>
                </Col>
                <Col md={6} className={styles.order_1}>
                  <Aos animationType={"fade-right"}>
                    <div>
                      <Image
                        className={styles.hero_image}
                        priority={false}
                        src={assets.dentistsGraphic}
                        width={560}
                        height={474}
                        quality={100}
                        alt="curveTop"
                      />
                    </div>
                  </Aos>
                </Col>
              </Row>
              <Row
                style={{ marginBottom: "4rem" }}
                className={styles.order_1Row}
              >
                <Col md={6} className={styles.order_1}>
                  <Aos animationType={"fade-left"}>
                    <div className={styles.graphic_content}>
                      <Image
                        className={styles.hero_image}
                        priority={false}
                        src={assets.dentalImpression}
                        width={520}
                        height={440}
                        quality={100}
                        alt="curveTop"
                      />
                    </div>
                  </Aos>
                </Col>
                <Col md={6} className={styles.order_3}>
                  <Aos animationType={"fade-right"}>
                    <div
                      className={`${styles.sec_content_ll} ${styles.ao_init}${styles.aos_animate}`}
                    >
                      <h4 className="text-blue font-mont">
                        <strong>Trusted by dentists & Insurance. </strong> The
                        best product, best service, and the largest in the
                        country
                      </h4>
                      <p>
                        Smile Brilliant is the largest, consumer-direct dental
                        lab in America! We use our high volume to reduce cost
                        and pass those savings on to our customers. Our
                        state-of-the-art dental lab is trusted by dentists,
                        insurance providers and customers alike.
                      </p>
                      <p>
                        ...and we’re{" "}
                        <span style={{ color: "#62b1f4" }}>HSA</span> &{" "}
                        <span style={{ color: "#66d55f" }}>FSA</span> Eligible!
                      </p>

                      <ScrollButton
                        className={styles.primary_btn}
                        targetId="productSection"
                        style={{
                          marginTop: "0px",
                          marginBottom: "20px",
                          minWidth: "284px",
                        }}
                        data-section="product-list"
                      >
                        GET PRICING
                      </ScrollButton>
                    </div>
                  </Aos>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section_four}>
        <Image
          className={styles.desktop_circle_image}
          priority={true}
          src={assets.desktopcircle}
          style={{ maxWidth: "100%" }}
          quality={100}
          alt="fsa"
        />

        <Container className={styles.section_four_container}>
          <div className={styles.section_four_heading}>
            <h5>
              OVER 40 MILLION <br />
              AMERICANS
            </h5>
            <h6>WILL HAVE BRUXISM (TEETH GRINDING) IN THEIR LIFETIME.</h6>
            <p>
              Whether it’s stress, anxiety, or an abnormal bite, the effects can
              be devastating. Grinding your teeth at night can lead to
              sleeplessness, sore jaw, and dull headaches. Over years, your
              teeth get worn down (attrition), become highly sensitive, and may
              require extensive dental work.
            </p>
          </div>
          <Aos animationType={"zoom-in"}>
            <div className={styles.graphic_teeth}>
              <Image
                className={styles.graphics_teeth}
                priority={false}
                src={assets.happyTeeth}
                style={{ maxWidth: "100%" }}
                quality={100}
                alt="fsa"
              />
            </div>
          </Aos>
        </Container>
      </div>

      <div className={styles.priceCard_wrapper} id="productSection">
        <Container className={styles.priceContainer}>
          <HeadingandParagraph>
            <div className={styles.priceContainerdiv}>
              <h4
                className="dark_blue fw-300 fs-34 fimaly-montserrat"
                style={{ marginBottom: "0px" }}
              >
                CHOOSE YOUR PACKAGE
              </h4>
              <p className="fs-22 fimaly-montserrat text-slate-500 fw-300 choose-wrapper-detail-text">
                Each of our packages includes the impression creation kit, lab
                service, and delivery of your custom-fitted night guards.
                <span className="dark_blue  fw-500">
                  {" "}
                  You choose a package and save up to 30% with lifetime
                  reorders.
                </span>
              </p>
            </div>
          </HeadingandParagraph>

          <div
            className="price-card product-night-guards product-selection-box pt-4 night-guard-product"
            style={{ marginTop: "90px" }}
            id={styles.d}
          >
            <div className="row" id={styles.priceCardContaienr}>
              <Suspense fallback={<div>Fetching products...</div>}>
                <Product />
              </Suspense>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.reviews_section_six} id="reviewSection">
        <Container className={styles.section_6_container}>
          <div className={styles.light_blue}>
            <div className={styles.container_night_guard}>
              <h1>CURIOUS WHAT PEOPLE THINK?</h1>
              <Image
                className={styles.stars_image}
                priority={false}
                src={assets.starsLarge}
                style={{ maxWidth: "100%" }}
                quality={100}
                alt="fsa"
              />
              <div className={styles.beneth_starts_rating}>
                Nearly <i>1 million happy customers...</i> and growing!
              </div>

              <div className={styles.slider_wrapper}>
                <NightGuardSlider>
                  <Image
                    className={styles.hero_image}
                    priority={false}
                    src={assets.health}
                    style={{ maxWidth: "100%" }}
                    quality={100}
                    alt="fsa"
                  />

                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.forbe}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.fox}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.newyork}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.sleep}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.clent}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.allure}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                  <div>
                    <Image
                      className={styles.hero_image}
                      priority={false}
                      src={assets.twentynine}
                      style={{ maxWidth: "100%" }}
                      quality={100}
                      alt="fsa"
                    />
                  </div>
                </NightGuardSlider>

                <div className="{styles.content_slider_wrapper} slider-review-wrapper">
                  <NightGuardReviewSlider>
                    <div className={styles.slider_content_Box}>
                      <Image
                        className={`${styles.hero_image} ${styles.slider_content_stars}`}
                        priority={false}
                        src={assets.starsLarge}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                      <div>
                        <q className={styles.slider_content_quote}>
                          My dentist wanted to charge me an absurd amount for a
                          night guard so I took a chance with this company. I
                          was pleasantly surprised by what a quarter of the
                          price got me. My guard fit perfect and the
                          instructions for making the impression were easy.
                        </q>
                      </div>
                      <div className={styles.content_slider_customer_info}>
                        <div>
                          {" "}
                          <Image
                            className={styles.sliderImg}
                            priority={false}
                            src={assets.sliderImg}
                            style={{ maxWidth: "100%" }}
                            quality={100}
                            alt="fsa"
                          />
                        </div>
                        <div>
                          <p className={styles.content_slider_customer_name}>
                            Jaclynn K.
                          </p>
                          <small>customer</small>
                        </div>
                      </div>
                    </div>
                    <div className={styles.slider_content_Box}>
                      <Image
                        className={`${styles.hero_image} ${styles.slider_content_stars}`}
                        priority={false}
                        src={assets.starsLarge}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                      <div>
                        <q className={styles.slider_content_quote}>
                          Fits really really well and does the job as
                          described. You might consider offering more guidance
                          on how to clean them for first-time users.
                        </q>
                      </div>
                      <div className={styles.content_slider_customer_info}>
                        <div>
                          {" "}
                          <Image
                            className={styles.sliderImg}
                            priority={false}
                            src={assets.sliderImg}
                            style={{ maxWidth: "100%" }}
                            quality={100}
                            alt="fsa"
                          />
                        </div>
                        <div>
                          <p className={styles.content_slider_customer_name}>
                            Michael C.
                          </p>
                          <small>customer</small>
                        </div>
                      </div>
                    </div>
                    <div className={styles.slider_content_Box}>
                      <Image
                        className={`${styles.hero_image} ${styles.slider_content_stars}`}
                        priority={false}
                        src={assets.starsLarge}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                      <div>
                        <q className={styles.slider_content_quote}>
                          The impressions and ordering process was simple
                          enough. Fits pretty well though the material feels a
                          bit bulky. I chose the 3mm thinking it would last
                          longer but I think for the bulk, I should have chosen
                          the 2mm. Regardless, I’m happy with the product and
                          service.
                        </q>
                      </div>
                      <div className={styles.content_slider_customer_info}>
                        <div>
                          {" "}
                          <Image
                            className={styles.sliderImg}
                            priority={false}
                            src={assets.sliderImg}
                            style={{ maxWidth: "100%" }}
                            quality={100}
                            alt="fsa"
                          />
                        </div>
                        <div>
                          <p className={styles.content_slider_customer_name}>
                            Rick A.
                          </p>
                          <small>customer</small>
                        </div>
                      </div>
                    </div>
                    <div className={styles.slider_content_Box}>
                      <Image
                        className={`${styles.hero_image} ${styles.slider_content_stars}`}
                        priority={false}
                        src={assets.starsLarge}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                      <div>
                        <q className={styles.slider_content_quote}>
                          I used to wake up every morning with jaw pain
                          and headaches until I started using the night guard I
                          got from this company. The custom fit is quite
                          comfortable and I barely notice it at night. Would
                          highly recommend for anyone with bruxism or TMJ
                          issues.
                        </q>
                      </div>
                      <div className={styles.content_slider_customer_info}>
                        <div>
                          {" "}
                          <Image
                            className={styles.sliderImg}
                            priority={false}
                            src={assets.sliderImg}
                            style={{ maxWidth: "100%" }}
                            quality={100}
                            alt="fsa"
                          />
                        </div>
                        <div>
                          <p className={styles.content_slider_customer_name}>
                            Andrew H.
                          </p>
                          <small>customer</small>
                        </div>
                      </div>
                    </div>
                    <div className={styles.slider_content_Box}>
                      <Image
                        className={`${styles.hero_image} ${styles.slider_content_stars}`}
                        priority={false}
                        src={assets.starsLarge}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                      <div>
                        <q className={styles.slider_content_quote}>
                          I was frustrated to learn that my teeth have
                          begun to wear down. I wish my dentist would have told
                          me earlier. Yesterday was my 6 month checkup and no
                          new damage. Your night guard seems to have
                          worked!
                        </q>
                      </div>
                      <div className={styles.content_slider_customer_info}>
                        <div>
                          {" "}
                          <Image
                            className={styles.sliderImg}
                            priority={false}
                            src={assets.sliderImg}
                            style={{ maxWidth: "100%" }}
                            quality={100}
                            alt="fsa"
                          />
                        </div>
                        <div>
                          <p className={styles.content_slider_customer_name}>
                            Meghan L.
                          </p>
                          <small>customer</small>
                        </div>
                      </div>
                    </div>
                    <div className={styles.slider_content_Box}>
                      <Image
                        className={`${styles.hero_image} ${styles.slider_content_stars}`}
                        priority={false}
                        src={assets.starsLarge}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                      <div>
                        <q className={styles.slider_content_quote}>
                          It took a while to make a decision on a custom night
                          guard but your reviews online were quite good. Your
                          customer service woman (Meredith I think?) was super
                          helpful and everything she told me aligned with what
                          my dentist said. I appreciate the honesty. Definitely
                          the best price and quality I have found online
                        </q>
                      </div>
                      <div className={styles.content_slider_customer_info}>
                        <div>
                          {" "}
                          <Image
                            className={styles.sliderImg}
                            priority={false}
                            src={assets.sliderImg}
                            style={{ maxWidth: "100%" }}
                            quality={100}
                            alt="fsa"
                          />
                        </div>
                        <div>
                          <p className={styles.content_slider_customer_name}>
                            Landon J.
                          </p>
                          <small>customer</small>
                        </div>
                      </div>
                    </div>
                  </NightGuardReviewSlider>
                </div>
                <div className={styles.content_slider_btn}>
                  <Button className="review-btn-a" href="/reviews">MORE REVIEWS</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.process_section}>
        <Container>
          <h4 className={styles.processHeading}>THE PROCESS</h4>
          <div className={styles.process_page_row}>
            <Aos animationType={"fade-right"}>
              <div className={styles.process_media}>
                <div className={styles.processImggContainer}>
                  <Image
                    className={`${styles.hero_image}`}
                    priority={false}
                    src={assets.kitVector}
                    style={{ maxWidth: "100%" }}
                    quality={100}
                    alt="fsa"
                  />
                </div>
                <div className={styles.process_circle}>1</div>
                <div className={styles.process_title}>
                  Order the <span>impression kit</span>
                </div>
                <div className={styles.process_content_text}>
                  Order the complete package and make your dentaI impressions in
                  less than 15 minutes. Send us your impressions in prepaid
                  envelope (included for US)
                </div>
                <Table className={styles.process_table}>
                  <tbody>
                    <tr>
                      <td className={styles.htTexts}>
                        <div className={styles.hoursText}>15</div>
                        <div className={styles.minutText}>minutes</div>
                      </td>
                      <td className={styles.table_bdyText}>
                        time it takes to create your dental impression
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Aos>
            <Aos animationType={"zoom-in"}>
              <div className={styles.process_media}>
                <div className={styles.processImggContainer}>
                  <Image
                    className={`${styles.hero_image}`}
                    priority={false}
                    src={assets.processImg2}
                    style={{ maxWidth: "100%" }}
                    quality={100}
                    alt="fsa"
                  />
                </div>
                <div className={styles.process_circle}>2</div>
                <div className={styles.process_title}>
                  Our lab creates your <span>guards</span>
                </div>
                <div className={styles.process_content_text}>
                  Our lab receives your dental impressions, crafts, an exact
                  model of your teeth, and hand finishes a truly custom-fitted
                  night guards.
                </div>
                <Table className={styles.process_table}>
                  <tbody>
                    <tr>
                      <td className={styles.htTexts}>
                        <div className={styles.hoursText}>3-5</div>
                        <div className={styles.minutText}>work days</div>
                      </td>
                      <td className={styles.table_bdyText}>
                        TIME NEEDED FOR OUR LAB TO CREATE YOUR CUSTOM-FITTED
                        NIGHT GUARDS
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Aos>
            <Aos animationType={"fade-left"}>
              <div className={styles.process_media}>
                <div className={styles.processImggContainer}>
                  <Image
                    className={`${styles.hero_image} ${styles.process_img}`}
                    priority={false}
                    src={assets.processImg3}
                    style={{ maxWidth: "100%" }}
                    quality={100}
                    alt="fsa"
                  />
                </div>

                <div className={styles.process_circle}>3</div>
                <div className={styles.process_title}>
                  Stop the <span>damage</span>
                </div>
                <div className={styles.process_content_text}>
                  Wear your night guards while you sleep. Save your teeth and
                  your money.{" "}
                  <span className={styles.processImg3TextBold}>
                    Your dental models are kept on file for convenient
                    reordering.
                  </span>
                </div>
                <Table className={styles.process_table}>
                  <tbody>
                    <tr>
                      <td className={styles.htTexts}>
                        <div className={styles.hoursText}>3-12</div>
                        <div className={styles.minutText}>months</div>
                      </td>
                      <td className={styles.table_bdyText}>
                        EACH GUARD WILL LAST AROUND 3 MONTHS (WITH HEAVY
                        GRINDING) BEFORE THEY WEAR OUT
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Aos>
          </div>
          <div className={styles.see_pricing_btn}>
            <ScrollButton
              className={styles.primary_btn}
              targetId="productSection"
              style={{
                backgroundColor: "#68c8c7",
                borderColor: "#68c8c7",
                marginTop: "0px",
                marginBottom: "20px",
                maxWidth: "199px",
              }}
              data-section="product-list"
            >
              SEE PRICING
            </ScrollButton>
          </div>
        </Container>
      </div>
      <div className={styles.eligible_section}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={styles.HSA12}>
                <h4>
                  <span className={styles.HSA}>HSA</span> &{" "}
                  <span className={styles.FSA}>FSA</span> <span>ELIGIBLE</span>
                </h4>
                <i>Simply use your HSA or FSA card at checkout</i>
              </div>
            </Col>
            <Col md={6} className={styles.HSA_FSA_LOGO}>
              <div>
                <Image
                  className={`${styles.hero_image} ${styles.HSALOGO}`}
                  priority={false}
                  src={assets.HSA_LOGO}
                  style={{ maxWidth: "100%" }}
                  quality={100}
                  alt="fsa"
                />
                <Image
                  className={`${styles.hero_image} ${styles.FSALOGO}`}
                  priority={false}
                  src={assets.FSA_LOGO}
                  style={{ maxWidth: "100%" }}
                  quality={100}
                  alt="fsa"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.gaurdPackage_section}>
        <Container style={{ maxWidth: "1420px" }}>
          <h4 className={styles.gaurdPackage_heading}>
            NIGHT GUARD PACKAGES INCLUDE
          </h4>
          <p className={styles.gaurdPackage_description}>
            Smile Brilliant custom-fitted teeth grinding night guards are
            hand-crafted by dental lab technicians. Your package includes
            custom-fitted guards, travel case, and everything you need to avoid
            the lengthy (and expensive) dentist visits.
          </p>
          <div className={styles.graphic_media}>
            <Image
              className={`${styles.hero_image}`}
              priority={false}
              src={assets.kitVector}
              style={{ maxWidth: "100%" }}
              quality={100}
              alt="fsa"
            />
          </div>
          <div className={styles.gaurdPackage_row}>
            <Row className={styles.gaurdPackageTableRow1}>
              <Col md={6} className={styles.gaurdPackageCol}>
                <Aos animationType={"fade-right"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={assets.graphicMouthTeeth}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5
                        className={`${styles.gaurd_Package_subHeading} ${styles.gaurd_Package_subHeadingClr}`}
                      >
                        Professional Lab Service
                      </h5>
                      <p>
                        Professional dental lab will receive your impressions,
                        create an exact model of your teeth, and fashion a truly
                        custom-fitted night guard.
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
              <Col
                md={6}
                className={`${styles.HSA_FSA_LOGO} ${styles.gaurdPackageCol}`}
              >
                <Aos animationType={"fade-left"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={assets.graphicNightGaurdOnly}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5
                        className={`${styles.gaurd_Package_subHeading} ${styles.gaurd_Package_subHeadingClr}`}
                      >
                        Custom-fitted Night Guards
                      </h5>
                      <p>
                        Exactly like your dentist would make. Soft yet durable.
                        Fits your teeth perfectly and will not fall out.
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
            </Row>

            <Row className={styles.gaurdPackageTableRow}>
              <Col md={6} className={styles.gaurdPackageCol}>
                <Aos animationType={"fade-right"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={assets.graphicImpression}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        1 Impression Tray
                      </h5>
                      <p>
                        Used in combination with impression material to create
                        your dental impression of upper or lower teeth (your
                        preference)
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
              <Col
                md={6}
                className={`${styles.HSA_FSA_LOGO} ${styles.gaurdPackageCol}`}
              >
                <Aos animationType={"fade-left"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={assets.puttygraphicPutty}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        2 Sets of Impression material
                      </h5>
                      <p>
                        Make your own dental impressions (1 extra sets of
                        material in case you mess up)
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
            </Row>

            <Row
              className={`${styles.gaurdPackageTableRow} ${styles.borderBottomNone}`}
            >
              <Col md={6} className={styles.gaurdPackageCol}>
                <Aos animationType={"fade-right"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={assets.envelope}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        <span className={styles.gaurd_Package_subHeadingClr}>
                          Free!
                        </span>{" "}
                        3-Way,{" "}
                        <span className={styles.gaurd_Package_subHeadingClr}>
                          pre-paid
                        </span>{" "}
                        postage
                      </h5>
                      <p>
                        All postage between you and the lab is covered (2-way
                        for international orders)
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
              <Col
                md={6}
                className={`${styles.HSA_FSA_LOGO} ${styles.gaurdPackageCol}`}
              >
                <Aos animationType={"fade-left"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={assets.reorder}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        Lifetime{" "}
                        <span className={styles.gaurd_Package_subHeadingClr}>
                          Reorders. Delivered Fast!
                        </span>
                      </h5>
                      <p>
                        Your dental impressions are kept on file. If you lose or
                        wear down your guards, we can make you new ones fast!
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
            </Row>
          </div>
          <div className={styles.gaurdPackageButton}>
            <ScrollButton
              className={styles.primary_btn}
              targetId="productSection"
              style={{
                marginTop: "0px",
                marginBottom: "20px",
                maxWidth: "254px",
              }}
              data-section="product-list"
            >
              GET THE PACKAGE
            </ScrollButton>
          </div>
        </Container>
      </div>
      <div className={styles.nightGaurdFAQ_section}>
        <div className={styles.faqContainer}>
          <div className={styles.wpb_content}>
            <h4>Get the facts</h4>
            <h2>NIGHT GUARD FAQ</h2>
          </div>
          <div>
            <NightGuardFaqs />
            <div className={styles.nightGaurdFaqBtn}>
              <ScrollButton
                className={styles.primary_btn}
                targetId="productSection"
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  maxWidth: "254px",
                }}
                data-section="product-list"
              >
                GET THE PACKAGE
              </ScrollButton>

            </div>
          </div>
        </div>
      </div>
      <div className={styles.warantee_section}>
        <Container>
          <div className={styles.gaurantee_img}>
            <Image
              className={styles.graphics_teeths}
              priority={false}
              src={assets.gaurantee}
              style={{ maxWidth: "100%" }}
              quality={100}
              alt="fsa"
            />
          </div>
          <div className={styles.google_trusted}>
            <Image
              className={styles.graphics_teeths}
              priority={false}
              src={assets.google_trusted}
              style={{ maxWidth: "100%" }}
              quality={100}
              alt="fsa"
            />
          </div>
          <div className={styles.warantee_heading}>
            <h3>45 DAY TRIAL. EASY REORDER FOR LIFE.</h3>
          </div>
          <div className={styles.warantee_paragraph}>
            <p>
              Our night guards are made with the same materials and
              craftsmanship as your local dentist. You will save your teeth and
              reduce pain. Try it out for 45 days and if you are not completely
              happy, we will issue a full refund. A model of your teeth is kept
              on file so reordering more night guards is easy and inexpensive.
              We are 100% confident that you will never have a more pleasant
              experience than you will right here!
            </p>
            <p>
              If you don’t absolutely love it, we’ll pick it up for free and
              give a full refund.
            </p>
          </div>
          <div className={styles.noStringsAttached}>
            <p>NO STRINGS ATTACHED</p>
          </div>
          <div className={styles.gauranteeBtn}>
            <ScrollButton
              className={styles.primary_btn}
              targetId="productSection"
              style={{
                marginTop: "0px",
                marginBottom: "20px",
                maxWidth: "254px",
              }}
              data-section="product-list"
            >
              GET THE PACKAGE
            </ScrollButton>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NightGuard;
