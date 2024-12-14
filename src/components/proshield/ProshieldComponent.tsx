// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import styles from './index.module.css';
// import Image from 'next/image';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import Pricing from './Products';
// import {
//   pro_shield_sbr_small_logo,
//   pro_shield_banner_image,
//   bg_graphic,
//   tiktoplogo,
//   healthlogo,
//   forbeslogo,
//   foxlogo,
//   newyorkpostlogo,
//   cnetlogo,
//   allurelogo,
//   circlelogo,
//   menwithfootbal,
//   sectionfootbalproductgraphic,
//   mode3,
//   menplayingicehocky,
//   sectionicehokeyproductgraphic,
//   basketballicon,
//   hockeyicon,
//   lacrosseicon,
//   volleyballicon,
//   soccericon,
//   tenniicon,
//   girlliftingweight,
//   sectiongirlweightliftingproductgraphic,
//   liftingicon,
//   crossfiticon,
//   sportsguardpackagemainimage,
//   lifetimereordersimage,
//   domesticprepaidpostageimage,
//   processimagethree,
//   processimagetwo,
//   footbalcombatproductimage,
//   stars,
//   percentguaranteelogo,
//   googletrustedstore,
//   graphicimpressions,
//   GraphicModel,
//   GraphicNightGuardOnly,
// } from '../../app/product/proshield/assets';

// const ProshieldComponent = () => {
//   const priceRef = useRef<any>();
//   const [cardState, setCardState] = useState('');
//   const [learnMorePopup, setLearnMorePopup] = useState(false);
//   const handleProductSelection = (event: any, targetCard: string) => {
//     setCardState(targetCard);
//   };
//   return (
//     <div className={`${styles.proshieldPage} prochieldPage`}>
//       <section
//         className={`${styles.proshieldBanner} bg-blue-800 sm-pt-30 sm-pb-50 pr-banner-section pr-secition5 pr-section4 pr-section3 position-relative`}
//       >
//         <div
//           className={`mx-auto h-100 px-35 position-relative zIndex-2 ${styles.mainContainer}`}
//         >
//           <div
//             className={`container px-0 h-100 d-flex align-items-center position-relative ${styles.proshieldBannerContent}`}
//           >
//             <div className="col-sm-6 position-relative zIndex-100 sm-px-30 sm-w-100">
//               <h1 className="font-bebas text-white fw-700 position-relative w-fit pe-4 m-0 sm-fs-62">
//                 <span className="text-seegreen-700 pe-3">PRO</span>SHIELD
//                 <span
//                   className="text-seegreen-700 montserrat fw-400 fs-20 position-absolute brtm"
//                   style={{ top: '-28px' }}
//                 >
//                   TM
//                 </span>
//               </h1>
//               <div className="lh0">
//                 <Image
//                   className="h-auto mt-2"
//                   src={pro_shield_sbr_small_logo}
//                   alt={'pro-shield-sbr-small-logo'}
//                   width={180}
//                 />
//               </div>
//               <h2 className="text-white sm-mt-0 sm-pt-20 fimaly-multiple-mon fw-bold mt-5 lg-fs-36 xl-fs-50">
//                 PRECISION-FIT CUSTOM
//                 <br className="" />
//                 MOUTH GUARDS
//               </h2>
//               <p className="fimaly-multiple-opn text-white fs-16 fw-bold mt-3 pt-1">
//                 FOR ATHLETES{' '}
//                 <span className="text-seegreen-700 fw-400">(and parents)</span>{' '}
//                 THAT DEMAND THE BEST.
//               </p>
//               <div className=" mt-4 pt-1 buttons sm-mt-0">
//                 <div className="max-w-280">
//                   <a
//                     href="#pricing-section"
//                     className=" bg-seegreen-700 fs-20 text-uppercase montserrat text-white px-3 hover hover-able border-transparent border py-2 mb-4 text-decoration-none d-block"
//                   >
//                     SEE PRICING &amp; OPTIONS
//                   </a>
//                 </div>
//                 <div className="max-w-280">
//                   <a
//                     href="#howit-work-section"
//                     className="bg-transparent fs-20 text-uppercase montserrat text-white px-3 d-block border py-2 hover hover-able text-decoration-none text-center"
//                   >
//                     HOW IT WORKS
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div
//               className={` ${styles.bgBraphic} sm-left-0 sm-h-auto position-absolute d-flex align-items-center justify-content-center col-sm-6 sm-w-100`}
//               style={{ backgroundImage: `url(${bg_graphic.src})` }}
//             >
//               <div className={`mt-4 ms-4 sm-py-0 sm-m-0`}>
//                 <Image
//                   src={pro_shield_banner_image}
//                   alt="pro shield banner"
//                   className="lg-img sm-max-w-100 sm-px-15"
//                 />
//               </div>
//             </div>
//             <div className="position-absolute color-layer top-0 end-0 start-0 botton-0"></div>
//           </div>
//         </div>
//       </section>

