import React, { useState, useRef } from "react";
import business from "../assets/images/business.svg";
// import Button from "../components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { routes } from "../helper/routes";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import productImg from "../assets/images/product.svg";
// import Cards from "../components/Cards";
import url1 from "../assets/pdf/img1.png";
import MyModal from "../components/Model";
import Buttons from "../components/Button";
import html2canvas from "html2canvas";
import url2 from "../assets/pdf/img2.png";
import url3 from "../assets/pdf/img3.png";
import url4 from "../assets/pdf/img4.png";
import { jsPDF } from "jspdf";
import CyientLogo from "../assets/clientsLogo/CyientDLM.png";
import TycoonLogo from "../assets/clientsLogo/Tycoon.png";
import frontlineLogo from "../assets/clientsLogo/frontline.jpg";
import vinyasLogo from "../assets/clientsLogo/vinyas.jpg";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "../styles/About.css";

import {Fade} from "react-awesome-reveal";
import {Zoom} from "react-awesome-reveal";

function Article() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const canvasRef = useRef(null);

  const navigateRouteTo = (path:string) => {
    console.log(path);
    navigate(path);
  };

  const onClick = () => navigate(routes.contact);
  const width: { width: string }  = {
    width: "150px",
  };

  const handleShowModal = (url:string) => {
    setSelectedUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUrl("");
    setShowModal(false);
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
    <div style={{ marginBottom: "60px" }}>
      <Row
        style={{
          marginTop: "30px",
          marginBottom: "20px",
          backgroundColor: "#E9FDFD",
          zIndex: "300",
        }}
        className="d-flex justify-content-evenly p-3 "
      >
        <Col className="col-lg-2 col-md-4 p-2 col-6">
          <Zoom duration={2800}>
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>CYIENT DLM</div>
                      <a href="https://www.cyientdlm.com/" target="blank">
                        cyientdlm.com
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={CyientLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Zoom>
        </Col>
        <Col className="col-lg-2 col-md-4 p-2 col-6">
          <Zoom delay={500} duration={2800}>
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>Tycoon Innovative Technology</div>
                      <a href="https://tycoonit.in/" target="blank">
                        tycoonit.in
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={TycoonLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Zoom>
        </Col>
        <Col className="col-lg-2 col-md-4 p-2 col-6">
          <Zoom delay={1000} duration={2800}>
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>Frontline Electronics Ltd.</div>
                      <a
                        href="http://www.frontlineelectronics.com/"
                        target="blank"
                      >
                        frontlineelectronics.com
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={frontlineLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Zoom>
        </Col>
        <Col className="col-lg-2 col-md-4 p-2 col-6">
          <Zoom delay={1500} duration={2800}>
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>Vinyas Innovative Technologies Ltd.</div>
                      <a href="https://www.vinyasit.com/" target="blank">
                        vinyasit.com
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={vinyasLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Zoom>
        </Col>
      </Row>
      <Row xs={1} md={2} className="md-2 p-5">
        <Col className="pt-2">
          <Fade direction="left" duration={1500}>
            <Image src={business} width="400" height="400px" fluid />
          </Fade>
        </Col>
        <Col className="gap-4 pt-4">
          <Fade direction="right" duration={1500}>
            {" "}
            <h1
              style={{ fontSize: "calc(1.275rem + 1.5vw)" }}
              className="fs-1 fw-bolder"
            >
              Our compressive solutions aligned with Industry 4.0
            </h1>
            <p className="p-3">
              We offer end-to-end solutions and enable electronic manufacturers
              to significantly improve their overall productivity, production
              efficiency and help our clients to elevate their journey of
              automation. We carry the pride of our Solutions to be of high
              Quality, Intelligent and Creative along with an exclusive
              alignment to Industry 4.0.
            </p>
            <Buttons
              width={width.width}
              height={"40px"}
              name={"Contact Us"}
              onClick={onClick}
            />
          </Fade>
        </Col>
      </Row>
      <Fade direction="down" duration={1500}>
        <Row className="gap-4 p-5">
          <Col>
            <h5 className="text-primary fs-5 fw-bold">
              Our Product & Solutions
            </h5>
            <h1
              style={{ fontSize: "calc(1.275rem + 1.5vw)" }}
              className="fs-2 mt-4 fw-bolder"
            >
              Our compressive solutions aligned with Industry 4.0
            </h1>
          </Col>
        </Row>
      </Fade>
      <Fade direction="down" duration={1500}>
        <Row className="row gap-5 w-75 mx-auto justify-content-center">
          <Col className="col-md-5 card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-4 fw-semibold">Material Handling Solutions</h1>
            <p className="p">
              Revolutionize efficiency with our cutting-edge Material Handling
              Solutions for SMT, designed for efficient storage and easy access
              to surface mount components. Elevate precision in your optimizing
              your surface mounting technology processes.
            </p>
            <Buttons
              width={"120px"}
              height={"40px"}
              name={"Read More"}
              onClick={() => navigateRouteTo(routes.materialHandling)}
            />
          </Col>
          <Col className="col-md-5 card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-4 fw-semibold">Smart Storage Solutions</h1>
            <p className="p">
              Elevate your electronic manufacturing process with our Smart
              Storage Solutions. Our Reel Racks for SMT are engineered for
              precision, ensuring optimal organization and accessibility for
              your electronic components.
            </p>
            <Buttons
              width={"120px"}
              height={"40px"}
              name={"Read More"}
              onClick={() => navigateRouteTo(routes.smartStorage)}
            />
          </Col>
          <Col className="col-md-5 card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-4 fw-semibold">Smart Inventory Solutions</h1>
            <p className="p">
              Our Smart Inventory Solutions bring intelligence to your SMT
              inventory. With our Reel Racks, gain real-time visibility into
              component availability, reduce pick-and-place machine downtime,
              and optimize the overall production workflow.
            </p>
            <Buttons
              width={"120px"}
              height={"40px"}
              name={"Read More"}
              onClick={() => navigateRouteTo(routes.smartInventory)}
            />
          </Col>
          <Col className="col-md-5 card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-4 fw-semibold">Traceability</h1>
            <p className="p">
              Enhance electronic manufacturing precision with our SMT Reel Rack
              Traceability, featuring barcode integration, unique serial
              numbers, ERP synchronization, and real-time monitoring for
              seamless production control and compliance assurance.
            </p>
            <Buttons
              width={"120px"}
              height={"40px"}
              name={"Read More"}
              onClick={() => navigateRouteTo(routes.traceability)}
            />
          </Col>
        </Row>
      </Fade>
      <MyModal
        show={showModal}
        fullscreen={true}
        onHide={handleCloseModal}
        // className="modal-pdf border-0"
      >
        <div className="modal-pdf border-0 image-frame text-center m-auto border-0">
          <img
            style={{ width: "100%" }}
            ref={canvasRef}
            src={selectedUrl}
            alt="image"
          ></img>
          <Buttons
            color="blue"
            name="Download PDF"
            onClick={handleDownloadPdf}
          ></Buttons>
        </div>
      </MyModal>
    </div>
  );
}

export default Article;
