// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// import styles from './Index.module.css';

// import ToothbrushHeadsProduct from '@/components/toothbrushHeadsProduct/toothbrushProduct';
// import ToothbrushHeadsModal from '@/components/toothbrushHeadsModal/ToothbrushHeadsModal';
// import ProductModal from '@/ui/common/ProductModal';

// import iconpdfwhite from '../../../public/assets/images/electricToothbrush/icon-pdf-white.png';
// import yearfullwarrantywhite from '../../../public/assets/images/electricToothbrush/2year-full-warranty-white.png';
// import graphiccariproflosser from '../../../public/assets/images/waterflosser/graphic-caripro-flosser-1.png';
// import gehalogowaterflosser from '../../../public/assets/images/waterflosser/geha-logo-water-flosser.jpg';
// import fdalogowaterflosser from '../../../public/assets/images/waterflosser/fda-logo-water-flosser.jpg';
// import healthlogowaterflosser from '../../../public/assets/images/waterflosser/health-logo-water-flosser.jpg';
// import forbeslogowaterflosser from '../../../public/assets/images/waterflosser/forbes-logo-water-flosser.jpg';
// import foxlogowaterflosser from '../../../public/assets/images/waterflosser/fox-logo-water-flosser.jpg';
// import newyorklogowaterflosser from '../../../public/assets/images/waterflosser/new-york-logo-water-flosser.jpg';
// import electrictoothbrushwaterflosserpage from '../../../public/assets/images/waterflosser/electric-toothbrush-water-flosser-page.jpg';
// import piececompletewaterflossertipset from '../../../public/assets/images/waterflosser/4-piece-complete-water-flosser-tip-set.jpg';
// import piececompletewaterflossertipset2 from '../../../public/assets/images/waterflosser/2-piece-complete-water-flosser-tip-set.jpg';
// import piecepocketwaterflossertipset3 from '../../../public/assets/images/waterflosser/2-piece-pocket-water-flosser-tip-set.jpg';
// import piecepocketwaterflossertipset4 from '../../../public/assets/images/waterflosser/2-piece-brush-water-flosser-tip-set.jpg';
// import piecepocketwaterflossertipset5 from '../../../public/assets/images/waterflosser/2-piece-orthos-water-flosser-tip-set.jpg';
// import graphicflosser from '../../../public/assets/images/waterflosser/graphic-flosser.png';
// import yearfullwarrantygrey from '../../../public/assets/images/waterflosser/2year-full-warranty-grey.png';
// import graphicpremiumflosstips from '../../../public/assets/images/waterflosser/graphic-premium-floss-tips.png';
// import graphicusbadaptor from '../../../public/assets/images/waterflosser/graphic-usb-adaptor.png';
// import holdingcariproflosserbrush from '../../../public/assets/images/waterflosser/holding-caripro-flosser-brush-1.webp';
// import iconstopmessingwithstring from '../../../public/assets/images/waterflosser/icon-stop-messing-with-string-1.png';
// import graphicsmile from '../../../public/assets/images/waterflosser/graphic-smile-1.png';
// import guaranteedresultstextlight from '../../../public/assets/images/waterflosser/guaranteed-results-text-light.png';

// import ReplacingFlosser from './ReplacingFlosser';

// const WaterFlosser = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const [modalState, setModalState] = useState<any>(false);

//   useEffect(() => {
//     // console.log(modalState)
//   }, [modalState]);

//   function scrollToSection() {
//     const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
//     const element = document.getElementById('mySection');
//     let elementPosition;
//     if (element) {
//       const rect = element.getBoundingClientRect();
//       elementPosition = rect.top + window.scrollY - headerHeight;
//     }
//     window.scrollTo({ top: elementPosition, behavior: 'smooth' });
//   }

//   return (
//     <div
//       className={`${styles.ElectricToothbrushPage} ${styles.waterFlosserPage} waterFlosserPage`}
//       id={styles.waterFlosserPage}
//     >
//       <Container className="pb-2 pt-5">
//         <div className="toothbrush-heads">
//           <div className={styles.toothbrushHeadsWrapper}>
//             <div className={styles.ToothbrushHeadsTitleWrapper}>
//               <div className={styles.ToothbrushHeadsTitle}>
//                 <h1>cariPRO™ CORDLESS WATER FLOSSER</h1>
//                 <h4>The healthier way to floss. Delivered to your door.</h4>
//               </div>
//               <div className={styles.toothbrushimg}>
//                 <Image
//                   src={graphiccariproflosser}
//                   alt="graphic-caripro-flosser"
//                 />
//               </div>

