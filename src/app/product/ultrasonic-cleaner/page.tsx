import React, { Suspense } from "react";
import Image from "next/image";
// import Layout from '@/layouts/content-layout';
import styles from "./ultrasonicCleaner.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Aos from "@/ui/resuable-componets/Aos";
import UltraSonicFaqs from "@/components/ultrsonicFaqs/NightGuardFaqs";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import Link from "next/link";
import Product from "./product";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import type { Metadata, ResolvingMetadata } from "next";

import UltrasonicCleanerPackage from "@/components/ultrasonicCleanerPackage/UltrasonicCleanerPackage";
import {
  mobile_img,
  logoCircle,
  icon,
  icon1,
  icon2,
  icon3,
  rating,
  LogoHealth,
  LogoForbes,
  LogoFox,
  LogoGeha,
  LogoCircleTwo,
  LogoClient,
  LogoTheKnot,
  LogoAllure,
  LogoNewYorkPost,
  LogoSleepOrg,
  ultraSonicProduct,
  UltrasonicProduct,
  hundredpercentimg,
  process1,
  process2,
  process3,
  graphic1,
  graphic2,
  graphic3,
  graphic4,
  graphic5,
  graphic6,
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
      `${WP_BASE_URL}/wp-json/wp/v2/product/782204`
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
const UltraSonicCleaner = () => {
  return (
    // <Layout bgColor="dental_probiotic_adult_header">
    <div className="ultrasonic-cleaner enamelArmourMainWrapper retainer-cleaner-product enamel-cleaner-product">
      <div className={styles.ultrasonic_wrapper}>
        <Container className={styles.ultrasonic_container}>
          <Row>
            <Col md={6} className={`${styles.six_columns} ${styles.mobile_six_col}`}>
            <div className={styles.mobile_img}>
              <Image src={mobile_img} alt="mobile img"
              quality={100}
              />
            </div>
            </Col>
            <Col md={6} className={styles.six_columns}>
              <div className={styles.ultrasonic_detail_main_wrapper}>
                <div className={styles.ultrasonic_cleaner_detaiil}>
                  <div className={styles.utlrasonic_heading}>
                    <h2
                      className={styles.product_header_sub}
                      style={{ marginBottom: "6px", paddingBottom: "0" }}
                    >
                      <span className={styles.caripro_top}>
                        cariPRO<span className={styles.tm_symbal}>™</span>
                      </span>
                    </h2>
                    <h1
                      id="fresh-take-text"
                      className={styles.section_header_teal}
                    >
                      ULTRASONIC <br /> CLEANER
                    </h1>
                    <h1 id="uv-light-text" className={styles.sectionSubHeading}>
                      + <span style={{ color: "#ad28c1" }}>UV Light</span>{" "}
                      Sterilizer
                    </h1>
                    <div
                      style={{
                        background: "#3c97cb",
                        width: "120px",
                        margin: "15px auto 25px auto",
                        height: "4px",
                      }}
                    ></div>
                    <p className={styles.open_sans}>
                      Just add water! The chemical-free way to destroy
                      odor-causing bacteria and lift stains from your night
                      guards, whitening trays, and oral appliances.
                    </p>
                  </div>
                </div>
                <div className={styles.get_pricing_btn}>
                  <ScrollButton
                    className={styles.btn_primary}
                    targetId="mySection"
                    // onClick={scrollToSection}
                  >
                  GET PRICING
                  </ScrollButton>
                </div>
                <div className={styles.How_it_works}>
                  <ScrollButton
                   className={styles.how_it_works}
                    targetId="process-section"
                    // onClick={scrollToSection}
                  >
                 HOW IT WORKS
                  </ScrollButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.section_with_text_icon}>
        <Container className={styles.section_container}>
          <Row>
            <Col md={12}>
              <div className={styles.heading}>
                <h2
                  style={{ textAlign: "center" }}
                  className={styles.vc_custom_heading}
                >
                  “JUST ADD WATER! Kill bacteria &amp; fungus{" "}
                  <span className={styles.bolditalic}>WITHOUT</span> chemicals”
                </h2>
              </div>
            </Col>
          </Row>

          <div className={styles.icon_with_text_wrapper}>
            <div className={styles.boxes_wrapper}>
              <div className={styles.box_wrapper}>
                <div className={styles.icon_image}>
                  <Image src={icon} alt="icon" />
                </div>
                <div className={styles.icon_text}>
                  <p>
                    KILLS 99.99% <br />
                    OF BACTERIA
                  </p>
                </div>
              </div>
              <div className={styles.box_wrapper}>
                <div className={styles.icon_image}>
                  <Image src={icon1} alt="icon" />
                </div>
                <div className={styles.icon_text}>
                  <p>
                    REMOVES STAINS <br />& RESTORES CLARITY
                  </p>
                </div>
              </div>
              <div className={styles.box_wrapper}>
                <div className={styles.icon_image}>
                  <Image src={icon2} alt="icon" />
                </div>
                <div className={styles.icon_text}>
                  <p>ELIMINATES ODOR</p>
                </div>
              </div>
              <div className={styles.box_wrapper}>
                <div className={styles.icon_image}>
                  <Image src={icon3} alt="icon" />
                </div>
                <div className={styles.icon_text}>
                  <p>CHEMICAL-FREE</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.list_icon_wrapper}>
        <div className={styles.list_icon_inner_wrapper}>
          <Container className={styles.list_container}>
            <Row>
              <Col md={4} className={`${styles.list_column} ${styles.three}`} >
                <ul className={styles.background_graphic}>
                  <li>Nightguards</li>
                  <li>Whitening Trays</li>
                  <li>Clear Aligners</li>
                </ul>
              </Col>
              <Col md={4} className={`${styles.list_column} ${styles.two}`}>
                <ul className={styles.background_graphic}>
                  <li>Retainers</li>
                  <li>Dentures &amp; Partials</li>
                  <li>Toothbrush Heads</li>
                </ul>
              </Col>
              <Col md={4} className={`${styles.list_column} ${styles.one}`}>
                <Image src={hundredpercentimg} alt="image" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={styles.ultrasonicCleanerPackageWrapper} id="mySection">
        <Container>
          <Row>
            <Col md={12} className={styles.TextContainer}>
              <h1 className={styles.ultrasonicPackageHeading}>COMPLETE cariPRO<sup>™</sup> ULTRASONIC CLEANER PACKAGE </h1>
              <p>
                The fastest and most effective way to clean your oral appliances
                with no additional chemicals or harsh additives…ya, it’s pretty
                cute too!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>

      <div className={styles.backgroundGraphics}>
        <Container>
          <Row>
            <Col  md={6} className={styles.empty_six_col}></Col>
            <Col md={6} className={styles.NOempty_six_col}>
              <div className={styles.textWidget}>
                <div className={styles.textContainer}>
                  <div style={{ textAlign: "center" }}>
                    <Image src={rating} alt="image" />
                    <h5> SLEEK. COMPACT. EFFECTIVE.</h5>
                  </div>
                  <div className={styles.textInnerSection}>
                    <h2>THE HEALTHY WAY TO DISINFECT</h2>
                    <p>
                      Ultrasonic & UV cleaning technology has been used by
                      medical professionals as the optimal way to clean
                      instruments and surfaces <span style={{color:'#3c98cc',fontWeight:'500'}}>without harsh chemicals</span>. cariPRO™
                      brings this same sterilization technology to your home
                      with an ultra-sleek, ultra-compact, ultrasonic cleaner
                      built for everyday use. <span style={{color:'#3c98cc',fontWeight:'500'}}>Just add water!</span>
                    </p>
                  </div>
                </div>
                <div className={styles.get_pricing_btn}>
                  <ScrollButton
                    className={styles.btn_primary}
                    targetId="mySection"
                    // onClick={scrollToSection}
                  >
                  SEE PRICING
                  </ScrollButton>
                </div>
                <div className={styles.How_it_works}>
                  <ScrollButton
                   className={styles.how_it_works}
                    targetId="faqs"
                    // onClick={scrollToSection}
                  >
                Frequently asked questions
                  </ScrollButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.brandLogoWrapper}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.colContainer}>
                <div className={styles.logoContainer}>
                  <Image src={LogoHealth} alt="logo health" />
                </div>
                <div className={styles.logoContainer}>
                  <Image src={LogoForbes} alt="logo forbes" />
                </div>
                <div className={styles.logoContainer}>
                  <Image src={LogoGeha} alt="logo geha" />
                </div>
                <div className={styles.logoContainer}>
                  <Image src={LogoFox} alt="logo fox" />
                </div>
                <div className={`${styles.logoContainer} ${styles.width_75}`}>
                  <Image src={LogoSleepOrg} alt="logo sleep org" />
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className={styles.colContainer}>
              <div className={styles.logoContainer}>
                  <Image src={logoCircle} alt="logo circle" />
                </div>
                <div className={styles.logoContainer}>
                  <Image src={LogoClient} alt="logo cnet" />
                </div>
                <div className={styles.logoContainer}>
                  <Image src={LogoTheKnot} alt="logo the knot" />
                </div>
                <div className={styles.logoContainer}>
                  <Image src={LogoAllure} alt="logo allure" />
                </div>
                <div className={`${styles.logoContainer} ${styles.width_55}`}>
                  <Image src={LogoNewYorkPost} alt="logo newyorkpost" />
                </div>
                <div className={styles.logoContainer}>
                  <Image src={LogoCircleTwo} alt="logo circle two" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.professionalCleanerPackageWrapper}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.packageDetailContainer}>
                <h1> PROFESSIONAL ULTRASONIC CLEANER PACKAGE</h1>
                <h4>
                  cariPRO’s professional ultrasonic cleaner is the ultimate
                  device for cleaning and <br /> sterilizing your oral
                  appliances without harsh chemicals. Simply add water and press
                  <br /> power. Get the same cleaning power as medical labs
                  without the excessive costs.
                </h4>
              </div>
            </Col>
            <Col md={12}>
              <div className={styles.packageDetailImageContainer}>
                <Image src={ultraSonicProduct} alt="ultraSonic Product image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.six_box_wrapper}>
        <Container className={styles.six_box_container}>
          <div className={styles.gaurdPackage_row}>
            <Row className={styles.gaurdPackageTableRow1}>
              <Col md={6} className={styles.gaurdPackageCol}>
                <Aos animationType={"fade-right"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={graphic1}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5
                        className={`${styles.gaurd_Package_subHeading} ${styles.gaurd_Package_subHeadingClr}`}
                        style={{ color: "#4597cb" }}
                      >
                        Kills 99.99% of viruses & bacteria
                      </h5>
                      <p>
                        The same technology used in medical labs. Over 40,000
                        kHz of professional ultrasonic cleaning power destroys
                        bacteria & viruses.
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
                        src={graphic2}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5
                        className={`${styles.gaurd_Package_subHeading} ${styles.gaurd_Package_subHeadingClr}`}
                        style={{ color: "#4597cb" }}
                      >
                        Just add water. No chemicals need.
                      </h5>
                      <p>
                        The chemical-free way to clean! Simply fill with
                        standard tap water and run. No need for soap or cleaning
                        agents.
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
                        src={graphic3}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        Built-in <span style={{color:'#ad28c1'}}>UV-C sanitizing light</span>.
                      </h5>
                      <p>
                        UV-C sanitizing lamps add additional cleaning power.
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
                        src={graphic4}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        5-minute automatic shutoff
                      </h5>
                      <p>
                        5-minute auto timer ensures the optimal cleaning time,
                        every time. Won’t overheat or run on accident.
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
            </Row>

            <Row
              className={`${styles.gaurdPackageTableRow} ${styles.borderBottomyes}`}
            >
              <Col md={6} className={styles.gaurdPackageCol}>
                <Aos animationType={"fade-right"}>
                  <div className={styles.gaurdPackage_row_content}>
                    <div className={styles.proG_image}>
                      <Image
                        className={styles.graphics_teeths}
                        priority={false}
                        src={graphic5}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        Safe for everyday use
                      </h5>
                      <p>Can be used daily without damage to appliances.</p>
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
                        src={graphic6}
                        style={{ maxWidth: "100%" }}
                        quality={100}
                        alt="fsa"
                      />
                    </div>
                    <div className={styles.graphic_Teeth_content}>
                      <h5 className={styles.gaurd_Package_subHeading}>
                        One button operations
                      </h5>
                      <p>
                        Easy to use! Simply close the lid and click the power
                        button. Yep, that’s it. Safe and easy to use for anyone.
                      </p>
                    </div>
                  </div>
                </Aos>
              </Col>
            </Row>

            <div className={styles.get_pricing_btn}>
                  <ScrollButton
                    className={styles.btn_primary}
                    targetId="mySection"
                    // onClick={scrollToSection}
                  >
                 ORDER YOUR CLEANER
                  </ScrollButton>
                </div>
          </div>
        </Container>
      </div>
      <div className={styles.seprator}></div>
      <div className="process-section-wrapper" id="process-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="heading-content-mbt">
                <h2
                  className={styles.headingProcess}
                  style={{
                    color: "#3c98cc !important;",
                    fontWeight: "300",
                    fontSize: "40px",
                    lineHeight:'52px',
                    letterSpacing: "0.1em",
                  }}
                >
                  THE PROCESS
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
                <Image src={process1} alt="graphic" width={200} height={199} />
              </div>

              <div className="heading-text">
                <div className="heading-text-detail">
                  <div className="the-process-circle the-process-circle-1">
                    1
                  </div>
                  <div className="the-process-title the-process-title-1">
                    Fill with <span style={{ color: "#0eb4ba" }}>water</span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                   <b style={{fontWeight:'600'}}>Read all instructions prior to use</b> . Simply fill the device
                    to the fill line with water. For fresh taste, include 1/2
                    tablet of cariPRO™ Retainer Cleaner.
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">10</div>
                            <div className="minuts-text">seconds</div>
                          </td>
                          <td className="bdy-txt">
                            DO NOT RUN WITHOUT WATER! THIS <br /> CAN DAMAGE
                            DEVICE!
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
                  src={process2}
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
                    Place dirty appliance in{" "}
                    <span style={{ color: "#0eb4ba" }}>device</span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Completely submerge night guards, whitening trays,
                    retainers, dentures, toothbrush heads or any other oral care
                    applicance in water.
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">5</div>
                            <div className="minuts-text">seconds</div>
                          </td>
                          <td className="bdy-txt">
                            SUBMERGE OBJECT IN WATER BUT DO <br /> NOT EXCEED
                            “MAX” FILL LINE.
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
                <Image src={process3} alt="smile" width={210} height={99} />
              </div>

              <div className="heading-text">
                <div className="heading-text-detail">
                  <div className="the-process-circle the-process-circle-1">
                    3
                  </div>
                  <div className="the-process-title the-process-title-1">
                    Power on &{" "}
                    <span style={{ color: "#0eb4ba" }}>&nbsp;clean!</span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Plug it in, close the lid, press the power button, and let
                    the cariPRO™ Ultrasonic Cleaner go to work!
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">5</div>
                            <div className="minuts-text">minutes</div>
                          </td>
                          <td className="bdy-txt">
                            DO NOT WET THE POWER BUTTON. <br /> MAKE SURE TO
                            KEEP LID AND POWER <br /> BUTTON DRY WHEN REPLACING{" "}
                            <br /> WATER.
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
            <div className={styles.pdf_wrapper}>
            <div className={styles.get_pricing_btn}>
                  <ScrollButton
                    className={styles.btn_primary}
                    targetId="mySection"
                    // onClick={scrollToSection}
                  >
                  ORDER NOW
                  </ScrollButton>
                </div>
                <div className={styles.How_it_works}>
                  <Link
                   className={styles.how_it_works}
                    href="/assets/pdf/cariPRO-Ultrasonic-Cleaner-Instruction-Booklet.pdf"
                    target="_blank"
                    // onClick={scrollToSection}
                  >
                Download PDF instruction manual
                  </Link>
                </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.ultrasonic_faqs_wrapper} id="faqs">
        <div className={styles.ultrasonic_wrapper_faq}>
          <div className={styles.wpb_content}>
            <h4>Get the facts</h4>
            <h2>ULTRASONIC CLEANING FAQ</h2>
          </div>
          <UltraSonicFaqs />

          <div className={styles.primary_btn_div}>
            <ScrollButton
              className=" btn-primary-blue btn-lg"
              targetId="mySection"
            >
              SEE PRICING
            </ScrollButton>
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
                  <span
                    className="medium-500"
                    style={{ color: "#3c98cc !important" }}
                  >
                    45 DAY TRIAL.{" "}
                    <span style={{ fontWeight: "300" }}>1 YEAR WARRANTY.</span>
                  </span>
                </p>
              </div>

              <div className="grantee-paragraph">
                <p>
                  Smile Brilliant is committed to providing professional quality
                  products at a price everyone can <br /> afford. Your cariPRO™
                  Ultrasonic & UV Cleaner is backed by a 1-year manufacturer’s
                  warranty and <br /> will meet or exceed the features of a top quality
                  ultrasonic cleaner. If you are not 100% satisfied <br /> with your
                  cariPRO™ purchase, we’ll take it back.
                </p>

                <p className="no-string-attach">NO STRINGS ATTACHED</p>

                <div className="order-btn">
                  <ScrollButton
                    className={styles.btn_primary_dark_pink}
                    targetId="mySection"
                    // onClick={scrollToSection}
                  >
                   GET YOUR CLEANER
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
export default UltraSonicCleaner;
