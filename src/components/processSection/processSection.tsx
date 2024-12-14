import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import syringImg from '../../../public/assets/graphic-whitening-syringe-tip.webp';
import frontImg from '../../../public/assets/graphic-whitening-gel-tray-application.webp';
import hourImg from '../../../public/assets/graphic-whitening-gel-duration.webp';
import ScrollButton from '@/ui/resuable-componets/ScrollButton';


const ProcessSection = () => {
  return (
    <>
      <div className="process-section-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <div className="heading-content-mbt">
                <h2>EASY TO USE</h2>
                <p>
                  Specially formulated for your custom-fitted whitening trays.
                </p>
              </div>
            </Col>
          </Row>
          <div className="processSectionInnerRow">
            <Row
              className="process-container"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Col md={4}>
                <div
                  id="the-process-image-1"
                  className="process-container-single-img"
                >
                  <Image src={syringImg} alt="graphic" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      1
                    </div>
                    <div className="the-process-title the-process-title-1">
                      <span style={{ color: '#f8a18a' }}>
                        Remove The Syringe Tip
                      </span>
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      Remove the breakaway end cap from the tip of the
                      syringe. (save for recapping)
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div
                  id="the-process-image-2"
                  className="process-container-single-img"
                >
                  <Image src={frontImg} alt="graphictray" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      2
                    </div>
                    <div className="the-process-title the-process-title-1">
                      <span style={{ color: '#f8a18a' }}>
                        Apply Gel To Trays
                      </span>
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      Apply a “string” of teeth whitening gel along the front
                      outer surface of the trays which is the portion that comes
                      in  contact with the front of your teeth.
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div
                  id="the-process-image-3"
                  className="process-container-single-img"
                >
                  <Image src={hourImg} alt="smile" />
                </div>

                <div className="heading-text">
                  <div className="heading-text-detail">
                    <div className="the-process-circle the-process-circle-1">
                      3
                    </div>
                    <div className="the-process-title the-process-title-1">
                      <span style={{ color: '#f8a18a' }}>
                        Let The Gel Work!
                      </span>
                    </div>
                  </div>

                  <div className="text-block-mbt">
                    <div className="the-process-content-text">
                      The average person should use the  product daily for
                      1 week  at 1-3 hours per 
                      session
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <div className="order-button">
                  <p className="text-center">

                  <ScrollButton
                      targetId="choosePackageWarpper"
                      className="btn btn-primary-blue btn-lg"
                      style={{ marginBottom: '50px', minWidth: '237px' }}
                    >
                       ORDER NOW
                    </ScrollButton>
                  
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProcessSection;
