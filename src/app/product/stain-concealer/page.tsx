import React, { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import assets from './assets';
import MoneyBackGurantee from '@/components/masterLayouts/moneyBackGurantee/moneyBackGurantee';
import Product from './product';
import ScrollButton from '@/ui/resuable-componets/ScrollButton';
import type { Metadata, ResolvingMetadata } from 'next';
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';



export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/814129`,
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
        title: title,
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

const StainConcealer = async () => {
  return (
    <div className="pageStainConcealer">
      <div className="product-wrapper product-image-section-banner container-wrapper-full">
        <div className="sale_padding top-section sm-pt-80 ">
          <Container>
            <Row>
              <Col
                md={8}
                className="plaque-left-column probiotics-page-top-left sectionRight60"
              >
                <Image
                  className="desktop-heading"
                  priority={true}
                  src={assets.HeroDesktop}
                  width={775}
                  height={656}
                  quality={100}
                  loading="eager"
                  alt="stain-concealer"
                  style={{ display: 'none' }}
                />
                <Image
                  className="mobile-text"
                  src={assets.StainConcealerImg}
                  width={328}
                  height={278}
                  alt="mobile hero img"
                  quality={100}
                  placeholder="blur"
                  loading="eager"
                  style={{
                    margin: '0px auto',
                    display: 'none',
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col
                md={4}
                className="laque-right-column text-center-container probiotics-page-top-right sectionRight40"
              >
                <div className=" ">
                  <div className="prodcut-text-detail">
                    <h1 className="product-header-sub desktop-heading mt-8rem ">
                      <span
                        style={{
                          fontFamily: 'a Authorized Signature',
                          fontWeight: '500',
                          fontSize: '92px',
                          color: '#432f7c',
                          lineHeight: ' 1',
                          display: 'swap',
                        }}
                      >
                        Night Out!
                      </span>
                    </h1>
                    <h1 className="product-header-sub mt-8rem mobile-text">
                      <span
                        style={{
                          fontFamily: 'a Authorized Signature',
                          fontWeight: '500',
                          fontSize: '92px',
                          color: '#432f7c',
                          lineHeight: ' 1',
                          display: 'swap',
                        }}
                      >
                        Night Out!
                      </span>
                    </h1>
                    <h1
                      id="fresh-take-text"
                      className="section-header-teal medium"
                    >
                      DENTAL STAIN CONCEALER
                    </h1>
                    <div
                      style={{
                        background: '#432f7c',
                        width: '125px',
                        margin: '20px auto 20px auto',
                        height: ' 4px',
                      }}
                    ></div>
                    <p
                      className="desktop-heading"
                      style={{
                        color: '#3a3a3a',
                        lineHeight: '20px',
                        fontSize: '14px',
                        fontFamily: 'Open Sans',
                        padding: '0 55px',
                      }}
                    >
                      Your secret to a perfectly white smile now! Brightens
                      teeth &amp; conceals yellow tooth stains in just 60
                      seconds! Simply brush on and rinse off..that’s it!
                    </p>
                    <p
                      className=" mobile-text"
                      style={{
                        color: '#3a3a3a',
                        lineHeight: '20px',
                        fontSize: '14px',
                        fontFamily: 'Open Sans',
                        padding: '0 10px',
                      }}
                    >
                      Your secret to a perfectly white smile now! Brightens
                      teeth &amp; conceals yellow tooth stains in just 60
                      seconds! Simply brush on and rinse off..that’s it!
                    </p>
                  </div>
                  <div className="product-buttons">
                    <ScrollButton
                      targetId="#product-plaque-highlighters-adults"
                      className="btn btn-primary-teal btn-lg btn-purple"
                      style={{
                        marginTop: '15px',
                        marginBottom: '20px',
                        minWidth: '284px',
                      }}
                    >
                      GET PRICING
                    </ScrollButton>
                    <ScrollButton
                      targetId="science-technology-detail"
                      className="btn btn-primary-transparent-teal btn-lg uppercase"
                      style={{ marginBottom: '20px', minWidth: '284px' }}
                    >
                      LEARN THE SCIENCE
                    </ScrollButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="light-color-with-text-image-section" className="bg-color">
          <div className="mobile-adjust-layout">
            <Container>
              <h2>“It’s the purple shampoo for your teeth!”</h2>
              <Row className="second-section">
                <Col md={8}>
                  <ul className="background-graphic">
                    <li>Neutralizes yellow stains in 60 seconds</li>
                    <li>Non-invasive. Safe for daily use.</li>
                    <li>Brush in. Rinse out. That’s it!</li>
                    <li>Last minute whitening for your night out!</li>
                  </ul>
                </Col>
                <Col md={4} className="stain-cleaner-shampoo">
                  <Image
                    src={assets.stainCleaner}
                    alt="Stain Cleaner Shampoo"
                    width={376}
                    height={291}
                    placeholder="blur"
                    loading="lazy"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>



        </div>
        <div className="choose-your-package">
          <div id="product-plaque-highlighters-adults">
            <div className="content-detail">
              <h2 className="fnt-mont">CHOOSE YOUR PACKAGE</h2>
              <h3 className="open-sans">
                Just in time for photos! In the bathroom or on the go, you’ll
                never know when you will need touch-up!
              </h3>
            </div>

            <Suspense fallback={<div>Fetching products...</div>}>
              <Product />
            </Suspense>
          </div>
        </div>

        <div className="product-logo-wrapper">
          <Container>
            <Row>
              <Col
                md={3}
                xs={4}
                className="boxSecBox box-with-extra-logo spacing-left-emphty"
              >
                <Image
                  src={assets.logoesHhealth}
                  width={174}
                  height={50}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
              <Col md={3} xs={4} className="">
                <Image
                  src={assets.Forbee}
                  width={174}
                  loading="lazy"
                  height={50}
                  alt="health logo"
                />
              </Col>
              <Col md={3} xs={4} className="">
                <Image
                  src={assets.Fox}
                  width={112}
                  loading="lazy"
                  height={48}
                  alt="health logo"
                />
              </Col>
              <Col md={3} xs={4} className="">
                <Image
                  src={assets.newYark}
                  width={324}
                  height={49}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
            </Row>
            <Row className="second-row">
              <Col
                md={3}
                xs={4}
                className="medium-3 boxSecBox spacing-left-emphty"
              >
                <Image
                  src={assets.leapingBunny}
                  width={90}
                  height={66}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
              <Col md={3} xs={4} className="medium-3">
                <Image
                  src={assets.clent}
                  width={117}
                  loading="lazy"
                  height={85}
                  alt="health logo"
                />
              </Col>
              <Col md={3} xs={4} className="medium-3">
                <Image
                  src={assets.knot}
                  width={156}
                  loading="lazy"
                  height={54}
                  alt="health logo"
                />
              </Col>
              <Col
                md={3}
                xs={4}
                className="medium-3 boxSecBox box-with-extra-logo-right"
              >
                <Image
                  src={assets.allure}
                  width={166}
                  loading="lazy"
                  height={48}
                  alt="health logo"
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/*mobile layout */}
        <div className="product-logo-wrapper mobile">
          <Container>
            <Row className="mb-3">
              <Col xs={4}>
                <Image
                  src={assets.ticktok}
                  loading="lazy"
                  width={114}
                  height={149}
                  alt="health logo"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={assets.logoesHhealth}
                  loading="lazy"
                  width={174}
                  height={50}
                  alt="health logo"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={assets.Forbee}
                  width={174}
                  height={50}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={4}>
                <Image
                  src={assets.Fox}
                  width={112}
                  height={48}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={assets.newYark}
                  loading="lazy"
                  width={324}
                  height={49}
                  alt="health logo"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={assets.leapingBunny}
                  loading="lazy"
                  width={90}
                  height={66}
                  alt="health logo"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={4}>
                <Image
                  src={assets.clent}
                  width={117}
                  height={85}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={assets.knot}
                  width={156}
                  height={54}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={assets.allure}
                  width={166}
                  height={48}
                  loading="lazy"
                  alt="health logo"
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div
          id="science-technology-detail"
          className="with-color-science-technology-wrapper"
        >
          <Container>
            <Row>
              <Col md={12}>
                <div className="science-technology-detail">
                  <h1
                    style={{ textAlign: 'center' }}
                    className=" sectionHeading"
                  >
                    Night Out!
                  </h1>
                  <h5
                    style={{ textAlign: 'center' }}
                    className=" sectionHeading-subtitle"
                  >
                    WITH COLOR SCIENCE TECHNOLOGY™
                  </h5>
                  <div className="  with-color-science-technology-description">
                    <div className="text-center">
                      <p>
                        There’s nothing worse than smiling in the mirror just
                        before leaving the house only to realize how stained
                        your teeth have gotten. Don’t panic…we’ve got you
                        covered! Smile Brilliant’s Night Out! Dental Stain
                        Concealer utilizes proprietary Color Science
                        Technology™ to debrass yellow hues and restore a{' '}
                        <span className="brightWhiteSecond">
                          bright white smile in 60 seconds
                        </span>
                        . It’s crazy how it works but yep, that’s science!
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center list-one">
              <Col md={6} className="m-order1">
                <Image
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  src={assets.girlImage}
                  alt="girl-image"
                  quality={100}
                  loading="lazy"
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col md={6} className="m-order2">
                <div className="  text-description-detail">
                  <div className="">
                    <h6>
                      The only way to get visibly brighter white teeth in 60
                      seconds
                    </h6>
                    <p>
                      Nope, science has not solved a way to remove all the
                      stains on your teeth in a few minutes…But if you need
                      something that masks yellow hues as you leave the house,
                      yep, that can be done in 60 seconds.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center mt-3 list-one">
              <Col md={6} className="m-order2">
                <div className="  text-description-detail">
                  <div className="">
                    <h6>From violet to vivid</h6>
                    <p>
                      The rich violet gel is specially formulated to neutralize
                      the yellow stains found on your teeth. It’s water soluble,
                      chemical-free, and completely safe for daily use!
                    </p>
                    <div className="ingredients-block">
                      <div className="ingredeitns-purified">INGREDIENTS:</div>
                      <p>
                        Glycerin, Purified Water, Sorbitol, Hydrated Silica,
                        Xylitol, Polysorbate 80, Cellulose Gum, Mentha
                        Peppermint Oil, Phenoxyethanol, Sucralose, Tetrasodium
                        Pyrophosphate, CI17200/D&amp;C Red No. 33,
                        CI42090/FD&amp;C Blue No.1, Ethylhexylglycerin.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="m-order1">
                <Image
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  src={assets.gifImage}
                  loading="lazy"
                  alt="girl-image"
                  quality={100}
                  // Make the image display full width
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col md={12}>
                <div className="purple-is-the-opposite-of-yellow-inner-content">
                  <div className="purple-is-the-opposite-of-yellow-inner-content-detail">
                    <div className="  description-subheading">
                      <div className="">
                        <h2>
                          PURPLE IS THE OPPOSITE OF{' '}
                          <span style={{ color: '#f5cb78' }}>YELLOW</span>
                        </h2>
                        <p>
                          Debrasses &amp; neutralizes yellow tones just like
                          purple shampoo
                        </p>
                      </div>
                    </div>

                    <div className="thb-image-inner">
                      <Image
                        src={assets.dentalimg}
                        width={577}
                        loading="lazy"
                        height={454}
                        alt="dentel"
                      />
                    </div>
                    <div className="description-section-content">
                      <div className="">
                        <p style={{ textAlign: 'center' }}>
                          On the color spectrum, purple is the complimentary
                          opposite of yellow. Just as purple shampoos are
                          designed to offset the unwanted yellow/brassing in
                          blonde hair, Smile Brilliant’s Color Science
                          Technology™ neutralizes yellow hues in teeth to
                          generate a vivid white/neutral tone. Get visibly
                          brighter white teeth in just 60 seconds!
                        </p>
                      </div>
                    </div>

                    <ScrollButton
                      targetId="product-plaque-highlighters-adults"
                      className="btn btn-primary-teal btn-lg btn-purple"
                    >
                      GET STAIN CONCEALER
                    </ScrollButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="product-process-section-wrapper">
          <div className="product-process-section">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="product-process-section-detail">
                    <h2 className="font-mont">
                      HOW TO USE DENTAL STAIN CONCEALER
                    </h2>
                  </div>
                </Col>
              </Row>

              <Row data-aos="fade-right" data-aos-duration="2000">
                <Col md={6}>
                  <div className="product-process-img">
                    <Image
                      src={assets.image1}
                      loading="lazy"
                      alt="image1"
                      quality={100}
                    />
                  </div>
                  <div className=" heading-text">
                    <div className="">
                      <div className="the-process-circle the-process-circle-1">
                        1
                      </div>
                      <div className="the-process-title process-title-1">
                        Brush with{' '}
                        <span style={{ color: '#432f7c' }}>
                          Stain Concealer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-block-mbt">
                    <div className="">
                      <div className="the-process-content-text">
                        Apply a pea-sized amount of Night Out! Stain Concealer
                        to the brush head. Brush on for 1 minute. After
                        brushing, discard and rinse with water.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="product-process-img">
                    <Image
                      src={assets.image2}
                      loading="lazy"
                      alt="image1"
                      quality={100}
                    />
                  </div>
                  <div className=" heading-text">
                    <div className="">
                      <div className="the-process-circle the-process-circle-1">
                        2
                      </div>
                      <div className="the-process-title process-title-1">
                        <span style={{ color: '#f59f8a' }}>Smile</span> all
                        night!
                      </div>
                    </div>
                  </div>
                  <div className="text-block-mbt">
                    <div className="">
                      <div className="the-process-content-text">
                        Stain Concealer will make your teeth visibly whiter for
                        hours! Enjoy a brilliant smile, better photos, and a
                        more confident night out!
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <div className="order-button">
                    <ScrollButton
                      targetId="#product-plaque-highlighters-adults"
                      className="btn btn-primary-teal btn-lg btn-purple"
                    >
                      ORDER STAIN CONCEALER
                    </ScrollButton>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <MoneyBackGurantee
          data-aos="fade-in"
          data-aos-duration="2000"
          Slogan={
            <p
              style={{
                color: '#432f7c',
                fontSize: '39px',
                fontWeight: '400',
              }}
            >
              {' '}
              <span className="medium-500">
                TRY IT. <span style={{ color: '#f59f8a' }}>LOVE IT</span>
              </span>{' '}
              …or return it
            </p>
          }
          description=" Smile Brilliant’s line of dental stain concealers are
          custom-formulated with the latest science and cosmetic research.
          Each bottle of Night Out! Dental Stain Concealer is guaranteed
          fresh. Our mission is to improve your smile through real science and
          innovation. If you are not completely satisfied with your purchase,
          we’ll take it back."
          BoldTitle={
            <p
              style={{
                color: '#432f7c',
                fontSize: '29px',
                fontWeight: '400',
              }}
            >
              {' '}
              NO STRINGS ATTACHED
            </p>
          }
          ButtonText="BUY NOW"
          image={assets.yellowGurantee}
          alt="yellow"
          image2={assets.googleTrust}
          targetId="#product-plaque-highlighters-adults"
        ></MoneyBackGurantee>
      </div>
    </div>
  );
};
export default StainConcealer;
