'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import textLogo from '../../public/assets/smilebrilliant-logo-horizontal-textonly-500x165-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import plane from '../../public/assets/plane.webp';
import hassel from '../../public/assets/hassle-free.webp';
import secure from '../../public/assets/secure-icon.webp';
import footerLogo from '../../public/assets/footer-logo.webp';
import Accordion from 'react-bootstrap/Accordion';
import './style/footer.css';

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    // <div style={{ marginBottom: isDesktop ? 0 : 50 }}>
    <div style={{ marginBottom:  50 }} className="footer_top_div_margin_bottom">
      <div className="fixed-footer-container">
        <footer id="footer" className="footer light footer-full-width-on">
          <section className="section-return-policy-option">
            <div className="navbar-fixed-top-barr long-strap">
              <span
                className="strip-bar"
                style={{
                  width: '25%',
                  backgroundColor: '#2d2e2f',
                  fontSize: '0px',
                  height: '8.5px',
                }}
              >
                &nbsp;1
              </span>
              <span
                className="strip-bar"
                style={{
                  width: '25%',
                  backgroundColor: '#fa319e',
                  fontSize: '0px',
                  height: '8.5px',
                }}
              >
                &nbsp;2
              </span>
              <span
                className="strip-bar"
                style={{
                  width: '25%',
                  backgroundColor: '#4acac9',
                  fontSize: '0px',
                  height: '8.5px',
                }}
              >
                &nbsp;3
              </span>
              <span
                className="strip-bar"
                style={{
                  width: '25%',
                  backgroundColor: '#f0c23a',
                  fontSize: '0px',
                  height: '8.5px',
                }}
              >
                &nbsp;4
              </span>
            </div>

            <Container className="policy-bottom-icon-wrap">
              <Row>
                <Col md={3} className="custom-width-adjust"></Col>
                <Col md={3}>
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <Image
                        src={plane}
                        width={25}
                        height={25}
                        alt="SmileBrilliant"
                        loading="lazy"
                      />
                    </div>
                    <div className="notify-text font-mont">
                      FREE <span style={{ color: '#49c0c0' }}>SHIPPING</span>{' '}
                      OVER $35
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <Image
                        src={hassel}
                        width={25}
                        height={25}
                        alt="SmileBrilliant"
                        loading="lazy"
                      />
                    </div>
                    <div className="notify-text font-mont">
                      HASSLE-FREE{' '}
                      <span style={{ color: '#49c0c0' }}>RETURNS</span>{' '}
                    </div>
                  </div>
                </Col>
                <Col md={3} className="last-secure-col">
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <Image
                        src={secure}
                        width={25}
                        height={30}
                        loading="lazy"
                        alt="SmileBrilliant"
                      />
                    </div>
                    <div className="notify-text font-mont">
                      100% <span style={{ color: '#49c0c0' }}>SECURE </span>{' '}
                      CHECKOUT
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </footer>
      </div>
      <div className="footer-newsletter">
        <Container>
          <Row>
            <Col md={8}>
              <h4 id="footer-newsletter-title">
                <strong style={{ color: '#4acac9' }}>SUBSCRIBE! </strong>{' '}
                Discounts. Recommendations. New products.
              </h4>
            </Col>
            <Col md={4}>
              <InputGroup className="news-letter-field">
                <Form.Control
                  placeholder="Your E-Mail Address"
                  aria-label="Your E-Mail Address"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">JOIN</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-menu-wrapper-main">
        <Container>
          <div className="footer-update-sbr">
            <div className="footer-row">
              <div className="footer-row-content-with-logo">
                <div className="footer-logo">
                  <Image
                    src={footerLogo}
                    width={360}
                    height={360}
                    loading="lazy"
                    alt="SmileBrilliant"
                  />
                </div>
                <div className="footer-sbr-content">
                  <p>
                    Smile Brilliant makes it easy to improve your oral health
                    &amp; beauty through a suite of professional teeth whitening
                    &amp; oral care products shipped directly to your door.{' '}
                  </p>
                  <p>
                    <strong style={{ color: '#3c97cb' }}>
                      MAKE A LASTING IMPRESSION!
                    </strong>
                  </p>
                </div>
              </div>
              <div className="footer-navigation">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>CUSTOM TRAYS & GUARDS</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/night-guards/">
                            CUSTOM NIGHT GUARDS
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/teeth-whitening-trays/">
                            CUSTOM WHITENING TRAYS
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/proshield/">
                            PROFSHIELD CUSTOM SPORTS MOUTH GUARDS
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/retainer-cleaner/">
                            TRAY CLEANING TABLETS
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="https://www.smilebrilliant.com/product/ultrasonic-cleaner/">
                            {' '}
                            <span style={{ color: '#e4a18b' }}> NEW!</span>{' '}
                            ULTRASONIC TRAY CLEANER
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>TEETH WHITENING</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/teeth-whitening-trays/">
                            CUSTOM WHITENING TRAYS
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="">
                            <span style={{ color: '#fa319e' }}> NEW!</span>{' '}
                            DENTAL STAIN CONCEALER
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/teeth-whitening-gel/">
                            WHITENING GEL REFILLS
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/sensitive-teeth-gel/">
                            DESENSITIZING GEL REFILLS
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/retainer-cleaner/">
                            WHITENING TRAY CLEANING TABLETS
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="https://www.smilebrilliant.com/product/ultrasonic-cleaner/">
                            <span style={{ color: '#fa319e' }}> NEW!</span>{' '}
                            ULTRASONIC TRAY CLEANER
                          </Link>
                        </li>
                        <li>
                          <Link href="/my-account-new/" title="My Account">
                            TRAY REPLACEMENT REORDER
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="https://www.smilebrilliant.com/product/enamel-armour/">
                            ENAMEL ARMOUR <sup>TM</sup> FOR SENSTIVE TEETH{' '}
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/reviews/">
                            TEETH WHITENING KIT REVIEWA
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/teeth-whitening-facts/">
                            10 FACTS ABOUT TEETH WHITENING
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>ORAL CARE</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/electric-toothbrush/">
                            electric toothbrush
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/water-flosser/">
                            cordless water flosser
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/dental-probiotics-adults/">
                            dental probiotics
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="https://www.smilebrilliant.com/product/enamel-armour/">
                            <span style={{ color: '#4acac9' }}> NEW!</span>{' '}
                            enamel armour <sup>tm</sup>
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="https://www.smilebrilliant.com/product/plaque-highlighters-adults/">
                            plaque highlighters <sup>tm</sup>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/dental-floss-picks/">
                            dental floss picks
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/toothbrush-heads/">
                            replacement toothbrush heads
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="https://www.smilebrilliant.com/product/plaque-highlighters-kids/">
                            plaque highlighters <sup>TM</sup> FOR kids!{' '}
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/dental-probiotics-kids/">
                            dental probiotics for kids!
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/product/retainer-cleaner/">
                            retainer cleaning tablets
                          </Link>
                        </li>
                        <li className="super-text">
                          <Link href="https://www.smilebrilliant.com/product/ultrasonic-cleaner/">
                            <span style={{ color: '#4acac9' }}> NEW!</span>{' '}
                            ultrasonic cleaner
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <ul
                    className="non-accordion-ul"
                    style={{ paddingLeft: '0px', listStyleType: 'none' }}
                  >
                    <li>
                      {' '}
                      <Link href="https://www.smilebrilliant.com/product/skincare/">
                        SKIN CARE
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.smilebrilliant.com/reviews/">
                        REVIEW
                      </Link>
                    </li>
                  </ul>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>SUPPORT</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <Link href="https://www.smilebrilliant.com/teeth-whitening-facts/">
                            10 facts about teeth whitening
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/sensitive-teeth-guide/">
                            sensitive teeth guide
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/bad-breath-cause/">
                            the science of bad breath
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/oral-probiotics-facts/">
                            5 facts about oral probiotics
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/frequently-asked-questions/">
                            frequently asked questions
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/articles/">
                            science & articles
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/contact/">
                            contact us
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/about-us/">
                            about us
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/guarantee/">
                            guarenterr
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.smilebrilliant.com/cruelty-free/">
                            cruelty-free certification
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bottom-footer">
        <Container>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <Image
                    className="text-logo-img"
                    src={textLogo}
                    alt="footer-logo"
                    loading="lazy"
                  />
                </Col>
                <Col md={8}>
                  <div className="footer-base-logo-section-links">
                    <Link
                      href="https://www.smilebrilliant.com/privacy-policy"
                      rel="nofollow"
                    >
                      privacy policy
                    </Link>{' '}
                    |
                    <Link
                      href="https://www.smilebrilliant.com/product-disclaimer"
                      rel="nofollow"
                    >
                      product disclaimer
                    </Link>{' '}
                    |
                    <Link
                      href="https://www.smilebrilliant.com/terms-of-use"
                      rel="nofollow"
                    >
                      terms of use
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <div className="social-icons-wrapper">
                <div className="social-icons">
                  <FontAwesomeIcon icon={faYoutube} />
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faPinterest} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
