import React from "react";
import { Col, Container, Row, Modal, Carousel } from "react-bootstrap";
import rackImg from "../assets/images/rackImages/rack1.jpg";
import reelRackImg from "../assets/images/rackImages/rack2.jpg";
import conveyorImg1 from "../assets/images/conveyorImages/conveyor1.jpg";
import conveyorImg2 from "../assets/images/conveyorImages/conveyor2.jpg";
import conveyorImg3 from "../assets/images/conveyorImages/conveyor3.jpg";
import conveyorImg4 from "../assets/images/conveyorImages/conveyor4.jpg";
import conveyorImg5 from "../assets/images/conveyorImages/conveyor5.jpg";
import conveyorImg6 from "../assets/images/conveyorImages/conveyor6.jpg";
import conveyorImg7 from "../assets/images/conveyorImages/conveyor7.jpg";
import companyImg1 from "../assets/images/companyImages/companyImg1.jpg";
import companyImg2 from "../assets/images/companyImages/companyImg2.jpg";
import companyImg3 from "../assets/images/companyImages/companyImg3.jpg";
import companyImg4 from "../assets/images/companyImages/companyImg4.jpg";

import rackCorosuel1 from "../assets/images/rackImages/rackCorosuel1.jpg";
import rackCorosuel2 from "../assets/images/rackImages/rackCorosuel2.jpg";
import conveyorCorosuel1 from "../assets/images/conveyorImages/conveyorCorosuel1.jpg";
import conveyorCorosuel2 from "../assets/images/conveyorImages/conveyorCorosuel2.jpg";
import conveyorCorosuel3 from "../assets/images/conveyorImages/conveyorCorosuel3.jpg";
import conveyorCorosuel4 from "../assets/images/conveyorImages/conveyorCorosuel4.jpg";
import conveyorCorosuel5 from "../assets/images/conveyorImages/conveyorCorosuel5.jpg";
import conveyorCorosuel6 from "../assets/images/conveyorImages/conveyorCorosuel6.jpg";
import conveyorCorosuel7 from "../assets/images/conveyorImages/conveyorCorosuel7.jpg";
import companyCorosuel1 from "../assets/images/companyImages/companyCorosuel1.jpg";
import companyCorosuel2 from "../assets/images/companyImages/companyCorosuel2.jpg";
import companyCorosuel3 from "../assets/images/companyImages/companyCorosuel3.jpg";
import companyCorosuel4 from "../assets/images/companyImages/companyCorosuel4.jpg";

import { useState } from "react";
import "../styles/Gallery.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import { FaClone } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
// import Fade from "react-reveal/Fade";
import { IoClose } from "react-icons/io5";