//               <div className={styles.primaryButton} onClick={scrollToSection}>
//                 SEE PRICING
//               </div>
//               <div className="pt-3">
//                 <a
//                   href="#learn_more"
//                   className="fimaly-multiple-opn fs-16 text-blue-500 text-decoration-none hover-text-orange"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <div className={`${styles.maintainingHealthSection} mt-4 bg-grey-1000`}>
//         <div
//           className={`${styles.tbSection2Imges} col-lg-10 col-md-12 col-sm-12 col-12 pe-0 mx-auto`}
//         >
//           <div className={styles.maintaining_Health_Section_Text}>
//             <h2>&quot;Stop messing with string. This is fun flossing.&quot;</h2>
//           </div>
//           <div
//             className={`d-flex mx-0 align-items-end pb-2 mt-5 justify-content-between`}
//           >
//             <div className="tb-img1">
//               <Image src={gehalogowaterflosser} alt="image" width={'165'} />
//             </div>
//             <div className="tb-img2">
//               <Image src={fdalogowaterflosser} alt="image" width={'85'} />
//             </div>
//             <div className="tb-img3">
//               <Image src={healthlogowaterflosser} alt="image" width={'170'} />
//             </div>
//             <div className="tb-img4 pe-0">
//               <Image src={forbeslogowaterflosser} alt="image" width={'192'} />
//             </div>
//             <div className="tb-img4 pe-0">
//               <Image src={foxlogowaterflosser} alt="image" width={'112'} />
//             </div>
//             <div className="tb-img4 pe-0">
//               <Image src={newyorklogowaterflosser} alt="image" width={'304'} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${styles.choose_your_replacement_package} px-0`}
//         id="mySection"
//       >
//         <div className={styles.replacement_package_wrapper}>
//           <div className={styles.replacement_package_container}>
//             <Row className="m-0">
//               <Col md={12}>
//                 <div className="col-xl-8 col-lg-7 col-md-9 col-sm-10 col-11 mx-auto text-center pt-3 pb-3">
//                   <h3 className={`${styles.replacement_package} text-blue-500`}>
//                     COMPLETE cariPRO™ WATER FLOSSER PACKAGE
//                   </h3>
//                   <p className="fs-22 text-slate-500 montserrat fw-300 pt-2">
//                     The healthiest and most convenient way to floss is delivered
//                     directly to your door. Save up to 50% on comparable high
//                     quality water flossers.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//             <Row className={`mx-0`}>
//               <Col
//                 md={12}
//                 className={`${styles.replacement_package_column} px-0`}
//               >
//                 <div className={`${styles.content_detail} ps-5`}>
//                   <ToothbrushHeadsProduct
//                     title="DELUXE PACKAGE"
//                     image={electrictoothbrushwaterflosserpage}
//                     description={
//                       <div className="text-slate-500">
//                         <div className="text-blue-800 fs-16 fw-500 text-center montserrat text-uppercase">
//                           cariPRO™
//                         </div>
//                         <div>
//                           {' '}
//                           <h4 className="fs-30 fw-600 text-uppercase fimaly-multiple-opn mb-0">
//                             CORDLESS WATER FLOSSER
//                           </h4>{' '}
//                         </div>
//                         <div className="fs-15 fw-500 montserrat">
//                           + FULL 2 YR LIMITED WARRANTY
//                         </div>
//                         <div className="bg-blue-500  mx-auto mt-3 mb-3 clr-line"></div>
//                         <div className="fs-14 fimaly-multiple-opn">
//                           <div>
//                             <span className="fs-18 fw-600">x1 </span>cariPRO™
//                             Cordless Water Flosser
//                           </div>
//                           <div>
//                             <span className="fs-18 fw-600">x4 </span>premium
//                             specialty floss tips
//                           </div>
//                           <div>
//                             <span className="fs-18 fw-600">x1 </span> universal
//                             USB & wall adaptor charging
//                           </div>
//                         </div>
//                         <div className="text-blue-500 fw-600 mt-3 mb-2">
//                           2 year limited warranty
//                           <p className="fw-normal m-0">60 day trial </p>
//                         </div>
//                       </div>
//                     }
//                     orignalPrice="98"
//                     newPrice=""
//                     freeShipping="+free shipping"
//                     classes="d-flex justify-content-between pt-4 pb-4 ps-3"
//                   />
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </div>
//       </div>
//       <section
//         id="replacement_water_flosser_tips"
//         className={`replacement_water_flosser_tips`}
//       >
//         <div className="container-w-1420 pt-5">
//           <Row className="m-0">
//             <Col md={12}>
//               <div className="col-xl-8 col-lg-7 col-md-9 col-sm-10 col-11 mx-auto text-center pt-3 pb-5">
//                 <h3
//                   className={`text-blue-500 fw-300 fs-34 fimaly-multiple-mon`}
//                 >
//                   REPLACEMENT WATER FLOSSER TIPS
//                 </h3>
//                 <p className="fs-21 text-slate-500 pt-2 fimaly-multiple-opn">
//                   Dentists recommend replacing flosser tips every{' '}
//                   <strong className="fw-bold">6 months.</strong>
//                 </p>
//               </div>
//             </Col>
//             <Col md={6} className={`ps-1 mb-4 lg-box`}>
//               <ReplacingFlosser
//                 image={piececompletewaterflossertipset}
//                 h3="4-Piece Complete Flosser Tip Set"
//                 price="9.95"
//                 btnLabel="add to cart"
//                 styleSetting={{
//                   bottomArea: 'd-flex justify-content-between w-100 sm-d-block',
//                   button: 'w-220 sm-w-100',
//                 }}
//               />
//             </Col>
//             <Col md={6} className={`pe-1 mb-4 lg-box`}>
//               <ReplacingFlosser
//                 image={piececompletewaterflossertipset2}
//                 h3="2-Piece Standard Flosser Tips"
//                 price="16.95"
//                 btnLabel="add to cart"
//                 styleSetting={{
//                   bottomArea: 'd-flex justify-content-between w-100 sm-d-block',
//                   button: 'w-220 sm-w-100',
//                 }}
//               />
//             </Col>
//             <Col md={6} className={`ps-1 mb-4 lg-box`}>
//               <ReplacingFlosser
//                 image={piecepocketwaterflossertipset3}
//                 h3="2-Piece Pocket Flosser Tips"
//                 price="9.95"
//                 btnLabel="add to cart"
//                 styleSetting={{
//                   bottomArea: 'd-flex justify-content-between w-100 sm-d-block',
//                   button: 'w-220 sm-w-100',
//                 }}
//               />
//             </Col>
//             <Col md={3} className={`mb-4 sm-box`}>
//               <ReplacingFlosser
//                 image={piecepocketwaterflossertipset4}
//                 h3="2-Piece Brush Flosser Tips"
//                 price="9.95"
//                 btnLabel="add to cart"
//                 styleSetting={{
//                   bottomArea:
//                     'row mx-0 justify-content-between text-center w-100',
//                   button: 'px-0',
//                 }}
//               />
//             </Col>
//             <Col md={3} className={`pe-1 mb-4 sm-box`}>
//               <ReplacingFlosser
//                 image={piecepocketwaterflossertipset5}
//                 h3="2-Piece Ortho Flosser Tips"
//                 price="9.95"
//                 btnLabel="add to cart"
//                 styleSetting={{
//                   bottomArea:
//                     'row mx-0 justify-content-between text-center w-100',
//                   button: 'px-0',
//                 }}
//               />
//             </Col>
//           </Row>
//         </div>
//       </section>
//       <div className={styles.ship_world_Wide_wrapper} id="learn_more">
//         <Container>
//           <Row>
//             <Col md={12}>
//               <div className={styles.ship_world_title}>
//                 <h2>
//                   <svg
//                     className={styles.firstSvg}
//                     viewBox="0 0 496 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z" />
//                   </svg>
//                   YES, WE SHIP WORLDWIDE
//                   <svg
//                     className={styles.secondSvg}
//                     viewBox="0 0 496 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z" />
//                   </svg>
//                 </h2>
//                 <Button
//                   className={
//                     'bg-transparent rounded-0 lh-3 py-2 fs-20 border text-capitalize letter-spacing-2 montserrat fw-300 hover-text hover-white'
//                   }
//                   variant="primary"
//                   onClick={() => setModalShow(true)}
//                 >
//                   Learn More
//                 </Button>

