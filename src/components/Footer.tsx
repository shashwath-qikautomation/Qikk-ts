import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { routes } from "../helper/routes";
import Image from "react-bootstrap/Image";
import business from "../assets/images/business.svg";
import usa from "../assets/languages/usa.svg";
import china from "../assets/languages/china.svg";
import japan from "../assets/languages/japan.svg";
import thailand from "../assets/languages/thailand.svg";
import { AiFillLinkedin } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#efefef",
        color: "#333537",
        fontWeight: 400,
        fontSize: "14px",
        opacity: 1,
      }}
      className="main-footer"
    >
      <div className="container p-5">
        <div >
          <Row className="gap-4">

          <div className="col">
            <Col className="text-start">
              <h1 className="fs-6 pb-2 text-black">Get In Touch</h1>
              <p>
                <IoLocationSharp /> No.22, P-3 & P-4 , Site No.97 3rd Phase
                Koorgalli Industrial Area Mysore , Karnataka - 570018
              </p>
              <p>
                <FaPhoneAlt />
                <a
                  style={{
                    color: "#3e4643",
                    textDecoration: "none",
                    paddingLeft: "10px",
                  }}
                  href="tel:+4733378901"
                >
                  +91 827 799 5300
                </a>
              </p>
              <p>
                <MdEmail />
                <a
                  style={{
                    color: "#3e4643",
                    textDecoration: "none",
                    paddingLeft: "10px",
                  }}
                  href="#"
                >
                  info@qikautomation.com
                </a>
              </p>
              <div className="d-flex justify-content-start gap-3">
                <a href="#" className="icon">
                  <AiFillLinkedin style={{ fontSize: "25px" }} />
                </a>
                <a href="#" className="icon1">
                  <FaYoutube style={{ fontSize: "25px" }} />
                </a>
                <a href="#" className="icon2">
                  <IoLogoFacebook style={{ fontSize: "25px" }} />
                </a>
                <a href="#" className="icon3">
                  <RiInstagramLine style={{ fontSize: "25px" }} />
                </a>
              </div>
            </Col>
          </div>
          <div className="col">
            <Col className="text-start">
              <Nav.Link className="pb-2" href={routes.about}>
                About
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.contact}>
                Contact
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.materialHandling}>
                Material Handling
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.smartStorage}>
                Smart Storage
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.smartInventory}>
                Smart Inventory
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.traceability}>
                Traceability
              </Nav.Link>
            </Col>
          </div>
          {/* <div className="col-md-6 col-lg-3">
            <Col className="text-start">
              <h1 className="fs-6 pb-3 text-black">Gallery</h1>
              <div className="row g-2">
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
              </div>
              <Col className="pt-4">
                <h1 className="fs-6 pb-3 text-black">Language</h1>
                <div className="d-flex">
                  <Image src={usa} width="20px" />
                  <Image src={china} width="20px" />
                  <Image src={japan} width="20px" />
                  <Image src={thailand} width="20px" />
                </div>
              </Col>
            </Col>
          </div> */}
          <div className="col">
            <Col className="text-start">
              <h1 className="fs-6 pb-2 text-black">Mission</h1>
              <p>
                Our mission is to empower electronic manufacturing companies
                with state-of-the-art technology solutions that optimize
                production processes, reduce operational costs, and enhance
                overall competitiveness in a rapidly evolving market.
              </p>
            </Col>
          </div>
          </Row>
        </div>
        <div
          style={{ position: "relative", top: "40px" }}
          className="d-flex justify-content-center"
        >
          <p>Copyright © 2024 QikAutomation.com. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
