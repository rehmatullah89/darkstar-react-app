'use client';

import React from 'react';
import styles from './index.module.css';
import graphicone from '../../../../public/assets/sensitive-teeth-guide/graphic-one.webp';
import whiteningbleachingtooth from '../../../../public/assets/sensitive-teeth-guide/whitening-bleaching-tooth.webp';
import remediesicon from '../../../../public/assets/sensitive-teeth-guide/remedies-icon.webp';
import Image from 'next/image';

const index = () => {
  return (
    // <Layout bgColor="">
    //   <div
    //     className={`pt-80 ${styles.sensitiveTeethGuidee} sensitive-teeth-guide`}
    //     id="sensitive-teeth-guide"
    //   >
    //     <section
    //       className={`section section1 d-flex align-items-center justify-content-center banner-section bg-dark-blue-1000 ${styles.sensitiveTeethGuide}`}
    //     >
    //       <div className={`${styles.bannerText} padding-top sm-py-50`}>
    //         <h1 className="text-white text-center fs-78 text-uppercase fw-900 montserrat sm-fs-34 sm-px-30">
    //           <span className="text-red-100">
    //             Top 7 Causes &amp; <br />
    //             Remedies
    //           </span>{' '}
    //           for Extra Sensitive Teeth
    //         </h1>
    //         <h3 className="text-white text-center fs-56 montserrat fw-500 pt-2 sm-fs-18">
    //           The complete guide to tooth sensitivity
    //         </h3>
    //       </div>
    //     </section>
    //     <section className={`section bg-yellow-800 py-5 ${styles.section2}`}>
    //       <div className="container ps-5 sm-px-0">
    //         <div className="d-flex m-0 sm-d-block">
    //           <div className="pe-5 ps-4 pt-4 sm-px-30 sm-pt-0">
    //             <div className="text text-blue-1000 montserrat pt-3 sm-pt-0 sm-text-center">
    //               <h4 className="fs-42 fw-900 sm-fs-26">
    //                 If you experience any form of tooth sensitivity, you’re not
    //                 alone!
    //               </h4>
    //               <div className="sm-text-center sm-d-block d-none my-4">
    //                 <Image
    //                   src={graphicone.src}
    //                   alt="image"
    //                   width={528}
    //                   className="h-auto sm-max-w-240"
    //                 />
    //               </div>
    //               <div>
    //                 <p className="fs-32 sm-fs-22 fw-500 pt-4">
    //                   <strong>
    //                     An estimated 1 in 8 adults experience sharp pain or
    //                     discomfort{' '}
    //                   </strong>
    //                   while consuming hot, cold or acidic foods.
    //                 </p>
    //               </div>
    //               <div>
    //                 <p className="fs-32 sm-fs-22 fw-500">
    //                   To understand what causes tooth sensitivity & how to
    //                   permanently stop the pain, we&apos;ve outlined the top 7 cause
    //                   & remedies you should know!
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="sm-text-center sm-d-none">
    //             <Image
    //               src={graphicone.src}
    //               alt="image"
    //               width={528}
    //               className="h-auto sm-max-w-240"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className={`section bg-yellow-800 py-5 ${styles.section3}`}>
    //       <div className="container ps-5 sm-px-0">
    //         <div className="d-flex m-0 sm-d-block">
    //           <div className="pe-5 ps-4 pt-4 sm-px-30 sm-pt-0">
    //             <div className="text text-blue-1000 montserrat pt-3 sm-pt-0 sm-text-center">
    //               <h4 className="fs-42 fw-900 sm-fs-26">
    //                 If you experience any form of tooth sensitivity, you’re not
    //                 alone!
    //               </h4>
    //               <div className="sm-text-center sm-d-block d-none my-4">
    //                 <Image
    //                   src={graphicone.src}
    //                   alt="image"
    //                   width={528}
    //                   className="h-auto sm-max-w-240"
    //                 />
    //               </div>
    //               <div>
    //                 <p className="fs-32 sm-fs-22 fw-500 pt-4">
    //                   <strong>
    //                     An estimated 1 in 8 adults experience sharp pain or
    //                     discomfort{' '}
    //                   </strong>
    //                   while consuming hot, cold or acidic foods.
    //                 </p>
    //               </div>
    //               <div>
    //                 <p className="fs-32 sm-fs-22 fw-500">
    //                   To understand what causes tooth sensitivity & how to
    //                   permanently stop the pain, we&apos;ve outlined the top 7 cause
    //                   & remedies you should know!
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="sm-text-center sm-d-none">
    //             <Image
    //               src={graphicone.src}
    //               alt="image"
    //               width={528}
    //               className="h-auto sm-max-w-240"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className={`section bg-blue-400 py-5 ${styles.section3}`}>
    //       <div className="container ps-5 sm-px-15">
    //         <div className="d-flex m-0 sm-d-block">
    //           <div className="text text-blue-1000 mx-auto montserrat pt-3 sm-pt-0 sm-text-center d-flex align-items-center">
    //             <div className="bg-red-100 stepCounterInner fw-900 montserrat fs-62 h-fit text-white text-center border border-2 border-color-white me-3 p-0 h-auto w-auto">
    //               1
    //             </div>
    //             <h4 className="fw-900 fs-62 sm-fs-32 montserrat lh60 text-start sm-lh-30">
    //               WHITENING
    //               <br />
    //               OR BLEACHING
    //             </h4>
    //           </div>
    //         </div>
    //         <div className="text fs-24 montserrat text-blue-400 pt-4 sm-text-center">
    //           <strong>
    //             <span className="text-red-100">CAUSE:</span> Teeth whitening
    //             uses active ingredients to open the pores of your teeth,
    //             allowing stains to be lifted over time.
    //           </strong>
    //           The whitening process causes temporary dehydration which can
    //           constrict the teeth and cause pressure on the nerve. This is
    //           completely normal but there are several products and methods that
    //           you can use to reduce (or eliminate) sensitivity all together.
    //         </div>

    //         <div>
    //           <div className="text-center">
    //             <Image
    //               src={whiteningbleachingtooth.src}
    //               alt="image"
    //               width={773}
    //               className="h-auto mx-auto"
    //             />
    //           </div>
    //           <div className="bg-blue-1000 pb-5 position-relative ">
    //             <div
    //               className="montserrat fs-34 fw-900 text-white px-4 py-2 bg-red-100 d-flex align-items-center justify-content-center w-fit mx-auto"
    //               style={{ marginTop: '29px' }}
    //             >
    //               <div>
    //                 <Image
    //                   src={remediesicon.src}
    //                   alt="imag"
    //                   width={58}
    //                   height={58}
    //                 />
    //               </div>
    //               REMEDIES:
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className={`section ${styles.section3}`}></section>
    //     <section className={`section ${styles.section4}`}></section>
    //     <section className={`section ${styles.section5}`}></section>
    //   </div>
    // </Layout>
    <></>
  );
};

export default index;
