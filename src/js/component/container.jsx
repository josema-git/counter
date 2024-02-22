import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import JumbotronJSX from "./jumbotron.jsx";
import CardsJSX from "./cards.jsx";

function ContainerJSX() {
  return (
    <Container>
      <Col>
        <JumbotronJSX />
        <CardsJSX />
      </Col>
    </Container>
  );
}
export default ContainerJSX;