//       <section
//         className={`bg-seegreen-700 py-3 ${styles.secition2} pr-section2`}
//       >
//         <div className="py-3">
//           <div className={`${styles.mainContainer} mx-auto px-35`}>
//             <h3 className="montserrat fw-700 text-center fs-46 text-slate-800">
//               {' '}
//               <em>
//                 “maximum performance &amp; protection for today’s athletes”
//               </em>{' '}
//             </h3>
//           </div>
//           <div
//             className={`d-flex align-items-center gap-10 pt-3 justify-content-between logos-item-third no-wrap mx-auto px-35 ${styles.mainContainer}`}
//           >
//             <div>
//               <Image src={tiktoplogo} alt="tiktoplogo" />
//             </div>
//             <div>
//               {' '}
//               <Image src={healthlogo} alt="healthlogo" />
//             </div>
//             <div>
//               <Image src={forbeslogo} alt="forbeslogo" />
//             </div>
//             <div>
//               <Image src={foxlogo} alt="foxlogo" />
//             </div>
//             <div>
//               {' '}
//               <Image src={newyorkpostlogo} alt="newyorkpostlogo" />
//             </div>
//             <div>
//               <Image src={cnetlogo} alt="cnetlogo" />
//             </div>
//             <div>
//               <Image src={allurelogo} alt="allurelogo" />
//             </div>
//             <div>
//               <Image src={circlelogo} alt="allurelogo" />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         className={` ${styles.secition3} pr-secition5 pr-section4 pr-section3`}
//         style={{ backgroundImage: `url(${menwithfootbal.src})` }}
//       >
//         <div
//           className={`${styles.mainContainer} mx-auto px-35 h-100 position-relative`}
//         >
//           <div className="d-flex justify-content-between align-items-center h-100 container px-0 py-4">
//             <div className="text-center ps-4 xl-w-50">
//               <h4 className="text-white montserrat fs-42 fw-700">
//                 FOOTBALL &amp; COMBAT
//               </h4>
//               <p className="text-white fs-14 text-center fimaly-multiple-opn">
//                 Engineered for max protection against repeat head impact.
//               </p>
//               <a
//                 href="#pricing-section"
//                 className="rounded-0 bg-seegreen-700 hover hover-able border-0 fs-20 montserrat text-white px-2 py-11 mt-2 text-decoration-none d-inline-block"
//               >
//                 PRICING &amp; CUSTOMIZATION
//               </a>
//             </div>
//             <div className="ms-5" style={{ marginRight: '-50px' }}>
//               <Image
//                 src={sectionfootbalproductgraphic}
//                 className="lg-img"
//                 alt="section-footbal-product-graphic"
//               />
//               <div className="ml-140 w-450 mt-5 pe-5">
//                 <div>
//                   <div className="border border-start-0 border-end-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Bite Cushion:
//                     </span>
//                     <div className="w-220 ms-1 bg-white">
//                       <div className="text-white bg-seegreen-700 py-2"></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Impact Rating:
//                     </span>
//                     <div className="w-220 ms-1 bg-white">
//                       <div className="text-white bg-seegreen-700 py-2"></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Ease of Removal:
//                     </span>
//                     <div className="w-220 ms-1 bg-white ">
//                       <div className="text-white bg-yellow-700 py-2 w-50"></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Communication:
//                     </span>
//                     <div className="w-220 ms-1 bg-white pe-5">
//                       <div className="text-white bg-yellow-700 py-2 w-75"></div>
//                     </div>
//                   </div>
//                   <div className="modes-section d-flex align-items-center justify-content-center mt-4">
//                     <Image src={mode3} alt="mode3" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         className={` ${styles.secition4} pr-secition5 pr-section4 `}
//         id="pr-section4"
//         style={{ backgroundImage: `url(${menplayingicehocky.src})` }}
//       >
//         <div
//           className={`${styles.mainContainer} mx-auto px-35 h-100 position-relative`}
//         >
//           <div className="d-flex justify-content-between align-items-center h-100 position-relative container py-4">
//             <div className="text-center order-1 me-5 pe-2">
//               <h4 className="text-white montserrat fs-42 fw-700">
//                 CONTACT &amp; SPORTS
//               </h4>
//               <p className="text-white fs-14 text-center fimaly-multiple-opn">
//                 Tailored for contact sports & optimized for communication
//               </p>
//               <a
//                 href="#pricing-section"
//                 className="rounded-0 bg-seegreen-700 hover hover-able border-0 fs-20 montserrat text-white px-2 py-11 text-decoration-none d-inline-block mt-2"
//               >
//                 PRICING &amp; CUSTOMIZATION
//               </a>
//             </div>
//             <div className="">
//               <Image
//                 src={sectionicehokeyproductgraphic}
//                 className="lg-img"
//                 alt="section-footbal-product-graphic"
//               />
//               <div className="ml-140 w-450 mt-5 pe-5">
//                 <div>
//                   <div className="border border-start-0 border-end-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Bite Cushion:
//                     </span>
//                     <div className="w-220 ms-1 bg-white pe-2">
//                       <div className="text-white bg-seegreen-700 py-2"></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Impact Rating:
//                     </span>
//                     <div className="w-220 ms-1 bg-white pe-2">
//                       <div className="text-white bg-seegreen-700 py-2"></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Ease of Removal:
//                     </span>
//                     <div className="w-220 ms-1 bg-white pe-2">
//                       <div className="text-white bg-seegreen-700 py-2"></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Communication:
//                     </span>
//                     <div className="w-220 ms-1 bg-white pe-2">
//                       <div className="text-white bg-seegreen-700 py-2 "></div>
//                     </div>
//                   </div>
//                   <div className="modes-section d-flex align-items-center justify-content-between mt-4">
//                     <div className="text-center">
//                       <Image src={hockeyicon} alt="Hockey" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Hockey
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <Image src={lacrosseicon} alt="Lacrosse" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Lacrosse
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <Image src={basketballicon} alt="Lacrosse" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Basketball
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <Image src={volleyballicon} alt="Volleyball" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Volleyball
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <Image src={soccericon} alt="Soccer" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Soccer
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <Image src={tenniicon} alt="Tennis" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Tennis
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         className={` ${styles.secition5} pr-secition5 section5`}
//         id="pr-secition5"
//         style={{ backgroundImage: `url(${girlliftingweight.src})` }}
//       >
//         <div
//           className={`${styles.mainContainer} mx-auto px-35 h-100 position-relative`}
//         >
//           <div className="d-flex justify-content-between align-items-center h-100 container py-4">
//             <div className="text-center ps-4">
//               <h4 className="text-white montserrat fs-42 fw-700">
//                 LIFT &amp; STRAIN
//               </h4>
//               <p className="text-white fs-14 text-center fimaly-multiple-opn">
//                 Cushions bite force during non-contact, strenuous activities.
//               </p>
//               <a
//                 href="#pricing-section"
//                 className="rounded-0 bg-seegreen-700 hover hover-able border-0 fs-20 montserrat text-white px-2 py-11 mt-2 text-decoration-none d-inline-block"
//               >
//                 PRICING &amp; CUSTOMIZATION
//               </a>
//             </div>
//             <div className="ms-5" style={{ marginRight: '-50px' }}>
//               <Image
//                 src={sectiongirlweightliftingproductgraphic}
//                 className="lg-img"
//                 alt="section-footbal-product-graphic"
//               />
//               <div className="ml-140 w-450 mt-5 pe-5">
//                 <div>
//                   <div className="border border-start-0 border-end-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Bite Cushion:
//                     </span>
//                     <div className="w-220 ms-1 bg-white">
//                       <div className="text-white bg-seegreen-700 py-2"></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Impact Rating:
//                     </span>
//                     <div className="w-220 ms-1 bg-white">
//                       <div
//                         className="text-white bg-red-1000 py-2"
//                         style={{ width: '15%' }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Ease of Removal:
//                     </span>
//                     <div className="w-220 ms-1 bg-white pe-4">
//                       <div className="text-white bg-seegreen-700 py-2 "></div>
//                     </div>
//                   </div>
//                   <div className="border border-start-0 border-end-0 border-top-0  d-flex align-items-center py-2 ps-3 pe-3">
//                     <span className="text-white fs-16 fimaly-multiple-opn me-2 fw-bold min-w-138 text-end">
//                       Communication:
//                     </span>
//                     <div className="w-220 ms-1 bg-white pe-1">
//                       <div className="text-white bg-seegreen-700 py-2"></div>
//                     </div>
//                   </div>
//                   <div className="modes-section d-flex align-items-center justify-content-center mt-4 gap-4">
//                     <div className="text-center me-2">
//                       <Image src={liftingicon} alt="liftingicon" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Lifting
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <Image src={crossfiticon} alt="crossfiticon" />
//                       <div className="fs-15 fimaly-multiple-opn text-white">
//                         Crossfit
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         className={` ${styles.secition6}  pt-4 pb-4 price-section`}
//         ref={priceRef}
//         id="price_section"
//       >
//         <div className={`mx-auto h-100 px-35  ${styles.mainContainer} py-3`}>
//           <div className="text-center max-w-1000 mx-auto px-4 mt-4">
//             <h3 className="fw-300 text-slate-500 fs-40 montserrat">
//               CHOOSE YOUR SPORT & PROTECTION LEVEL
//             </h3>
//             <div className="mt-4 px-4">
//               <h4 className="fw-400 text-slate-500 fs-20 fimaly-multiple-opn px-5">
//                 ProShield™ offer 3 different mouth guard styles engineered for
//                 your sport and level of competition. Each of our packages
//                 includes the impression creation kit, lab service, and delivery
//                 of your custom-fitted sports guards to your door.
//               </h4>
//             </div>
//           </div>

