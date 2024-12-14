'use client';
import React from 'react';
import Image from 'next/image';
import sbrlogo from '../../public/assets/sbr-logo.webp';
import logotext from '../../public/assets/sbr-logo-text.webp';
import cartIcon from '../../public/assets/cart-icon.png';
import userIcon from '../../public/assets/my-account-icon.webp';

import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import mobileLogo from '../../public/assets/smilebrilliant-logo-vertical-nosub-584x162-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '@/context/CartContext';
import Countdown from '@/components/countDownBanner/Countdown';

import './style/header.css';

interface HeaderProps {
  bgColor?: string;
}

const Header = ({ bgColor = '#fff' }: HeaderProps) => {
  const { dispatch, state } = useCartContext();
  const [showDrawer, setShowDrawer] = useState(false);

  const loggedIn = false;

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  const openCart = () => {
    dispatch({ type: 'OPEN_MIN_CART', payload: true });
  };
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };
  return (
    <>
    
      <header
        id="sbr-header"
        className="web-menu sbr-header-mbt header header-light headroom headroom--top headroom--not-bottom  sbr-header-mbt header dark-header headroom headroom--top headroom--not-bottom">
        <div className={`navbar-fixed-top-barr ${isScrolled ? 'scrolled' : ''}`}
         style={{
          position: 'fixed',
          top: isScrolled ? '54px' : '0',
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        >
          <div
            style={{
              width: '25%',
              backgroundColor: '#2d2e2f',
              fontSize: '0px',
              height: '8px',
            }}
          >
            &nbsp;1
          </div>
          <div
            style={{
              width: '25%',
              backgroundColor: '#fa319e',
              fontSize: '0px',
              height: '8px',
            }}
          >
            &nbsp;2
          </div>
          <div
            style={{
              width: '25%',
              backgroundColor: '#4acac9',
              fontSize: '0px',
              height: '8px',
            }}
          >
            &nbsp;3
          </div>
          <div
            style={{
              width: '25%',
              backgroundColor: '#f0c23a',
              fontSize: '0px',
              height: '8px',
            }}
          >
            &nbsp;4
          </div>
        </div>
         <Countdown /> 
        <div className="Header-warpper">
          <div className="navbar navbar-expand-lg navbar-dark navbar navbar-fixed-top navbar-standard">
            <div className="logo-wrap-smilebrilliant">
              <span className="sbr-logo-round">
                <Link
                  href="/"
                  className="navbar-brand navbar-center-cell position-relative"
                  title="Smile Brilliant"
                >
                  <Image src={sbrlogo} alt="logo1" width={50} height={50} />
                </Link>
              </span>
              <span className="sbr-logo-text">
                <Link
                  href="/">
                  <Image
                    src={logotext}
                    width={185}
                    height={16}
                    alt="SmileBrilliant"
                  />
                </Link>
              </span>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggle">
              {/* <div className="logo">
                <Link
                  href="/"
                  className="navbar-brand navbar-center-cell position-relative mx-5"
                  title="Smile Brilliant"
                >
                  <Image
                    src={isScrolled ? logo2 : logo1}
                    alt="logo1"
                    className={
                      isScrolled
                        ? 'logoimg logo-light m-0 '
                        : 'logoimg logo-dark m-0 me-5'
                    }
                  />
                </Link>
              </div> */}

              <ul className="nav navbar-nav navbar-left">
                <li className="nav-item" id="navCustomTraysGuards"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                >
                  <p rel="nofollow" className="dropdown-toggle"
                 onClick={(e) => e.preventDefault()}
                  >
                    CUSTOM TRAYS & GUARDS{' '}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{
                        color: '#565759',
                        width: '12px',
                        height: '12px',
                      }}
                    />
                  </p>

                  <ul className="dropdown-menu"
                  style={{ display: openDropdown === 1 ? 'block' : 'none' }}
                  >
                    <li className="headingNav">Best TRAYS & GUARDS</li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/night-guards/"
                        title="Teeth Grinding - Night Guards"
                      >
                        <div className="lpParnt">CUSTOM NIGHT GUARDS</div>
                        <div className="lpChild">
                          Complete Night Guard System
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/teeth-whitening-trays"
                        title="Teeth Whitening Trays (Custom-Fitted) Kit"
                      >
                        <div className="lpParnt">CUSTOM WHITENING TRAYS</div>
                        <div className="lpChild">
                          Complete Whitening Trays &amp; Gel System
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item navItem  sports-guards-nav" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/proshield/"
                        title="Sports Guards"
                      >
                        <div className="lpParnt">PROSHIELD SPORTS GUARDS</div>
                        <div className="lpChild">
                          Custom-fitted Sports Mouth Guards
                        </div>
                      </Link>
                    </li>
                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/retainer-cleaner/"
                        href="/product/retainer-cleaner/"
                        title="Cleaning Tablets for Night Guards, Whitening Trays, Clear Aligners"
                      >
                        Tray Cleaning Tablets
                      </Link>
                    </li>

                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/ultrasonic-cleaner/"
                        title="cariPRO™ Ultrasonic + UV Light Cleaner | Smile Brilliant"
                      >
                        <span style={{ color: '#e4a18b' }}>NEW!</span>{' '}
                        Ultrasonic Tray Cleaner
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" id="navWhitening" 
               onMouseEnter={() => handleMouseEnter(2)}
               onMouseLeave={handleMouseLeave}
                >
                  <p rel="nofollow" title="" className="dropdown-toggle"
                  onClick={(e) => e.preventDefault()}
                  >
                    Teeth whitening{' '}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{
                        color: '#565759',
                        width: '12px',
                        height: '12px',
                      }}
                    />{' '}
                  </p>
                  <ul className="dropdown-menu"
                  style={{ display: openDropdown === 2 ? 'block' : 'none' }}
                  >
                    <li
                      className="headingNav"
                      style={{ background: '#fa319e' }}
                    >
                      Best Teeth Whitening
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/teeth-whitening-trays"
                        title="Teeth Whitening Trays (Custom-Fitted) Kit"
                      >
                        <div className="lpParnt">CUSTOM WHITENING TRAYS</div>
                        <div className="lpChild">
                          Complete Whitening Trays &amp; Gel System
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/stain-concealer/"
                        title="NEW! DENTAL STAIN CONCEALER"
                      >
                        <div className="lpParnt">
                          <span style={{ color: '#fa319e' }}>NEW!</span> DENTAL
                          STAIN CONCEALER
                        </div>
                        <div className="lpChild">
                          Purple Toothpaste Stain Concealer
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/teeth-whitening-gel"
                        title="Teeth Whitening Gel"
                      >
                        <div className="lpParnt">WHITENING GEL REFILLS</div>
                        <div className="lpChild">
                          Professional Strength Teeth Whitening Gel
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/sensitive-teeth-gel"
                        title="Desensitizing Gel For Teeth Whitening"
                      >
                        <div className="lpParnt">DESENSITIZING GEL REFILLS</div>
                        <div className="lpChild">
                          Remineralization &amp; Tooth Sensitivity Gel
                        </div>
                      </Link>
                    </li>

                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/retainer-cleaner/"
                        title="Cleaning Tablets for Night Guards, Whitening Trays, Clear Aligners"
                      >
                        Whitening Tray Cleaning Tablets{' '}
                      </Link>
                    </li>

                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/ultrasonic-cleaner/"
                        title="cariPRO™ Ultrasonic + UV Light Cleaner | Smile Brilliant"
                      >
                        <span style={{ color: '#fa319e' }}>NEW!</span>{' '}
                        Ultrasonic Tray Cleaner{' '}
                      </Link>
                    </li>
                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/my-account"
                        title="Electric Toothbrush"
                      >
                        Tray Replacement Reorder{' '}
                      </Link>
                    </li>
                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        href="/product/enamel-armour/"
                        title="cariPRO™ Enamel Armour for Sensitive Teeth | Smile Brilliant"
                      >
                        Enamel Armour™ for Sensitive Teeth{' '}
                      </Link>
                    </li>

                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        className="oraneText"
                        href="/reviews/"
                        title="Teeth Whitening Reviews"
                      >
                        Teeth Whitening Kit Reviews{' '}
                      </Link>
                    </li>

                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        className="oraneText"
                        href="/teeth-whitening-facts/"
                        title="10 Facts Everyone Should Know About Teeth Whitening"
                      >
                        10 Facts About Teeth Whitening{' '}
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <Link
                    href="/product/proshield"
                    rel="nofollow"
                    title="Teeth Whitening Reviews"
                  >
                    Sports Guards
                  </Link>
                </li> */}
                <li className="nav-item" id="navOralCare"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                >
                  <p rel="nofollow" title="" className="dropdown-toggle" onClick={(e) => e.preventDefault()}>
                    ORAL CARE{' '}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{
                        color: '#565759',
                        width: '12px',
                        height: '12px',
                      }}
                    />{' '}
                  </p>
                  <ul className="dropdown-menu" style={{ display: openDropdown === 3 ? 'block' : 'none' }}>
                    <li
                      className="headingNav"
                      style={{ background: '#4acac9' }}
                    >
                      ORAL CARE PRODUCTS
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/electric-toothbrush/"
                        href="/product/electric-toothbrush/"
                        title="Electric Toothbrush"
                      >
                        <div className="lpParnt">ELECTRIC TOOTHBRUSH</div>
                        <div className="lpChild">
                          Best Electric Toothbrush Packages
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/water-flosser/"
                        href="/product/water-flosser/"
                        title="Water Flosser"
                      >
                        <div className="lpParnt">CORDLESS WATER FLOSSER</div>
                        <div className="lpChild">
                          Award Winning Electric Water Flosser
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/dental-probiotics-adults/"
                        href="/product/dental-probiotics-adults/"
                        title="Dental Probiotics For Adults"
                      >
                        <div className="lpParnt">DENTAL PROBIOTICS</div>
                        <div className="lpChild">
                          Bad Breath. Immune Support. Cavities.
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/enamel-armour/"
                        href="/product/enamel-armour/"
                        title="cariPRO™ Enamel Armour for Sensitive Teeth | Smile Brilliant"
                      >
                        <div className="lpParnt">
                          <span style={{ color: '#4acac9' }}>NEW!</span> ENAMEL
                          ARMOUR™
                        </div>
                        <div className="lpChild">
                          Rebuilds Enamel &amp; Reduces Sensitivity
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/plaque-highlighters-adults/"
                        href="/product/plaque-highlighters-adults/"
                        title="Plaque Highlighters For Adults | Smile Brilliant"
                      >
                        <div className="lpParnt">PLAQUE HIGHLIGHTERS™</div>
                        <div className="lpChild">
                          Highlight Plaque &amp; Tartar For Better Brushing
                        </div>
                      </Link>
                    </li>

                    <li className="navItem" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/plaque-highlighters-adults/"
                        href="/product/dental-floss-picks"
                        title="Plaque Highlighters For Adults | Smile Brilliant"
                      >
                        <div className="lpParnt">DENTAL FLOSS PICKS</div>
                        <div className="lpChild">
                          U-Shaped Disposable Floss Tool
                        </div>
                      </Link>
                    </li>

                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/dental-floss-picks/"
                        href="/product/toothbrush-heads/"
                        title="Replacement Toothbrush Heads | Smile Brilliant"
                      >
                        Replacement Toothbrush Heads
                      </Link>
                    </li>
                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/plaque-highlighters-kids"
                        href="/product/plaque-highlighters-kids"
                        title="Plaque Highlighters for Kids"
                      >
                        Plaque Highlighters™ For Kids!
                      </Link>
                    </li>

                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/dental-probiotics-kids/"
                        href="/product/dental-probiotics-kids/"
                        title="Dental Probiotics for Kids | Smile Brilliant"
                      >
                        Dental Probiotics For Kids!
                      </Link>
                    </li>
                    <li onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/retainer-cleaner/"
                        href="https://www.smilebrilliant.com/product/retainer-cleaner/"
                        title="Cleaning Tablets for Night Guards, Whitening Trays, Clear Aligners"
                      >
                        Retainer Cleaning Tablets
                      </Link>
                    </li>
                    <li className="ms-5" onClick={closeDropdown}>
                      <Link
                        rel="nofollow"
                        // href="https://www.smilebrilliant.com/product/ultrasonic-cleaner/"
                        href="/product/ultrasonic-cleaner/"
                        title="cariPRO™ Ultrasonic + UV Light Cleaner | Smile Brilliant"
                      >
                        <span style={{ color: '#4acac9' }}>NEW!</span>{' '}
                        Ultrasonic Cleaner
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item skin-care-nav" id="skin-care-nav-item">
                  <Link href="https://www.smilebrilliant.com/product/skincare/">
                    <span style={{ color: '#f0c23a', fontWeight: 'bold' }}>
                      {' '}
                      NEW!
                    </span>
                    &nbsp;Skin care
                  </Link>
                </li>
              </ul>
              <div className="right-header d-flex align-items-center">
                <ul className="nav navbar-nav navbar-right" >
                  <li className="nav-item" 
                  >
                    <Link
                      href="https://www.smilebrilliant.com/reviews"
                      rel="nofollow"
                      title="Teeth Whitening Reviews"
                    >
                      REVIEWS
                    </Link>
                  </li>
                  {/* <li className="nav-item" id="navHelpFull">
                    <a rel="nofollow" className="dropdown-toggle">
                      HELPFul<span className="caret"></span>
                    </a>
                    <ul
                      aria-labelledby="menu_item_features-grid"
                      className="dropdown-menu"
                    >
                      <li
                        className="headingNav"
                        style={{ background: "#555759" }}
                      >
                        HELPFUL LINKS
                      </li>

                      <li className="navItem">
                        <a
                          rel="nofollow"
                          // href="https://www.smilebrilliant.com/teeth-whitening-facts"
                          href="/teeth-whitening-facts"
                          title="10 Facts Everyone Should Know About Teeth Whitening"
                        >
                          <div className="lpParnt">
                            10 FACTS ABOUT TEETH WHITENING
                          </div>
                          <div className="lpChild">
                            Best Practices for Whitening Teeth
                          </div>
                        </a>
                      </li>

                      <li className="navItem">
                        <a
                          rel="nofollow"
                          // href="https://www.smilebrilliant.com/sensitive-teeth-guide/"
                          href="/product/sensitive-teeth-guide/"
                          title="Causes &amp; Remedies for Sensitive Teeth"
                        >
                          <div className="lpParnt uppercase">
                            Sensitive Teeth Guide
                          </div>
                          <div className="lpChild">
                            Causes &amp; Remedies for Sensitive Teeth
                          </div>
                        </a>
                      </li>
                      <li className="navItem">
                        <a
                          rel="nofollow"
                          // href="https://www.smilebrilliant.com/bad-breath-cause"
                          href="/product/bad-breath-cause"
                          title="Things You Should Know About Halitosis &amp; Oral Care"
                        >
                          <div className="lpParnt uppercase">
                            The Science of Bad Breath
                          </div>
                          <div className="lpChild">
                            Causes &amp; Remedies for Bad Breath
                          </div>
                        </a>
                      </li>
                      <li className="navItem">
                        <a
                          rel="nofollow"
                          // href="https://www.smilebrilliant.com/oral-probiotics-facts"
                          href="/product/oral-probiotics-facts"
                          title="5 Facts You Should Know about Oral Probiotics"
                        >
                          <div className="lpParnt">
                            5 FACTS ABOUT ORAL PROBIOTICS
                          </div>
                          <div className="lpChild">
                            Understanding Oral Micriobiome
                          </div>
                        </a>
                      </li>
                      <li>
                        <Link
                          rel="nofollow"
                          // href="https://www.smilebrilliant.com/frequently-asked-questions"
                          href="/product/frequently-asked-questions"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          Frequently Asked Questions
                        </Link>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          // href="/https://www.smilebrilliant.com/articles"
                          href="/articles"
                          title="Articles About Teeth Whitening Science &amp; Dental Care"
                        >
                          Science &amp; Articles
                        </a>
                      </li>
                      <li>
                        <Link
                          rel="nofollow"
                          // href="https://www.smilebrilliant.com/cruelty-free"
                          href="/cruelty-free"
                          title="Leaping Bunny Cruelty-Free Certification"
                        >
                          Cruelty-Free Certification
                        </Link>
                      </li>
                      <li>
                        <a
                          // href="/https://www.smilebrilliant.com/contact"
                          href="/contact"
                          rel="nofollow"
                          title="Contact the Best Teeth Whitening Company on the Planet :)"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item" id="navSupport"
                 onMouseEnter={() => handleMouseEnter(4)}
                 onMouseLeave={handleMouseLeave}
                  >
                    <p
                      // href="javascript:;"
                      rel="nofollow"
                      className="dropdown-toggle"
                      title="Teeth Whitening For Everyone"
                      onClick={(e) => e.preventDefault()}
                    >
                      Support{' '}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{
                          color: '#565759',
                          width: '12px',
                          height: '12px',
                        }}
                      />{' '}
                    </p>

                    <ul
                      aria-labelledby="menu_item_features-grid"
                      className="dropdown-menu"
                      style={{ display: openDropdown === 4 ? 'block' : 'none' }}
                    >
                      <li
                        className="headingNav"
                        style={{ background: '#555759' }}
                        onClick={closeDropdown}
                      >
                        Support
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/teeth-whitening-facts/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div className="lpParnt uppercase">
                            10 facts about teeth whitening
                          </div>
                          <div className="lpChild">
                            Commonly Asked Customer Questions
                          </div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/sensitive-teeth-guide/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div className="lpParnt uppercase">
                            sensitive teeth guide
                          </div>
                          <div className="lpChild">
                            Causes & Remedies for Sensitive Teeth
                          </div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/bad-breath-cause/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div className="lpParnt uppercase">
                            The Science of Bad Breath
                          </div>
                          <div className="lpChild">
                            Causes & Remedies for Bad Breath
                          </div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/oral-probiotics-facts/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div className="lpParnt uppercase">
                            5 facts about oral probiotics
                          </div>
                          <div className="lpChild">
                            Understanding Oral Micriobiome
                          </div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/frequently-asked-questions/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div className="lpParnt uppercase">
                            frequently asked questions
                          </div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/frequently-asked-questions/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div>frequently asked questions</div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/articles/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div>science & articles</div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/contact/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div>contact us</div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/about-us/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div>about us</div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/guarantee/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div>guarentee</div>
                        </Link>
                      </li>
                      <li className="navItem" onClick={closeDropdown}>
                        <Link
                          rel="nofollow"
                          href="https://www.smilebrilliant.com/cruelty-free/"
                          title="Frequently Asked Questions About Whitening Teeth or Bleaching Teeth"
                        >
                          <div>cruelty-free certification</div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="cart-section-wrapper d-flex align-items-center ms-5">
                  <div className="cart-icon" onClick={openCart}>
                    <Image
                      src={cartIcon}
                      alt="cartIcon"
                      width={30}
                      height={30}
                    // objectFit="none" // This prevents the image from being resized or stretched
                    />
                    <span className="float_count">{state.cartCount}</span>
                  </div>

                  {/* <div className="cart-badge"></div> */}

                  <div className="user-icon">
                    {!loggedIn && (
                      <div className="user-login">
                        <Link href="/my-account" title="My Account">

                          <Image
                            src={userIcon}
                            alt="cartIcon"
                            width={28}
                            height={28}
                          />
                        </Link>
                      </div>
                    )}
                    {loggedIn && (
                      <div className="user-login">
                        <Link href="/my-account" title="My Account">

                          <i
                            className="fa fa-user-o fs-5 text-slate-500 ms-3"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
