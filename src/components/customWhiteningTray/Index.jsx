'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import teethWhiteninggel from '../../../public/assets/custom-whitnin-tray.webp';

import classNames from 'classnames';

import Product from './product';
import ProductsTabs from './products-tabs';

import { FaGlobeAsia } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useCartContext } from '@/context/CartContext';
import ProductModal from '@/ui/common/ProductModal';

const col6Data = [
  {
    id: 1,
    image:
      'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-model-300x180.png',
    text: `Professional Lab Service
        Professional dental lab will receive your impressions, create an exact model of your teeth, and fashion a truly custom-fitted tray`,
  },
  {
    id: 2,
    image:
      'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-trays-only-300x161.png',
    text: 'Custom-fitted Teeth Whitening Trays Exactly like your dentist would make. Finished trays include 1 upper and 1 lower tray.',
  },
  {
    id: 3,
    image:
      'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-impressions-300x287.png',
    text: '2 Impression Trays Used in combination with impression material to create mold',
  },
  {
    id: 4,
    image:
      'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-catalyst-base-paste-273x300.png',
    text: '3 Sets of Impression Material To make your own dental impressions (1 extra set of material in case you mess up)',
  },
  {
    id: 5,
    image:
      'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-prepaid-postage-300x248.png',
    text: `3-Way Postage
        All postage between you and the lab is covered (2-way for orders outside of United States)`,
  },
  {
    id: 6,
    image:
      'https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-whitening-syringes-3.png',
    text: `Professional Teeth Whitening Gel & Desensitizing Gel (If Applicable)
        Dentist-strength 22% Carbamide Peroxide in 3ml syringes (you choose quantity). Desensitizing gel included with “sensitive” packages.`,
  },
];

const imageUrls = [
  '../../../public/assets/images/products-images/custom-whitening-tray/66948-hannahp-whitening-photos.jpg',
  '../../../public/assets/images/products-images/custom-whitening-tray/66948-hannahp-whitening-photos.jpg',
  'url_for_image_3',
  'url_for_image_4',
  'url_for_image_5',
  'url_for_image_6',
  'url_for_image_7',
  'url_for_image_8',
  'url_for_image_9',
  'url_for_image_10',
];

const TRAYCREATIONPROCESS = [
  {
    id: 1,
    image: `https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-impressions-1.png`,
    title: `Make Your Impressions At Home`,
    text: `Make your impressions with the putty & plastic trays included with your package. Mail everything back to our lab in the envelope included.`,
  },
  {
    id: 2,
    image: `https://www.smilebrilliant.com/wp-content/uploads/2020/07/graphic-trays-and-case.png`,
    title: `Our Lab Crafts Your Trays`,
    text: `Once our lab receives your impressions, your custom-fitted trays will be created and mailed back to you within 3-5 business days.`,
  },
  {
    id: 3,
    image: `https://www.smilebrilliant.com/wp-content/uploads/2020/07/graphic-smile.png`,
    title: `Whiten & Relax!`,
    text: `Using your custom-fitted whitening trays & our carefully engineered whitening gel to get the white smile you have always wanted.`,
  },
];