//           <div className="mt-5 row m-0 w-100  pt-4" id="pricing-section">
//             <div className="col-xl-4 col-lg-8 col-12 mx-auto">
//               {' '}
//               <Pricing
//                 data={{
//                   footbalcombatproductimage,
//                   stars,

//                   title1: 'CONTINUOUS HEAD CONTACT',
//                   title2: 'FOOTBALL & COMBAT',
//                   heading: 'FOOTBALL & COMBAT GUARD + TRAVEL CASE',
//                   price: '149',
//                   cardNumberclass: 'card1',
//                   cardState: cardState == 'card1' && cardState,
//                   setCardState: setCardState,
//                   isDisabled: cardState == 'card1' && 'disabled',
//                 }}
//                 handleProductSelection={handleProductSelection}
//               />
//             </div>
//             <div className="col-xl-4  col-lg-8 col-12 mx-auto">
//               {' '}
//               <Pricing
//                 data={{
//                   footbalcombatproductimage,
//                   stars,
//                   title1: 'PERFORMANCE & COMMUNICATION',
//                   title2: 'CONTACT SPORTS',
//                   heading: 'CONTACT SPORTS GUARD + TRAVEL CASE',
//                   price: '119',
//                   cardNumberclass: 'card2',
//                   cardState: cardState == 'card2' && cardState,
//                   setCardState: setCardState,
//                   isDisabled: cardState == 'card2' && 'disabled',
//                 }}
//                 handleProductSelection={handleProductSelection}
//               />
//             </div>
//             <div className="col-xl-4  col-lg-8 col-12 mx-auto">
//               <Pricing
//                 data={{
//                   footbalcombatproductimage,
//                   stars,
//                   title1: 'BITING & CLENCHING',
//                   title2: 'LIFT & STRAIN',
//                   heading: 'LIFT & STRAIN BITE GUARD + TRAVEL CASE',
//                   price: '99',
//                   cardNumberclass: 'card3',
//                   cardState: cardState == 'card3' && cardState,
//                   setCardState: setCardState,
//                   isDisabled: cardState == 'card3' && 'disabled',
//                 }}
//                 handleProductSelection={handleProductSelection}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         className={` ${styles.secition7} bg-seegreen-700 pr-section7 pt-4 pb-4 mt-4`}
//       >
//         <div className={`mx-auto h-100 px-35  ${styles.mainContainer} py-3`}>
//           <div className="text-center">
//             <h3 className="text-white text-center montserrat fw-700 fs-34">
//               INTERESTED IN TEAM DISCOUNTS &amp; CUSTOMIZATIONS?
//             </h3>
//             <div className="mt-4 pt-2">
//               <button
//                 type="button"
//                 className="bg-transparent fs-14  montserrat text-white px-5 border py-11 letter-spacing-2 hover hover-able text-decoration-none"
//                 onClick={() => setLearnMorePopup(true)}
//               >
//                 Learn more
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         id="howit-work-section"
//         className="ng-section3 mt-5 mb-5 border-bottom pb-5"
//       >
//         <Container className="pb-4 px-0">
//           <div className="mb-3 md-mb-30">
//             <h2 className="fw-300 fs-40 montserrat text-blue-800 text-uppercase text-center pb-5">
//               THE PROSHIELD™ PROCESS
//             </h2>
//           </div>
//           <Row>
//             <div
//               className="col-md-4 aos-init aos-animate row1"
//               data-aos="fade-right"
//               data-aos-duration="2000"
//             >
//               <div className="text-center">
//                 <div className="min-h-5">
//                   <div>
//                     <figure className="m-0">
//                       <div style={{ height: '240px' }}>
//                         <Image
//                           width="343"
//                           src={sportsguardpackagemainimage}
//                           alt={'sportsguardpackagemainimage'}
//                         />
//                       </div>
//                     </figure>
//                   </div>

