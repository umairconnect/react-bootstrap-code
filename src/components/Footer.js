import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/professionalfitness.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Container>
        <Row className="footer_row">
          <Col md="3" className="footer-copywright">
            <img src={logo} />
            <br></br>
          </Col>

          <Col md="3">
              <h3>NAVIGATION</h3> 
              <ul>
                <li>
                Home
                  
                </li>
                <li>
                About Us
                
                </li>
                <li>
                Why Us
                 
                </li>
                <li>
               Programs
                 
                </li>
              </ul>
          </Col>
          <Col md="3">
            <h3>QUICK LINKS</h3>
            <ul>
                <li>
                FAQ
                  
                </li>
                <li>
                Contact Us
                
                </li>
                <li>
                Terms and Conditon
                 
                </li>

                <li>
                Refund policy
                 
                </li>
              </ul>
          </Col>

          <Col md="3" className="footer-body">
            <h3>Follow on Socials</h3>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md="12" className="footer-copywright">
            <p>© Copyright 2023 Professional Fitness. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