//                 <ToothbrushHeadsModal
//                   title="Do you ship the electric toothbrushes internationally?"
//                   text={
//                     'Smile Brilliant ships all over the world! We have customers in over 90 countries and are very familiar with international shipments, customs, and duties. The cost to ship your cariPRO™ electric toothbrush anywhere in the world is free!'
//                   }
//                   italic_text={
//                     ' (unless an alternative shipping method is requested)'
//                   }
//                   btn_text={'got it!'}
//                   show={modalShow}
//                   onHide={() => setModalShow(false)}
//                 />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <div className={`${styles.feel_difference_wrapper} mb-4 pb-2`}>
//         <Container>
//           <Row>
//             <Col md={12}>
//               <div className={styles.feel_difference_detail}>
//                 <h3>WHAT’S IN THE BOX?</h3>
//                 <div className="two-column-section">
//                   <div className="row m-0 justify-content-between">
//                     <div className="col-lg-6 col-12 two-leftside mb-5">
//                       <div className="d-flex ">
//                         <div>
//                           <Image
//                             src={graphicflosser}
//                             alt="image"
//                             className="pb-5"
//                           />
//                         </div>
//                         <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22 pt-3 ps-3">
//                           <h5 className="m-0 fs-16 fw-600 text-dark">
//                             1 cariPRO™ Cordless Water Flosser
//                           </h5>
//                           <ul className="m-0 fs-16 ps-4 pe-4">
//                             <li>
//                               155ml reservoir (45 secs of flossing per fill)
//                             </li>
//                             <li>44-75 psi floss jet</li>
//                             <li>3 floss modes (normal, soft, pulse)</li>
//                             <li>28 day battery life (on full charge)*</li>
//                             <li>
//                               Ergonomic slim design with graphite gray
//                               soft-touch grip
//                             </li>
//                             <li>
//                               Waterproof design is is safe for shower or bath
//                             </li>
//                             <li>
//                               Auto-interval smart timer for even & timed
//                               brushing
//                             </li>
//                             <li>
//                               5 Hour rapid charge (universal USB & wall charging
//                             </li>
//                             <li
//                               className="list-unstyled mt-4 pt-2 d-none-sm"
//                               style={{ marginLeft: '-13px' }}
//                             >
//                               <div>
//                                 <Image src={yearfullwarrantygrey} alt="image" />
//                               </div>
//                               <strong className="d-block mt-4 text-dark">
//                                 Full 2-Year Warranty
//                               </strong>
//                             </li>
//                             <li>
//                               Waterproof design is is safe for shower or bath
//                             </li>
//                             <li>Full warranty against manufacturer</li>
//                             <li>Retail packaging (individually sealed)</li>
//                             <li>Instruction booklet</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-12 two-rightside ps-5">
//                       <div className="mb-4 text-start">
//                         <div className="min-w-138">
//                           <Image src={graphicpremiumflosstips} alt="image" />
//                         </div>
//                         <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22 pt-4 pb-4">
//                           <h5 className="m-0 fs-16 fw-600 text-dark">
//                             4 Premium Floss Tips
//                           </h5>
//                           <ul className="m-0 fs-16 ps-4 sm-fs-14">
//                             <li>Standard tip (general use)</li>
//                             <li>Ortho tip – Ideal for braces</li>
//                             <li>rush tip – Implants, crowns, and bridges</li>
//                             <li>
//                               Pocket tip – periodontal pockets / furcations
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className=" mb-4 text-start">
//                         <div className="min-w-138">
//                           <Image src={graphicusbadaptor} alt="image" />
//                         </div>
//                         <div className="two-column-text text-start fimaly-multiple-opn text-slate-500 lh-22 pt-4">
//                           <h5 className="m-0 fs-16 fw-600 text-dark">
//                             1 USB adaptor & universal wall charger
//                           </h5>
//                           <ul className="m-0 fs-16 ps-4 sm-fs-14">
//                             <li>.7v Li-ion high capacity battery (160 mAh)</li>
//                             <li>100-240v ~ 50/60Hz (US & international use)</li>
//                             <li>420±50mAh Charging current</li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="col-12 d-none d-block-sm px-0">
//                         <div className="min-w-138 text-start">
//                           <Image
//                             src={yearfullwarrantygrey}
//                             alt="image"
//                             className="img-ms"
//                           />
//                         </div>

