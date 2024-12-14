
import React, { Suspense, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import assets from "./assets";
import Link from "next/link";
import "@/css/minCart.css";
import "@/css/product.css";
import styles from "./skin-care.module.css";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import MySlider from "@/components/slider/Slider";
import SkinCareFaqs from "@/components/skinCare/skinCare_faqs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Get_Pricing from "@/ui/resuable-componets/Button/Get_Pricing";
import SkincareSlider from "@/components/skincareSlider/skincareSlider";

import '@/css/sale.css';
import dynamic from 'next/dynamic';
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';
import ScienceSection from "@/components/realScienceSection/page";
import VideoPopup from "@/components/videoPopup/page";


const getContent = async () => {
  const response = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/pages/897885?page_id_darkstar=897884`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 }
    },
  );
  const data = await response.json();
  return data.content.rendered;
};

const Sale = async () => {
const window = new JSDOM("").window;
const DOMPurifyServer = DOMPurify(window);
    const Sub = dynamic(() => import("./sub"), {
        ssr: false,
      });
    

  const content = await getContent();
  return (
    <>
      {content ? (
        <>
        {/* <Style/> */}
        <div id='wrapper' className='thb-page-transition-off skincare_product'>
        <div className={styles.section_top_banner}>
        <Container
          className={`${styles.container_wrap} ${styles.mobile_container}`}
        >
          <div className={styles.circle_banner_home}>
            <Image src={assets.ellipseCircle} alt="yellow circle" />
          </div>

          <Row className={styles.no_padding}>
            <Col md={5} className={styles.custom_five_column}>
              <div className={styles.sbr_content_banner}>
                <h1 className={`${styles.font_mont} ${styles.weight_normal}`}>
                  Now delivering <br />
                  br<span className={styles.yellow_text}>!</span>lliant new{" "}
                  <strong className={styles.weight_900}>skin.</strong>
                </h1>
                <p className={styles.mobile_hidden_text}>
                  We’ve addressed the misinformation associated with{" "}
                  <br className={styles.hidden_desktop} />
                  skincare through a suite of scientifically backed{" "}
                  <br className={styles.hidden_desktop} />
                  products designed to nourish, firm, and improve skin{" "}
                  <br className={styles.hidden_desktop} />
                  complexion.{" "}
                  <span className={styles.weight_600}>
                    {" "}
                    This <i>will be</i> the best skincare product you have ever
                    used.
                  </span>
                </p>

                <div className={styles.action_btn}>
                  <ScrollButton
                    targetId="#product_section"
                    className={styles.btn_primary}
                    style={{
                      background: " #2d2e2f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#2d2e2f",
                      borderRadius: " 10px",
                      letterSpacing: "0",
                      marginBottom: "20px",
                      minWidth: "284px",
                    }}
                  >
                    Get Pricing
                  </ScrollButton>
                  <div
                    className={`${styles.seethescience} ${styles.text_center}`}
                  >
                    <ScrollButton
                      targetId="#section_the_real_science"
                      style={{
                        color: " #2d2e2f",
                        textDecoration: "none",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                      }}
                    >
                      See The Science
                    </ScrollButton>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              md={7}
              className={`${styles.hidden_mobile} ${styles.custom_column_seven}`}
            >
              <div className={styles.girl_skin_care_banner}>
                <div className={styles.gurantee_logo}>
                  <Image src={assets.GuranteeLogo} alt="gurantee logo" />
                </div>
                <Image src={assets.girlsmile} alt="girl smile" />
              </div>
            </Col>
          </Row>
        </Container>

        <div
          className={`${styles.section_header} ${styles.dark_blue} ${styles.text_center}`}
        >
          <Container className={styles.container_wrap}>
            <h1 className={`${styles.mb_0} ${styles.text_white}`}>
              “See a noticeable difference in just 3 weeks
              <span className={styles.mobile_weight_light}> or return it”</span>
            </h1>
          </Container>
        </div>
      </div>

      <div
        className={styles.section_the_real_science}
        id="section_the_real_science"
      >
        <div className={styles.scrollable_bullets}>
          <Container className={`${styles.container_wrap} ${styles.no_padding}`}>
            <div className={styles.bullet_slider}>
              <MySlider>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> BREAKOUTS
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> VISIBLE PORES
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> DARK SPOTS
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> FIRMNESS
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> ROSACEA
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> SCARRING
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> FINE LINES
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> BREAKOUTS
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> VISIBLE PORES
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> DARK SPOTS
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> FIRMNESS
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> ROSACEA
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> SCARRING
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> FINE LINES
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> BREAKOUTS
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> VISIBLE PORES
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> DARK SPOTS
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> FIRMNESS
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> ROSACEA
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> SCARRING
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> FINE LINES
                </div>
              </MySlider>
            </div>
          </Container>
        </div>
      </div>
<ScienceSection />
      {/* <div
        className={`${styles.section_real_science} ${styles.parallel_image_banner} ${styles.parallel_window}`}
        //  style={{ backgroundPosition: `center ${-scrollTop * parallaxSpeed}px` }}
      >
        <div
          className="navbar-fixed-top-barr long-strap"
          style={{ zIndex: "9" }}
        >
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#2d2e2f",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;1
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#d5a415",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;2
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#f0c23a",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;3
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#f5e2aa",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;4
          </span>
        </div>
        <Container className={styles.container_wrap}>
          <div className={styles.section_title}>TELL IT TO ME STRAIGHT</div>
          <h2 className={`${styles.weight_800} ${styles.section_heading_h2}`}>
            The <i className={styles.yellow_text}>real science</i> you{" "}
            <br className={styles.hidden_desktop} /> should{" "}
            <br className={styles.hidden_mobile} /> know about{" "}
            <br className={styles.hidden_desktop} /> your skin health.
          </h2>
          <div className={styles.dont_belive_it}>
            Don’t believe us? Google it.
          </div>

          <Row className={styles.accordian_row}>
            <Col md={4} className={styles.custom_col_four}>
              <div className={styles.men_apply_cream}>
                <Image src={assets.men_cream} alt="men apply cream" />
              </div>
            </Col>
            <Col md={8} className={styles.custom_col_eight}>
              <SkinCareFaqs />
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className={styles.yes_it_worth_section}>
        <Container className={styles.container_wrap}>
          <h3 className={styles.weight_800}>
            30 days to try it.
            <br className={styles.hidden_desktop} /> Ya, It’s{" "}
            <span className={styles.yellow_text}>worth it</span>.
          </h3>
          <div className={styles.rating_stars}>
            <div className={styles.ratig_star_div}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className={`${styles.subtitle} ${styles.font_mont}`}>
            <span className={styles.mont_bold_italic}>
              Thousands of happy skincare customers
            </span>
            ...and we’re just getting started!
          </div>
        </Container>

        <div className={styles.review_wrapper_main}>
          <Container className={styles.container_wrap}>
            <div className={styles.review_wrapper}>
              <div className={styles.circle_yellow}></div>

              <div className="review_slider_skincare">
                <SkincareSlider>
                  <span>
                    <Image src={assets.slideOne} alt="slde one"></Image>
                  </span>
                  <span>
                    <Image src={assets.slidetwo} alt="slde two"></Image>
                  </span>
                  <span>
                    <Image src={assets.slidethree} alt="slde three"></Image>
                  </span>
                  <span>
                    <Image src={assets.slidefour} alt="slde four"></Image>
                  </span>
                  <span>
                    <Image src={assets.slidefive} alt="slde five"></Image>
                  </span>
                  <span>
                    <Image src={assets.slidesix} alt="slde six"></Image>
                  </span>
                  <span>
                    <Image src={assets.slideseven} alt="slde seven"></Image>
                  </span>
                  <span>
                    <Image src={assets.slideeight} alt="slde eight"></Image>
                  </span>
                  <span>
                    <Image src={assets.slidenine} alt="slde nine"></Image>
                  </span>
                  <span>
                    <Image src={assets.slideten} alt="slde ten"></Image>
                  </span>
                  <span>
                    <Image src={assets.slideeleven} alt="slde eleven"></Image>
                  </span>
                  <span>
                    <Image src={assets.slidetwelve} alt="slde twelve"></Image>
                  </span>
                  <span>
                    <Image
                      src={assets.slidethirteen}
                      alt="slde thirteen"
                    ></Image>
                  </span>
                </SkincareSlider>
              </div>
              <div className={styles.action_btn_skincare}>
              <ScrollButton
                    targetId="#product_section"
                    className={styles.btn_primary}
                    style={{
                      background: " #2d2e2f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#2d2e2f",
                      borderRadius: " 10px",
                      letterSpacing: "0",
                      marginBottom: "20px",
                      minWidth: "284px",
                    }}
                  >
                    Get Pricing
                  </ScrollButton>
              </div>
              <div className={styles.disclaimer_text}>
                <p>
                  The photos here do not constitute a warranty of any kind nor
                  do they represent a promise or guarantee of specific results.
                  These photos are displayed for representational purposes only
                  and do not constitute medical advice or  claims. Smile
                  Brilliant makes no medical or curative claims regarding its
                  products, which are not intended to treat, cure, or prevent
                  any disease or skin condition.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className={styles.select_your_packages}>
        <Container className={styles.container_wrap}>
          <h4
            className={`${styles.font_mont} ${styles.section_heading_package}`}
          >
            SELECT YOUR PACKAGE
          </h4>
          <div className={styles.heading_title}>
            <span className={styles.mobile_medium}>
              {" "}
              Fresh, made to order. 30 Day Trial.
            </span>
            <br className={styles.hidden_desktop} />
            <i>Free shipping</i> on orders over $35.
          </div>
        </Container>
        <div
          className="navbar-fixed-top-barr long-strap" id="stripe_bar"
          style={{ zIndex: "9" }}
        >
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#f5e2aa",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;1
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#d5a415",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;2
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#f0c23a",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;3
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#f5e2aa",
              fontSize: "0px",
              height: "12px",
            }}
          >
            &nbsp;4
          </span>
        </div>
      </div>
        <div className='gehaTemplate active-recomendation-tab' id='newsalePage'>
       
        <section className="shopLanderPageHader" id="product_section">
        <div className="pageHeader ">
             {/* <section id="solid-color-with-text-section" >
                    <div className="container">
                        <div className="text-center align-item-center justify-content-center">

                            <div className="v-col-sm-12 sectionTopBanner">

                                <div className="messageWithNoSale font-mont">
                                <span className="weight900">Our Sale is closed now.</span>
                                    <span className="upcommingDealsText">Find out about our upcoming deals by subscribing to our
                                        newsletter.</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section> */}
                <div className="pageheaderBotm ">
                    <div className="row no-flex">
                        <div className="flex-row">
                            <div className="filterproductsOption">
                                <select id="filter_products">
                                    <option value="all">All products</option>
                                    <option value="Bundle &amp; Save">Bundle &amp; Save</option>
                                    <option value="Featured!">Featured!</option>
                                    <option value="Low Stock">Low Stock</option>
                                </select>

                            </div>



                            <div className="all-product-dropdown">

                                {/* <select id="price-sort">

                                    <option value="default">Recommended</option>

                                    <option value="price-low-to-high">Low price to high</option>

                                    <option value="price-high-to-low">high price to low</option>

                                    <option value="newest">Newest</option>

                                </select> */}

                            </div>


                            <div className="resetFilter">
                                <a href="" id="resetButton">Reset </a>
                            </div>


                        </div>

                    </div>

                </div>
        </div>
        </section>
        <div
         id='product-list'  className="row teethWhieteingSystemWrapper productLandingPageContainer" 
          dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(content) }}
          />
          </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
      <Sub />
      <div className={styles.partner_banner_bottom}>
        <Container className={styles.container_wrap}>
          <Row className={styles.Custom_row}>
            <Col md={6}>
             <VideoPopup />
            </Col>
            <Col md={6}>
              <div className={styles.content_section}>
                <h5 className={styles.section_heading_partner}>
                  <span className={styles.weight_800}>
                    Partnership for a <br className={styles.hidden_desktop} />{" "}
                    Happier & Healthier <br className={styles.hidden_desktop} />{" "}
                    You.
                  </span>
                </h5>

                <p className={`${styles.text_white} ${styles.partner_text}`}>
                  Smile Brilliant is excited to announce our strategic
                  partnership with Formulate Labs, the Nations leading
                  researcher in premium personal care products. Over a year of
                  R&D went into developing a line of skincare products for our
                  customers. Unique to our brand, each shipment is made to
                  order. This means it’s fresh, never sat on a shelf, and has
                  the highest levels of active ingredient potency.
                  <span
                    className={`${styles.yellow_text} ${styles.weight_600}`}
                  >
                    We&apos;ve helped thousands of individuals from all ages,
                    see better skin at a fraction of the price of typical
                    &#34;premium&#34; brands.
                  </span>
                  <br />
                  <br />
                  We are confident that you will not find a better product on
                  the market today.
                  <span
                    className={`${styles.yellow_text} ${styles.weight_600}`}
                  >
                    Try us out for 30 days and if you do not see an obvious
                    difference in your overall skin health, we&apos;ll take it
                    back for a full refund.
                  </span>
                </p>

                <div className={styles.powered_by_section}>
                  <div className={styles.powered_by_text}>
                    <span>Powered by</span>
                    <span className={styles.formulate_logo}>
                      <Image src={assets.fonmulate} alt="formulate logo" />
                    </span>
                  </div>
                  <div className={styles.gurantee_logo_yellow}>
                    <Image src={assets.guranteeYellow} alt="yellow gyrantee" />
                  </div>
                </div>

                <div
                  className={`${styles.our_people_promise} ${styles.action_btn_promise}`}
                >
                  <Link href="https://www.smilebrilliant.com/about-us/">
                    Our people. Our promise
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
};

export default Sale;

