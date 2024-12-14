'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './dropdown.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

const Dropdown = () => {
  const [openItem, setOpenItem] = useState(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
      setOpenItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleAccordion = (key) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === key ? null : key));
  };

  return (
    <div className="custom-dropdown-button">
      <div className={styles.drop_down_wrapper}>
        <div ref={accordionRef}>
          <Accordion activeKey={openItem}>
            <Accordion.Item
              className={`${styles.custom_item} ${styles.brushes}`}
              eventKey="0"
              onClick={() => toggleAccordion('0')}
            >
              <Accordion.Header className={styles.brushes}>Brushes & Flossers</Accordion.Header>
              <Accordion.Body className={styles.custom_body}>
                <Link href="https://www.smilebrilliant.com/product/electric-toothbrush/">Electric ToothBrush</Link>
                <Link href="https://www.smilebrilliant.com/product/water-flosser/">Cordless Water Flosser</Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className={`${styles.custom_item} ${styles.oral_custom}`}
              eventKey="1"
              onClick={() => toggleAccordion('1')}
            >
              <Accordion.Header className={styles.oral}>Oral Probiotics</Accordion.Header>
              <Accordion.Body className={styles.custom_body}>
                <Link href="https://www.smilebrilliant.com/product/dental-probiotics-adults">Dental Probiotics For Adults</Link>
                <Link href="https://www.smilebrilliant.com/product/dental-probiotics-kids">Dental Probiotics For Kids</Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className={styles.custom_item}
              eventKey="2"
            >
              <Accordion.Header className={styles.sensitivity}>
                <Link href="https://smilebrilliant.com/product/enamel-armour/">Sensitivity Enamel Armour</Link>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item
              className={`${styles.custom_item} ${styles.plaque}`}
              eventKey="3"
              onClick={() => toggleAccordion('3')}
            >
              <Accordion.Header className={styles.plaque}>Plaque Highlighters</Accordion.Header>
              <Accordion.Body className={styles.custom_body}>
                <Link href="https://www.smilebrilliant.com/product/plaque-highlighters-adults">Plaque Highlighters™ For Adults</Link>
                <Link href="https://www.smilebrilliant.com/product/plaque-highlighters-kids">Plaque Highlighters™ For Kids</Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className={`${styles.custom_item} ${styles.mobile_hidden}`}
              eventKey="4"
            >
              <Accordion.Header className={styles.microbiome}>
                <Link href="https://www.smilebrilliant.com/oral-probiotics-facts/">About The Oral Microbiome</Link>
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
