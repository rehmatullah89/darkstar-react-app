import Modal from 'react-bootstrap/Modal';

function PopUp({ isOpen, onClose, children }) {

  return (

    <Modal show={isOpen} onHide={onClose} centered>

      <Modal.Body> {children}</Modal.Body>
    </Modal>

  );
}

export default PopUp;