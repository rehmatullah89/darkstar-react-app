import React, { Suspense } from "react";
import styles from "./home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import assets from "./assets";
import Link from "next/link";
import '@/css/product.css';
import Dropdown from "@/components/dropdownButtons/dropdown";
// import ReviewSlider from "@/components/reviewSlider/reviewSlider";
// import MobSlider from "@/components/mobSlider/mobSlider";
import MySlider from "@/components/slider/Slider";
import dynamic from "next/dynamic";

const Abc = () => {
  const ReviewSlider = dynamic(
    () => import("@/components/reviewSlider/reviewSlider"),
    { ssr: false }
  );
  const MobSlider = dynamic(() => import("@/components/mobSlider/mobSlider"), {
    ssr: false,
  });
  return (
    <div className={styles.homepage_wrapper}>
      <div className={styles.home_page_hero_section}>
        <div className={styles.home_page_hero_section_mobile}></div>
        <Container>
          <Row>
            <Col md={6}>
              <div className={styles.circle_image}>
                <Image
                  src={assets.pinkCircle}
                  width={720}
                  quality={100}
                  height={720}
                  alt="pink circle"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className={styles.hero_text_box}>
                <div className={styles.blue_text}>
                  <h2>
                    Happiness starts with <br />a healthy smile
                  </h2>
                </div>
                <div className={styles.green_text}>
                  <p>
                    Professional teeth whitening & <br /> oral care products
                    designed to <br />
                    improve your quality of life.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </div>

      <div className={styles.content_section_one}>
        <Container>
          <div className={styles.optimal_health}>
            <p>
              Optimal Health & Beautiful Smiles. <b>Delivered to Your Door.</b>{" "}
            </p>
          </div>
        </Container>
      </div>

      <div className={styles.content_section_two_stars_logo}>
        <div className={styles.rating_stars}>
          <Image src={assets.ratingStars} alt="rating stars" />
        </div>
        <div className={styles.heading}>
          <p>
            Nearly{" "} 
            <b>
              <i>1 million happy customers...</i>
            </b>{" "}
            and growing!
          </p>
        </div>

        <div className="slidr_main_wrapper">
        <div className={styles.logos_wrapper}>
          <div className={styles.logo_box}>
            <Suspense fallback={null}>
              <MobSlider>
                <div className={styles.logo_health}>
                  <Image src={assets.health} alt="rating stars" />
                </div>
                <div className={styles.logo_forbee}>
                  <Image src={assets.forbes} alt="rating stars" />
                </div>
                <div className={styles.logo_fox}>
                  <Image src={assets.fox} alt="rating stars" />
                </div>
                <div className={styles.logo_post}>
                  <Image src={assets.post} alt="rating stars" />
                </div>
                <div className={styles.logo_sleep}>
                  <Image src={assets.sleep} alt="rating stars" />
                </div>
                <div className={styles.logo_cnet}>
                  <Image src={assets.cnet} alt="rating stars" />
                </div>
                <div className={styles.logo_allure}>
                  <Image src={assets.allure} alt="rating stars" />
                </div>
                <div className={styles.logo_refine}>
                  <Image src={assets.refinery} alt="rating stars" />
                </div>
                
              </MobSlider>
            </Suspense>
          </div>
        </div>
        </div>
      </div>

      <div className={styles.america_one_wrapper}>
        <div
          className="navbar-fixed-top-barr long-strap"
          style={{ zIndex: "9" }}
        >
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#002244",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;1
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#fa319e",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;2
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#331f96",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;3
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#2d2e2f",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;4
          </span>
        </div>

        <div className={styles.pink_circle}>
          <Image src={assets.pink} quality={100} alt="pink circle" />
        </div>
        <div className={`${styles.purple_circle} ${styles.mobile_hidden}`}>
          <Image src={assets.purple} quality={100} alt="pink circle" />
        </div>
        {/* <div className={`${styles.purple_circle} ${styles.desktop_hidden}`}>
          <Image src={assets.mobilePurple} quality={100} alt="pink circle" />
        </div> */}
        <div className={`${styles.purple_image_bottom_section} ${styles.desktop_hidden}`}>
        <Image src={assets.purpleBg} quality={100} alt="pink circle" />
        </div>
        <div className={`${styles.women_img_puple_bg} ${styles.desktop_hidden}`}>
                  <Image src={assets.women} alt="women image" />
                </div>
        <Container>
          <div
            className={`${styles.impression_heading} ${styles.desktop_hidden}`}
          >
            <h2>
              Make <i style={{ color: "#fa319e" }}>ONE</i> Impression.
            </h2>
            <p>
              Get <i className={styles.font_weight_500}>any</i> custom-fitted
            </p>
            <h3>
              <span className={styles.font_weight_700}> trays or guards </span>
              <i style={{ color: "#fa319e", fontWeight: "800" }}>FOR LIFE</i>.
            </h3>
            
          </div>

          <div
            className={`${styles.desktop_hidden} ${styles.mobile_mold_img}`}
            style={{ position: "relative" }}
          >
            <div className={styles.mold_img}>
              <Image src={assets.mold} alt="women image" />
            </div>
            <div className={styles.nightguard_img}>
              <Image src={assets.nightGuard} alt="women image" />
            </div>
          </div>
          <div className={styles.heading_wrapper}>
            <p className={styles.america_heading}>
              <span>America&apos;s # 1</span> Custom-fitted{" "}
              <span>Trays & Guards</span>
            </p>
            <p className={styles.america_paragraph}>
              45 Day <span>Risk-Free Trial.</span> 100% <span>Money Back </span>{" "}
              Guarantee. <span>FREE </span> 3-way shipping.{" "}
            </p>
          </div>

          <div className={styles.make_impression_wrapper}>
            <Row>
              <Col md={6}>
                <div className={styles.impression_heading}>
                  <h2 className={styles.mobile_hidden}>
                    Make <i style={{ color: "#fa319e" }}>ONE</i> Impression.
                  </h2>
                  <p className={styles.mobile_hidden}>
                    Get <i className={styles.font_weight_500}>any</i>{" "}
                    custom-fitted
                  </p>
                  <h3 className={styles.mobile_hidden}>
                    <span className={styles.font_weight_700}>
                      {" "}
                      trays or guards{" "}
                    </span>
                    <i style={{ color: "#fa319e", fontWeight: "800" }}>
                      FOR LIFE
                    </i>.
                  </h3>

                  <div className={styles.buttons}>
                    <Link
                      className={styles.night_guard}
                      href="/product/night-guards/"
                    >
                      Night Guards
                    </Link>{" "}
                    <br />
                    <Link
                      className={styles.teeth_white}
                      href="/product/teeth-whitening-trays/"
                    >
                      Teeth Whitening Systems
                    </Link>{" "}
                    <br />
                    <Link
                      className={styles.sports_Guard}
                      href="/product/proshield/"
                    >
                      Sports Mouth Guards
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={6} style={{ position: "relative" }}>
                <div className={`${styles.mold_img} ${styles.mobile_hidden}`}>
                  <Image src={assets.mold} alt="women image" />
                </div>
                <div className={styles.women_img}>
                  <Image src={assets.women} alt="women image" />
                </div>
                <div
                  className={`${styles.nightguard_img} ${styles.mobile_hidden}`}
                >
                  <Image src={assets.nightGuard} alt="women image" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div
        className={`${styles.whitening_trays_wrapper} ${styles.mobile_hidden}`}
      >
        <Container>
          <Row>
            <Col md={6}>
              <div className={styles.whiening_text}>
                <p>Already have Teeth Whitening Trays?</p>
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.buttons}>
                <Link
                  href="/product/teeth-whitening-gel/"
                  className={styles.whitening_gel}
                >
                  Whitening Gel Refills
                </Link>
                <Link
                  href="/product/sensitive-teeth-gel/"
                  className={styles.desenitizing_gel}
                >
                  Desensitizing Gel Refills
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.caripro_vitals_wrapper} >
        <div
          className="navbar-fixed-top-barr long-strap"
          style={{ zIndex: "9" }}
        >
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#002244",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;1
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#00bbb4",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;2
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#4597cb",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;3
          </span>
          <span
            className="strip-bar"
            style={{
              width: "25%",
              backgroundColor: "#ecf5f9",
              fontSize: "0px",
              height: "8px",
            }}
          >
            &nbsp;4
          </span>
        </div>
        <div
          className={`${styles.text_slider_wrapper} ${styles.desktop_hidden}`}
        >
          <Container>
            <Suspense fallback={null}>
              <MySlider>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> sensitive teeth
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> bad breath
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> immune support
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> dry mouth
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> cavity prevention
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> sensitive teeth
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> bad breath
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> immune support
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> dry mouth
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> cavity prevention
                </div>
              </MySlider>
            </Suspense>
          </Container>
        </div>
        <Container>
          <div className={styles.vital_text_wrapper}>
            <h1>VITALS</h1>
          </div>
          <div className={styles.caripro_vitals_heading}>
          <div className={styles.cariproLogo}>
          <Image src={assets.caripro} alt="caripro logo" />
          </div>
            <p className={styles.mobile_hidden}>
              {" "}
              <span>Guaranteed</span> to Improve Oral Health. Backed By{" "}
              <span>Real Science</span>. Dentist & Hygienist{" "}
              <span>Approved.</span>
            </p>
          </div>
          <div
            className={`${styles.caripro_vital_right_text} ${styles.desktop_hidden}`}
          >
            <div className={styles.top_text}>
              <h2>Microbiome matters!</h2>
              <p>
                Improving oral health through <br /> effective cleaning &
                rejuvinating <br /> your{" "}
                <span style={{ color: "#00bbb4", fontStyle: "italic" }}>
                  {" "}
                  natural defenses.
                </span>
              </p>
            </div>
          </div>
          <div className={styles.top_bg_img}>
            <Image src={assets.top} quality={100} alt="caripro logo" />
          </div>
          <div className={`${styles.bottom_bg_img} ${styles.mobile_hidden}`}>
            <Image src={assets.bottom} quality={100} alt="caripro logo" />
          </div>
          <div className={`${styles.bottom_bg_img} ${styles.desktop_hidden}`}>
            <Image src={assets.mobileGreen} quality={100} alt="caripro logo" />
          </div>
          <Row>
            <Col md={6}>
              <div className={styles.bottles_image}>
                <Image src={assets.bottles} alt="bottle images" />
              </div>
              <div className={styles.brush_image}>
                <Image src={assets.brush} alt="brush images" />
              </div>
            </Col>
            <Col md={6}>
              <div
                className={`${styles.caripro_vital_right_text} ${styles.mobile_hidden}`}
              >
                <div className={styles.top_text}>
                  <h2>Microbiome matters!</h2>
                  <p>
                    Improving oral health through <br /> effective cleaning &
                    rejuvinating <br /> your{" "}
                    <span style={{ color: "#00bbb4", fontStyle: "italic" }}>
                      {" "}
                      natural defenses
                    </span>.
                  </p>
                </div>
              </div>

              <div className={styles.dropdown_content}>
                <Dropdown />

                {/* <div className={styles.buttons}>
                  <Link
                    href="/product/dental-probiotics-adults/"
                    className={styles.Probiotics}
                  >
                    Oral Probiotics
                  </Link>
                  <Link
                    href="/product/enamel-armour/"
                    className={styles.enamle}
                  >
                    Sensitivity Enamel Armour
                  </Link>
                  <Link
                    href="/product/plaque-highlighters-adults/"
                    className={styles.highlighters}
                  >
                    Plaque Highlighters
                  </Link>
                  <p className={styles.micorbiomi}>
                    <Link href="https://www.smilebrilliant.com/oral-probiotics-facts/">
                    About The Oral Microbiome
                    </Link>
                  </p>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={`${styles.text_slider_wrapper} ${styles.mobile_hidden}`}>
        <Container>
          <Suspense fallback={null}>
            <MySlider>
              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> sensitive teeth
              </div>

              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> bad breath
              </div>

              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> immune support
              </div>
              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> dry mouth
              </div>

              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> cavity prevention
              </div>
              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> sensitive teeth
              </div>

              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> bad breath
              </div>

              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> immune support
              </div>
              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> dry mouth
              </div>

              <div className={styles.align_center_smilebrilliant}>
                <span className={styles.dot_yellow}></span> cavity prevention
              </div>
            </MySlider>
          </Suspense>
        </Container>
      </div>

      <div className={styles.skin_care_section_wrapper}>
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
              height: "8px",
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
              height: "8px",
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
              height: "8px",
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
              height: "8px",
            }}
          >
            &nbsp;4
          </span>
        </div>
        <Container
          className={`${styles.desktop_hidden} ${styles.mobile_slider} ${styles.skincare_slider}`}
        >
          <div className={styles.custom_container}>
            <Suspense fallback={null}>
              <MySlider>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> fine lines
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> acne
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span>visible pores
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> dark spots
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> firmness
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> fine lines
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> acne
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span>visible pores
                </div>
                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> dark spots
                </div>

                <div className={styles.align_center_smilebrilliant}>
                  <span className={styles.dot_yellow}></span> firmness
                </div>
              </MySlider>
            </Suspense>
          </div>
        </Container>
        <div className={`${styles.women_skin_img} ${styles.desktop_hidden} `}>
          <Image src={assets.skinWomen} alt="skin women" />
        </div>
        <Container>
          <Row>
            <Col md={5}>
              <div className={styles.skin_care_content}>
              <div className={`${styles.skin_bottom_image} ${styles.desktop_hidden}`}>
            {/* <Image
              src={assets.skinBottom}
              quality={100}
              alt="skin bottom img "
            /> */}
          </div>
                <div className={styles.heading}>
                  <h2>
                    You Smile with <i style={{ color: "#f0c23a" }}>MORE</i>{" "}
                    <br /> <span>than just your Teeth.</span>{" "}
                  </h2>
                </div>
                <div
                  className={`${styles.skin_bottle_image} ${styles.desktop_hidden}`}
                >
                  <Image src={assets.skinBottle} alt="skin bottle" />
                </div>
                <div className={styles.parargraph}>
                  <p>
                    See how our multi- year R&D partnership with <br />{" "}
                    Formulate Labs has produced a nourishing skincare <br />{" "}
                    routine for a healthier glow.
                  </p>
                </div>
                <div className={styles.explore_btn}>
                  <Link href="/product/skincare/">Explore Skincare</Link>
                </div>

                <div
                  className={`${styles.skin_bottle_image} ${styles.mobile_hidden}`}
                >
                  <Image src={assets.skinBottle} alt="skin bottle" />
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div
                className={`${styles.women_skin_img} ${styles.mobile_hidden} `}
              >
                <Image src={assets.skinWomen} alt="skin women" />
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.skincare_bottom_section}>
          <div className={`${styles.skin_bottom_image} ${styles.mobile_hidden}`}>
            <Image
              src={assets.skinBottom}
              quality={100}
              alt="skin bottom img "
            />
          </div>

          <Container className={styles.mobile_hidden}>
            <div className={styles.custom_container}>
              <Suspense fallback={null}>
                <MySlider>
                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> fine lines
                  </div>

                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> acne
                  </div>

                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span>visible pores
                  </div>
                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> dark spots
                  </div>

                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> firmness
                  </div>
                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> fine lines
                  </div>

                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> acne
                  </div>

                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span>visible pores
                  </div>
                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> dark spots
                  </div>

                  <div className={styles.align_center_smilebrilliant}>
                    <span className={styles.dot_yellow}></span> firmness
                  </div>
                </MySlider>
              </Suspense>
            </div>
          </Container>
        </div>
      </div>

      <div className={styles.review_section_wrapper}>
        <Container className={styles.custom_container}>
          <div className={styles.reviews_heading}>
            <h2>curious what people think?</h2>
            <Image src={assets.ratingStars} alt="rating stars" />
            <p>
              Nearly <span>1 million happy customers...</span> and growing!
            </p>
          </div>
            <div className="reviews_boxes_wrapper">
          <div className={styles.reviews_boxes_wrapper}>
            <Suspense fallback={null}>
              <ReviewSlider>
                <div className={styles.review_box}>
                  <div className={styles.review_stars}>
                    <Image src={assets.fiveStars} alt="check mark" />
                  </div>
                  <div className={styles.review_text}>
                    <p>
                      {" "}
                      I&apos;m very happy that I have not had sensitivity! This was my biggest concern. Still waiting to see big changes. You can see a little change in my teeth so far.
                    </p>
                  </div>

                  <div className={styles.review_owner}>
                    <div className={styles.check_mark}>
                      <Image src={assets.check} alt="check mark" />
                    </div>
                    <div className={styles.reviewer_name}>
                      <h5>Vanessa </h5>
                      <p>verified customer</p>
                    </div>
                  </div>
                </div>
                <div className={styles.review_box}>
                  <div className={styles.review_stars}>
                    <Image src={assets.fourStar} alt="check mark" />
                  </div>
                  <div className={styles.review_text}>
                    <p>
                      {" "}
                      I wanted so much to have a brighter smile as some teeth stains bothered me and I gave a try to Smile Brilliant kit. I&apos;m very happy to get my trays.
                    </p>
                  </div>

                  <div className={styles.review_owner}>
                    <div className={styles.check_mark}>
                      <Image src={assets.check} alt="check mark" />
                    </div>
                    <div className={styles.reviewer_name}>
                      <h5>Demitra K. - Athens, Greece</h5>
                      <p>verified customer</p>
                    </div>
                  </div>
                </div>
                <div className={styles.review_box}>
                  <div className={styles.review_stars}>
                    <Image src={assets.fourStar} alt="check mark" />
                  </div>
                  <div className={styles.review_text}>
                    <p>
                      {" "}
                      I saw your ad on Facebook and wanted to try something other than the toothpastes. I have not used all the syringes yet but I can definitely see a change.
                    </p>
                  </div>

                  <div className={styles.review_owner}>
                    <div className={styles.check_mark}>
                      <Image src={assets.check} alt="check mark" />
                    </div>
                    <div className={styles.reviewer_name}>
                      <h5>Megan - Nelsonville, OH</h5>
                      <p>verified customer</p>
                    </div>
                  </div>
                </div>
                <div className={styles.review_box}>
                  <div className={styles.review_stars}>
                    <Image src={assets.fourStar} alt="check mark" />
                  </div>
                  <div className={styles.review_text}>
                    <p>
                      {" "}
                      Have begun seeing great results. I&apos;ll continue my treatments. There was quite a bit of sensitivity on my last treatment but I has been quite easy thus far.
                    </p>
                  </div>

                  <div className={styles.review_owner}>
                    <div className={styles.check_mark}>
                      <Image src={assets.check} alt="check mark" />
                    </div>
                    <div className={styles.reviewer_name}>
                      <h5>Morgan</h5>
                      <p>verified customer</p>
                    </div>
                  </div>
                </div>
              </ReviewSlider>
            </Suspense>
          </div>
          </div>
          <div className={styles.reviews_btn}>
            <Link href="/reviews">More Reviews</Link>
          </div>
        </Container>
      </div>
      <div className="slidr_main_wrapper">
      <div className={styles.blue_logos_wapeer}>
        <div className={styles.logos_wrapper}>
          <div className={styles.logo_box}>
            <Suspense fallback={null}>
              <MobSlider>
                <div className={styles.logo_health}>
                  <Image src={assets.helathBlue} alt="rating stars" />
                </div>
                <div className={styles.logo_forbee}>
                  <Image src={assets.forbeeBlue} alt="rating stars" />
                </div>
                <div className={styles.logo_fox}>
                  <Image src={assets.foxBlue} alt="rating stars" />
                </div>
                <div className={styles.logo_post}>
                  <Image src={assets.postBlue} alt="rating stars" />
                </div>
                <div className={styles.logo_sleep}>
                  <Image src={assets.sleepBlue} alt="rating stars" />
                </div>
                <div className={styles.logo_cnet}>
                  <Image src={assets.cnetBlue} alt="rating stars" />
                </div>
                <div className={styles.logo_allure}>
                  <Image src={assets.allureBlue} alt="rating stars" />
                </div>
                <div className={styles.logo_refine}>
                  <Image src={assets.refineBlue} alt="rating stars" />
                </div>
              </MobSlider>
            </Suspense>
          </div>
        </div>
      </div>
