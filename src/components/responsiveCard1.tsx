import React, { useState, useEffect } from "react";
import { Card, CardBody, CardText } from "react-bootstrap";
import about1Svg from "../assets/images/about1.svg";
import MyModal from "./Model";
import Buttons from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ResponsiveCollapseCard1 = () => {
  const width = { width: "120px" };
  const [content, setContent] = useState<string>();

  const updateContent = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setContent("Our mission is to.....");
    } else if (screenWidth < 1366) {
      setContent("Our mission is to empower electronic companies");
    } else {
      setContent(
        "Our mission is to empower electronic manufacturing companies"
      );
    }
  };

  const [modalShow, setModalShow] = useState<boolean>(false);

  useEffect(() => {
    updateContent();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateContent);

    return () => {
      window.removeEventListener("resize", updateContent);
    };
  }, []);

  return (
    <Card
      className="hovCard border border-0  mb-5 rounded text-black overflow-auto"
      style={{ backgroundImage: `url(${about1Svg})`, height: "23rem" }}
    >
      <CardBody className="hoover rounded p-2 bottom-0 ">
        <div>
          <Card.Title>
            <h5>Mission</h5>
          </Card.Title>
          <Card.Text className="text-start m-2">
            <p>{content}</p>
            <Buttons
              variant="primary"
              onClick={() => setModalShow(true)}
              width={width.width}
              name={"Read More"}
            ></Buttons>
          </Card.Text>
          <CardText className="text-start m-2">
            <MyModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              title="Mission"
            >
              <p>
                Our mission is to empower electronic manufacturing companies
                with state-of-the-art technology solutions that optimize
                production processes, reduce operational costs, and enhance
                overall competitiveness in a rapidly evolving market.
              </p>
            </MyModal>
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
};

export default ResponsiveCollapseCard1;
