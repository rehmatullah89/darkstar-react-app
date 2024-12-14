'use client'
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import assets from "./assets";
import Modal from "react-bootstrap/Modal";
import styles from './video.module.css';


const NightGuardVideoPopup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div className={styles.image_circle}>
        <div className={styles.postion_custom}>
        <div
          id="play_video"
          className={styles.video_play_button}
          onClick={handleShow}
        >
          <span></span>
        </div>
        {/* <Image src={assets.videoThumb} alt="video image" /> */}
        </div>
        
      </div>

      <div className={styles.video_modal}>
        <div id="video_modal_content" className="video-modal-content">
          <Modal className="skin_care_modal night-guard-modal" show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sSu8ZLMPask?si=uSv6fMl2dJlPe5KB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
          </Modal>
        </div>
      </div>
      </>
    )
}

export default NightGuardVideoPopup;