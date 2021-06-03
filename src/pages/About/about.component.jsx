import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./about.styles.css";

const AboutPage = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <h1 className="aboutheader">ABOUT</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="about">
            Baltimore’s famous talking reindeer, Beau and Tinsel, will welcome
            guests and narrate the dazzling mile long drive through a winter
            wonderland display of holiday lights and festivities. This new
            celebration is designed to help reconnect the community and
            highlight the caring spirit of the winter holiday season.  After a
            year of being separated, the event will bring people together to
            experience the special season in a safe yet exciting environment. 
            The event will also bring focus to teachers, faculty and students in
            Baltimore county by donating all proceeds from this special
            celebration to the Education Foundation of Baltimore County. This
            show of more than ____ lights, themed displays, and interactive
            activities will bring to life the joy and spirits of the season.{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="about">
            This new family seasonal celebration is being presented by a
            partnership of The Becker Group, Baltimore’s winter wonderland
            experts and Padonia Park, a Baltimore county family fun favorite for
            more than xxx years.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="aboutheader">Features and Attractions</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutPage;
