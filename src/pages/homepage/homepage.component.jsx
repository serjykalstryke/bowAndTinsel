import React from "react";
import "./homepage.styles.css";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import logo from "../../assets/Beau and Tinsel's Christmas Wonderland.jpg";

const HomePage = () => (
  <div className="all">
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
          <img className="logo" src={logo} alt="Logo" />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <p className="topLine">
            Join us as we start a new family holiday tradition.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="secondLine">
            Beau and Tinsel’s Winter Wonderland  -  A new winter holiday
            celebration to share with family and friends!
          </p>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Link to="/about">
          <Button className="buttons" size="lg">
            About
          </Button>
        </Link>{" "}
        <Button className="buttons" size="lg">
          Tickets
        </Button>
        <Col></Col>
      </Row>
    </Container>
  </div>
);

export default HomePage;
