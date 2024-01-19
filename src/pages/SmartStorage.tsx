import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import MyModal from "../components/Model";
import productImg from "../assets/images/product.svg";
import Fade from "react-reveal";
import Buttons from "../components/Button";
import url10 from "../assets/pdf/img10.png";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "../styles/Product.css";
import { jsPDF } from "jspdf";

const SmartStorage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const canvasRef = useRef(null);

  const handleShowModal = (url:string) => {
    setSelectedUrl(url);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedUrl("");
    setShowModal(false);
  };

  const Width:{ width: string } = { width: "150px" };

  const handleDownloadPdf = () => {
    if (canvasRef.current) {
      const captureNode = canvasRef.current;
      const { width, height } = captureNode.getBoundingClientRect();
      const pdf = new jsPDF({ unit: "px", format: [width, height] });
      html2canvas(captureNode).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        pdf.addImage(dataUrl, "PNG", 0, 0, width, height);
        pdf.save("QIK.pdf");
      });
    }
  };

  return (
    <div>
      <Container>
        <Fade bottom>
          <Row className="d-flex justify-content-center mt-5">
            <div className="mt-5">
              <Col lg={12}>
                <div className="mt-5">
                  <h5 className="text-primary" style={{ fontWeight: 700 }}>
                    Our Services
                  </h5>
                  <h3 style={{ fontWeight: 800 }}>What Solutions We Provide</h3>
                </div>
              </Col>
            </div>
          </Row>
        </Fade>
        <Row className="mt-5">
          <Col lg={12} sm={12} md={12}>
            <p className="d-flex justify-content-start text-justify">
              We are India's first smart factory solution provider in addressing
              the challenges of the electronics manufacturing industry
              particularly, in traceability, material handling and production
              execution. We offer end-to-end solutions and enable electronic
              manufacturers to significantly improve their overall productivity,
              production efficiency and help our clients to elevate their
              journey of automation. We carry the pride of our Solutions to be
              of high Quality, Intelligent and Creative along with an exclusive
              alignment to Industry 4.0.
            </p>
          </Col>
        </Row>
        <Fade bottom>
          <Row className="mt-4">
            <Col sm={12} md={6} lg={4}>
              <ProductCard
                title="Smart Storage Series Smart Reel Storage System QIK-SRSS "
                text="Our Storage system is equipped 
                    with features to improve component management, reduce errors... "
                productImg={productImg}
                url={url10}
                onClick={() => handleShowModal(url10)}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
      <MyModal
        show={showModal}
        fullscreen={true}
        onHide={handleCloseModal}
        className="modal-pdf border-0"
      >
        <div className="image-frame text-center m-auto border-0">
          <img
            style={{ width: "100%" }}
            ref={canvasRef}
            src={selectedUrl}
            alt="image"
          ></img>
          <Buttons
            color="blue"
            name="Download PDF"
            width={Width.width}
            onClick={handleDownloadPdf}
          ></Buttons>
        </div>
      </MyModal>
    </div>
  );
};

export default SmartStorage;
