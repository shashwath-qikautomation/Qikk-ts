import React from "react";
import { useState, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import{ Fade }from "react-awesome-reveal";
import ProductCard from "../components/ProductCard";
import productImg from "../assets/images/product.svg";
import url9 from "../assets/pdf/img9.png";

function SmartInventory() {
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

  const Width:{ width: string }  = { width: "150px" };

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
    <Container>
      <Fade direction="down">
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
            production efficiency and help our clients to elevate their journey
            of automation. We carry the pride of our Solutions to be of high
            Quality, Intelligent and Creative along with an exclusive alignment
            to Industry 4.0.
          </p>
        </Col>
      </Row>

      <Fade direction="down">
        <Row className="mt-4">
          <Col sm={12} md={6} lg={4}>
            <ProductCard
              title="Smart Storage Series Smart Component Incoming System QIK-SCIS "
              text="A Smart Incoming SMT System
                     Stream lines the process of receiving and inspection electronics component... "
             
              url={url9}
              onClick={() => handleShowModal(url9)}
            />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default SmartInventory;