//                   <div className="mb-2 text-slate-500  mt-4 pt-3">
//                     <div className="open-sans">
//                       <div className="the-process-circle the-process-circle-1 mb-3">
//                         1
//                       </div>
//                       <div className="fs-22 fw-400 fimaly-multiple-opn">
//                         Order the{' '}
//                         <span className="text-seegreen-700 montserrat">
//                           impression kit
//                           <br />{' '}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-center fimaly-multiple-opn">
//                     <div className="fs-14 fw-500 text-slate-500 px-4">
//                       <div>
//                         Order the complete package and make your dentaI
//                         impressions in less than 15 minutes. Send us your
//                         impressions in prepaid envelope (included for US)
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className=" d-flex border-top  mt-3 ps-3">
//                   <div className="border-end  pe-2 pt-2">
//                     <p className="fs-42 fw-300 montserrat mb-0 lh-0 text-slate-500">
//                       15
//                     </p>
//                     <small className="fs-14 text-slate-600 fimaly-multiple-opn">
//                       minutes
//                     </small>
//                   </div>
//                   <div className="ps-2 text-start pt-2">
//                     <p className="text-uppercase fs-16 max-w-220 fimaly-multiple-opn text-slate-700 ">
//                       TIME IT TAKES TO CREATE YOUR DENTAL IMPRESSION
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
//                 <div className="min-h-5">
//                   <div>
//                     <figure className="m-0">
//                       <div style={{ height: '240px' }}>
//                         <Image
//                           src={processimagetwo}
//                           alt="processimagetwo"
//                           width={202}
//                         />
//                       </div>
//                     </figure>
//                   </div>

