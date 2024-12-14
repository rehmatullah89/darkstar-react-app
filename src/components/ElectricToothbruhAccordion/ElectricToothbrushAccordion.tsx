"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollButton from "@/ui/resuable-componets/ScrollButton";
import React, { useState, useEffect } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./faq.module.css";
import iconpdfwhite from "../../../public/assets/images/electricToothbrush/icon-pdf-white.png";
import holdingelectricbrush from "../../../public/assets/images/electricToothbrush/holding-electric-brush.webp";

const ElectricToothbrushAccrodion = () => {
  const [openItem, setOpenItem] = useState<number | string | null>(null);
  const items = [
    {
      header: "SEE FULL TECHNICAL SPECIFICATIONS ",
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
                        <li className="fw-700"> BATTERY TYPE: </li>
                        <li className="fw-700"> VOLTAGE:</li>
                        <li className="fw-700"> BATTERY LIFE: </li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">
                        Wireless induction charging dock
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        800 mAh rechargeable Lithium ION
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        110-240V (US & International use)
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
                        Soft-touch silicone rubber grip
                      </p>
                      <p className="m-0 fw-400 fs-16">Ergonomic slim design</p>
                      <p className="m-0 fw-400 fs-16">
                        Quick-click brush head replacement
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        lluminated icon indicates charge
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        Operating mode indicator lights
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
                        2 year limited warranty
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        PVx7 Rated (3ft water for 30 min)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.mobile_col_faq} col-lg-6 col-12 pe-5`}>
                <div>
                  <h5 className="text-start fw-700 fs-21 montserrat">Modes</h5>
                  <div className="d-flex align-items-center justify-content-between border-bottom border-top pt-2">
                    <div className={styles.padding_bottom}>
                      <ul className="fimaly-multiple-opn fs-16 pt-2 ps-3 text-uppercase">
                        <li className="fw-700">CLEAN: </li>
                        <li className="fw-700">WHITE: </li>
                        <li className="fw-700">MASSAGE: </li>
                        <li className="fw-700">GUM CARE: </li>
                        <li className="fw-700">SENSITIVE: </li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">
                        Optimal cleaning results
                      </p>
                      <p className="m-0 fw-400 fs-16">High speed polishing</p>
                      <p className="m-0 fw-400 fs-16">Gentle stimulation</p>
                      <p className="m-0 fw-400 fs-16">
                        Timed pulse gum & gumline health
                      </p>
                      <p className="m-0 fw-400 fs-16">
                        Ideal for sensitive teeth
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
                        <li className="fw-700">BRUSHING ACTION: </li>
                        <li className="fw-700">AUTO-TIMER: </li>
                        <li className="fw-700">INTERVAL TIMER: </li>
                      </ul>
                    </div>
                    <div>
                      <p className="m-0 fw-400 fs-16">
                        40,000 vibrations / minute (VPM)
                      </p>
                      <p className="m-0 fw-400 fs-16">2 minute routine timer</p>
                      <p className="m-0 fw-400 fs-16">
                        30 second quadrant timer
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.mob_text_center} mt-4 pt-3`}>
                  <a
                    className="fs-14 fw-400 fimaly-multiple-opn d-inline-block text-decoration-none text-white"
                    href="/assets/pdf/cariPRO-CP2001A-Instruction-Manual.pdf"
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
    setOpenItem((prevOpenItem) =>
      prevOpenItem === eventKey ? null : eventKey
    );
  };

  useEffect(() => {
    if (openItem !== null) {
      const targetElement = document.getElementById("best_brush_accordion");
      if (targetElement) {
        const offset = 150; // Adjust this value as needed
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [openItem]);
  return (
    <div>
      <div className="mt-4 pt-2 text-center" style={{ marginBottom: "40px" }}>
        <ScrollButton
          className={`${styles.btn_primary} hover hover-able`}
          targetId="mySection"
          style={{ textDecoration: "none" }}
        >
          ORDER NOW
        </ScrollButton>
        <br />
        <a
          className="border-0 bg-transparent text-decoration-none d-inline-block fs-14 hover-text-orange fimaly-multiple-opn cursor-pointer text-blue-800 mt-2 pt-1"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            handleAccordionToggle(0); // Open the first accordion item (index 0)
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
        <Container
          className={`${styles.background_img_section} pt-5 position-relative `}
        >
          <div
            className={`${styles.mobile_img_section} text-slate-500 montserrat text-center col-4 ms-auto pt-3`}
          >
            <h2 className="fs-34 fw-700">
              THE BEST ELECTRIC TOOTHBRUSH AT HALF THE PRICE
            </h2>
            <p className="fs-17 mt-4">
              Introducing the cariPRO™ Electric Toothbrush by Smile Brilliant.
              Same quality, better <br /> features, and much better value.{" "}
              <br /> Considering an electric toothbrush or in <br /> the market
              for a replacement? Know what <br /> you’re paying for.
            </p>
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
                &nbsp;&nbsp;&nbsp;
                <span className={"FAQitemsHeader"}>
                  {` ${item.header}`}{" "}
                  <FontAwesomeIcon
                    icon={openItem === index ? faAngleDown : faAngleRight}
                    className={"FAQ_Icon"}
                  />
                </span>
              </div>
            </Card.Header>
            {openItem === index && (
              <Card.Body className={styles.faqBody}>
                <p>{item.body}</p>
              </Card.Body>
            )}
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default ElectricToothbrushAccrodion;
