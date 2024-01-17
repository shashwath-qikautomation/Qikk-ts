import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import { routes } from "../helper/routes";
import logoFB from "../assets/logoFB.png";
import "../styles/NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>(() => {
    const storedItem = localStorage.getItem("activeItem");
    return storedItem || "home";
  });
  const [shadow, setShadow] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem, location.pathname]);

  const navigateRouteTo = (path:string) => {
    navigate(path);
  };

  const handleClick = (link:string) => {
    setActiveItem(link);
  };

  const onScrollDown = () => {
    setShadow("0px 2px 15px rgba(0, 0, 0, 0.1)");
    if (window.scrollY === 0) {
      setShadow("");
    }
  };

  const navStyle: { boxShadow: string } = {
    boxShadow: shadow,
  };

  window.addEventListener("scroll", onScrollDown);

  return (
    <Navbar
      collapseOnSelect
      style={navStyle}
      expand="lg"
      className="navbar bg-body-tertiary fixed-top"
    >
      <Container className="gap-5">
        <Navbar.Brand
          onClick={() => {
            navigateRouteTo(routes.homePage);
          }}
        >
          <img src={logoFB} alt="logo" height={"80"} width={"140"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 p-4">
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              eventKey="1"
              onClick={() => {
                navigateRouteTo(routes.homePage);
                handleClick("home");
              }}
              //href={routes.homePage}
              style={{
                color: location.pathname === "/" ? "#3498db" : "inherit",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              eventKey="2"
              onClick={() => {
                navigateRouteTo(routes.about);
                handleClick("about");
              }}
              //href={routes.about}

              style={{
                color: location.pathname === "/about" ? "#3498db" : "inherit",
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              eventKey="3"
              // href={routes.blog}
              onClick={() => {
                navigateRouteTo(routes.blog);
                handleClick("blog");
              }}
              style={{
                color: location.pathname === "/blog" ? "#3498db" : "inherit",
              }}
            >
              Blog
            </Nav.Link>
            <NavDropdown
              className="d-flex justify-content-start"
              title="Products & Solutions"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item
                eventKey="4"
                onClick={() => navigateRouteTo(routes.materialHandling)}
              >
                Material handling
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="5"
                onClick={() => navigateRouteTo(routes.smartStorage)}
              >
                Smart storage
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="6"
                onClick={() => navigateRouteTo(routes.smartInventory)}
              >
                Smart inventory
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="7"
                onClick={() => navigateRouteTo(routes.traceability)}
              >
                Traceability
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              eventKey="8"
              // href={routes.gallery}
              onClick={() => {
                navigateRouteTo(routes.gallery);
                handleClick("gallery");
              }}
              style={{
                color: location.pathname === "/gallery" ? "#3498db" : "inherit",
              }}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              eventKey="9"
              // href={routes.contact}
              onClick={() => {
                navigateRouteTo(routes.contact);
                handleClick("contact");
              }}
              style={{
                color: location.pathname === "/contact" ? "#3498db" : "inherit",
              }}
            >
              Contact
            </Nav.Link>
            {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