//                   <div className="mb-2 text-slate-500 mt-4 pt-3">
//                     <div>
//                       <div className="the-process-circle the-process-circle-1 mb-3">
//                         2
//                       </div>
//                       <div className="fs-22 fw-400 fimaly-multiple-opn ">
//                         Our lab creates your{' '}
//                         <span className="text-seegreen-700 montserrat">
//                           guards
//                           <br />{' '}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-center fimaly-multiple-opn">
//                     <div className="fs-14 fw-500 text-slate-500">
//                       <div>
//                         Our lab receives your dental impressions, crafts, an
//                         exact model of your teeth, and hand finishes a truly
//                         custom-fitted sports guard.
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className=" d-flex border-top  mt-3 ps-3">
//                   <div className="border-end  pe-2 min-fit pt-2">
//                     <p className="fs-42 fw-300 montserrat mb-0 lh-0 text-slate-500">
//                       5-8
//                     </p>
//                     <small className="fs-14 text-slate-600 fimaly-multiple-opn">
//                       work days
//                     </small>
//                   </div>
//                   <div className="ps-2  text-start pt-2">
//                     <p className="text-uppercase fs-16 max-w-250 fimaly-multiple-opn text-slate-700">
//                       TIME NEEDED FOR OUR LAB TO CREATE YOUR CUSTOM-FITTED
//                       SPORTS GUARDS
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
//                 <div className="min-h-5">
//                   <div>
//                     <figure className="m-0">
//                       <div style={{ height: '240px' }}>
//                         <Image
//                           width="308"
//                           src={processimagethree}
//                           alt={'process-image-three'}
//                         />
//                       </div>
//                     </figure>
//                   </div>

//                   <div className="mb-2 text-slate-500  mt-4 pt-3">
//                     <div>
//                       <div className="the-process-circle the-process-circle-1 mb-3">
//                         3
//                       </div>
//                       <div className="fimaly-multiple-opn fs-22 fw-400">
//                         Get to{' '}
//                         <span className="text-seegreen-700 montserrat">
//                           work
//                           <br />{' '}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-center fimaly-multiple-opn">
//                     <div className="fs-14 fw-500 text-slate-500 px-4">
//                       <div>
//                         Get maximum protection while you compete.
//                         <b>
//                           <i className="">
//                             Your dental models are kept on file for convenient
//                             reordering.
//                           </i>
//                         </b>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" d-flex border-top mt-3 ps-3">
//                   <div className="border-end  pe-2 min-fit pt-2">
//                     <p className="fs-42 fw-300 montserrat mb-0 lh-0 text-slate-500">
//                       00
//                     </p>
//                     <small className="fs-14 text-slate-600 fimaly-multiple-opn">
//                       forever
//                     </small>
//                   </div>
//                   <div className="ps-2 text-start pt-2">
//                     <p className="text-uppercase fs-16 fimaly-multiple-opn text-slate-700  max-w-250 last12">
//                       YOUR 3D SCANNED DENTAL MODELS ARE KEPT ON FILE FOR
//                       CONVENIENT REORDERING
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Row>
//           <div className="text-center mt-5 pt-4">
//             <div className="text-center mt-3">
//               <a
//                 href="#pricing-section"
//                 className="min-w-280 px-5 text-uppercase text-decoration-none py-2 d-inline-block text-center fs-20 text-white  fw-300 bg-blue-800  hover-able hover hove-dark-grey montserrat"
//               >
//                 see pricing
//               </a>
//             </div>
//           </div>
//         </Container>
//       </section>
//       <section id="ng-section5" className="ng-section5 mb-5 mt-5">
//         <Container>
//           <div className="text-center max-w-870 mx-auto px-4">
//             <h3 className="fw-300 text-slate-500 fs-40 montserrat">
//               SPORTS GUARD PACKAGES INCLUDE
//             </h3>
//             <div className="mt-4">
//               <h4 className="fw-400 text-slate-500 fs-20 fimaly-multiple-opn">
//                 PROSHIELD™ custom-fitted sports guards are hand-crafted by
//                 dental lab technicians. Your package includes custom-fitted
//                 guards, rugged travel case, and everything you need to reduce
//                 injury and expensive dentist visits.
//               </h4>
//             </div>
//           </div>
//           <div
//             className="text-center mt-5 aos-init aos-animate"
//             data-aos="fade-up"
//             data-aos-duration="2000"
//           >
//             <Image
//               src={sportsguardpackagemainimage}
//               width={380}
//               className="mt-2"
//               alt="image"
//             />
//           </div>
//           <div className="mt-5 pt-4 max-w-1100 mx-auto border-color-dark-300">
//             <Row className="bg-yello-100 px-3 border-bottom b-color-slate-700 lh-22">
//               <Col
//                 md={6}
//                 className="border-end b-color-slate-700 py-4 d-flex align-items-center"
//               >
//                 <div
//                   className="d-flex align-items-center pe-3 aos-init aos-animate"
//                   data-aos="fade-right"
//                   data-aos-duration="2000"
//                 >
//                   <div className="img-box pe-1">
//                     <Image
//                       src={GraphicModel}
//                       alt={GraphicModel.src}
//                       width={160}
//                     />
//                   </div>
//                   <div className="ps-4">
//                     <p className="fimaly-multiple fs-17 text-slate-500 open-sans text-slate-500 mb-0 pe-3">
//                       <strong>
//                         <span className="text-seegreen-700 fw-600">
//                           Professional Lab Service
//                         </span>
//                       </strong>
//                       <br />
//                       Professional dental lab will receive your impressions,
//                       create an exact model of your teeth, and fashion a truly
//                       custom-fitted night guard.
//                     </p>
//                   </div>
//                 </div>
//               </Col>

