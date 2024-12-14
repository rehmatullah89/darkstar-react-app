import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ToothbrushHeadsModal(props: any) {
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
            Do you ship the electric toothbrushes internationally?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Smile Brilliant ships all over the world! We have customers in over
            90 countries and are very familiar with international shipments,
            customs, and duties. The cost to ship your cariPRO™ electric
            toothbrush anywhere in the world is free! (unless an alternative
            shipping method is requested)
          </p>

          <button className="btn btn_primary_modal" onClick={props.onHide}>
          GOT IT !
          </button>
        </Modal.Body>
      </div>
    </Modal>
    </div>
  );
}

export default ToothbrushHeadsModal;