//                         <div className="text-start">
//                           <h5 className="m-0 fs-16 fw-600 text-dark">
//                             Full 2-Year Warranty
//                           </h5>
//                           <ul className="m-0 fs-16 ps-4 sm-fs-14">
//                             <li>Full warranty against manufacturer</li>
//                             <li>Retail packaging (individually sealed)</li>
//                             <li>Instruction booklet</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4 pt-2">
//                 <button
//                   className={`${styles.btn_primary} hover hover-able`}
//                   onClick={scrollToSection}
//                 >
//                   ORDER NOW
//                 </button>
//                 <br />
//                 <a
//                   href="#best_brush_accordion"
//                   className="border-0 bg-transparent text-decoration-none d-inline-block fs-14 fw-600 hover-text-orange fimaly-multiple-opn cursor-pointer text-blue-800 mt-2 pt-1 "
//                   onClick={scrollToSection}
//                 >
//                   See full technical specifications
//                 </a>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <div
//         className={`${styles.image_text_wrapper} product-water-flosser position-relative`}
//         style={{ backgroundImage: `url(${holdingcariproflosserbrush.src})` }}
//         id="best-brush-section"
//       >
//         <div className="color-layer top-0 start-0 position-absolute color-layer-opacity-white d-none sm-d-block"></div>
//         <div className="h-100 d-flex align-items-end position-relative">
//           <div className="text-slate-500 montserrat text-center max-w-870 ms-auto pe-5 ps-5">
//             <h2 className="fs-46 fw-700 ps-5 text-shadow-sm">
//               50% more effective than string floss at improving gum health
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div className={`bg-blue-500 py-4 mb-5`}>
//         <Container className="px-5 sm-px-15">
//           <div className="accordion bg-transparent" id="best_brush_accordion">
//             <div className="accordion-item bg-transparent border-0 text-white fw-300 fs-21 montserrat">
//               <h2
//                 className="accordion-header  bg-transparent border-0"
//                 id="headingOne"
//               >
//                 <button
//                   className="sm-px-0 accordion-button text-center d-block text-white fw-300 fs-21 sm-fs-17 montserrat bg-transparent border-0 shadow-none"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseOne"
//                   aria-expanded="true"
//                   aria-controls="collapseOne"
//                 >
//                   SEE FULL TECHNICAL SPECIFICATIONS
//                 </button>
//               </h2>
//               <div
//                 id="collapseOne"
//                 className="accordion-collapse collapse  bg-transparent border-0"
//                 aria-labelledby="headingOne"
//                 data-bs-parent="#best_brush_accordion"
//               >
//                 <div className="accordion-body mt-5">
//                   <div className="row m-0">
//                     <div className="col-lg-6 col-12 pe-5">
//                       <div>
//                         <h5 className="text-start fw-700 fs-21 montserrat">
//                           Power &amp; Charging
//                         </h5>
//                         <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
//                           <div>
//                             <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 sm-fs-28 text-uppercase">
//                               <li className="fw-700">CHARGING: </li>
//                               <li className="fw-700"> BATTERY TYPE: </li>
//                               <li className="fw-700"> VOLTAGE:</li>
//                               <li className="fw-700"> BATTERY LIFE: </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="m-0 fw-400 fs-16">
//                               Wireless induction charging dock
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               800 mAh rechargeable Lithium ION
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               110-240V (US & International use)
//                             </p>
//                             <p className="m-0 fw-400 fs-16 text-start">
//                               Up to 4 weeks on full charge*
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="pt-3">
//                         <h5 className="text-start fw-700 fs-21 montserrat">
//                           Finish & Ease of Use
//                         </h5>
//                         <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
//                           <div>
//                             <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
//                               <li className="fw-700">COOR: </li>
//                               <li className="fw-700"> HANDLE: </li>
//                               <li className="fw-700"> DESIGN:</li>
//                               <li className="fw-700"> HEAD REPLACEMENT: </li>
//                               <li className="fw-700"> BATTERY INDICATOR: </li>
//                               <li className="fw-700"> DISPLAY: </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="m-0 fw-400 fs-16">
//                               Graphite matte gray
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               Soft-touch silicone rubber grip{' '}
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               Ergonomic slim design{' '}
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               Quick-click brush head replacement{' '}
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               {' '}
//                               lluminated icon indicates charge
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               Operating mode indicator lights{' '}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="pt-3">
//                         <h5 className="text-start fw-700 fs-21 montserrat">
//                           Warranty & Durability
//                         </h5>
//                         <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
//                           <div>
//                             <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
//                               <li className="fw-700">WARRANTY:</li>
//                               <li className="fw-700">WATERPROOF:</li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="m-0 fw-400 fs-16">
//                               {' '}
//                               2 year limited warranty
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               {' '}
//                               PVx7 Rated (3ft water for 30 mins)
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-12 ps-5">
//                       <div>
//                         <h5 className="text-start fw-700 fs-21 montserrat">
//                           Modes
//                         </h5>
//                         <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
//                           <div>
//                             <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
//                               <li className="fw-700">CLEAN: </li>
//                               <li className="fw-700">WHITE: </li>
//                               <li className="fw-700">MASSAGE: </li>
//                               <li className="fw-700">GUM CARE: </li>
//                               <li className="fw-700">SENSITIVE: </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="m-0 fw-400 fs-16">
//                               {' '}
//                               Optimal cleaning results
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               {' '}
//                               High speed polishing
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               Gentle stimulation{' '}
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               {' '}
//                               Timed pulse gum & gumline health
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               Ideal for sensitive teeth{' '}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="pt-3">
//                         <h5 className="text-start fw-700 fs-21 montserrat">
//                           Performance
//                         </h5>
//                         <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
//                           <div>
//                             <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
//                               <li className="fw-700">BRUSHING ACTION: </li>
//                               <li className="fw-700">AUTO-TIMER: </li>
//                               <li className="fw-700">INTERVAL TIMER: </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="m-0 fw-400 fs-16">
//                               40,000 vibrations / minute (VPM){' '}
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               2 minute routine timer{' '}
//                             </p>
//                             <p className="m-0 fw-400 fs-16">
//                               30 second quadrant timer
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mt-4 pt-3">
//                         <a
//                           className="fs-14 fw-400 fimaly-multiple-opn d-inline-block text-decoration-none text-white"
//                           href="/wp-content/uploads/2020/09/cariPRO-CP2001A-Instruction-Manual.pdf"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Image src={iconpdfwhite} alt="image" />
//                           &nbsp; Download PDF instruction manual
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <section id="howit-work-section" className="ng-section3 mt-5 ">
//         <Container className="pb-4 px-0">
//           <div className="mb-3 md-mb-30">
//             <h2 className="fw-300 fs-34 fimaly-multiple-mon text-blue-800 text-uppercase text-center pb-5">
//               3 REASONS TO TRY A cariPRO™ WATER FLOSSER
//             </h2>
//           </div>
//           <Row>
//             <div
//               className="col-md-4 aos-init aos-animate row1"
//               data-aos="fade-right"
//               data-aos-duration="2000"
//             >
//               <div className="text-center">
//                 <div className="min-h-330">
//                   <div>
//                     <figure className="m-0">
//                       <div
//                         style={{ height: '100px' }}
//                         className="d-flex align-items-center justify-content-center"
//                       >
//                         <Image
//                           src={iconstopmessingwithstring}
//                           alt={'sportsguardpackagemainimage'}
//                           width={165}
//                         />
//                       </div>
//                     </figure>
//                   </div>