//               <Col md={6} className="py-4 d-flex align-items-center">
//                 <div
//                   className="d-flex align-items-center ps-3 aos-init aos-animate"
//                   data-aos="fade-left"
//                   data-aos-duration="2000"
//                 >
//                   <div className="img-box pe-1">
//                     <Image
//                       src={GraphicNightGuardOnly}
//                       alt={'GraphicNightGuardOnly'}
//                       width={140}
//                     />
//                   </div>
//                   <div className="ps-4 pe-4">
//                     <p className="fimaly-multiple fs-17 text-slate-500 open-sans text-slate-500 mb-0 pe-5">
//                       <strong>
//                         <span className="text-seegreen-700 fw-600">
//                           Custom-fitted Night Guards
//                         </span>
//                       </strong>
//                       <br />
//                       Exactly like your dentist would make. Soft yet durable.
//                       Fits your teeth perfectly and will not fall out.
//                     </p>
//                   </div>
//                 </div>
//               </Col>
//             </Row>

//             <Row
//               className="px-4 border-bottom b-color-slate-700 aos-init aos-animate lh-22"
//               data-aos="fade-right"
//               data-aos-duration="2000"
//             >
//               <Col
//                 md={6}
//                 className="border-end b-color-slate-700 py-4 ps-0 d-flex align-items-center"
//               >
//                 <div className="d-flex align-items-center">
//                   <div className="img-box pe-1">
//                     <Image
//                       src={graphicimpressions}
//                       alt={'graphicimpressions'}
//                       width={155}
//                     />
//                   </div>
//                   <div className="ps-4 pe-4">
//                     <p className="fimaly-multiple fs-17 text-slate-500 open-sans text-slate-500 pe-5">
//                       <strong>
//                         <span className="fw-600">1 Impression Tray</span>
//                       </strong>
//                       <br />
//                       Proprietary impression system allows you to make a perfect
//                       impression and redo it if you make a mistake!
//                     </p>
//                   </div>
//                 </div>
//               </Col>
//               <Col md={6} className="py-4 d-flex align-items-center">
//                 <div
//                   className="d-flex align-items-center ps-3 aos-init aos-animate"
//                   data-aos="fade-left"
//                   data-aos-duration="2000"
//                 >
//                   <div className="img-box pe-1">
//                     <Image
//                       src={domesticprepaidpostageimage}
//                       alt={'domestic-pre-paid-postage-image'}
//                       width={140}
//                       className="p-1"
//                     />
//                   </div>
//                   <div className="ps-4">
//                     <p className="fimaly-multiple fs-17 text-slate-500 open-sans text-slate-500 pe-5">
//                       <strong>
//                         <span className="fw-700">
//                           3-Way,
//                           <span className="text-seegreen-700"> pre-paid </span>
//                           postage
//                         </span>
//                       </strong>
//                       <br />
//                       all postage between you and the lab is covered (2-way for
//                       international orders)
//                     </p>
//                   </div>
//                 </div>
//               </Col>
//             </Row>

//             <Row className="p-4 bg-yello-100 lh-22">
//               <Col md={12}>
//                 <div
//                   className="d-flex align-items-center justify-content-center ps-3 aos-init aos-animate"
//                   data-aos="fade-left"
//                   data-aos-duration="2000"
//                 >
//                   <div className="img-box">
//                     <Image
//                       src={lifetimereordersimage}
//                       alt={'life-time-reorders-image'}
//                     />
//                   </div>
//                   <div className="ps-5" style={{ maxWidth: '340px' }}>
//                     <p className="fimaly-multiple fs-17 text-slate-500 open-sans text-slate-500">
//                       <strong>
//                         <span className="fw-600">
//                           <span>Lifetime </span>
//                           <span className="text-seegreen-700 fw-700">
//                             Reorders
//                           </span>
//                         </span>
//                       </strong>
//                       <br />
//                       Your dental impressions are kept on file. If you lose or
//                       wear down your guards, we can make you new ones fast!
//                     </p>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//           <div className="text-center mt-70 pt-2 mb-70">
//             <a
//               href="#pricing-section"
//               className="min-w-280  text-uppercase text-decoration-none min-h-50 d-inline-block text-center fs-20 text-white  fw-300 bg-blue-800  hover-able hover hove-dark-grey montserrat "
//             >
//               see pricing
//             </a>
//           </div>
//         </Container>
//       </section>
//       <section
//         id="ng-section6"
//         className="ng-section6 mb-5 bg-blue-800 py-5 mt-5"
//       >
//         <div className="max-w-1130 mx-auto px-4 pb-5">
//           <div className="text-center max-w-1000 mx-auto px-4 mb-4">
//             <div className="mt-4">
//               <h4 className="fw-400 text-slate-500 fs-22 fimaly-multiple-opn mb-4 text-white">
//                 Get the facts{' '}
//               </h4>
//               <h3 className="fw-400 text-seegreen-700 fs-38 montserrat">
//                 PROSHIELD™ MOUTH GUARD FAQ
//               </h3>
//             </div>
//           </div>
//           <div className="accordion mx-auto px-4" style={{ maxWidth: '760px' }}>
//             <div className="accordion accordion-flush" id="ngaccordion">
//               <div className="accordion-item bg-transparent">
//                 <h4 className="accordion-header" id="flush-headingOne">
//                   <button
//                     className="fs-20 text-white fw-400 fimaly-multiple-opn accordion-button collapsed bg-transparent shadow-none hover-text hover-seegren"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#ngac1"
//                     aria-expanded="false"
//                     aria-controls="ngac1"
//                   >
//                     Do you offer team discounts or special request
//                     customization?
//                   </button>
//                 </h4>
//                 <div
//                   id="ngac1"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="flush-headingOne"
//                   data-bs-parent="#ngaccordion"
//                 >
//                   <div className="accordion-body text-white">
//                     Yes, to both! We have serviced hundreds of sports teams with
//                     group discounts and custom colors and logos. Contact our
//                     customer service team at support@smilebrilliant.com to get
//                     more information on pricing or advanced customization
//                     options.
//                   </div>
//                 </div>
//               </div>

