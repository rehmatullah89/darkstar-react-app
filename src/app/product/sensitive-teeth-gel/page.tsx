import React, { Suspense } from 'react';
import styles from './SensitiveTeethGel.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import TeethWhiteningProduct from '@/components/teethWhiteningGelProduct/teethWhiteningGelProduct';
import Product from './product';
import ProcessSection from '@/components/processSection/processSection';
import classNames from 'classnames';
import s from './SensitiveTeethGel.module.css';
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';
import type { Metadata, ResolvingMetadata } from 'next';
import ScrollButton from '@/ui/resuable-componets/ScrollButton';



import {
  teethWhiteninggel,
  vegan,
  whiteHundredLogo,
  guranteeResult,
  teethGElImg,
  teethGElImg2,
  syringImage,
  syringImg,
  frontImg,
  hourImg,
} from './assets';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/product/427568`,
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


const SensitiveTeethGel = () => {
  const containerClasses = classNames(
    s.teethwhiteningRow,
    s.teethWhiteningProductWrapper,
  );

  return (
    <>
      <div className="sensitiveteethGel teethWhiteningGelProduct">``
        {/* <Layout bgColor="productHeader"> */}
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <div className={styles.ProductHeading}>
                <h1 className='sale_padding'>
                  DESENSITIZING <span style={{ 'color': '#b8b8dc' }}>GEL</span>
                </h1>
              </div>

              <div className={styles.ProductHeadingDetail}>
                <h4>Finally, whitening for sensitive teeth.</h4>
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
                    Scientifically engineered to reduce tooth sensitivity &
                    prevent re-staining. Individually sealed for freshness.
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
                    Our desensitizing gel is formulated to help eliminate tooth
                    <br />
                    sensitivity caused by whitening and prevent re-staining in
                    the <br />
                    process.
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.choosePackageWarpper} id="choosePackageWarpper">
          <Container>
            <Row>
              <Col md={12}>
                <div className={styles.choosePackageDetail}>
                  <h3>CHOOSE YOUR PACKAGE</h3>
                  <p>
                    Select from one of our desensitizing gel refill packages
                    below.
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
                      buttonBg="#b8b8dc"
                      bgColor="#f1f1f8"
                      color="#b8b8dc"
                      image={syringImage}
                      title="x9"
                      innerTitle={
                        <>
                          9 Syringes (3ml ea) <br />
                          DESENSITIZING GEL
                        </>
                      }
                      innerTitleOne={
                        <>
                          27 Post-Whitening Treatments <br />
                          (Top & Bottom)
                        </>
                      }
                      orignalPrice="39"
                      newPrice="Avg Dentist Price:  $135+"
                    />
                  </Col>
                  <Col md={4} className={s.productColumns}>
                    <TeethWhiteningProduct
                      buttonBg="#b8b8dc"
                      bgColor="#f1f1f8"
                      color="#b8b8dc"
                      image={syringImage}
                      title="x6"
                      innerTitle={
                        <>
                          6 Syringes (3ml ea) <br />
                          DESENSITIZING GEL
                        </>
                      }
                      innerTitleOne={
                        <>
                          18 Post-Whitening Treatments <br />
                          (Top & Bottom)
                        </>
                      }
                      orignalPrice="29"
                      newPrice="Avg Dentist Price: $90+"
                    />
                  </Col>
                  <Col md={4} className={s.productColumns}>
                    <TeethWhiteningProduct
                      buttonBg="#b8b8dc"
                      bgColor="#f1f1f8"
                      color="#b8b8dc"
                      image={syringImage}
                      title="x3"
                      innerTitle={
                        <>
                          3 Syringes (3ml ea) <br />
                          DESENSITIZING GEL
                        </>
                      }
                      innerTitleOne={
                        <>
                          9 Post-Whitening Treatments <br />
                          (Top & Bottom)
                        </>
                      }
                      orignalPrice="19"
                      newPrice="Avg Dentist Price: $45+"
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
                      <h3>WHAT CAUSES TOOTH SENSITIVITY?</h3>
                    </div>

                    <div className={styles.teethWhiteningGelWorkText}>
                      <p>
                        More than 60% of us suffer from tooth sensitivity as a
                        result of diet, aggressive brushing, or <br />
                        cracked/broken teeth. In the case of whitening, the
                        active ingredient in whitening gel opens up the <br />
                        pores to gently lift stains. In the process, the teeth
                        become slightly dehydrated. This dehydration <br />
                        temporarily reduces insulation and allow the nerve to be
                        more susceptible to changes in temperature. <br />
                        Desensitizing gel counteracts such issues by temporarily
                        blocking pores and allowing your teeth the <br />
                        opportunity to rehydrate.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
       
        <Container>
          <Row className={styles.imageRow}>
            <Col
              md={12}
              className={styles.innerpadding}
              id="causes-tooth-sensitivity-wrap"
            >
              <Image
                src={teethGElImg2}
                alt="teethwhiteningimage"
                className={styles.graphicCausesTeethSensitivityDesktop}
              />
              <Image
                src={teethGElImg}
                alt="teethwhiteningimage"
                className={styles.graphicCausesTeethSensitivitymobile}
              />

              <div id="causes-text-wrap">
                <div id="micro-fractures-text">
                  <div className="graphic-text-header">
                    MICRO-FRACTURES OR
                    <br />
                    CRACKS IN TEETH
                  </div>
                  <div className="graphic-text-main">
                    Hard food, clenching/grinding of teeth, or blunt trauma can
                    leave your teeth with small fractures or cracks (increasing
                    sensitivity to cold)
                  </div>
                </div>
                <div id="thin-enamel-text">
                  <div className="graphic-text-header">THIN ENAMEL</div>
                  <div className="graphic-text-main">
                    Enamel due to grinding agressive brushing means your nerves
                    are less protected. Whitening gel and hot/cold temperatures
                    get to the nerves sooner.
                  </div>
                </div>
                <div id="tooth-dehydration-text">
                  <div className="graphic-text-header">TOOTH DEHYDRATION</div>
                  <div className="graphic-text-main">
                    Teeth whitening causes temporary dehydration of the tooth. A
                    dehydrated tooth is temporarily less insulated from hot/cold
                    than a fully hydrated tooth.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className='de-teeth-whitening-spacer'>
          <hr />
        </div>
        <div className="process-section-wrapper process-product-section">
          <Container>
            <Row>
              <Col md={12}>
                <div className="heading-content-mbt">
                  <h2>EASY TO USE</h2>
                  <p>
                    Delivered fresh. Specially formulated for your custom-fitted
                    trays.
                  </p>
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
                    <Image src={syringImg} alt="graphic" />
                  </div>

                  <div className="heading-text">
                    <div className="heading-text-detail">
                      <div className="the-process-circle the-process-circle-1">
                        1
                      </div>
                      <div className="the-process-title the-process-title-1">
                        <span style={{ color: '#b8b8dc' }}>
                          Remove The Syringe Tip
                        </span>
                      </div>
                    </div>

                    <div className="text-block-mbt">
                      <div className="the-process-content-text">
                        Remove the breakaway end cap from the tip <br /> of the
                        syringe. (save for recapping)
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    id="the-process-image-2"
                    className="process-container-single-img"
                  >
                    <Image src={frontImg} alt="graphictray" />
                  </div>

                  <div className="heading-text">
                    <div className="heading-text-detail">
                      <div className="the-process-circle the-process-circle-1">
                        2
                      </div>
                      <div className="the-process-title the-process-title-1">
                        <span style={{ color: '#b8b8dc' }}>
                          Apply Gel To Trays
                        </span>
                      </div>
                    </div>

                    <div className="text-block-mbt">
                      <div className="the-process-content-text">
                        Apply a “string” of teeth whitening gel along the front
                        outer surface of the trays which is the portion that
                        comes in contact with the front of your teeth.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    id="the-process-image-3"
                    className="process-container-single-img"
                  >
                    <Image src={hourImg} alt="smile" />
                  </div>

                  <div className="heading-text">
                    <div className="heading-text-detail">
                      <div className="the-process-circle the-process-circle-1">
                        3
                      </div>
                      <div className="the-process-title the-process-title-1">
                        <span style={{ color: '#b8b8dc' }}>
                          Let The Gel Work!
                        </span>
                      </div>
                    </div>

                    <div className="text-block-mbt">
                      <div className="the-process-content-text">
                        15-20 minute application after whitening. <br /> Do not
                        brush or rinse thereafter. Simply discard excess and let
                        gel do its work overnight.
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
                      targetId="choosePackageWarpper"
                      className="btn btn-primary-blue btn-lg"
                      style={{ marginBottom: '50px', minWidth: '237px' }}
                    >
                       ORDER NOW
                    </ScrollButton>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* </Layout> */}
      </div>
    </>
  );
};

export default SensitiveTeethGel;
