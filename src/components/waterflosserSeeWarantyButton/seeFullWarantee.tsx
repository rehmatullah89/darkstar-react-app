'use client'
import React from "react";
import styles from './seeFullWarantee.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import SeeFullWaranteePopup from "../waterFlosserSeeFullWaranty/seeFullWarantee";
import Modal from 'react-bootstrap/Modal';


const SeeFullWarantee = () => {
 const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
       <div className={styles.ship_world_Wide_wrapper}> 
         <Container>
          <Row>
            <Col md={12}> 
              <div className={styles.ship_world_title}>
                <Button
                  className="bg-transparent pt-3 border-0 d-inline-block  fs-14 text-white fimaly-multiple-opn text-decoration-none  cursor-pointer warranty-btn btn btn-primary"
                  variant="primary"
                  style={{textTransform:'none',fontWeight:'400'}}
                  onClick={() => setModalShow(true)}
                >
                  See full warranty
                </Button> 

                 <SeeFullWaranteePopup
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                /> 
              </div>
            </Col>
          </Row>
        </Container> 
       </div> 
        </>
    )
}

export default SeeFullWarantee;

