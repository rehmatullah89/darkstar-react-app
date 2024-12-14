import React, { Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./dental-probiotic-kids.module.css";
// import Layout from '@/layouts/content-layout';
// import BasciProductLayout from '@/layouts/basicProducLayout';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import type { Metadata, ResolvingMetadata } from "next";
import { BASE_URL, WP_BASE_URL } from "@/utils/constants";
import Product from "./product";

import {
  DentalKids,
  kidsLightImg,
  adultImg,
  adultImg1,
  adultImg2,
  oralProbiotic,
  kidsDancing,
  healthyPopulation,
  kidsProbiotics,
  veg1,
  veg2,
  veg3,
  veg4,
  veg5,
  granteeLogo,
  googleTrust,
  mobileImg,
  dentalKidsImg,
  dentalKidsImg1,
  dentalKidsImg2,
} from "./assets";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/918152`
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

const DentalProbioticKids = () => {
  return (
    // <Layout bgColor="dental_probiotic_header">
    <div className="dental-probiotics-kids retainer-cleaner-product enamel-cleaner-product dental-floss-pick-product">
      <div className={`${styles.dental_probiotic_wrapper} sale_padding `}>
        <div className={styles.dental_probiotic_details}>
          <Container className={styles.dental_probiotic_detail}>
            <Row className={`${styles.dental_probioic_row} sm-pt-60`}>
              <Col md={6} className={styles.dental_probiotic_left_col}>
                <Image src={DentalKids} alt="dental probiotic image" />
              </Col>
              <Col md={6} className={styles.dental_probiotic_right_col}>
                <div className={styles.probiotic_text_wrapper}>
                  <div className={styles.probiotic_content}>
                    <h2
                      className={styles.product_header_sub}
                      style={{ marginBottom: "0px", paddingBottom: "0" }}
                    >
                      ORAL AND SINUS
                    </h2>
                    <h1
                      id="fresh-take-text"
                      className={styles.section_header_teal}
                    >
                      PROBIOTICS
                    </h1>
                    <h2
                      className={styles.product_header_sub}
                      style={{ marginBottom: "0px", paddingBottom: "0" }}
                    >
                      FOR KIDS!
                    </h2>
                    <div
                      style={{
                        background: "#58c3b8",
                        width: "100px",
                        margin: "15px auto 25px auto",
                        height: "4px",
                      }}
                    ></div>
                    <p className={styles.open_sans}>
                      Delicious one-a-day chewable probiotics
                      <br />
                      clinically studied to support improved sinus
                      <br />
                      &amp; oral health in children.
                    </p>

                    <div className={styles.buttons}>
                    <ScrollButton
                      className={styles.probiotic_primary_btn}
                      targetId="mySection"
                   
                    >
                       GET PRICING
                    </ScrollButton>
                
                     
                      <ScrollButton
                      className={styles.probiotic_secondary_btn}
                      targetId="learn-science"
                    >
                      LEARN THE SCIENCE
                    </ScrollButton>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className={styles.boost_immunity_wrapper}>
        <div className={styles.boost_content_detail}>
          <div className={styles.boost_text}>
            <h2 className="sm-px-15">
              “Boost immunity and oral health the natural way!”
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.light_color_with_text}>
        <div className={styles.light_text_detail}>
          <Container className={styles.light_text_container}>
            <Row className={styles.light_text_row}>
              <Col md={8} className={styles.column_eight}>
                <div className={styles.eight_column_text}>
                  <ul className={styles.background_graphic}>
                    <li>
                      A delicious way to get kids excited about oral care!
                    </li>
                    <li>Boosts ear, nose and throat health</li>
                    <li>Helps defend against plaque build-up and bad breath</li>
                    <li>
                      Clinically studied to improve the oral and respiratory
                      microbiome
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className={styles.column_four}>
                <Image src={kidsLightImg} alt="kids light tex image" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="choose-your-package" id="mySection">
        <div id="product-plaque-highlighters-adults">
          <div className="content-detail">
            <h2 className="fnt-mont">CHOOSE YOUR PACKAGE</h2>
            <h5 className="open-sans">
              Chewable probiotic tablets for oral & sinus health. 3 Billion CFU
              Guaranteed*
            </h5>
          </div>
        </div>

        <Suspense fallback={<div>Fetching products...</div>}>
          <Product />
        </Suspense>
      </div>

      <div className={styles.learn_microbiome_wrapper}>
        <div className={styles.learn_microbiome_detail}>
          <div className={styles.microbiome_text}>
            Learn how microbiome rejuvenation therapy <br />
            with dental probiotics can help{" "}
            <span style={{ color: "#cb5082" }}>Adults!</span>
          </div>

          <div className={styles.sep_button_wrapper}>
            <Link className={styles.dental_adult_btn} href="/product/dental-probiotics-adults">
              Dental Probiotics for Adults
            </Link>
          </div>
        </div>
      </div>

      <Container className={styles.product_specifications}>
        <div className={styles.product_specifications_detail} id="learn-science">
          <div className={styles.specification_content}>
            <div className={styles.section_header} style={{ color: "#cb5082" }}>
              Over 700 species
            </div>
            <h3 className={styles.section_heading_smile}>
              of both{" "}
              <strong className={styles.text_blue}>
                good and bad bacteria
              </strong>
              <br className={styles.hidden_mobile} />  populate your child’s mouth all day, every day!
            </h3>
          </div>

          <div className={styles.image_banner_wrapper}>
            <Image src={oralProbiotic} alt="oral probiotic image" />
          </div>
          <div className={styles.mobile_image}>
            <Image src={mobileImg} alt="mobile image" />
          </div>
          <div className={styles.bacteria_strip}>
            <div className={styles.backeria_bad}>
              <span>
                {/* <FontAwesomeIcon
                  className={styles.cross_icon}
                  icon={faTimes}
                  size="2xl"
                /> */}
                <FontAwesomeIcon icon={faTimes} className={styles.custom_cross} />
              </span>
              <span className={styles.text_ind}>
                Bad
                <br />
                Bacteria
              </span>
            </div>
            <div className={`${styles.backeria_good_bad} goog_tick `}>
              <span>
                <FontAwesomeIcon
                  className={styles.cross_icon_purple}
                  icon={faCheck}
                  size="2xl"
                />
              </span>
              <span className={styles.text_ind}>
                Good
                <br />
                Bacteria
              </span>
            </div>
          </div>
        </div>
      </Container>

      <Container className={styles.healthy_population}>
        <div className={styles.healthy_wrapper_inner}>
          <div className={styles.healthy_population_wrapper}>
            <div className={styles.healthy_population_detail}>
              <div className={styles.healthy_population_heading}>
                <span className={styles.text_blue}>A HEALTHY POPULATION</span>
                <br />{" "}
                <span className={styles.text_red}>OF THE GOOD BACTERIA</span>
              </div>
              <div className={styles.healthy_sub_heading}>
                is the <span className={styles.text_red_small}>key</span>{" "}
                boosting upper-respiratory tract immunities & improving oral
                health
              </div>
              <div className={styles.kids_dancing_img}>
                <Image src={kidsDancing} alt="kids dancing image" />
              </div>
              <div className={styles.Healthy_pop_img}>
                <Image src={healthyPopulation} alt="healthy Population image" />
              </div>

              <div className={styles.section_description_heading_wrapper}>
                <div className={styles.section_description_heading}>
                  <h4 className={styles.text_blue}>
                    Healthy bacteria in the mouth travel naturally to the
                    sinuses and upper-respiratory tract. It’s your child’s first
                    line of defense against infection as well as plaque
                    development.
                  </h4>
                </div>
              </div>

              <div className={styles.population_button_wrapper}>
                <div className={styles.population_button}>
                  <div className={styles.button_wrapper}>
                  
                    <ScrollButton
                      className={styles.buy_now_btn}
                      targetId="mySection"
                  
                    >
                       BUY NOW
                    </ScrollButton>
                  </div>
                </div>
                <div className={styles.smile_link}>
                  <Link
                    href="/oral-probiotics-facts"
                    className={styles.link_color}
                  >
                    <span className={styles.text_red}>Click here </span>for a
                    complete guide to understanding the oral microbiome
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.child_microbiome}>
        <Container className={styles.healthy_population}>
          <div className={styles.healthy_wrapper_inner}>
            <div className={styles.healthy_population_wrapper}>
              <div className={styles.healthy_population_detail}>
                <div className={styles.healthy_population_heading}>
                  <span className={styles.text_blue}>
                    BOOST YOUR CHILD’S MICROBIOME
                  </span>
                  <br />
                  <span className={styles.text_red}>
                    WITH{" "}
                    <span className={styles.caripro_text}>
                      cariPRO<span className={styles.tm_symbal}>™</span>
                    </span>{" "}
                    Kids! ORAL <span className={styles.mont}>&</span>  SINUS PROBIOTICS
                  </span>
                </div>
                <div className={styles.healthy_sub_heading}>
                  Real science to help fortify oral health & ear/nose/throat
                  immunity
                </div>
                <div className={styles.kids_dancing_img}>
                  <Image src={kidsProbiotics} alt="kids dancing image" />
                </div>
                <div className={styles.bebefits_logo_wrapper}>
                  <div className={styles.benefits_with_logo}>
                    <div className={styles.logo_veg}>
                      <Image src={veg1} alt="veg image one" />
                      <span className={styles.text_red}>VEGETARIAN</span>
                    </div>
                    <div className={styles.logo_veg}>
                      <Image src={veg2} alt="veg image one" />
                      <span className={styles.text_red}>EGG-FREE</span>
                    </div>
                    <div className={styles.logo_veg}>
                      <Image src={veg3} alt="veg image one" />
                      <span className={styles.text_red}>SUGAR-FREE</span>
                    </div>
                    <div className={styles.logo_veg}>
                      <Image src={veg4} alt="veg image one" />
                      <span className={styles.text_red}>NON-GMO</span>
                    </div>
                    <div className={styles.logo_veg}>
                      <Image src={veg5} alt="veg image one" />
                      <span className={styles.text_red}>GLUTEN-FREE</span>
                    </div>
                  </div>
                </div>

                <div className={styles.content_detail_child}>
                  <div className={styles.child_content_detail}>
                    <h5 className={styles.text_blue}>
                      Fortifying your child’s microbiome with cariPRO™ Kids!
                      Oral &amp; Sinus Probiotics has been clinically studied to
                      support a healthier mouth and reducing ear, nose and
                      throat infections.
                    </h5>
                  </div>
                </div>
                <div className={styles.population_button_wrapper}>
                  <div className={styles.population_button}>
                    <div className={styles.button_wrapper}>
                    <ScrollButton
                      className={styles.buy_now_btn}
                      targetId="mySection"
                    >
                       BUY NOW
                    </ScrollButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <hr className={styles.line_break} />
      <div className="moneyback_granteee">
        <Container>
          <div className="money-back-detail">
            <Image src={granteeLogo} alt="grantee logo" quality={100} />
            <div className="google-trust-logo">
              <Image src={googleTrust} alt="google trust logo" quality={100} />

              <div className="try-it-text">
                <p>
                  <span className="medium-500">
                    TRY IT. <span style={{ color: "#cb5082" }}>LOVE IT</span>
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

                <p className="no-string-attach">NO STRINGS ATTACHED</p>

                <div className="order-btn">
                <ScrollButton
                      className={styles.buy_now_btn}
                      targetId="mySection"
                  
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

export default DentalProbioticKids;
