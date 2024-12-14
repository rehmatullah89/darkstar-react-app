'use client'
import React, { Suspense, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from './skin-care.module.css'
import assets from "./assets";
import SkinCareFaqs from "../skinCare/skinCare_faqs";

const ScienceSection = () =>{
    const [scrollTop, setScrollTop] = useState(0);
    const parallaxSpeed = 0.5;
    
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleScroll = () => {
          setScrollTop(window.scrollY);
        };
  
        window.addEventListener("scroll", handleScroll);
  
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, []);
    return(
<div
className={`${styles.section_real_science} ${styles.parallel_image_banner} ${styles.parallel_window}`}
 style={{ backgroundPosition: `center ${-scrollTop * parallaxSpeed}px` }}
>
<div
  className="navbar-fixed-top-barr long-strap"
  style={{ zIndex: "9" }}
>
  <span
    className="strip-bar"
    style={{
      width: "25%",
      backgroundColor: "#2d2e2f",
      fontSize: "0px",
      height: "12px",
    }}
  >
    &nbsp;1
  </span>
  <span
    className="strip-bar"
    style={{
      width: "25%",
      backgroundColor: "#d5a415",
      fontSize: "0px",
      height: "12px",
    }}
  >
    &nbsp;2
  </span>
  <span
    className="strip-bar"
    style={{
      width: "25%",
      backgroundColor: "#f0c23a",
      fontSize: "0px",
      height: "12px",
    }}
  >
    &nbsp;3
  </span>
  <span
    className="strip-bar"
    style={{
      width: "25%",
      backgroundColor: "#f5e2aa",
      fontSize: "0px",
      height: "12px",
    }}
  >
    &nbsp;4
  </span>
</div>
<Container className={styles.container_wrap}>
  <div className={styles.section_title}>TELL IT TO ME STRAIGHT</div>
  <h2 className={`${styles.weight_800} ${styles.section_heading_h2}`}>
    The <i className={styles.yellow_text}>real science</i> you{" "}
    <br className={styles.hidden_desktop} /> should{" "}
    <br className={styles.hidden_mobile} /> know about{" "}
    <br className={styles.hidden_desktop} /> your skin health.
  </h2>
  <div className={styles.dont_belive_it}>
    Don’t believe us? Google it.
  </div>

  <Row className={styles.accordian_row}>
    <Col md={4} className={styles.custom_col_four}>
      <div className={styles.men_apply_cream}>
        <Image src={assets.men_cream} alt="men apply cream" />
      </div>
    </Col>
    <Col md={8} className={styles.custom_col_eight}>
      <SkinCareFaqs />
    </Col>
  </Row>
</Container>
</div>
    )

}

export default ScienceSection