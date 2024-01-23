import React from "react";
import Buttons from "../components/Button";
import heroImg from "../assets/images/hero-img.png";
import Automation from "../assets/images/automation.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { routes } from "../helper/routes";
import Article from "../components/Article";
import Image from "react-bootstrap/Image";
import "../styles/HomePage.css";
import "animate.css";
import {Fade} from "react-awesome-reveal";

function HomePage() {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.about);
  const width :{width:string} = {
    width: "150px",
  };

  return (
    <div className="container-fluid pt-5 pb-5 mt-4">
      <Row xs={1} md={2} className="header-content mb-5 p-5 fade-in-up">
        <Col className="text-start">
          {" "}
          <h1
            id="top"
            style={{ fontSize: "calc(1.375rem + 1.5vw)" }}
            className="animate fw-bolder"
          >
            Quality, Intelligent & Creative Solutions
          </h1>
          <p className="animate-quote fst-italic pt-2">
            To revolutionize manufacturing and shop floor operations with
            unprecedented efficiency and innovation in scale!!
          </p>
          <p className="animate-content pt-2">
            <strong>QIK AUTOMATION</strong> is a cutting-edge startup based in
            Mysuru, India. We specialize in the design, development, and
            manufacturing of advanced equipment and software solutions for
            Electronic Manufacturing Industries. We offer end-to-end solutions
            that enable electronic manufacturers to significantly improve their
            overall productivity and elevate their journey of automation.
          </p>
          <div className="animate-button pt-4">
            <Buttons
              name={"Get Started"}
              width={width.width}
              onClick={onClick}
            />
          </div>
        </Col>
        <Col className="p-3">
          <Image
            className="moveArrow"
            src={Automation}
            width="500"
            height="400"
            fluid
          />
        </Col>
      </Row>
      <Fade direction="down" duration={1500}>
        <Row className="gap-4 p-2">
          <Col>
            <h5 className="text-primary fs-5 fw-bold">About Us</h5>
            <h1
              style={{ fontSize: "calc(1.275rem + 1.5vw)" }}
              className="fs-2 mt-4 fw-bolder"
            >
              Dedicated to revolutionizing the electronic <br /> manufacturing
              industry.
            </h1>
          </Col>
        </Row>
      </Fade>
      <Fade direction="down" duration={1500}>
        <Row className="gap-4 p-5">
          <Col className="card-effect shadow p-4 mb-3 bg-white rounded">
            <h1 className="fs-4 fw-semibold">Quality</h1>
            <p className="p-2">
              We are committed to delivering products and services of the
              highest quality, ensuring the satisfaction of our customers
            </p>
          </Col>
          <Col className="card-effect shadow p-4 mb-3 bg-white rounded">
            <h1 className="fs-4 fw-semibold">Intelligence</h1>
            <p className="p-2">
              We aim to create solutions that are not only efficient but also
              intelligent, capable of adapting and learning from data to provide
              superior performance. industry.
            </p>
          </Col>
          <Col className="card-effect shadow p-4 mb-3 bg-white rounded">
            <h1 className="fs-4 fw-semibold">Creativity</h1>
            <p className="p-2">
              We foster a culture of creativity and constant improvement,
              encouraging our team to think outside the box and explore novel
              ideas.
            </p>
          </Col>
        </Row>
      </Fade>
      <Article />
    </div>
  );
}

export default HomePage;