</div>
      <div className={styles.partnership_banner_bootom}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={styles.image_circle}>
                <Image src={assets.whiteCircle} alt="bottom logo" />
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.content_section}>
                <h5 className={styles.section_heading_partner}>
                  <span className={styles.font_weight}>
                    Trusted by dentists &amp; Insurance!
                  </span>{" "}
                  <br />
                  <span
                   
                    style={{ color: "#fff" }}
                  >
                    The best product, best service, and <br /> the largest in
                    the country.
                  </span>
                </h5>
                <div className={styles.family_image}>
                  <Image src={assets.family} alt="family image" />
                </div>
                <p className={styles.bottom_text}>
                  Smile Brilliant has grown to service nearly{" "}
                  <span style={{ color: "#fa319e" }}>
                    1 million customers nationwide
                  </span>
                  . We are proud to be{" "}
                  <span style={{ color: "#fa319e" }}>
                    America&apos;s largest{" "}
                  </span>
                  direct-to-consumer dental lab & tailored oral care company.
                  For over a decade, our team of dentists, hygienists, and
                  researchers have been working together to create the most
                  complete, cost-effective oral care products{" "}
                  <span style={{ color: "#fa319e" }}>
                    delivered to your door
                  </span>
                  . We provide the highest level of care and our staff stands
                  behind everything we offer.
                </p>
                <p className={styles.red_text}>
                  If you don't absolutely love your Smile Brilliant experience,
                  we will take it back and give you a full refund.
                </p>

                <p className={styles.no_string_attach}>NO STRINGS ATTACHED.</p>

                <Link
                  className={styles.our_promise}
                  href="https://www.smilebrilliant.com/about-us/"
                >
                  Our People. Our Promise.
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Abc;
