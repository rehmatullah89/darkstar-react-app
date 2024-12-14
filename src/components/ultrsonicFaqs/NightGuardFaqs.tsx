"use client";
import styles from "./nightguard_faqs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function UltraSonicFaqs() {
  const [openItem, setOpenItem] = useState<number | string | null>(null);
  const items = [
    {
      header: "How does an Ultrasonic Cleaner work?",
      body:
        "Ultrasonic cleaners have been used for medical, dental, and industrial cleaning applications since the mid 1900’s. The cleaning action works by sending a high frequency sound vibration (usually around 40,000 kHz) through liquid. This vibration “cavitation bubbles” which penetrate uneven surfaces. These bubbles burst with such force that contaminents adhering to the bubble surfaces are dislodged. This same bubble bursting force breaks the cell walls of bacteria and fungus causing them to instantly die. The ultrasonic cleaning process does not provide complete sterilization (i.e. for surgical use) but is more than sufficient for everyday cleaning without harsh chemicals.",
    },
    {
      header: "What are the benefits of an ultraviolet light?",
      body:
        "Ultraviolet-C light radiation has been shown to effectively kill bacteria, fungus, mold, and viruses (including coronavirus SARS-CoV-2). UV light generates an electromagnetic energy that can destroy DNA & RNA in living organisms. This process creates inactivation in the microbes (i.e. cell mutation and/or cell death) while also destroying the ability for the microorganism to reproduce).",
    },
    {
      header:
        "Can I add cariPRO™ Retainer Cleaner Tablets to the water?",
      body:
        "Yes! Although it is not mandatory for a cleaning agent to be added to water during ultrasonic cleaning, many customers choose to do so. By adding ½ tablet of our cariPRO™ Retainer cleaner tablets to the water, you will receive added cleaning benefits while also adding a fresh mint flavor to your newly cleaned appliance.",
    },
    {
      header: "Is it safe to use my cariPRO™ Ultrasonic Cleaner every day?",
      body:
        "It is safe to use your ultrasonic cleaner on night guards, whitening trays, and toothbrush heads on a daily basis. However, if you choose to use your ultrasonic cleaner on aligner trays, retainers, or products provided by other companies or dentists, we recommend you check with them first before use. It’s impossible for us to know the makeup of all oral appliances put into the ultrasonic cleaner so we cannot be responsible for damages.",
    },
    {
      header: "What else can I clean with my cariPRO™ Ultrasonic Cleaner? ",
      body: (
        <div>
          <p>Great question! Ultrasonic cleaners are used for a variety of applications…not just for oral care products. Our customers are using their ultrasonic cleaner on a variety of different items including (but not limited to):</p>
          <ul>
            <li>Jewelry (removes dead skin and debris buildup)</li>
            <li>Baby bottle caps and pacifiers</li>
            <li>Coins & precious metals</li>
            <li>Replacement heads & nozzle tips for electric toothbrushes and water flossers</li>
            <li>Small items made of metal, rubber, ceramics, and some hard plastics</li>
          </ul>
          <p>There are plenty of useful articles online that can help you to understand the cleaning applications of an ultrasonic cleaner!</p>
          <p><i>NOTE: it is always recommended that you consult the original manufacturer of whatever you put into any ultrasonic cleaner as the properties and chemical makeup of each item may have different cleaning warnings/recommendations.</i></p>
        </div>
      ),
    }
    
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
            <Card.Header className={styles.faq_card_header}>
              <div
                style={{ display: "flex", justifyContent: "flex-start" }}
                className="accordion-header"
                onClick={() => handleAccordionToggle(index)}
              >
                <FontAwesomeIcon
                  icon={openItem === index ? faAngleUp : faAngleDown}
                  className={styles.FAQ_Icon}
                />
                &nbsp;&nbsp;&nbsp;
                <span
                  className={styles.FAQitemsHeader}
                >{` ${item.header}`}</span>
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

      {/* <div
        className="ewd-ufaq-faq-list ewd-ufaq-page-type-load_more"
        id="ewd-ufaq-faq-list"
      >
        \n\n\t
        <input
          type="hidden"
          name="show_on_load"
          value=""
          id="ewd-ufaq-show-on-load"
        />
        \n
        <input
          type="hidden"
          name="include_category"
          value=""
          id="ewd-ufaq-include-category"
        />
        \n
        <input
          type="hidden"
          name="exclude_category"
          value=""
          id="ewd-ufaq-exclude-category"
        />
        \n
        <input
          type="hidden"
          name="orderby"
          value="date"
          id="ewd-ufaq-orderby"
        />
        \n
        <input type="hidden" name="order" value="desc" id="ewd-ufaq-order" />
        \n
        <input
          type="hidden"
          name="post_count"
          value="-1"
          id="ewd-ufaq-post-count"
        />
        \n
        <input
          type="hidden"
          name="current_url"
          value="/wp-json/wp/v2/ufaq?include=426762,864492"
          id="ewd-ufaq-current-url"
        />
        \n\t\n\t\n\t
        <div className="ewd-ufaq-faqs">
          \n\n\t\t
          <div
            className="ewd-ufaq-faq-div ewd-ufaq-faq-column-count-one ewd-ufaq-faq-responsive-columns- ewd-ufaq-faq-display-style-default ewd-ufaq-can-be-toggled"
            id="ewd-ufaq-post-426762-aUPRBZY7eL"
            data-post_id="426762"
          >
            \n\n\t
            <div className="ewd-ufaq-faq-title ewd-ufaq-faq-toggle">
              \n\t\n\t
              <a className="ewd-ufaq-post-margin" href="#" role="button">
                \n\n\t\t
                <div className="ewd-ufaq-post-margin-symbol ewd-ufaq-square">
                  \n\t\t\t<span>B</span>\n\t\t
                </div>
                \n\n\t\t
                <div className="ewd-ufaq-faq-title-text">
                  \n\n\t\t\t
                  <h4>
                    \n\t\t\t\tAre your products cruelty-free or vegan?\t\t\t
                  </h4>
                  \n\n\t\t
                </div>
                \n\n\t\t<div className="ewd-ufaq-clear"></div>\n\n\t
              </a>
              \n\t\n
            </div>
            \n\t\n\t
            <div className="ewd-ufaq-faq-body ">
              \n\n\t\t\n\t\t\t\n\t\t\n\t\t\t
              <div className="ewd-ufaq-post-margin ewd-ufaq-faq-post">
                \n\t
                <p>
                  <strong>Yes!</strong> Smile Brilliant is the only professional
                  teeth whitening company certified by the internationally
                  accredited Leaping bunny program! All our products are
                  cruelty-free and vegan. We do not do any animal testing nor do
                  we work with any factories that do so. You can learn more
                  about our cruelty-free certification by clicking{" "}
                  <a href="https://www.smilebrilliant.com/cruelty-free">here</a>
                  .
                </p>
                \n
                <p>
                  <strong>NOTE:</strong>{" "}
                  <i>The glycerin in our gels is vegetable based</i>
                </p>
                \n
              </div>
              \n\t\t\n\t\t\t
              <div className="ewd-ufaq-faq-custom-fields">\n\n\t\n</div>
              \n\t\t\n\t\t\t\n\t\t\n\t\t\t\n\t\t\n\t\t\t\n\t\t\n\t\t\t\n\t\t\n\t\t\t
              <div className="ewd-ufaq-permalink">
                \n\t\n\t
                <a href="https://stable.smilebrilliant.com/articles/ufaqs/are-your-products-cruelty-free-or-vegan/?Display_FAQ=426762">
                  \n\t\t\n\t\t\t\t <div className="ewd-ufaq-permalink-image"></div>{" "}
                  \t\n\t
                </a>
                \n\n
              </div>
              \n\t\t\n\t\t\t\n\t\t\n\t\t\t\n\t\t\n\t
            </div>
            \n\n
          </div>
          \n\t
        </div>
        \n\n\t\n
      </div> */}
    </div>
  );
}

export default UltraSonicFaqs;
