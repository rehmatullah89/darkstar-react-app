import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ElectricToothbrushModal(props: any) {
  return (
    <div className="toothbrush_modal">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="toothbrush_heads_modal_wrapper"
      >
        <div className="toothbrush_heads_modal">
          <Modal.Header className="border-0">
            <Modal.Title id="contained-modal-title-vcenter">
              Do you ship outside the United States (international shipments)?
              What is the Cost?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <b>
                Yes! We are able to ship to most countries throughout the world.
              </b>
              The shipping fee will be different for each country (total fees
              will show in your shopping cart at checkout.This fee covers{" "}
              <b>2-way shipping:</b>{" "}
              <i>
                the cost to ship your tray creation package to you and the cost
                to ship your completed custom-fitted trays (after our lab has
                created them) back to you.
              </i>{" "}
              For select countries,
              <b>3-way shipping:</b>{" "}
              <i>
                shipping tray creation system, pre-paid postage to send your
                impressions to our lab, and shipping the completed trays to you
                is
              </i>{" "}
              covered in the total fee. This will be mentioned in the shipping
              caption at the time of checkout. If your country is only covered
              under 2-way shipping, you will be responsible for the cost to ship
              your dental impressions to us. The cost for this is typically
              around $10-15 USD (varies by country). We recommend obtaining a
              tracking number from your post office when you ship your
              impressions!
            </p>

            <p> <i><b>Note:</b> We are not responsible for customs fees/import taxes. </i> </p>

            <button className="btn btn_primary_modal" onClick={props.onHide}>
              GOT IT !
            </button>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default ElectricToothbrushModal;
