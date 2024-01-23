import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { FaAward } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import{ Fade }from "react-awesome-reveal";
import {Zoom} from "react-awesome-reveal";

import Buttons from "../components/Button";
import ResponsiveCollapseCard from "../components/responsiveCard";
import ResponsiveCollapseCard1 from "../components/responsiveCard1";

import aboutSvg from "../assets/images/about.svg";
import creativeSvg from "../assets/images/Creative.svg";
import intelliganceSvg from "../assets/images/Intelligance2.svg";
import CyientLogo from "../assets/clientsLogo/CyientDLM.png";
import TycoonLogo from "../assets/clientsLogo/Tycoon.png";
import frontlineLogo from "../assets/clientsLogo/frontline.jpg";
import vinyasLogo from "../assets/clientsLogo/vinyas.jpg";

import { routes } from "../helper/routes";

import "../styles/About.css";



function About() {
  const navigate = useNavigate();
  // const [modalShow, setModalShow] = React.useState(false);
  const width: { width: string } = { width: "120px" };


  const handleNavigateToContactUs = () => {
    navigate(routes.contact);
  };
  return (
    <div style={{ position: "relative", top: "110px" }}>
      <Container className="position-relative">
        <div>
          <Fade direction="down" duration={1500}>
            <Row className="mt-1 gap-1 p-5 clearfix">

              <Col md={5} className="text-start">
                <img src={aboutSvg} alt="" />
              </Col>
              <Col></Col>
              <Col md={6} className="text-start">
                {/* <h1 style={{ fontSize: "35px" }} className="fw-bolder mb-3">
                  We Collect High Quality Leads
                </h1> */}
                <p className="pt-2">
                  <strong>QIKK AUTOMATION TECHNOLOGIES</strong> PRIVATE LIMITED
                  is a cutting-edge startup based in Mysore, India, dedicated to
                  revolutionizing the electronic manufacturing industry. With a
                  strong focus on innovation, design, and technology, QIK
                  AUTOMATION aims to provide comprehensive solutions for
                  enhancing efficiency, productivity, and automation within the
                  electronic manufacturing sector. The company specializes in
                  the design, development, and manufacturing of advanced
                  equipment and software solutions that streamline various
                  manufacturing processes.
                </p>
                <Buttons
                  width={width.width}
                  name={"Contact Us"}
                  onClick={handleNavigateToContactUs}
                />
              </Col>
            </Row>
          </Fade>
        </div>
        <Fade direction="right" duration={1500}>
          <Row>
            <div className="p-5">
              <h1 style={{ fontSize: "40px" }} className="fs-2 mt-1 fw-bolder">
                Vision and Future Outlook
              </h1>
            </div>
          </Row>
        </Fade>
        <div>
          <Row className=" p-5">
            <Col md={6}>
              <Fade direction="left" duration={1500}>
                <ResponsiveCollapseCard1 />
              </Fade>
            </Col>
            <Col md={6}>
              <Fade direction="right"  duration={1500}>
                <ResponsiveCollapseCard />
              </Fade>
            </Col>
          </Row>
        </div>
        <Fade direction="right"  duration={1500}>
          <Row>
            <div className="p5">
              <h1 style={{ fontSize: "40px" }} className="fs-2 mt-4 fw-bolder">
                Dedicated to revolutionizing the electronic manufacturing
                industry.
              </h1>
            </div>
          </Row>
        </Fade>
        <Row className="p-5">
          <Col md={4} className="text-center mb-3 col-lg-4 col-md-6">
            <Fade direction="left" duration={1500}>
              <Card className="qik border border-0">
                <Card.Header className="border border-0">
                  <FaAward size={"180px"} fluid />
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h5>Quality</h5>
                  </Card.Title>
                  <Card.Text className="text-center">
                    We are committed to delivering products and services of the
                    highest quality, ensuring the satisfaction of our customers
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4} className="text-center mb-3 col-lg-4 col-md-6">
            <Fade direction="down"  duration={1500}>
              <Card className="qik border border-0">
                <Card.Img
                  style={{ height: "170px" }}
                  variant="top"
                  src={intelliganceSvg}
                  rounded
                  fluid
                />
                <Card.Body>
                  <Card.Title>Intelligence</Card.Title>
                  <Card.Text className="text-center">
                    We aim to create solutions that are not only efficient but
                    also intelligent, capable of adapting and learning from data
                    to provide superior performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4} className="text-center mb-3 col-lg-4 col-md-6">
            <Fade direction="right"  duration={1500}>
              <Card className="qik border border-0">
                <Card.Img
                  style={{ height: "180px" }}
                  variant="top"
                  src={creativeSvg}
                  rounded
                  fluid
                />
                <Card.Body>
                  <Card.Title>Creativity</Card.Title>
                  <Card.Text className="text-center">
                    We foster a culture of creativity and constant improvement,
                    encouraging our team to think outside the box and explore
                    novel ideas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Row
        style={{ marginBottom: "150px", backgroundColor: "#E9FDFD" }}
        className="d-flex justify-content-evenly p-3 gap-1"
      >
        <Col className="col-lg-2 col-md-4 col-6">
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

        <Col className="col-lg-2 col-md-4 col-6">
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
        <Col className="col-lg-2 col-md-4 col-6">
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
        <Col className="col-lg-2 col-md-4 col-6">
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
    </div>
  );
}
export default About;