//                   <div className="mb-2 text-slate-500  mt-4 pt-3">
//                     <div className="open-sans">
//                       <div className="the-process-circle the-process-circle-1 mb-3">
//                         1
//                       </div>
//                       <div className="fs-22 fw-400 montserrat text-slate-700">
//                         Stop messing with
//                         <span className="text-blue-500 montserrat fw-bold">
//                           string
//                           <br />{' '}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-center fimaly-multiple-opn sm-pt-20">
//                     <div className="fs-14 fw-500 text-slate-700 px-4 sm-fs-13 sm-px-0">
//                       <div>
//                         Face it, flossing is annoying! Stop wasting time with
//                         silly string and make flossing a routine you look
//                         forward to.
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className=" d-flex border-top  mt-3 ps-3">
//                   <div className="border-end  pe-2 pt-3">
//                     <p className="fs-42 fw-300 montserrat mb-0 lh-22 text-slate-500 pb-2 text-slate-500">
//                       50%
//                     </p>
//                     <small className="fs-13 text-slate-600 fimaly-multiple-opn lh-0 text-slate-700">
//                       better floss
//                     </small>
//                     {/* <small className="fs-13 text-slate-600 fimaly-multiple-opn lh-0 d-block">remova</small> */}
//                   </div>
//                   <div className="ps-2 text-start pt-2">
//                     <p className="text-uppercase fs-14 max-w-220 fimaly-multiple-opn text-slate-700">
//                       50% MORE EFFECTIVE FOR IMPROVING GUM HEALTH VS. STRING
//                       FLOSS
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-md-4 aos-animate row2"
//               data-aos="fade-right"
//               data-aos-duration="2000"
//             >
//               <div className="text-center px-4">
//                 <div className="min-h-330">
//                   <div>
//                     <figure className="m-0">
//                       <div
//                         style={{ height: '100px' }}
//                         className="d-flex align-items-center justify-content-center"
//                       >
//                         <Image
//                           src={graphicsmile}
//                           alt="processimagetwo"
//                           width={280}
//                         />
//                       </div>
//                     </figure>
//                   </div>

