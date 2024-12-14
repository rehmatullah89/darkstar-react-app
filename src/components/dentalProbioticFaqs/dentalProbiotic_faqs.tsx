"use client";
import styles from "./dentalProbiotic_faqs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function SkinCareFaqs() {
  const [openItem, setOpenItem] = useState<number | string | null>(null);
  const items = [
    {
      number: "01",
      header: "Over 700 species of good & bad bacteria populate your mouth.",
      subheader: "Healthy bacteria is the first line of defense in your mouth.",
      body:
        "There are more than 900 different microbes that live on your skin. As gross as it might sound, these bacteria play a critical role in a healthy microbiome and radiant skin. These bacteria destroy invading organisms that cause acne and destruction of collagen. Further, they balance the pH of your skin to kill breakouts. Most people dont understand that harsh cleansers and moisturizers kill this bacteria and disrupt the microbiome. Formulate incorporates prebiotics and nourishing ingredients that support the microbiome and maintain a balanced pH for ultimate health.",
    },
    {
      number: "02",
      header: "EGF has a short shelf life. Freshness matters.",
      subheader: "Your formula is manufactured within 24 hours of shipment.",
      body:
        "Epidermal growth factors (or EGF) are naturally occurring proteins in our skin. They stimulate healing, collagen production, and improve firmness. Although most professional skincare products incorporate EGF, what they don’t tell you is that EGF expires (and loses its potency) within 1-2 months on the shelf! This means that most of the expensive products you buy with EGF have little to no viable EGF by the time you put it on your skin. Unlike any other company on the market, our skincare products are manufactured at the time of ordering. This means that the EGF in your Formulate skincare was refrigerated until it was shipped to you. Your product arrives fresh and with maximum potency. You will never receive a product from us that has been sitting on inventory shelves. Potency is guaranteed.",
    },
    {
      number: "03",
      header: "We’ve got ingredients that accelerate immune response.",
      subheader: "How long do your breakouts last?",
      body:
        "Formulate Labs is the first skincare company to introduce CytoCall™, a novel molecule that accelerates T-cell response to distressed skin cells. When your skin cells are damaged, infected, or diseased, they give off cytokines to call in T-cells. These T-cells do the repair and cleanup. CytoCall™ accelerates epidermal cytokine production to speed up the healing and repair process. Our made-to-order formulas are packed with nourishing and anti-inflammatory ingredients to help your skin feel healthy.",
    },
    {
      number: "04",
      header: "Tightening skin & reducing visible pores is solvable.",
      subheader: "Stay hydrated. Eat better...and use quality product.",
      body:
        "We all know that to maintain youthful skin, diet, hydration, and a healthy lifestyle will provide long-term success. However, there are many amazing ingredients to help tighten skin and visibly reduce unsightly/large pores. Optimal concentrations of Retinol, collagen, and nourishing vitamins are formulated and mixed within 24 hours of shipping. The freshest product means maximized potency and efficacy.",
    },
  ];

  const handleAccordionToggle = (eventKey: number | null | string) => {
    setOpenItem((prevOpenItem: any) =>
      prevOpenItem === eventKey ? null : eventKey
    );
  };

  return (
    <div>
      <Accordion className={styles.faqAccordian}>
        {items.map((item, index) => (
          <Card key={index} className={styles.faq_Card}>
            <Card.Header
              className={`${styles.faq_card_header} ${
                openItem === index ? styles.active : ""
              }`}
            >
              <h3
                style={{ display: "flex" }}
                className="accordion-header"
                onClick={() => handleAccordionToggle(index)}
              >
                <span className={styles.number}>{` ${item.number}`}</span>
                <div className={styles.text__k}>
                  {` ${item.header}`}
                  <div
                    className={styles.small_text}
                  >{` ${item.subheader}`}</div>
                </div>
                {/* <FontAwesomeIcon
                  icon={openItem === index ? faAngleUp : faAngleDown}
                  className={styles.FAQ_Icon}
                /> */}
              </h3>
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
}

export default SkinCareFaqs;
