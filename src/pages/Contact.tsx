import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Buttons from "../components/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { Fade } from "react-reveal";
import "animate.css";

// type  ContactProps = {
//    fontSize: string
//     fontWeight: string
//     marginBottom: string
//     lineHeight: string

// }

function Contact ()  {
//   const h2: ContactProps = {
//     fontSize: "50px",
//     fontWeight: "700",
//     marginBottom: "66px",
//     lineHeight: "1.3",
//   };

 

  return (
    <div className="container-lg pt-5 mt-5">
      <div className="contact-section m-3">
        <div className="row">
          <div className="col col-xs-12 col-md-12 col-sm-12 col-lg-12">
            <Fade bottom>
              <h2
                className="contact-title mt-3 fs-2 d-flex justify-content-center fw-bolder"
                style={{ fontSize: "calc(1.275rem + 1.5vw)" }}
              >
                Get In Touch
              </h2>
            </Fade>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-xs-12 col-lg-8 col-md-12 col-sm-12 mb-4">
            <div className="form-group">
              <div className="row">
                <Fade bottom>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your name"
                      id="text-area"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your Email"
                      id="email"
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="col-12">
                    <textarea
                      rows={5}
                      className="form-control mb-3"
                      placeholder="Enter Message"
                      id="message"
                    ></textarea>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="col-12">
                    <select className="form-control mb-3" id="reason">
                      <option>Reason 1</option>
                      <option>Reason 2</option>
                      <option>Reason 3</option>
                    </select>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="col-12">
                    <input
                      className="form-control mb-3"
                      type="text"
                      placeholder="Enter Subject"
                      id="subject"
                    />
                  </div>
                </Fade>
              </div>
             
            </div>
            <Fade bottom>
              <div className="row">
                <div className="col">
                  <Buttons
                    width={"120px"}
                    className="btn"
                    name="SEND"
                  ></Buttons>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col col-sm-12 col-md-4 col-lg-4 mb-5 ml-1">
            <Fade bottom>
              <Card className="border border-0">
                <Card.Body>
                  <Row>
                    <Card.Text>
                      <div className="d-flex flex-row">
                        <div>
                          <MdHomeFilled
                            size={"20px"}
                            style={{ marginRight: "10px" }}
                          />
                        </div>
                        <p style={{ fontSize: "14px" }}>
                          <b>
                            {" "}
                            No.22, P-3 & P-4 , Site No.97 3rd Phase Koorgalli
                            Industrial Area,Mysore,
                          </b>{" "}
                          <br /> Karnataka-570018
                        </p>
                      </div>
                    </Card.Text>

                    <Card.Text>
                      <div className="d-flex flex-row">
                        <div>
                          <FaPhoneAlt
                            size={"20px"}
                            style={{ marginRight: "10px" }}
                          />
                        </div>
                        <p style={{ fontSize: "14px" }}>
                          <b> +91 8277995300</b> <br /> Mon to Fri 9am to 6pm
                        </p>
                      </div>
                    </Card.Text>

                    <Card.Text>
                      <div className="d-flex flex-row">
                        <div>
                          <IoMdMail
                            size={"20px"}
                            style={{ marginRight: "10px" }}
                          />
                        </div>
                        <p style={{ fontSize: "14px" }}>
                          <b> info@qikautomation.com</b> <br /> Send us your
                          query anytime!
                        </p>
                      </div>
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