interface GalleryImage {
  src: string;
  category: string;
}
const allImages: GalleryImage[] = [
  { src: companyImg1, category: "Company" },
  { src: rackImg, category: "Rack" },
  { src: reelRackImg, category: "Rack" },
  { src: conveyorImg1, category: "Conveyor" },
  { src: companyImg2, category: "Company" },
  { src: conveyorImg2, category: "Conveyor" },
  { src: companyImg3, category: "Company" },
  { src: conveyorImg3, category: "Conveyor" },
  { src: conveyorImg4, category: "Conveyor" },
  { src: conveyorImg5, category: "Conveyor" },
  { src: conveyorImg6, category: "Conveyor" },
  { src: conveyorImg7, category: "Conveyor" },
  { src: companyImg4, category: "Company" },
];
const allCorosuelImage : GalleryImage[]= [
  { src: companyCorosuel1, category: "Company" },
  { src: rackCorosuel1, category: "Rack" },
  { src: rackCorosuel2, category: "Rack" },
  { src: conveyorCorosuel1, category: "Conveyor" },
  { src: companyCorosuel2, category: "Company" },
  { src: conveyorCorosuel2, category: "Conveyor" },
  { src: companyCorosuel3, category: "Company" },
  { src: conveyorCorosuel3, category: "Conveyor" },
  { src: conveyorCorosuel4, category: "Conveyor" },
  { src: conveyorCorosuel5, category: "Conveyor" },
  { src: conveyorCorosuel6, category: "Conveyor" },
  { src: conveyorCorosuel7, category: "Conveyor" },
  { src: companyCorosuel4, category: "Company" },
];

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [filter, setFilter] = useState<string>("All");

  function openCarousel(index: number) {
    setSelectedImageIndex(index);
    setShowCarousel(true);
  }
  const handleCarouselClose = () => {
    setShowCarousel(false);
  };
  const handleCarouselPrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : filteredImages.length - 1
    );
  };

  const handleCarouselNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < filteredImages.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleFilterClick = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  return (
    <Container className="pt-4 pb-4 mt-5">
      {/* <Fade bottom duration="1500"> */}
        <Row className="mb-2 pt-4 mt-5 d-flex justify-content-center text-center">
          <Col xs={12} className="mb-4">
            <h1 className="text-primary fs-5 fw-bold">Our Projects</h1>
            <p className="text-dark fs-4 fw-bold text-center mb-1">
              Recently Launched Projects
            </p>
          </Col>
        </Row>
      {/* </Fade>
      <Fade bottom duration="1500"> */}
        <Row>
          <Col xs={12} className="mb-5">
            <ul>
              <li
                style={{ width: "70px", paddingRight: "20px" }}
                className={`filter-item ${
                  filter === "All" ? "active-filter" : ""
                }`}
                onClick={() => handleFilterClick("All")}
              >
                All
              </li>
              <li
                style={{ width: "80px", paddingRight: "20px" }}
                className={`filter-item ${
                  filter === "Rack" ? "active-filter" : ""
                }`}
                onClick={() => handleFilterClick("Rack")}
              >
                Rack
              </li>
              <li
                style={{ width: "120px", paddingRight: "20px" }}
                className={`filter-item ${
                  filter === "Conveyor" ? "active-filter" : ""
                }`}
                onClick={() => handleFilterClick("Conveyor")}
              >
                Conveyor
              </li>
              <li
                style={{ width: "120px", paddingRight: "20px" }}
                className={`filter-item ${
                  filter === "Company" ? "active-filter" : ""
                }`}
                onClick={() => handleFilterClick("Company")}
              >
                Company
              </li>
            </ul>
          </Col>
        </Row>
      {/* </Fade> */}

      <Row>
        {filteredImages.map((image, index) => (
          <Col key={index} xs={12} sm={12} md={4} lg={4} className="mb-4">
            {/* <Fade bottom duration="1500"> */}
              <div
                className={`gallery-image-col ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
                onClick={() => openCarousel(index)}
              >
                <Image
                  key={index}
                  src={image.src}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
                {hoveredIndex === index && (
                  <div className="hover-content">
                    <h1>
                      <FaClone style={{ marginRight: "5px" }} />
                      {image.category}
                    </h1>

                    <FiPlus className="plus-Icon" />
                  </div>
                )}
              </div>
            {/* </Fade> */}
          </Col>
        ))}
      </Row>

      <Modal
        show={showCarousel}
        onHide={handleCarouselClose}
        centered
        className="custom-modal"
        size="lg"
      >
        <div className="d-flex justify-content-end">
          <IoClose
            onClick={handleCarouselClose}
            className="fs-3 text-dark close-button"
          />
        </div>

        <Carousel
          activeIndex={selectedImageIndex}
          onSelect={() => {}}
          prevIcon={
            <FaAngleLeft
              onClick={handleCarouselPrev}
              style={{ fontSize: "40px", color: "white" }}
            />
          }
          nextIcon={
            <FaAngleRight
              onClick={handleCarouselNext}
              style={{ fontSize: "40px", color: "white" }}
            />
          }
         
        >
          {allCorosuelImage.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                src={image.src}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "auto",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </Container>
  );
}

export default Gallery;