//               <div className="accordion-item bg-transparent">
//                 <h2
//                   className="accordion-header fs-20 text-slate-500 fw-400 montserrat"
//                   id="flush-headingTwo"
//                 >
//                   <button
//                     className=" fs-20 text-white fw-400 fimaly-multiple-opn accordion-button collapsed bg-transparent shadow-none hover-text hover-seegren"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#ngac2"
//                     aria-expanded="false"
//                     aria-controls="ngac2"
//                   >
//                     How does your lifetime reorder program work?
//                   </button>
//                 </h2>
//                 <div
//                   id="ngac2"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="flush-headingTwo"
//                   data-bs-parent="#ngaccordion"
//                 >
//                   <div className="accordion-body text-white">
//                     When we receive your dental impressions, our lab does a
//                     precision laser scan to create a 3D digital model of your
//                     exact teeth. This model is kept on file in the event that
//                     you need a replacement. Reorders can be made through the my
//                     account section of our website. Simply login and reorder.
//                     Please note that younger athletes are still growing. This
//                     means that their teeth may shift and a new impression will
//                     be required. If this is the case, please login to your my
//                     account and contact our customer service team. We can offer
//                     up to 50% discounts for growing athlete remakes.
//                   </div>
//                 </div>
//               </div>

//               <div className="accordion-item bg-transparent">
//                 <h2 className="accordion-header" id="flush-headingThree">
//                   <button
//                     className="fs-20 text-white fw-400 fimaly-multiple-opn accordion-button collapsed bg-transparent shadow-none hover-text hover-seegren"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#ngac3"
//                     aria-expanded="false"
//                     aria-controls="ngac3"
//                   >
//                     What if my mouth guard does not fit properly?
//                   </button>
//                 </h2>
//                 <div
//                   id="ngac3"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="flush-headingThree"
//                   data-bs-parent="#ngaccordion"
//                 >
//                   <div className="accordion-body text-white">
//                     Your ProShield mouth guard is made using an exact replica of
//                     your teeth from the dental impressions you send in. If for
//                     some reason they do not fit, it is likely due to a poor
//                     impression. However, if the fit is good but the size edges
//                     are too tall, you can trip the tray as you need with a
//                     scissors.
//                   </div>
//                 </div>
//               </div>

//               <div className="accordion-item bg-transparent">
//                 <h2 className="accordion-header" id="flush-heading4">
//                   <button
//                     className="fs-20 text-white fw-400 fimaly-multiple-opn accordion-button collapsed bg-transparent shadow-none hover-text hover-seegren"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#ngac4"
//                     aria-expanded="false"
//                     aria-controls="ngac4"
//                   >
//                     What if I make a mistake on my dental impression?
//                   </button>
//                 </h2>
//                 <div
//                   id="ngac4"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="flush-headingThree"
//                   data-bs-parent="#ngaccordion"
//                 >
//                   <div className="accordion-body text-white">
//                     Our proprietary impression material is uniquely formulated
//                     to be reshaped. If you make a mistake with your impression,
//                     you can simply redo it. We are the only mouth guard company
//                     to offer this product! Please remember, whenever you make an
//                     impression, send us pictures to support@smilebrilliant.com
//                     to get confirmation that they will work. This will save you
//                     a lot of time and money!
//                   </div>
//                 </div>
//               </div>

//               <div className="accordion-item bg-transparent">
//                 <h2 className="accordion-header" id="flush-heading4">
//                   <button
//                     className="fs-20 text-white fw-400 fimaly-multiple-opn accordion-button collapsed bg-transparent shadow-none hover-text hover-seegren"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#ngac5"
//                     aria-expanded="false"
//                     aria-controls="ngac5"
//                   >
//                     How do I know which ProShield mouth guard option to choose?
//                   </button>
//                 </h2>
//                 <div
//                   id="ngac5"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="flush-headingThree"
//                   data-bs-parent="#ngaccordion"
//                 >
//                   <div className="accordion-body text-white">
//                     We have done our best to provide as much detail on the
//                     different product offerings. However, if you are unsure of
//                     which product to purchase for yourself or your young
//                     athlete, please give us a call, email, or use our live chat
//                     system on our website. Our experienced customer service team
//                     can help you make the right selection!
//                   </div>
//                 </div>
//               </div>

