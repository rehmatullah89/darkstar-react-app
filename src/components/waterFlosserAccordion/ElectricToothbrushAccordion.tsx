'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import React, { useState, useEffect } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import styles from './faq.module.css';
import iconpdfwhite from '../../../public/assets/images/electricToothbrush/icon-pdf-white.png';
import holdingelectricbrush from '../../../public/assets/holding-caripro-flosser-brush-1.5a9f4711.webp';

const ElectricToothbrushAccordion = () => {
  const [openItem, setOpenItem] = useState<number | string | null>(null);

  const items = [
    {
      header: 'SEE FULL TECHNICAL SPECIFICATIONS ',
      body: (
        <div>
          <div className={styles.accordion_body} id="best_brush_accordion">
            <div className={`${styles.accordion_row} row `}>
              <div className={`${styles.mobile_col_faq} col-lg-6 col-12 pe-5`}>
                <div>
                  <h5 className="text-start fw-700 fs-21 montserrat">
                    Power &amp; Charging
                  </h5>
                  <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                    <div className={styles.padding_bottom}>
                      <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                        <li className="fw-700">CHARGING: </li>
                        <li className="fw-700"> CHARGING ADAPTOR: </li>
                        <li className="fw-700"> BATTERY TYPE:</li>
                        <li className="fw-700"> VOLTAGE: </li>
                        <li className="fw-700"> BATTERY LIFE: </li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">5 hour rapid charge</p>
                      <p className="m-0 fw-400 fs-16">
                        Universal USB & wall adaptor
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        1600 mAh rechargeble Litium ION
                      </p>
                      <p className="m-0 fw-400 fs-16 text-start">
                        100-240V (US & International use)
                      </p>
                      <p className="m-0 fw-400 fs-16 text-start">
                        Up to 4 weeks on full charge*
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <h5 className="text-start fw-700 fs-21 montserrat">
                    Finish & Ease of Use
                  </h5>
                  <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                    <div className={styles.padding_bottom}>
                      <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                        <li className="fw-700">COOR: </li>
                        <li className="fw-700"> HANDLE: </li>
                        <li className="fw-700"> DESIGN:</li>
                        <li className="fw-700"> HEAD REPLACEMENT: </li>
                        <li className="fw-700"> BATTERY INDICATOR: </li>
                        <li className="fw-700"> DISPLAY: </li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">Graphite matte gray</p>
                      <p className="m-0 fw-400 fs-16">
                        Soft-touch silicone rubber grip{' '}
                      </p>
                      <p className="m-0 fw-400 fs-16">Ergonomic slim design </p>
                      <p className="m-0 fw-400 fs-16">
                        Quick-click brush head replacement{' '}
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        {' '}
                        lluminated icon indicates charge
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        Operating mode indicator lights{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <h5 className="text-start fw-700 fs-21 montserrat">
                    Warranty & Durability
                  </h5>
                  <div
                    className={`${styles.padding_bottom} d-flex align-items-center justify-content-between border-bottom border-top pt-2 `}
                  >
                    <div>
                      <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                        <li className="fw-700">WARRANTY:</li>
                        <li className="fw-700">WATERPROOF:</li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">
                        {' '}
                        2 year limited warranty
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        {' '}
                        PVx7 Rated (3ft water for 30 min)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.mobile_col_faq} col-lg-6 col-12 pe-5`}>
                <div>
                  <h5 className="text-start fw-700 fs-21 montserrat">
                    4 Flosser Tips
                  </h5>
                  <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                    <div className={styles.padding_bottom}>
                      <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                        <li className="fw-700">STANDARD JET: </li>
                        <li className="fw-700">BRUSH TIP: </li>
                        <li className="fw-700">ORTHO TIP: </li>
                        <li className="fw-700">PERIO POCKET: </li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">
                        {' '}
                        Optimal cleaning results
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        {' '}
                        Implants, crowns & bridges
                      </p>
                      <p className="m-0 fw-400 fs-16">Ideal for braces</p>
                      <p className="m-0 fw-400 fs-16">
                        {' '}
                        For periodontal pockets
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <h5 className="text-start fw-700 fs-21 montserrat">
                    Performance
                  </h5>
                  <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                    <div>
                      <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                        <li className="fw-700">PRESSURE RANGE: </li>
                        <li className="fw-700">RESERVOIR: </li>
                        <li className="fw-700">AUTO-TIMER: </li>
                        <li className="fw-700">FLOW RATE: </li>
                        <li className="fw-700">3 CLEANING MODES: </li>
                        <li className="fw-700">ROTATING TIP: </li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">
                        44-75 psi (3.103 to 5.171 Bar)
                      </p>
                      <p className="m-0 fw-400 fs-16">155 ml (5.5 oz)</p>
                      <p className="m-0 fw-400 fs-16">2 minute auto shut-off</p>
                      <p className="m-0 fw-400 fs-16">10 oz / minute</p>
                      <p className="m-0 fw-400 fs-16">Normal / Soft / Pulse</p>
                      <p className="m-0 fw-400 fs-16">360 Degrees</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.mob_text_center} mt-4 pt-3 text-center`}
                >
                  <a
                    className="fs-14 fw-400 fimaly-multiple-opn d-inline-block text-decoration-none text-white"
                    href="/assets/pdf/Flosser-Brochure_Letter-Size_2021.4.28.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={iconpdfwhite} alt="image" />
                    &nbsp; Download PDF instruction manual
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleAccordionToggle = (eventKey: number | null | string) => {
    setOpenItem(prevOpenItem => (prevOpenItem === eventKey ? null : eventKey));
  };

  useEffect(() => {
    if (openItem === 0) {
      const targetElement = document.getElementById('best_brush_accordion');
      if (targetElement) {
        const offset = 150;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [openItem]);

  return (
    <div>
      <div className="mt-4 pt-2 text-center" style={{ marginBottom: '35px' }}>
        <ScrollButton
          className={`${styles.btn_primary} hover hover-able`}
          targetId="mySection"
          style={{ textDecoration: 'none' }}
        >
          ORDER NOW
        </ScrollButton>
        <br />
        <a
          className="border-0 bg-transparent text-decoration-none d-inline-block fs-14 hover-text-orange fimaly-multiple-opn cursor-pointer text-blue-800 mt-2 pt-1"
          onClick={(e) => {
            e.preventDefault();
            handleAccordionToggle(0);
          }}
        >
          See full technical specifications
        </a>
      </div>
      <div
        className={`${styles.image_text_wrapper} position-relative`}
        style={{ backgroundImage: `url(${holdingelectricbrush.src})` }}
      >
        <div className="color-layer top-0 start-0 position-absolute color-layer-opacity-white d-none sm-d-block"></div>
        <Container className={`${styles.background_img_section} pt-5 position-relative`}>
          <div className={`${styles.mobile_img_section} text-slate-500 montserrat text-center col-6 ms-auto pt-3`}>
            <h2 className="fs-34 fw-700">
            50% more effective than <br /> string floss at improving gum <br /> health
            </h2>
          </div>
        </Container>
      </div>
      <Accordion className={"faqAccordian"} id="#best_brush_accordion">
        {items.map((item, index) => (
          <Card key={index} className={"faq_Card"}>
            <Card.Header className={styles.faq_card_header}>
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="accordion-header"
                onClick={() => handleAccordionToggle(index)}
              >
                <span className={"FAQitemsHeader"}>
                  {item.header}
                  <FontAwesomeIcon
                    icon={openItem === index ? faAngleDown : faAngleRight}
                    className={"FAQ_Icon"}
                  />
                </span>
              </div>
            </Card.Header>
            {openItem === index && (
              <Card.Body className={styles.faqBody}>
                {item.body}
              </Card.Body>
            )}
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default ElectricToothbrushAccordion;
