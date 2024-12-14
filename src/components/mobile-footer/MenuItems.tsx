import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import React from "react";
import { Accordion } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import crossImg from "../../../public/assets/back_icon_v2.svg"

const MenuItems = ({ setIsOpen, isOpen }) => {
  const { userData, } = useUser();
  const pathname = usePathname();
  const handleClick = (e,value) => {
    setIsOpen(!isOpen)
    if (pathname === value) {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`accordion accordion-flush mobileMenu fixed-top w-100 ${isOpen ? "open" : "hide"
        }`}
      id="mobileMenu"
    >
      <div className="position-relative burgur burgerMenuMobile">
        {isOpen ? (
          <div className="d-flex flex-column menu-close-arrow">
              <Image onClick={() => setIsOpen(!isOpen)} src = {crossImg} alt="cross image" />
            {userData === null && <a
              href="/my-account-new/"
              className="text-decoration-none fs-14 fimaly-multiple-opn text-blue-500 mt-4"
            >
              {" "}
              already a customer?{" "}
            </a>}
          </div>
        ) : (
          <Image onClick={() => setIsOpen(!isOpen)} src = {crossImg} alt="cross image" />
        )}
      </div>

      <Accordion className="mobile-navigation-wrapper">
        <Accordion.Item eventKey="0" className="custom-trays-guards-nav">
          <Accordion.Header>CUSTOM TRAYS & GUARDS</Accordion.Header>
          <Accordion.Body className="sub-menu">
            <ul>
              <li className="navItem navBorder">
                <Link
               
                  rel="nofollow"
                  href="/product/night-guards/"
                  onClick={(e)=>handleClick(e,'/product/night-guards/')}
                  title="Teeth Grinding - Night Guards"
                  
                >
                  <div className="lpParnt">CUSTOM NIGHT GUARDS</div>
                  <div className="lpChild">Complete Night Guard System</div>
                </Link>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/teeth-whitening-trays"
                  onClick={(e)=>handleClick(e,'/product/teeth-whitening-trays')}
                  title="Teeth Whitening Trays (Custom-Fitted) Kit"
                >
                  <div className="lpParnt">CUSTOM WHITENING TRAYS</div>
                  <div className="lpChild">
                    Complete Whitening Trays &amp; Gel System
                  </div>
                </Link>
              </li>
              <li className="nav-item navItem  sports-guards-nav navBorder">
                <Link
                  rel="nofollow"
                  href="/product/proshield/"
                  onClick={(e)=>handleClick(e,'/product/proshield/')}
                  title="Sports Guards"
                >
                  <div className="lpParnt">PROSHIELD SPORTS GUARDS</div>
                  <div className="lpChild">
                    Custom-fitted Sports Mouth Guards
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  // href="https://www.smilebrilliant.com/product/retainer-cleaner/"
                  href="/product/retainer-cleaner/"
                  onClick={(e)=>handleClick(e,'/product/retainer-cleaner/')}
                  title="Cleaning Tablets for Night Guards, Whitening Trays, Clear Aligners"
                >
                  Tray Cleaning Tablets
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  href="/product/ultrasonic-cleaner/"
                  onClick={(e)=>handleClick(e,'/product/ultrasonic-cleaner/')}
                  title="cariPRO™ Ultrasonic + UV Light Cleaner | Smile Brilliant"
                >
                  <span style={{ color: "#e4a18b" }}>NEW!</span> Ultrasonic Tray
                  Cleaner
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="navteethWhitening">
            TEETH WHITENING
          </Accordion.Header>
          <Accordion.Body className="sub-menu">
            <ul>
              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/teeth-whitening-trays"
                  onClick={(e)=>handleClick(e,'/product/teeth-whitening-trays')}
                  title="Teeth Whitening Trays (Custom-Fitted) Kit"
                >
                  <div className="lpParnt">CUSTOM WHITENING TRAYS</div>
                  <div className="lpChild">
                    Complete Whitening Trays &amp; Gel System
                  </div>
                </Link>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/stain-concealer/"
                  onClick={(e)=>handleClick(e,'/product/stain-concealer/')}
                  title="NEW! DENTAL STAIN CONCEALER"
                  // onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="lpParnt">
                    <span style={{ color: "#fa319e" }}>NEW!</span> DENTAL STAIN
                    CONCEALER
                  </div>
                  <div className="lpChild">
                    Purple Toothpaste Stain Concealer
                  </div>
                </Link>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/teeth-whitening-gel"
                  onClick={(e)=>handleClick(e,'/product/teeth-whitening-gel')}
                  title="Teeth Whitening Gel"
                >
                  <div className="lpParnt">WHITENING GEL REFILLS</div>
                  <div className="lpChild">
                    Professional Strength Teeth Whitening Gel
                  </div>
                </Link>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/sensitive-teeth-gel"
                  onClick={(e)=>handleClick(e,'/product/sensitive-teeth-gel')}
                  title="Desensitizing Gel For Teeth Whitening"
                >
                  <div className="lpParnt">DESENSITIZING GEL REFILLS</div>
                  <div className="lpChild">
                    Remineralization &amp; Tooth Sensitivity Gel
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  href="/product/retainer-cleaner/"
                  onClick={(e)=>handleClick(e,'/product/retainer-cleaner/')}
                  title="Cleaning Tablets for Night Guards, Whitening Trays, Clear Aligners"
                >
                  Whitening Tray Cleaning Tablets{" "}
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  href="/product/ultrasonic-cleaner/"
                  onClick={(e)=>handleClick(e,'/product/ultrasonic-cleaner/')}
                  title="cariPRO™ Ultrasonic + UV Light Cleaner | Smile Brilliant"
                >
                  <span style={{ color: "#fa319e" }}>NEW!</span> Ultrasonic Tray
                  Cleaner{" "}
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  href="my-account/"
                  onClick={(e)=>handleClick(e,'my-account/')}
                  title="Electric Toothbrush"
                >
                  Tray Replacement Reorder{" "}
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  href="/product/enamel-armour/"
                  onClick={(e)=>handleClick(e,'/product/enamel-armour/')}
                  title="cariPRO™ Enamel Armour for Sensitive Teeth | Smile Brilliant"
                >
                  Enamel Armour™ for Sensitive Teeth{" "}
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  className="oraneText"
                  href="/reviews/"
                  onClick={(e)=>handleClick(e,'/reviews/')}
                  title="Teeth Whitening Reviews"
                >
                  Teeth Whitening Kit Reviews{" "}
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  className="oraneText"
                  href="/teeth-whitening-facts/"
                  onClick={(e)=>handleClick(e,'/teeth-whitening-facts/')}
                  title="10 Facts Everyone Should Know About Teeth Whitening"
                >
                  10 Facts About Teeth Whitening{" "}
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="navNightGuards">
            ORAL CARE
          </Accordion.Header>
          <Accordion.Body className="sub-menu">
            <ul>
              <li className="navItem navBorder">
                <a
                  rel="nofollow"
                  href="/product/electric-toothbrush/"
                  onClick={(e)=>handleClick(e,'/product/electric-toothbrush/')}
                  title="Electric Toothbrush"
                >
                  <div className="lpParnt">ELECTRIC TOOTHBRUSH</div>
                  <div className="lpChild">
                    Best Electric Toothbrush Packages
                  </div>
                </a>
              </li>

              <li className="navItem navBorder">
                <a
                  rel="nofollow"
                  href="/product/water-flosser/"
                  onClick={(e)=>handleClick(e,'/product/water-flosser/')}
                  title="Water Flosser"
                >
                  <div className="lpParnt">CORDLESS WATER FLOSSER</div>
                  <div className="lpChild">
                    Award Winning Electric Water Flosser
                  </div>
                </a>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/dental-probiotics-adults/"
                  onClick={(e)=>handleClick(e,'/product/dental-probiotics-adults/')}
                  title="Dental Probiotics For Adults"
                >
                  <div className="lpParnt">DENTAL PROBIOTICS</div>
                  <div className="lpChild">
                    Bad Breath. Immune Support. Cavities.
                  </div>
                </Link>
              </li>

              <li className="navItem navBorder">
                <a
                  rel="nofollow"
                  href="/product/enamel-armour/"
                  onClick={(e)=>handleClick(e,'/product/enamel-armour/')}
                  title="cariPRO™ Enamel Armour for Sensitive Teeth | Smile Brilliant"
                >
                  <div className="lpParnt">
                    <span style={{ color: "#4acac9" }}>NEW!</span> ENAMEL
                    ARMOUR™
                  </div>
                  <div className="lpChild">
                    Rebuilds Enamel &amp; Reduces Sensitivity
                  </div>
                </a>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/plaque-highlighters-adults/"
                  onClick={(e)=>handleClick(e,'/product/plaque-highlighters-adults/')}
                  title="Plaque Highlighters For Adults | Smile Brilliant"
                >
                  <div className="lpParnt">PLAQUE HIGHLIGHTERS™</div>
                  <div className="lpChild">
                    Highlight Plaque &amp; Tartar For Better Brushing
                  </div>
                </Link>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/dental-floss-picks"
                  onClick={(e)=>handleClick(e,'/product/dental-floss-picks')}
                  title="Plaque Highlighters For Adults | Smile Brilliant"
                >
                  <div className="lpParnt">DENTAL FLOSS PICKS</div>
                  <div className="lpChild">U-Shaped Disposable Floss Tool</div>
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  href="/product/toothbrush-heads/"
                  onClick={(e)=>handleClick(e,'/product/toothbrush-heads/')}
                  title="Replacement Toothbrush Heads | Smile Brilliant"
                >
                  Replacement Toothbrush Heads
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  href="/product/plaque-highlighters-kids"
                  onClick={(e)=>handleClick(e,'/product/plaque-highlighters-kids')}
                  title="Plaque Highlighters for Kids"
                >
                  Plaque Highlighters™ For Kids!
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  href="/product/dental-probiotics-kids/"
                  onClick={(e)=>handleClick(e,'/product/dental-probiotics-kids/')}
                  title="Dental Probiotics for Kids | Smile Brilliant"
                >
                  Dental Probiotics For Kids!
                </Link>
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="https://www.smilebrilliant.com/product/retainer-cleaner/"
                  title="Cleaning Tablets for Night Guards, Whitening Trays, Clear Aligners"
                >
                  Retainer Cleaning Tablets
                </a>
              </li>
              <li className="ms-5">
                <a
                  rel="nofollow"
                  href="/product/ultrasonic-cleaner/"
                  title="cariPRO™ Ultrasonic + UV Light Cleaner | Smile Brilliant"
                >
                  <span style={{ color: "#4acac9" }}>NEW!</span> Ultrasonic
                  Cleaner
                </a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <ul className="non-accordion-ul">
          <li className="skincare-navbutton ">
            {" "}
            <Link
              className="accordion-button no-dropdown-arrow"
              href="/product/skincare/"
              onClick={(e)=>handleClick(e,'/product/skincare/')}
              // onClick={() => setIsOpen(!isOpen)}
            >
              {" "}
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                NEW! &nbsp;
              </span>
              SKIN CARE
            </Link>
          </li>
          <li className="review-nav-button ">
            <Link
              className="accordion-button no-dropdown-arrow"
              href="/reviews"
              onClick={(e)=>handleClick(e,'/reviews')}
            >
              REVIEW
            </Link>
          </li>
        </ul>

        <Accordion.Item eventKey="5">
          <Accordion.Header className="navSupport ">SUPPORT</Accordion.Header>
          <Accordion.Body className="sub-menu">
            <ul>
              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/frequently-asked-questions"
                  onClick={(e)=>handleClick(e,'/product/frequently-asked-questions')}
                  title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                >
                  <div className="lpParnt uppercase">
                    Frequently Asked Questions
                  </div>
                  <div className="lpChild">
                    Commonly Asked Customer Questions
                  </div>
                </Link>
              </li>
              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  href="/product/contact-us"
                  onClick={(e)=>handleClick(e,'/product/contact-us')}
                  // href="/contact"
                  title="Contact the Best Teeth Whitening Company on the Planet :"
                >
                  <div className="lpParnt">CONTACT US</div>
                  <div className="lpChild">Contact Form &amp; Phone Number</div>
                </Link>
              </li>

              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  
                  // href="https://www.smilebrilliant.com/about-us"
                  href="/product/about-us"
                  onClick={(e)=>handleClick(e,'/product/about-us')}
                  title="Teeth Whitening For Everyone"
                >
                  <div className="lpParnt">ABOUT US</div>
                  <div className="lpChild">See How it All Began</div>
                </Link>
              </li>
              <li className="navItem navBorder">
                <Link
                  rel="nofollow"
                  // href="https://www.smilebrilliant.com/guarantee/"
                  href="/product/guarantee/"
                  onClick={(e)=>handleClick(e,'/product/guarantee/')}
                  title="Teeth Whitening Results Backed by Our Guarantee"
                >
                  <div className="lpParnt">GUARANTEE</div>
                  <div className="lpChild">
                    We Stand Behind Everything We Sell
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  // href="https://www.smilebrilliant.com/reviews"
                  href="/product/reviews"
                  onClick={(e)=>handleClick(e,'/product/reviews')}
                  rel="nofollow"
                  title="Teeth Whitening Reviews"
                >
                  Smile Brilliant Product Reviews
                </Link>
              </li>

              <li>
                <Link
                  rel="nofollow"
                  // href="https://www.smilebrilliant.com/cruelty-free"
                  href="/product/cruelty-free"
                  onClick={(e)=>handleClick(e,'/product/cruelty-free')}
                  title="Leaping Bunny Cruelty-Free Certification"
                >
                  Cruelty-Free Certification
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MenuItems;