//               <div className="accordion-item bg-transparent">
//                 <h2 className="accordion-header" id="flush-heading4">
//                   <button
//                     className="fs-20 text-white fw-400 fimaly-multiple-opn accordion-button collapsed bg-transparent shadow-none hover-text hover-seegren"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#ngac6"
//                     aria-expanded="false"
//                     aria-controls="ngac6"
//                   >
//                     Why are ProShield mouth guards cheaper than a dentist?
//                   </button>
//                 </h2>
//                 <div
//                   id="ngac6"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="flush-headingThree"
//                   data-bs-parent="#ngaccordion"
//                 >
//                   <div className="accordion-body text-white">
//                     ProShield™ custom-fitted mouth guards are the same exact
//                     fit and protection you’d get from your local dentist. Our
//                     products are 30% – 70% cheaper because we eliminate the
//                     multiple trips to the dentist. Much of the cost for your
//                     dentist is the “chair time.” We allow you to make your own
//                     impressions and use the same dental lab to fabricate a
//                     premium quality sports mouth guard.
//                   </div>
//                 </div>
//               </div>

//               <div className="accordion-item bg-transparent">
//                 <h2 className="accordion-header" id="flush-heading4">
//                   <button
//                     className="fs-20 text-white fw-400 fimaly-multiple-opn accordion-button collapsed bg-transparent shadow-none hover-text hover-seegren"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#ngac7"
//                     aria-expanded="false"
//                     aria-controls="ngac7"
//                   >
//                     Why is a custom-fitted mouth guard offer better protection?
//                   </button>
//                 </h2>
//                 <div
//                   id="ngac7"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="flush-headingThree"
//                   data-bs-parent="#ngaccordion"
//                 >
//                   <div className="accordion-body text-white">
//                     For athletes (and parents) that demand the highest quality
//                     protection for both costly dental bills and brain trauma, a
//                     custom-fitted guard is the premium option. Custom mouth
//                     guards are hand-made using an exactly replica of your mouth.
//                     They will not fall out and maintain a snug fit. The custom
//                     fits holds teeth in place more securely and does not allow
//                     for wiggle. Further, a custom-fitted mouth guard reduces
//                     choking hazard.
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center mt-4 pt-2">
//               <a
//                 href="#pricing-section"
//                 className="bg-seegreen-700  fs-20 text-uppercase montserrat text-white px-5 py-12  hover hover-able text-decoration-none"
//               >
//                 GET THE PACKAGE
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="ng-section7" className="ng-section7 mb-5 py-7">
//         <Container>
//           <div className="text-center max-w-1000 mx-auto px-2 mb-5">
//             <div>
//               <div>
//                 <Image src={percentguaranteelogo} alt="image" />
//               </div>
//               <div className="mt-6 mb-4">
//                 <Image src={googletrustedstore} alt="image" />
//               </div>
//             </div>
//             <h3 className="fw-400 text-seegreen-700 fs-34 montserrat">
//               45 DAY TRIAL. EASY REORDER FOR LIFE
//             </h3>
//             <div className="mt-4">
//               <p className="fw-300 text-slate-500 fs-20 montserrat">
//                 ProShield™ sports mouth guards are custom made to provide
//                 optimal protection for competitive athletes at all levels. Our
//                 unique process & professional dental lab ensures a perfect fit.
//                 Smile Brilliant stand behind the science and quality of
//                 everything we sell with a 100% money back guarantee. If you are
//                 not completely satisfied with your experience, we&apos;ll take it
//                 back. If you don’t absolutely love it, we’ll pick it up for free
//                 and give a full refund (including shipping).
//               </p>
//             </div>
//             <h3 className="fw-400 text-slate-500 fs-31 montserrat mt-5">
//               NO STRINGS ATTACHED
//             </h3>
//             <div className="mt-4">
//               <a
//                 href="#pricing-section"
//                 className="rounded-0 bg-seegreen-700 border-0 fs-20 montserrat text-white  px-2 py-8 mt-1 d-inline-block px-5 text-decoration-none hover hover-able"
//               >
//                 YOUR PROSHIELD™
//               </a>
//             </div>
//           </div>
//         </Container>
//       </section>
//       <div
//         className={`${
//           learnMorePopup && 'learnMorePopup'
//         } learn_more_popup fixed-top w-100 h-100 start-0 end-0 top-0 bottom-0 d-flex justify-content-center`}
//       >
//         <div
//           className="fixed-top w-100 h-100 start-0 end-0 top-0"
//           style={{ background: '#0000006e', zIndex: '999999' }}
//           onClick={() => setLearnMorePopup(false)}
//         ></div>
//         <div
//           className={`bg-white h-fit popup-content-box`}
//           style={{ width: '32rem', border: '5px solid #69be28' }}
//         >
//           <div className="fimaly-multiple-opn text-slate-500">
//             <h2 className="border-bottom border-1 fs-16 fw-600 p-3">
//               Do you offer team discounts or special request customization?
//             </h2>
//             <p className="fs-14 p-3">
//               Yes, to both! We have serviced hundreds of sports teams with group
//               discounts and custom colors and logos. Contact our customer
//               service team at support@smilebrilliant.com to get more information
//               on pricing or advanced customization options.
//             </p>
//             <div className="p-3">
//               <button
//                 className="border-0 w-100 bg-seegreen-700 py-11 text-white text-uppercase fs-14 letter-spacing-2 montserrat"
//                 onClick={() => setLearnMorePopup(false)}
//               >
//                 got it!
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProshieldComponent;
