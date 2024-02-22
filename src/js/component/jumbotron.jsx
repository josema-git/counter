import React from "react";
import { Container, Button } from "react-bootstrap";

function JumbotronJSX() {
  return (
    <Container className="px-5 pb-5 bg-light">
      <h1 className="display-1">A Warm Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, maiores
        ratione debitis quam numquam repellat consectetur placeat similique
        repudiandae totam? Eaque consequatur repellendus atque accusamus minima
        maxime minus architecto in, quae, incidunt doloremque facere modi?
      </p>
      <p>
        <Button bsstyle="primary">Call to action!</Button>
      </p>
    </Container>
  );
}

export default JumbotronJSX;
