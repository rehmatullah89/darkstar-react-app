import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import GetRefill from '@/components/masterLayouts/getRefill/getRefill';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leaping from '../../public/assets/leaping-bunny.webp';
import ghea from '../../public/assets/geha-logo-blue-light-300x99-1.webp';
import knot from '../../public/assets/knot-logo-blue-light-300x100.webp';
import forbes from '../../public/assets/forbes-logo-blue-light-300x79.webp';
import fox from '../../public/assets/fox-logo-blue-light-300x137.webp';
import us from '../../public/assets/graphic-made-in-usa-white-300x71.webp';
import { Button } from 'react-bootstrap';
import { logoSection } from '@/utils/assets';
import MoneyBackGurantee from '@/components/masterLayouts/moneyBackGurantee/moneyBackGurantee';
import hundredPercent from '../../public/assets/100 .webp';
import googleTrust from '../../public/assets/google-trust.webp';
import youtubeIcon from '../../public/assets/svg-icon/youtube_google.svg';

import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
const LogoSection = () => {
  useEffect(() => {
    AOS.init({
      // customize your AOS settings here
    });
  }, []);
  return (
    <div>
      {/* Logo section */}
      <div className="logo-section-wrapper text-center">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <h2>
                {`“Changing the way people view whitening & oral care forever...”`}
              </h2>
            </Col>
          </Row>
          <Row
            data-aos="fade-right"
            data-aos-duration="2000"
            className="logo-images align-items-center"
          >
            <Col md={2} xs={6} className="logo1">
              {' '}
              <Image src={leaping} alt="leaping" width={130} height={93} />
            </Col>
            <Col md={2} xs={6} className="logo2">
              {' '}
              <Image src={ghea} alt="ghea" width={130} height={43} />
            </Col>
            <Col md={2} xs={6} className="logo3">
              {' '}
              <Image src={knot} alt="knot" width={130} height={43} />
            </Col>
            <Col md={2} xs={6} className="logo4">
              {' '}
              <Image src={forbes} alt="forbe" width={130} height={34} />
            </Col>
            <Col md={2} xs={6} className="logo5">
              {' '}
              <Image src={fox} alt="fox" width={130} height={59} />
            </Col>
            <Col md={2} xs={6} className="logo6">
              {' '}
              <Image src={us} alt="us" width={130} height="31" />
            </Col>
          </Row>
        </Container>
      </div>
      {/*cards with images*/}
      <div className="cards-with-images-wrapper">
        <Container>
          <Row className="column-reverse">
            <Col md={6} className="card-background">
              <div className="product-block-white-box">
                <div className="product-box-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="product-box-small-title">CUSTOM-FITTED</div>
                <div className="product-box-large-title">WHITENING TRAYS</div>
                <div className="product-box-separator">&nbsp;</div>
                <div className="product-box-content-primary">
                  {
                    ' “The #1 dentist recommended whitening procedure in America is now 70% less and delivered 3x to 5x faster.”'
                  }
                  <br />
                  <br />
                  {`Finally, the perfect whitening system for everyone!`}
                </div>
                <div className="product-box-content-button-wrap">
                  <Button className="btn btn-primary-white-orange">
                    SHOP WHITENING SYSTEM
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6} className="card-image"></Col>
          </Row>
        </Container>
      </div>

      <GetRefill />

      {/*see green card */}
      <div className="cards-with-images-wrapper">
        <Container>
          <Row>
            <Col md={6} className="card-image-night-guard"></Col>
            <Col md={6} className="card-background-lightGreen">
              <div className="product-block-white-box">
                <div className="product-box-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="product-box-small-title">CUSTOM-FITTED</div>
                <div className="product-box-large-title">NIGHT GUARDS</div>
                <div className="product-box-separator">&nbsp;</div>
                <div className="product-box-content-primary">
                  Stop the pain and damage to your teeth! Over 40 million
                  Americans suffer from teeth grinding. We are here to help!
                </div>
                <div className="product-box-content-button-wrap">
                  <Button className="btn btn-primary-white-orange green">
                    SHOP NIGHT GUARDS
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*see green card */}
      <div className="cards-with-images-wrapper">
        <Container>
          <Row className="column-reverse">
            <Col md={6} className="card-background-blue">
              <div className="product-block-white-box">
                <div className="product-box-stars">
                  <Image
                    src={logoSection.Caripro}
                    alt="caripro"
                    width={120}
                    height={29}
                  />
                </div>
                <div className="product-box-large-title">
                  <div className="product-box-large-title">
                    ELECTRIC <br className="mobile-show" />
                    TOOTHBRUSH
                  </div>
                </div>
                <div className="product-box-separator">&nbsp;</div>
                <div className="product-box-content-primary">
                  The best electric toothbrush at half the price! A better value
                  with all the features you expect from a premium brush.
                </div>
                <div className="product-box-content-button-wrap">
                  <Button className="btn btn-primary-white-orange blue">
                    SHOP NIGHT GUARDS
                  </Button>
                </div>
                <div className="product-box-content-link-wrap">
                  <a rel="nofollow">GET REPLACEMENT HEADS</a>
                </div>
              </div>
            </Col>

            <Col md={6} className="card-image-electric-toothbrush"></Col>
          </Row>
        </Container>
      </div>
      {/*Process scretion */}

      <div className="process-section-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <div className="heading-content-mbt">
                <h2>THE PROCESS</h2>
                <p>Backed by science. From dental lab to your door.</p>
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
                <Image
                  src={logoSection.graphic}
                  alt="graphic"
                  width={280}
                  height={216}
                />
              </div>

              <div className="heading-text">
                <div className="heading-text-detail">
                  <div className="the-process-circle the-process-circle-1">
                    1
                  </div>
                  <div className="the-process-title the-process-title-1">
                    Order the{' '}
                    <span style={{ fontWeight: 'bold', color: '#3c98cc' }}>
                      system
                    </span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Order the complete package and make your dentaI impressions
                    in less than 15 minutes. Send us your impressions in prepaid
                    envelope (included for US)
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">15</div>
                            <div className="minuts-text">minutes</div>
                          </td>
                          <td className="bdy-txt">
                            TIME IT TAKES TO CREATE YOUR
                            <br />
                            DENTAL IMPRESSIONS
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
                  src={logoSection.graphicTray}
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
                    Our lab creates your{' '}
                    <span style={{ fontWeight: 'bold', color: '#3c98cc' }}>
                      trays
                    </span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Order the complete package and make your dentaI impressions
                    in less than 15 minutes. Send us your impressions in prepaid
                    envelope (included for US)
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">3–5</div>
                            <div className="minuts-text">work days</div>
                          </td>
                          <td className="bdy-txt">
                            TIME NEEDED FOR OUR LAB TO
                            <br />
                            CREATE YOUR CUSTOM-FITTED
                            <br />
                            TRAY
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
                <Image
                  src={logoSection.graphicSmile}
                  alt="smile"
                  width={210}
                  height={99}
                />
              </div>

              <div className="heading-text">
                <div className="heading-text-detail">
                  <div className="the-process-circle the-process-circle-1">
                    3
                  </div>
                  <div className="the-process-title the-process-title-1">
                    You whiten &{' '}
                    <span style={{ fontWeight: 'bold', color: '#f8a18a' }}>
                      relax
                    </span>
                  </div>
                </div>

                <div className="text-block-mbt">
                  <div className="the-process-content-text">
                    Order the complete package and make your dentaI impressions
                    in less than 15 minutes. Send us your impressions in prepaid
                    envelope (included for US)
                  </div>
                </div>
                <div className="table-contentcnt">
                  <div className="widget-content">
                    <table className="table-cnt">
                      <tbody>
                        <tr>
                          <td className="ht-txt">
                            <div className="hours-text">7–14</div>
                            <div className="minuts-text">treatments</div>
                          </td>
                          <td className="bdy-txt">
                            NUMBER OF WHITENING SESSIONS
                            <br />
                            NEEDED FOR AN AVERAGE PERSON
                            <br />
                            TO REMOVE ALL STAIN
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
              <div className="order-button">
                <p className="text-center">
                  <Button className=" btn-primary-blue btn-lg">
                    ORDER THE SYSTEM
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*our customer seek for us section*/}

      <div className="customer-seek-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <div className="customer-seek-detail">
                <h2>OUR CUSTOMERS SPEAK FOR US</h2>
                <div className="txt-detl-mbt">
                  <strong>Thousands</strong> of happy customers. See what our
                  <br />
                  customers from around the world have to say.
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mb-1">
            <Col md={1} xs={1}></Col>
            <Col md={2} xs={2} data-aos="flip-up" data-aos-duration="500">
              <Image
                src={logoSection.teethOne}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-up" data-aos-duration="500">
              <Image
                src={logoSection.teeth2}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-up" data-aos-duration="500">
              <Image
                src={logoSection.teeth3}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-up" data-aos-duration="500">
              <Image
                src={logoSection.teeth4}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-up" data-aos-duration="500">
              <Image
                src={logoSection.teeth5}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={1} xs={1}></Col>
          </Row>
          <Row>
            <Col md={1} xs={1}></Col>
            <Col md={2} xs={2} data-aos="flip-down" data-aos-duration="1000">
              <Image
                src={logoSection.teeth6}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-down" data-aos-duration="1000">
              <Image
                src={logoSection.teeth7}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-down" data-aos-duration="1000">
              <Image
                src={logoSection.teeth8}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-down" data-aos-duration="1000">
              <Image
                src={logoSection.teeth9}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={2} xs={2} data-aos="flip-down" data-aos-duration="1000">
              <Image
                src={logoSection.teeth10}
                alt="teeth"
                width={225}
                height={196}
              />
            </Col>
            <Col md={1} xs={1}></Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="social-icons-wrapper ">
                <div className="social-icons">
                  <a
                    href="https://www.youtube.com/user/smilebrilliant"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={youtubeIcon}
                      alt="Youtube"
                      width={44}
                      height={44}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/SmileBrilliant"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://www.instagram.com/smilebrilliant"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://twitter.com/SBwhitening"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.pinterest.com/search/pins/?q=smilebrilliant"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="order-button">
                <p className="text-center">
                  <Button className=" btn-primary-blue btn-lg">
                    SEE OUR REVIEWS
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <MoneyBackGurantee
        title="45 DAY TRIAL, 2 YEAR WARRANTY"
        BoldTitle=" Try it out for 45 days and see the results yourself – if you don’t
      love it, send it back for a full refund."
        description=" Everyone deserves the chance to have their teeth professionally
      whitened. We deliver that opportunity without fear or
      reservation. Our process is backed by decades of research and 
      thousands of dentists nationwide. Let’s smile together!"
        // BoldTitle=" Try it out for 45 days and see the results yourself – if you don’t
        // love it, send it back for a full refund."
        ButtonText="OUR PROMISE"
        image={hundredPercent}
        image2={googleTrust}
        targetId="#product-plaque-highlighters-adults"
      >
        <h3>45 DAY TRIAL, 2 YEAR WARRANTY</h3>
      </MoneyBackGurantee>
    </div>
  );
};

export default LogoSection;
