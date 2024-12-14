"use client";
import styles from "./nightguard_faqs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function NightGuardFaqs() {
  const [openItem, setOpenItem] = useState<number | string | null>(null);
  const items = [
    {
      header: "What are the negative effects of teeth grinding?",
      body:
        "Teeth grinding (or bruxism) can have long-term, devastating effects on the overall health of your teeth. The grinding and clenching motion wears down the teeth making them smaller and permanently sensitive. It also destroys enamel which makes teeth more prone to cavities. Aside from damage, teeth clenching/grinding can cause facial pain, headaches, earaches, pain/stiffness in the jaw, and disruption of sleep.",
    },
    {
      header: "How does a custom night guard help?",
      body:
        "Unlike over-the-counter guards, A truly custom-fitted guard ensures a snug fit without falling out or rubbing gums during sleep. Custom-fitted night guards have been offered by dentists for decades as a treatment for both minor and severe teeth grinding/clenching. The trays are generally 2-3mm in thickness and are relatively soft yet durable. This allows a cushion on the bite surface thus eliminating tooth on tooth grinding as well as reducing jaw and tooth soreness due to clenching.",
    },
    {
      header:
        "How do Smile Brilliant night guards differ from a dentist’s product?",
      body:
        "They are the same. Smile Brilliant’s professional dental lab uses the same equipment, material and processes to create our custom-fitted night guards. In fact, for nearly a decade, we have been providing night guard services to dentists who do not have the in-house lab to make trays themselves.",
    },
    {
      header: "How does your lifetime reorder program work?",
      body:
        "Smile Brilliant offers a convenient way to quickly reorder night guards and whitening trays after they wear out. Your original dental models are kept on file. When the time comes to get a new tray, simply login to your account (one was automatically created for you at the time of purchase), find your original night guard order, and click the “Reorder Guards/Trays” button. A set of guards or trays will be added to your cart. You can change the quantity if you wish to receive more than one extra night guard or set of whitening trays. We will use your dental model to quickly create a new set of guards/trays and ship them to your door for a very affordable price.",
    },
    {
      header: "Is this a subscription? Will I need to pay more in the future?",
      body:
        "No, this is not a subscription. The amount you pay is a one time fee and includes everything you need. You will never be charged any additional fees. If you need to get a replacement tray, you pay a small fee and our lab will make you a new guard from your dental models on file.",
    },
    {
      header: "Can I whiten with my night guards?",
      body:
        "The short answer is NO. Although night guards are custom-fitted to your teeth, they are cut different and are not made with the same reservoir to allow gel to stay against the teeth without oozing out. Night guards are meant to fit snug and prevent grinding. Additionally, night guards are worn on the upper OR lower teeth. For this reason, you will not have both an upper AND a lower tray to whiten.",
    },
    {
      header: "Will I receive a night guard for both upper AND lower teeth?",
      body:
        "The short answer is NO. Although night guards are custom-fitted to your teeth, they are cut different and are not made with the same reservoir to allow gel to stay against the teeth without oozing out. Night guards are meant to fit snug and prevent grinding. Additionally, night guards are worn on the upper OR lower teeth. For this reason, you will not have both an upper AND a lower tray to whiten.",
    },
    {
      header:
        "How does the Night Guard system differ from the Whitening System?",
      body:
        "Both the Smile Brilliant Night Guard Packages and the Whitening packages come with everything you need to make your own impressions from the comfort of home. The difference is that the night guard system is designed to make only one impression (upper OR lower) where as the teeth whitening system will provide impression material for both upper AND lower.Additionally, the trays you receive are quite different. Night guards are cut differently and are made from thicker material (to be more durable during grinding). Teeth whitening trays are thinner and designed to have a reservoir to hold the whitening gel in place.",
    },
    {
      header:
        "How long does it take before I get my custom-fitted night guards?",
      body:
        "Once you’ve ordered your tray creation kit, it will be shipped within 24 business hours. Once shipped, you should receive your kit within 3-4 business days (if within the U.S.; International shipping can take up to 14 business days to deliver). You will then need to create your dental impressions, complete your consent card, and send them back to us. We should receive your package within 3-4 business days (within the U.S.; approx. 14 business days international). Our dental lab will then create your custom-fitted night guards! The tray creation process takes 3-6 business days to complete. Once your trays have been shipped, they should reach you within 3-4 business days within the U.S. (approx. 14 business days international).",
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

      <div
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
      </div>
    </div>
  );
}

export default NightGuardFaqs;
