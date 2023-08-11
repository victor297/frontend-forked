import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Email from "./Email";

const PaymentModal = (props) => {
  const [showReceipt, setShowReceipt] = useState(false);

  const handlePaymentComplete = () => {
    setShowReceipt(true);
  };

  const handleModalClose = () => {
    setShowReceipt(false);
    props.onHide();
  };

  const paymentDetails = props.payDetails && props.payDetails[0];

  return (
    <Modal {...props} size='lg' centered>
      <Modal.Header closeButton className='bg-danger text-white'>
        <div className='d-flex align-items-center'>
          <div className='rounded-circle bg-white p-2'>
            <span className='text-danger font-weight-bold'>
              ${props.TotalAmount}
            </span>
          </div>
          <sup className='text-info text-bold ms-2'>
            <strong>Eropay</strong>
          </sup>
        </div>
      </Modal.Header>
      <Modal.Body>
        <h5 className='mb-4'>
          {showReceipt ? "Upload Payment Receipt" : "Make a Transfer"}
        </h5>

        {paymentDetails && !showReceipt && (
          <div className='py-4 border'>
            <h6 className='mb-3 text-center text-info'>
              {paymentDetails.type}
            </h6>
            <h3 className='text-center'>
              <strong>{paymentDetails.name}</strong>
            </h3>
          </div>
        )}

        {showReceipt ? (
          <>
            <p className='text-danger mb-3'>
              ~Note: This is an automated transfer. Ensure your name matches
              your Erofetish details.
            </p>
            <Email />
          </>
        ) : (
          <>
            <p className='text-danger mb-3'>
              ~This is an automated transfer avoid transfering above or below
              the actual amount
            </p>
            <p className='text-danger mb-3'>~Avoid multiple transfers</p>
            <Button
              onClick={handlePaymentComplete}
              variant='warning'
              className='w-55 m-auto'
            >
              I have paid, Check now
            </Button>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleModalClose} variant='outline-dark'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
