import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Fade from "react-reveal";
import productImg from "../assets/images/product.svg";
import url1 from "../assets/pdf/img1.png";
import url2 from "../assets/pdf/img2.png";
import url3 from "../assets/pdf/img3.png";
import url4 from "../assets/pdf/img4.png";
import url5 from "../assets/pdf/img5.png";
import url6 from "../assets/pdf/img6.png";
import url7 from "../assets/pdf/img7.png";
import url8 from "../assets/pdf/img8.png";
import MyModal from "../components/Model";
import Buttons from "../components/Button";
import ProductCard from "../components/ProductCard";
import "../styles/Product.css";

function MaterialHandling() {
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

  const Width: { width: string } = { width: "150px" };
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
  };

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
              <Col lg={12} sm={12} md={12}>
                <div className="mt-5">
                  <h5 style={{ fontWeight: 700 }} className="text-primary mt-5">
                    Our Services
                  </h5>
                  <h3 style={{ fontWeight: 800 }}>What Solutions We Provide</h3>
                </div>
              </Col>
            </div>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="mt-5">
            <Col lg={12} sm={12} md={12}>
              <p className="d-flex justify-content-start text-justify ">
                We are India's first smart factory solution provider in
                addressing the challenges of the electronics manufacturing
                industry particularly, in traceability, material handling and
                production execution. We offer end-to-end solutions and enable
                electronic manufacturers to significantly improve their overall
                productivity, production efficiency and help our clients to
                elevate their journey of automation. We carry the pride of our
                Solutions to be of high Quality, Intelligent and Creative along
                with an exclusive alignment to Industry 4.0.
              </p>
            </Col>
          </Row>
        </Fade>

        <Row className=" mt-4">
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                style={{ backgroundColor: "blue" }}
                title="Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC "
                text="PCB (Printed Circuit Board) conveyors are essential 
                    equipment within the Surface Mount Technology (SMT) assembly...."
                productImg={productImg}
                url={url1}
                onClick={() => handleShowModal(url1)}
              />
            </Fade>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                title="Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC "
                text="PCB (Printed Circuit
                     Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..."
                productImg={productImg}
                url={url2}
                onClick={() => handleShowModal(url2)}
              />
            </Fade>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                title="Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC "
                text="PCB (Printed Circuit Board) conveyors
                     are essential equipment within the Surface Mount Technology (SMT) assembly... "
                productImg={productImg}
                url={url3}
                onClick={() => handleShowModal(url3)}
              />
            </Fade>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                title="Single Lane Conveyor Series 1 M Inspection Conveyor QIK-1000IC "
                text="PCB (Printed Circuit Board) conveyors 
                    are essential equipment within the Surface Mount Technology "
                productImg={productImg}
                url={url4}
                onClick={() => handleShowModal(url4)}
              />
            </Fade>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                title="Single Lane Conveyor Series 1 M Cooling Conveyor QIK-1000CC "
                text="PCB (Printed Circuit Board) conveyors
                    are essential equipment within the Surface Mount Technology (SMT)... "
                productImg={productImg}
                url={url5}
                onClick={() => handleShowModal(url5)}
              />
            </Fade>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                title=" Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC "
                text="PCB (Printed Circuit Board) conveyors 
                    are essential equipment within the Surface Mount Technology (SMT) assembly.... "
                productImg={productImg}
                url={url6}
                onClick={() => handleShowModal(url6)}
              />
            </Fade>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                title=" Single Lane Series Magazine Loader QIK-ML "
                text="PCB (Printed Circuit Board) loaders are an 
                    integral part of the Surface Mount Technology (SMT) assembly process.... "
                productImg={productImg}
                url={url7}
                onClick={() => handleShowModal(url7)}
              />
            </Fade>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Fade bottom>
              <ProductCard
                className="mycard"
                title="Single Lane Series Magazine Unloader QIK-MUL "
                text="PCB (Printed Circuit Board) 
                    unloaders play a crucial role in the Surface Mount Technology (SMT)... "
                productImg={productImg}
                url={url8}
                onClick={() => handleShowModal(url8)}
              />
            </Fade>
          </Col>
        </Row>
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
}

export default MaterialHandling;
