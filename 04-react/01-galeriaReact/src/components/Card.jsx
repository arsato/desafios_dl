import React from "react";
import Card from "react-bootstrap/Card";

export const ImageCard = ({ image, title, desc }) => {
  return (
    <Card className="cardComplete bg-dark">
      <Card.Img className="cardImage" variant="top" src={image} alt={title} />
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Text className="cardText">{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
