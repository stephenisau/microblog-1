import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Login = (props) => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <Modal isOpen={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        form!
      </Modal.Body>
    </Modal>
  )

}
export default Login