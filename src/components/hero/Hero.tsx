import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { klaviyo } from '@/hooks/pixels';
const Hero = () => {
  // var klaviyo: any = klaviyo

  const viewedProduct = () => {
    // function onIdentifyCompleteCallback() {
    //   klaviyo.PUSH(["track", "Clicked SMS"]);
    // }
    // const identityProperties = {
    //   '$email': 'hamza.don@example.com',
    //   '$first_name': 'Hamza',
    //   '$last_name': 'Don'
    // }
    // klaviyo.identify(identityProperties);
  };
  return (
    <div>
      <div className="homePageWrapper">
        <Container>
          <Row>
            <Col md={7}></Col>
            <Col md={5}>
              <div className="heroSectionDetail text-center">
                <h1>Smile Fearlessly!</h1>
                <p>
                  Professional teeth whitening & oral <br /> care products
                  customized just for you.
                </p>

                <div className="buttons-group">
                  <Button
                    variant="primary btn-primary-orange"
                    onClick={viewedProduct}
                  >
                    WHITENING
                  </Button>

                  <Button variant="secondary btn-primary-teal">
                    {' '}
                    NIGHT GUARDS
                  </Button>
                  <DropdownButton
                    id="dropdown-one"
                    title="WATER FLOSSERS AND BRUSHES"
                    className="dropdown-btn"
                  >
                    <Dropdown.Item href="#/action-1">
                      {' '}
                      CORDLESS WATER FLOSSER
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      {' '}
                      ELECTRIC TOOTHBRUS{' '}
                    </Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton
                    id="dropdown-two"
                    title={
                      <>
                        <span style={{ color: '#9f75ad' }}>NEW!</span> PLAQUE
                        HIGHLIGHTERS <sup>TM</sup>
                      </>
                    }
                    className="dropdown-btn dropdown-two "
                  >
                    <Dropdown.Item href="#/action-1">
                      Original Plaque Highlighters
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Plaque Highlighters for Kids!{' '}
                    </Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton
                    id="dropdown-three"
                    title="NEW! DENTAL PROBIOTICS"
                    className="dropdown-btn  dropdown-three"
                  >
                    <Dropdown.Item href="#/action-1">
                      Dental Probiotics
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Oral & Sinus Probiotics for Kids{' '}
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
