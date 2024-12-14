import React, { Suspense } from 'react';
import styles from './TeethWhiteningGel.module.css';
// import Layout from '@/layouts/content-layout';
import { Container, Row, Col } from 'react-bootstrap';
import TeethWhiteningProduct from '@/components/teethWhiteningGelProduct/teethWhiteningGelProduct';
import ProcessSection from '@/components/processSection/processSection';
import classNames from 'classnames';
import s from './TeethWhiteningGel.module.css';
import Product from './product';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';
import {
  teethGElImg,
  teethWhiteninggel,
  vegan,
  whiteHundredLogo,
  guranteeResult,
  teethGElImg2,
  syringImage,
} from './assets';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/427574`,
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


const TeethWhiteningGel = () => {
  const containerClasses = classNames(
    s.teethwhiteningRow,
    s.teethWhiteningProductWrapper,
  );
  return (
    <>
      <div className="teethWhiteningGelProduct">
        {/* <Layout bgColor="productHeader"> */}
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <div className={styles.ProductHeading}>
                <h1 className="sale_padding">
                  TEETH WHITENING <span style={{ color: '#f8a18a' }}>GEL</span>
                </h1>
              </div>

              <div className={styles.ProductHeadingDetail}>
                <h4>Fresh ingredients that changed the industry.</h4>
              </div>
              <div className={styles.teethWhiteningImage}>
                <Image src={teethWhiteninggel} alt="teeth whitening gel"
                priority={true}
                quality={100}
                 loading="eager"
                 
                />
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.whiteningGelPassonateWrapper}>
          <Container className={styles.wrapperContainer}>
            <Row className={styles.whiteningGelPassonateContent}>
              <Col md={2} className={styles.hundredPercentWhite}>
                <Image src={whiteHundredLogo} alt="vegan logo" />
              </Col>
              <Col md={8}>
                <div className={styles.whiteningGelPassonateDetails}>
                  <div className={styles.whiteningGelHeading}>
                    Whitening gel passionately engineered to perfection.
                    Individually sealed for freshness.
                  </div>
                  <div className={styles.whiteningGelPassonatetext}>
                    Each 3ml syringe provides at least 3 applications (top &
                    bottom).
                  </div>
                </div>
              </Col>
              <Col md={2} className={styles.veganLogo}>
                <Image src={vegan} alt="vegan logo" />
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.guranteeResultWrapper}>
          <Container>
            <Row>
              <Col md={12}>
                <div className={styles.guranteeLogoImg}>
                  <Image src={guranteeResult} alt="gurantee result" />
                </div>

                <div className={styles.guranteeResultText}>
                  <h4>
                    Our teeth whitening gel is specially formulated with the
                    highest quality <br />
                    ingredients. We use a proprietary “sticky gel” formula that
                    ensures even <br />
                    distribution & adhesion during your teeth whitening
                    sessions.
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="choosePackageWarpper" className={styles.choosePackageWarpper}>
          <Container>
            <Row>
              <Col md={12}>
                <div className={styles.choosePackageDetail}>
                  <h3>CHOOSE YOUR PACKAGE</h3>
                  <p>
                    Already have custom-fitted trays? Maintain your shade with
                    our teeth whitening gel refill packages below.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={s.teethWhiteningMainWrapper}>
          {/* <div className={containerClasses}>
            <div className={s.teethWhiteningProductContainer}>
              <Container>
                <Row>
                  <Col md={4} className={s.productColumns} id="abc">
                    <TeethWhiteningProduct
                      image={syringImage}
                      title="x9"
                      innerTitle={
                        <>
                          9 Syringes (3ml ea) <br /> WHITENING GEL
                        </>
                      }
                      innerTitleOne={
                        <>
                          27 Whitening Sessions <br />
                          (Top & Bottom)
                        </>
                      }
                      orignalPrice="69"
                      newPrice="Avg Dentist Price:  $170+"
                    />
                  </Col>
                  <Col md={4} className={s.productColumns}>
                    <TeethWhiteningProduct
                      image={syringImage}
                      title="x6"
                      innerTitle={
                        <>
                          6 Syringes (3ml ea) <br /> WHITENING GEL
                        </>
                      }
                      innerTitleOne={
                        <>
                          18 Whitening Sessions <br />
                          (Top & Bottom)
                        </>
                      }
                      orignalPrice="55"
                      newPrice="Avg Dentist Price: $110+"
                    />
                  </Col>
                  <Col md={4} className={s.productColumns}>
                    <TeethWhiteningProduct
                      image={syringImage}
                      title="x3"
                      innerTitle={
                        <>
                          3 Syringes (3ml ea) <br /> WHITENING GEL
                        </>
                      }
                      innerTitleOne={
                        <>
                          9 Whitening Sessions <br />
                          (Top & Bottom)
                        </>
                      }
                      orignalPrice="35"
                      newPrice="Avg Dentist Price: $60+"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div> */}

<Suspense fallback={<div>Fetching products...</div>}>
              <Product />
            </Suspense>
        </div>

        <div className='teeth-whitening-spacer'>
          <hr />
        </div>

        <div className={styles.ourTeethWhiteningGelWorkWrapperMain}>
          <div className={styles.ourTeethWhiteningGelWorkWrapper}>
            <div className={styles.teethWhiteningGelWork}>
              <Container>
                <Row>
                  <Col md={12}>
                    <div className={styles.teethWhiteningGelWorkHeading}>
                      <h3>HOW OUR TEETH WHITENING GEL WORKS</h3>
                    </div>

                    <div className={styles.teethWhiteningGelWorkText}>
                      <p>
                        Our whitening gel formula works by soaking into the
                        teeth and gently lifting stains out the pores.{' '}
                        <strong>
                          No <br />
                          product on the market can remove deep stains in a 20
                          minute session so don’t be fooled by gimmicks.
                        </strong>{' '}
                        True <br />
                        penetration beyond the superficial enamel happens after
                        40 minutes. Your custom-fit trays ensure the <br />
                        gel stays in even contact with every angle of every
                        tooth.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className={styles.imageRow}>
                  <Col md={6} className={styles.innerpadding}>
                    <div className={styles.teethWhiteningGelWorkImageOne}>
                      <Image src={teethGElImg2} alt="teethwhiteningimage" />
                    </div>
                    <div className={styles.imageBelowText}>
                    <p>
                        Teeth are made up of outer enamel followed by softer
                        dentin and <br />
                        then the inner nerve. Nutrients (and stains) pass into
                        the tooth via<br /> pores. Teeth have pores just like skin. Over time,
                        stains from food, <br />  drink, tobacco and medication cause natural yellowing.
                        Simply <br />
                        scrubbing teeth will not remove deep set stains.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className={styles.innerpadding}>
                    <div className={styles.teethWhiteningGelWorkImage}>
                      <Image src={teethGElImg} alt="teethwhiteningimage" />
                    </div>
                    <div className={styles.imageBelowText}>
                      <p className={styles.SecondText}>
                        Actual results after 12 treatments using Smile <br />
                        Brilliant teeth whitening gel in combination <br />
                        with custom-fitted trays. <br />
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>

        <div className='process-product-section'>
        <ProcessSection />
        </div>
        {/* </Layout> */}
      </div>
    </>
  );
};

export default TeethWhiteningGel;
