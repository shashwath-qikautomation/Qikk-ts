import React from "react";
import Modal from "react-bootstrap/Modal";

type MyModalProps ={
 title : string
 children: JSX.Element[] | JSX.Element
 show?:boolean
 fullscreen?: boolean
  className?: string
}

function MyModal(props:MyModalProps) {
  const { fullscreen, ...modalProps } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen={fullscreen ? 'sm' : undefined}
    >
      <Modal.Header closeButton className="bg-light">
        <h5>{props.title}</h5>
      </Modal.Header>
      <Modal.Body className="bg-light">{props.children}</Modal.Body>
    </Modal>
  );
}

export default MyModal;

