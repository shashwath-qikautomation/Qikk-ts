import React from "react";
import Fade from "react-reveal";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Traceability() {
  return (
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
            production efficiency and help our clients to elevate their journey
            of automation. We carry the pride of our Solutions to be of high
            Quality, Intelligent and Creative along with an exclusive alignment
            to Industry 4.0.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Traceability;
