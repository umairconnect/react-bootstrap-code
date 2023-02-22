import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/professionalfitness.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Row className="header_row">
          <Col md={6} style={{display: 'flex', alignItems: 'flex-end'}}>
            <Navbar.Brand href="/" className="d-flex">
              <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
          </Col>

          <Col md={6} style={{ paddingBottom: 20 }}>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" defaultActiveKey="#home">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                    Home
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    onClick={() => updateExpanded(false)}
                  >
                    About
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/project"
                    onClick={() => updateExpanded(false)}
                  >
                    Projects
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/resume"
                    onClick={() => updateExpanded(false)}
                  >
                    Resume
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    href="https://soumyajitblogs.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blogs
                  </Nav.Link>
                </Nav.Item>


              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>



      </Container>
    </Navbar>
  );
}

export default NavBar;