//                   <div className="mb-2 text-slate-500 mt-4 pt-3">
//                     <div>
//                       <div className="the-process-circle the-process-circle-1 mb-3">
//                         2
//                       </div>
//                       <div className="fs-22 fw-400 montserrat text-slate-700">
//                         Your mouth will be{' '}
//                         <span className="text-blue-500 montserrat fw-bold">
//                           healthier
//                           <br />{' '}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-center fimaly-multiple-opn sm-pt-20">
//                     <div className="fs-14 fw-500 text-slate-700 sm-fs-13 sm-px-0">
//                       <div>
//                         2x more effective around implants. 3x more effective
//                         around braces (vs. string floss). Yep, your mouth is
//                         about to get a lot healthier.
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className=" d-flex border-top  mt-3 ps-3">
//                   <div className="border-end  pe-2 min-fit pt-3">
//                     <p className="fs-42 fw-300 montserrat mb-0 lh-0 text-slate-500 lh-22 pb-2">
//                       99.9%
//                     </p>
//                     <small className="fs-14 text-slate-600 fimaly-multiple-opn lh-0 text-slate-700">
//                       less plaque
//                     </small>
//                   </div>
//                   <div className="ps-2  text-start pt-2">
//                     <p className="text-uppercase fs-14 max-w-250 fimaly-multiple-opn text-slate-700">
//                       REMOVES 99.9% OF PLAQUE FROM TREATED AREAS
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-md-4 aos-animate row3"
//               data-aos="fade-right"
//               data-aos-duration="2000"
//             >
//               <div className="text-center">
//                 <div className="min-h-330">
//                   <div>
//                     <figure className="m-0">
//                       <div
//                         style={{ height: '100px' }}
//                         className="d-flex align-items-center justify-content-center"
//                       >
//                         <Image
//                           src={guaranteedresultstextlight}
//                           alt={'process-image-three'}
//                           width={270}
//                         />
//                       </div>
//                     </figure>
//                   </div>

