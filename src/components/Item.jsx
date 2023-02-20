import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.urlImage} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">+</Button>
          <b> {item.stock} </b>
          <Button variant="primary">-</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
