import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './getRefill.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

const GetRefill = () => {
  return (
    <div>
      <Container className="get-refil-container">
        <div className="get-refill-wrapper text-center row">
          <Row>
            <Col md={6}>
              <h2>ALREADY HAVE TRAYS? GET REFILLS</h2>
            </Col>
            <Col md={6} className="get-refil-buttons-wrapper">
              <Button className="btn btn-primary-orange">
                WHITENING GEL REFILLS
              </Button>

              <Button className="btn btn-primary-purple">
                DESENSITIZING GEL REFILLS
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default GetRefill;