//                   <div className="mb-2 text-slate-500  mt-4 pt-3">
//                     <div>
//                       <div className="the-process-circle the-process-circle-1 mb-3">
//                         3
//                       </div>
//                       <div className="fs-22 fw-400 montserrat text-slate-700">
//                         Zero risk & high{' '}
//                         <span className="text-blue-500 montserrat fw-bold">
//                           reward
//                           <br />{' '}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-center fimaly-multiple-opn sm-pt-20">
//                     <div className="fs-14 fw-500 text-slate-700 px-4 sm-fs-13 sm-px-0">
//                       <div>
//                         Experience the health benefits and cost savings of a
//                         premium water flosser risk free. Delivered to your door!
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" d-flex border-top mt-3 ps-3">
//                   <div className="border-end  pe-2 min-fit pt-3">
//                     <p className="fs-42 fw-300 montserrat mb-0 lh-0 text-slate-500 lh-22 pb-2">
//                       60
//                     </p>
//                     <small className="fs-14 text-slate-600 fimaly-multiple-opn lh-0 text-slate-700">
//                       day trial
//                     </small>
//                   </div>
//                   <div className="ps-2 text-start pt-2">
//                     <p className="text-uppercase fs-14 fimaly-multiple-opn text-slate-700  max-w-250 last12">
//                       SAVE TIME AND MONEY, REDUCE COSTLY DENTAL BILLS,
//                       EXPERIENCE THE CARIPRO DIFFERENCE
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Row>
//           <div className="text-center mt-5 pt-4">
//             <div className="text-center mt-3">
//               <a
//                 href="#mySection"
//                 className="min-w-220 px-5 text-uppercase text-decoration-none py-8 d-inline-block text-center fs-20 text-white  fw-300 bg-blue-500  hover-able hover hove-dark-grey montserrat"
//               >
//                 order now
//               </a>
//             </div>
//           </div>
//         </Container>
//       </section>
//       <section
//         id="ng-section7"
//         className="ng-section7 pt-5  pb-1 bg-blue-500 sm-mb-70"
//         style={{ marginBottom: '100px' }}
//       >
//         <Container>
//           <div className="text-center max-w-1100 mx-auto px-4 mb-5">
//             <div>
//               <div>
//                 <Image src={yearfullwarrantywhite} alt="image" />
//               </div>
//               {/* <div className="mt-6 mb-4">
//                                 <Image src={googletrustedstore} alt='image' />
//                             </div> */}
//             </div>
//             <h3 className="fw-700 text-white fs-34 montserrat pt-4 mt-2">
//               {' '}
//               60 DAY TRIAL, 2 YEAR WARRANTY
//             </h3>
//             <div className="mt-3">
//               <p className="fw-300 text-white fs-17 montserrat">
//                 Smile Brilliant is committed to providing professional quality
//                 oral care products at a price everyone can afford. Your
//                 cariPRO™ Electric Toothbrush is backed by a 2 year limited
//                 manufacturer's warranty and will meet or exceed the features of
//                 any top quality electric toothbrush.
//               </p>
//             </div>
//             <h3 className="fw-600 text-white fs-24 montserrat mt-4 pt-1">
//               If you are anything but 100% satisfied with your cariPRO™
//               purchase, we'll take it back.
//             </h3>
//             <div className="mt-3 ">
//               <a
//                 href="#mySection"
//                 className="fw-300 rounded-0 bg-seegreen-800 border-0 fs-18 montserrat text-white  px-2 py-8 mt-1 d-inline-block px-5 text-decoration-none hover hover-able  letter-spacing-2"
//               >
//                 Buy Now
//               </a>
//               <div>
//                 <Button
//                   className="bg-transparent border-0 d-inline-block fw-500 fs-14 text-white fimaly-multiple-opn text-decoration-none mt-3 cursor-pointer text-capitalize"
//                   variant="primary"
//                   onClick={() => setModalState(true)}
//                 >
//                   See full warranty
//                 </Button>
//               </div>
//               {
//                 <div className={`${modalState ? 'openModal' : 'closeModal'}`}>
//                   <ProductModal
//                     setterFunction={setModalState}
//                     h2={
//                       'What is the cariPRO™ Electric Toothbrush 2 year limited warranty?'
//                     }
//                     btnText={'got it!'}
//                     borderStyle="border-width border-color border"
//                     btnStyle="text-white text-uppercase bg-blue-500 hover hover-able"
//                   >
//                     <div className="text-center fs-13 text-slate-500 pt-4 mt-3">
//                       <p className="text-center fs-13 text-slate-500 mb-3">
//                         Smile Brilliant warrants the cariPRO™ Electric
//                         Toothbrush for a period of twenty-four (24) months from
//                         date of purchase. Defects due to faulty workmanship or
//                         materials will be repaired or replaced at the expense of
//                         Smile Brilliant so long as proof of purchase or warranty
//                         registration can be substantiated at time of claim*. Use
//                         of replacement parts other than authentic cariPRO™
//                         parts will void the warranty. Users should adhere to all
//                         instructions included in the user manual and should
//                         refrain from actions or uses that are deemed unnecessary
//                         or which are warned against in the user manual. Smile
//                         Brilliant cannot be held responsible for powering
//                         failures due to improper voltage supply to the
//                         appliance. Warranty does not cover replacement brush
//                         heads.
//                       </p>
//                       <div className="mb-3 pb-1">
//                         You may make a warranty claim by clicking
//                         <a
//                           href="#"
//                           className="text-decoration-none fs-13 text-uppercase text-blue-500 px-1 hover-text-orange"
//                         >
//                           HERE
//                         </a>
//                       </div>
//                       <div className="pb-2">
//                         <h4 className="fs-13 fimaly-multiple-opn fw-700 text-slate-500">
//                           HOW TO REGISTER FOR YOUR WARRANTY
//                         </h4>
//                       </div>
//                       <div>
//                         <p className="text-center fs-13 text-slate-500">
//                           <em>I purchased from the Smile Brilliant Website</em>
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-center fs-13 text-slate-500">
//                           Great! Your warranty is automatically registered and
//                           store in our system. There is nothing more you need to
//                           do!
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-center fs-13 text-slate-500">
//                           <em>
//                             I received the toothbrush through my dentist or
//                             insurance company.
//                           </em>
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-center fs-13 text-slate-500">
//                           Lucky you! When you buy (or receive) a cariPRO from
//                           your dentist or insurance provider, you must fill out
//                           the{' '}
//                           <a
//                             href="#"
//                             className="text-decoration-none fs-13 text-uppercase text-blue-500 hover-text-orange"
//                           >
//                             {' '}
//                             warranty registration form
//                           </a>
//                           .If you are unable to do so, you can register your
//                           toothbrush over the phone by calling
//                           <a
//                             href="tel:855-944-8361"
//                             className="text-decoration-none fs-13 text-uppercase text-blue-500 px-1 hover-text-orange"
//                           >
//                             {' '}
//                             855-944-8361
//                           </a>
//                           .
//                         </p>
//                       </div>
//                     </div>
//                   </ProductModal>
//                 </div>
//               }
//             </div>
//           </div>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default WaterFlosser;
