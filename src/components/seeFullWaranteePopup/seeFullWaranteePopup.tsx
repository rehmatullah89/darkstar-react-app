import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

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
              What is the cariPRO™ Electric Toothbrush 2 year limited warranty?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="see-full-wrantee">
              Smile Brilliant warrants the cariPRO™ Electric Toothbrush for a
              period of twenty-four (24) months from date of purchase. Defects
              due to faulty workmanship or materials will be repaired or
              replaced at the expense of Smile Brilliant so long as proof of
              purchase or warranty registration can be substantiated at time of
              claim*. Use of replacement parts other than authentic cariPRO™
              parts will void the warranty. Users should adhere to all
              instructions included in the user manual and should refrain from
              actions or uses that are deemed unnecessary or which are warned
              against in the user manual. Smile Brilliant cannot be held
              responsible for powering failures due to improper voltage supply
              to the appliance.{" "}
              <i>Warranty does not cover replacement brush heads.</i>
            </p>
            <p className="see-full-wrantee">
              You may make a warranty claim by clicking{" "}
              <Link href="/contact" className="fs-14 hover-text-orange fimaly-multiple-opn cursor-pointer text-blue-800" style={{color:'#4597cb',textDecoration:'none'}}>HERE.</Link>
            </p>
            <h5
              style={{
                fontSize: "13px",
                lineHeight: "20px",
                textAlign: "center",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              HOW TO REGISTER FOR YOUR WARRANTY
            </h5>
            <p className="see-full-wrantee">
              <i>I purchased from the Smile Brilliant Website</i>
            </p>
            <p className="see-full-wrantee">
              Great! Your warranty is automatically registered and store in our
              system. There is nothing more you need to do!
            </p>
            <p className="see-full-wrantee">
              <i>
                I received the toothbrush through my dentist or insurance
                company.
              </i>
            </p>
            <p className="see-full-wrantee">
              Lucky you! When you buy (or receive) a cariPRO from your dentist
              or insurance provider, you must fill out the  <Link
                href="/contact"
                className="text-decoration-none fs-13 text-blue-500 hover-text-orange"
              >
                warranty registration form
              </Link>
              . If you are unable to do so, you can register your toothbrush
              over the phone by calling <Link
                href="tel:855-944-8361"
                className="text-decoration-none fs-13 text-blue-500 hover-text-orange"
              >
                855-944-8361.
              </Link> 
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
