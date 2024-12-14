import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import '@/components/masterLayouts/moneyBackGurantee/moneyBackGurantee.css';
import ScrollButton from '@/ui/resuable-componets/ScrollButton';
const MoneyBackGurantee = (props: any) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="money-back-gurantee text-center">
              <div className="hundred-percent-img">
                <Image
                  src={props.image}
                  alt="hundredPercent"
                  width={160}
                  height={160}
                  quality={100}
                />
              </div>
              <div className="google-trust-img">
                <Image
                  src={props.image2}
                  alt="hundredPercent"
                  width={300}
                  height={70}
                  quality={100}
                />
              </div>

              <div className="money-back-gurantee-detail">
                <h3>{props.title}</h3>
                <h3>{props.Slogan}</h3>
                <p>{props.description}</p>

                <b>{props.BoldTitle}</b>
              </div>
              <div className="our-promise mb-5">
                <p className="text-center">
                  <ScrollButton
                    targetId={props?.targetId}
                    className="btn-primary-blue btn-lg"
                    style={props?.style}
                  >
                    {props.ButtonText}
                  </ScrollButton>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoneyBackGurantee;
