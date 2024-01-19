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
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navigateRouteTo = (path:string) => {
    navigate(path);
  };

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
        <div className="row gap-4">
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
                  href="mailto:info@qikautomation.com"
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
              <h1 className="fs-6 pb-2 text-black">Products</h1>
              <Nav.Link
                className="pb-2"
                onClick={() => navigateRouteTo(routes.materialHandling)}
              >
                Material Handling
              </Nav.Link>
              <Nav.Link
                className="pb-2"
                onClick={() => navigateRouteTo(routes.smartStorage)}
              >
                Smart Storage
              </Nav.Link>
              <Nav.Link
                className="pb-2"
                onClick={() => navigateRouteTo(routes.smartInventory)}
              >
                Smart Inventory
              </Nav.Link>
              <Nav.Link
                className="pb-2"
                onClick={() => navigateRouteTo(routes.traceability)}
              >
                Traceability
              </Nav.Link>
              <div className="pt-3">
                <Nav.Link
                  className="pb-2"
                  onClick={() => navigateRouteTo(routes.about)}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="pb-2"
                  onClick={() => navigateRouteTo(routes.contact)}
                >
                  Contact
                </Nav.Link>
              </div>
            </Col>
          </div>
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