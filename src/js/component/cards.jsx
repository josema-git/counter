import React from "react";
import { Button, Card } from "react-bootstrap";
import { loremIpsum } from "react-lorem-ipsum";

function CardsJSX() {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <CardJSX />
      <CardJSX />
      <CardJSX />
      <CardJSX />
      <CardJSX />
      <CardJSX />
      <CardJSX />
      <CardJSX />
    </div>
  );
}

function CardJSX() {
  let text = loremIpsum({
    avgSentencesPerParagraph: 4,
    avgWordsPerSentence: 4,
    random: true,
  });
  return (
    <Card className="my-3" style={{ width: "40vh" }}>
      <Card.Img
        variant="top"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAACUCAMAAAAH411kAAAAMFBMVEXMzMzPz8+ZmZm9vb2WlpacnJzJycmgoKCurq6ysrKpqamkpKTBwcG3t7e6urrGxsZR9H19AAADSklEQVR4nO2X2W7jMAxFTWrf//9vh6IU2y2QzkvqvtwDBAktyybFNccBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfMP/wTtryrGPU6SWq357IwtmvN23NrcYWz2FfAq+y+76dt8v4RNbZlvOF1dnjf6Idi7knw6YjJv3cFKpqRB098isCw+7J3FIpmfeWtMojqc+lGxophUb6e1eqo5j7ymwoYO649R7dGG6M9rSjCykZ6zY1ODMQWLDdsgh2qg1Y37RYQKfx0tEt6/5K9soopxIpsNnbiL4aJvsdqHO3Vz+E6mfpdl1esMspRu3PK2hPjVUhdtW3sesFtecXiqaWEnjrZD4qfj1pHE9NnN/79rPEyVI6DxtUSkfy5rESa1py6pJs1NfH8QHL0hdla3c29Q161EUtxUvq57Bl1BrsVIEaIuD1BoJ/BV6Eizn6cYZWPmrgj4VZsktn2wd2drQ5SIVZ3SXsU/WAV9KZBeC5anEkWynbU22q8pVdmeajMLV2DLuwTOCc9MCHzk5DoFnHSM5pG1NfNIa0SXWUSNLJSLDcWbKN2vCpXx3xQXzJRN818I3reHSR01aPcLfWFM4eqmusxLRCFmzgKsEfzytKTfto1vpdEN21CBhGdVpWuDuvnk20la6qlsi55ZSCy6mStG+FvKlPqWv1uzqIUmfZIPmk5gWxL9uVYH+bBXI1iylJViKZSs4x1KjGmvblCZ6qU8mSGrUU/Y9ruuzALblBrHGzQRcdT3ZdjzILqE0X9uTEjgnIz1kZf/ZVufkJran+6xT9lkUUd5w0Ju0URmbZ/U+gqvfAvNXkSFA2sTReb5W24XmjWqaNQvcpU6al27TikSYG9L+Mzsvk5nYuXNIIlg8RUf+ecz7PN1Zl+VzRsSuadJIZUEK7ukaaT1zBBvsrktF5lXpN7O7kPQtzrP5vB5bnA2Puma+twQXyq29Z7f+ERhduCYTmUe1Kcl0cA5fPs92k1VnqirsIqaPzeZhY6QnVlPvDbHukY28LNwCZfS14M3t35DcLTft0jaFy9Cvux/jGoq3+J+Fd7frBroLH1QSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPM4/VEgYHNo7lOQAAAAASUVORK5CYII="
      />
      <Card.Body className="d-flex flex-column align-items-center rounded">
        <Card.Title>Card title</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <Button variant="primary">Find Out More!</Button>
      </Card.Footer>
    </Card>
  );
}

export default CardsJSX;