const CustomWhiteningTrayCom = ({ images }) => {
  const [isActiveTab, setIsActiveTab] = useState(true);
  const { state, dispatch } = useCartContext();
  const handleTag = (activeTab) => {
    setIsActiveTab(activeTab);
  };

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="custom-whitening-tray xs-screen xs-container mt-5 pt-5 md-mt-0"
      id="custom-whitening-tray"
    >
      <Container as="section" className="t-section1 section1 pt-5 md-pt-0">
        <Row>
          <Col md={12} className="text-center whitning-t-img cm-head">
            <h1 className="text-light-grey fw-bold fimaly-multiple-mon fs-42 mb-0 sm-fs-28">
              {' '}
              A FRESH TAKE ON TEETH WHITENING{' '}
            </h1>
            <h4 className="text-light-grey ">
              Teeth whitening trays backed by science. From dental lab to your
              door.
            </h4>
            <div className="pt-4 mt-2">
              <Image src={teethWhiteninggel} alt="teeth whitening gel" />
            </div>
          </Col>
        </Row>
      </Container>
      <section
        style={{ background: '#3C98CC' }}
        className="py-5 mt-5 t-section2 sm-mt-25 section2"
      >
        <Container className="px-5 sm-px-0">
          <h3 className="text-white text-center fw-700 fimaly-multiple-mon fs-28 sm-fs-22 ">
            &quot;Finally, a teeth whitening system engineered for
            everyone.&quot;
          </h3>
          <div
            className="images d-flex justify-content-center align-items-center mt-5 pt-3 px-5"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {images.map((SRC, index) => {
              return (
                <div key={SRC + 's2'} className={`px-4 image_${index}`}>
                  <Image src={SRC} alt="" width="200" height="" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Container id="teeth-whitening-trays-page">
        <section className="row">
          <div className="col-md-9 mx-auto text-center mt-5 pt-3">
            <h3 className="text-center fw-300  mb-4 t-heading-h3 text-blue-500 fs-34 ">
              A PACKAGE CUSTOMIZED FOR YOU
            </h3>
            <p className="lh-base  fw-300 mb-4 text-slate-500 fs-22 px-5 sm-px-0 primary-fimaly">
              Smile Brilliant’s innovative business model takes away dentist
              inefficiencies and passes savings directly to you.
              <span class="text-decoration-none text-blue-500">
                Simply choose the amount of whitening gel and your sensitivity
                level to find the right package for you.
              </span>
            </p>
            <p className="fs-16 text-slate-500 fimaly-multiple-opn fw-normal mb-4">
              Choose whether or not your teeth are sensitive
            </p>
          </div>

          <div className="col-md-12 mx-auto text-center mt-5 pt-3">
            <ProductsTabs />
          </div>
        </section>
      </Container>

      <Container
        as="section"
        className="pb-4 t-section4 section4 xs-px-0 xs-container"
      >
        <div className="col-md-9 mx-auto text-center mt-3 pt-3">
          <div className="tabs">
            <a
              href="#non-sensitive"
              className={`montserrat fw-300 text-uppercase text-dark border fs-18 px-0 text-decoration-none px-5 d-inline-block  ${
                isActiveTab ? 'active-tab' : 'b-color-slate-400'
              }`}
              style={{ width: '260px', lineHeight: '50px' }}
              onClick={() => handleTag(true)}
            >
              NON-SENSITIVE
            </a>
            <span className=" text-uppercase px-4">or</span>
            <a
              href="#sensitive"
              className={`montserrat b-color-slate-400 fw-300 text-uppercase text-dark border  fs-18 px-0 text-decoration-none px-5 d-inline-block ${
                isActiveTab ? null : 'sensitive-active-bg'
              }`}
              style={{ minWidth: '260px', lineHeight: '50px' }}
              onClick={() => handleTag(false)}
            >
              SENSITIVE
            </a>
          </div>
        </div>
        <div>
          <Product isActiveTab={isActiveTab} />
        </div>
      </Container>
      <section
        style={{ background: '#68c8c7' }}
        className="py-5 mt-5 t-section5 section5 yes-we-ship-wrapper"
      >
        <Container className="text-center">
          <div className="d-flex justify-content-center text-white align-items-center">
            <FaGlobeAsia className="fs-3 me-4" />
            <h3 className="text-center fw-bold m-0 ">YES, WE SHIP WORLDWIDE</h3>
            <FaGlobeAsia className="fs-3 ms-4" />
          </div>
          <div className="mt-4">
            <button
              href="#"
              className="bg-transparent border text-white learn-more-btn hover-text hover-white"
              onClick={() =>
                dispatch({
                  type: 'SET_MODAL',
                  payload: 'customwhiteningtrayLearnMore',
                })
              }
            >
              Learn More
            </button>
          </div>
        </Container>
      </section>

      <section className="container t-section6 section6">
        <div
          className="col-md-9 mx-auto text-center mt-5 pt-3"
          style={{ maxWidth: '770px' }}
        >
          <h3 className="fw-light fs-34 mb-4 sm-fs-24 montserrat text-blue-500">
            EVERY PACKAGE INCLUDES
          </h3>
          <h4 className="lh-base fw-300 fs-24 mb-4 montserrat text-slate-500">
            Smile Brilliant custom-fitted teeth whitening trays are hand-
            crafted by our dental lab technicians (proudly made in the USA).
            Your package will include the following:
          </h4>
          <div className="mt-5">
            <Image
              width="360"
              height="280"
              src="https://www.smilebrilliant.com/wp-content/uploads/2020/08/graphic-system.png"
              class="vc_single_image-img attachment-large"
              alt=""
              decoding="async"
              loading="lazy"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </section>

      <section className="mt-5 pt-5 t-section7 section7 sm-pb-20">
        <Container className="px-5 sm-px-0">
          <Row className="px-4">
            {col6Data?.map((item, index) => {
              return (
                <Col md={6} key={item + 's7'}>
                  <div className="d-flex pe-5 align-items-center mb-5">
                    <div>
                      <Image
                        width="135"
                        src={item.image}
                        class="vc_single_image-img attachment-medium"
                        alt={item.image}
                        decoding="async"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      />
                    </div>
                    <div
                      className="text ps-5 open-sans"
                      style={{ maxWidth: '400px' }}
                    >
                      <p className="fs-17 fimaly-multiple-opn">{item.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section
        style={{ background: '#f1f2f2' }}
        className="py-5 t-section8 section8"
      >
        <div className="pb-3 container-w-1100 mx-auto ">
          <div
            className="col-md-9 mx-auto text-center pb-3"
            style={{ maxWidth: '600px' }}
          >
            <h3 className="fw-300 mb-4 fimaly-multiple-mon fs-34 text-blue-500 ">
              OUR CUSTOMERS SPEAK FOR US
            </h3>
            <h4 className="lh-base fs-22 fw-300 mb-4 montserrat text-slate-500 px-3">
              <strong className="fw-bold ">Thousands</strong> of happy
              customers. See what our customers from around the world have to
              say.
            </h4>
          </div>
          <Row
            className="m-0 justify-content-center sm-px-30"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              // Add a condition to include only items 2 to 10
              if (item >= 2) {
                return (
                  <div
                    style={{ maxWidth: '20%' }}
                    className="p-0 mb-1"
                    key={'s8' + item}
                  >
                    <div>
                      <Image
                        src={imageUrls[index]}
                        className="w-100"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        width={217}
                      />
                    </div>
                  </div>
                );
              } else {
                // If item is less than 2, return null or an empty fragment
                return null;
              }
            })}
            <div className="mt-5">
              <div className="wpb_wrapper">
                <aside
                  className="socials page-social-icon mx-auto d-flex justify-content-between"
                  style={{ maxWidth: '212px' }}
                >
                  <a href="https://www.youtube.com/user/smilebrilliant">
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a href="https://www.youtube.com/user/smilebrilliant">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/user/smilebrilliant">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/user/smilebrilliant">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/user/smilebrilliant">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </aside>
              </div>
              <div className="mt-5">
                <p className="text-center">
                  <a
                    href="/product/reviews/"
                    className="py-11 fimaly-multiple-opn d-block mx-auto text-decoration-none text-uppercase text-white w-300 bg-blue-500 letter-spacing-2 fs-18 fw-300 hover hover-able h-auto"
                    style={{ lineHeight: 'unset' }}
                  >
                    SEE OUR REVIEWS
                  </a>
                </p>
              </div>
            </div>
          </Row>
        </div>
      </section>

      <section className="mt-5  t-section9 section9">
        <Container>
          <div
            className="col-md-9 mx-auto text-center pb-3"
            style={{ maxWidth: '600px' }}
          >
            <h3 className=" mb-1 fimaly-multiple-mon fs-34 text-blue-500 fw-300">
              TRAY CREATION PROCESS
            </h3>
            <h4 className="lh-base  fw-300 mb-5 text-slate-500  fimaly-multiple-opn fs-20">
              Backed by science. From dental lab to your door.
            </h4>
          </div>
          <Row data-aos="fade-right" data-aos-duration="2000">
            {TRAYCREATIONPROCESS?.map((item, index) => {
              return (
                <Col md={4} key={item + 's9'}>
                  <div className={`text-center h-100 tbox tbox-${index + 1}`}>
                    <div className={`mb-4 img-tbox mx-auto `}>
                      <Image
                        width="185"
                        src={item.image}
                        className="vc_single_image-img attachment-medium h-auto"
                        alt={item.image}
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className={``}>
                      <div
                        className={`t-circle rounded-pill d-flex mx-auto align-items-center justify-content-center d-inline-block mb-4`}
                      >
                        {index + 1}
                      </div>
                      <h3
                        className="montserrat fw-400 fs-22"
                        style={{ color: '#3C98CC' }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div
                      className="text fimaly-multiple-opn fs-14 pt-2 pb-3"
                      style={{ maxWidth: '400px' }}
                    >
                      <p className="fs-14">{item.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}

            <div className="">
              <p className="text-center">
                <a
                  href="#section3"
                  className="text-decoration-none text-uppercase text-white w-200 h-auto py-11 bg-blue-500 hover hover-able"
                  style={{ lineHeight: 'unset' }}
                >
                  order now
                </a>
              </p>
            </div>
            <div className="text-center mb-5 pb-5 sm-pb-0 sm-mb-0">
              <a
                href="#"
                className="text-decoration-none hover-text-blue text-slate-700"
              >
                Download Instructions
              </a>
            </div>
          </Row>
        </Container>
      </section>

      {
        <div
          className={`${
            state.modal_state == 'customwhiteningtrayLearnMore'
              ? 'openModal'
              : 'closeModal'
          }`}
        >
          <ProductModal
            h2={
              <p className="text-center fs-16 px-5">
                Do you ship outside the United States (international shipments)?
                What is the Cost?
              </p>
            }
            btnText={'got it!'}
            borderStyle="border-width border-color border"
            btnStyle="text-white text-uppercase bg-blue-500 hover hover-able fs-14 montserrat letter-spacing-2"
          >
            <div className="text-center fs-13 text-slate-500 pt-4 mt-3 px-4">
              <p className="text-center fs-13 text-slate-500 mb-3">
                <strong>
                  Yes! We are able to ship to most countries throughout the
                  world.
                </strong>
                The shipping fee will be different for each country (total fees
                will show in your shopping cart at checkout.This fee covers
                <strong>2-way shipping</strong>:
                <i>
                  the cost to ship your tray creation package to you and the
                  cost to ship your completed custom-fitted trays (after our lab
                  has created them) back to you
                </i>{' '}
                For select countries,<strong>3-way shipping:</strong>
                <i>
                  shipping tray creation system, pre-paid postage to send your
                  impressions to our lab, and shipping the completed trays to
                  you
                </i>
                is covered in the total fee. This will be mentioned in the
                shipping caption at the time of checkout. If your country is
                only covered under 2-way shipping, you will be responsible for
                the cost to ship your dental impressions to us. The cost for
                this is typically around $10-15 USD (varies by country). We
                recommend obtaining a tracking number from your post office when
                you ship your impressions!
                <br />
                <br />
                <i>
                  <strong>Note:</strong>We are not responsible for customs
                  fees/import taxes.
                </i>
              </p>
            </div>
          </ProductModal>
        </div>
      }
    </div>
  );
};

export default CustomWhiteningTrayCom;
