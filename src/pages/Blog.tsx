import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleRight } from "react-icons/fa6";
// import Fade from "react-reveal/Fade";
import "animate.css";
import "../styles/Blog.css";

function Blog() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisibleChallenges, setIsVisibleChallenges] = useState<boolean>(false);
  const toggleAccordianBenifits = () => {
    setIsVisible(!isVisible);
    setIsVisibleChallenges(false);
  };
  const toggleAccordionChallenges = () => {
    setIsVisibleChallenges(!isVisibleChallenges);
    setIsVisible(false);
  };

  return (
    <Container className="pt-5 pb-5 mt-5 text-center">
      <Row className="mb-5 p-2 mt-5 ">
        <Fade bottom duration="1500">
          <Col xs={12} className="mb-5">
            <h1 className="text-primary fs-4 fw-bold mb-4">
              Unlocking Automation for Electronic Manufacturing Services to
              Enhance Shop Floor Efficiency and Productivity
            </h1>
            <p>
              {" "}
              In the rapidly evolving landscape of electronic manufacturing
              services (EMS), the integration of automation technologies has
              emerged as a transformative solution to significantly enhance shop
              floor efficiency and productivity. This strategic implementation
              of automation not only streamlines production processes but also
              empowers manufacturers to meet escalating demands, reduce
              operational costs, and ensure consistent product quality. This
              section delves into the pivotal role of automation in the EMS
              sector, highlighting its benefits, challenges, and potential
              future developments.
            </p>
          </Col>
        </Fade>
        <Fade bottom duration="1500">
          <Col xs={12} className="mb-4">
            <div className="accordion">
              <div className="item">
                <div className="d-flex flex-row justify-content-space-between">
                  <h1 className="text" onClick={toggleAccordianBenifits}>
                    {" "}
                    Benefits of Automation in EMS :
                  </h1>
                  <FaAngleRight
                    className={`icons ${isVisible ? "rotate" : ""}`}
                    onClick={toggleAccordianBenifits}
                  />
                </div>

                <div className={`hidden-box ${isVisible ? "active-box" : ""}`}>
                  <p>
                    <span className="fw-bold">Enhanced Efficiency :</span>{" "}
                    Automation minimizes human intervention in repetitive and
                    time-consuming tasks, allowing manufacturers to optimize
                    resource allocation and reduce cycle times. This leads to
                    increased throughput, reduced lead times, and improved
                    overall operational efficiency.
                    <br /> <span className="fw-bold">
                      Consistent Quality :
                    </span>{" "}
                    Automated systems ensure standardized processes, reducing
                    the likelihood of human errors and defects. This results in
                    higher product quality and reliability, which is
                    particularly crucial in the electronics industry where
                    precision is paramount.
                    <br />
                    <span className="fw-bold">Scalability :</span> Automation
                    equips EMS providers to seamlessly scale up production to
                    meet fluctuating demands. Rapid adjustments can be made
                    without the need for extensive retraining or recruitment
                    efforts.
                    <br />
                    <span className="fw-bold">
                      Data-Driven Decision Making :
                    </span>{" "}
                    Automation generates real-time production data and analytics
                    that enable data-driven decision-making. Manufacturers can
                    identify bottlenecks, performance trends, and areas for
                    improvement, fostering continuous enhancement of
                    manufacturing processes.
                    <br /> <span className="fw-bold"> Cost Efficiency :</span>
                    Although initial setup costs can be substantial, the long-
                    term savings gained from reduced labor costs, minimized
                    material wastage, and optimized resource utilization justify
                    the investment in automation technology.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Fade>
        <Fade bottom duration="1500">
          <Col xs={12}>
            <div className="accordion">
              <div className="item">
                <div className="d-flex flex-row">
                  <h1 className="text" onClick={toggleAccordionChallenges}>
                    Challenges and Considerations :
                  </h1>

                  <FaAngleRight
                    className={`icons ${isVisibleChallenges ? "rotate" : ""}`}
                    onClick={toggleAccordionChallenges}
                  />
                </div>
                <div
                  className={`hidden-box ${
                    isVisibleChallenges ? "active-box" : ""
                  }`}
                >
                  <p>
                    <span className="fw-bold">
                      Collaborative Robotics (Cobots) :
                    </span>{" "}
                    The integration of cobots, which work alongside human
                    operators, is expected to rise. These robots can handle
                    intricate tasks that demand human dexterity while reducing
                    the risk of physical strain and errors.
                    <br /> <span className="fw-bold">undefined :</span>{" "}
                    undefined
                    <br />
                    <span className="fw-bold">
                      Internet of Things (IoT) Connectivity :
                    </span>{" "}
                    IoT-enabled devices can facilitate real-time monitoring,
                    tracking, and remote control of manufacturing equipment,
                    enabling efficient maintenance and proactive issue
                    resolution.
                    <br />
                    <span className="fw-bold">
                      Additive Manufacturing (3D Printing) :
                    </span>{" "}
                    3D printing technology can revolutionize the production of
                    electronic components, allowing for rapid prototyping,
                    customization, and reduced material waste.
                    <br />
                    <br />
                    <span>
                      In conclusion, the adoption of automation in electronic
                      manufacturing services is a strategic imperative for
                      achieving higher levels of efficiency, productivity, and
                      competitiveness. While challenges persist, the benefits,
                      including enhanced quality, scalability, and data-driven
                      decision-making, outweigh the initial obstacles. As
                      technology continues to advance, the EMS sector stands
                      poised to leverage emerging trends like collaborative
                      robotics, AI, and IoT connectivity to further
                      revolutionize its operations and reshape the future of
                      electronic manufacturing.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
}
export default Blog;
