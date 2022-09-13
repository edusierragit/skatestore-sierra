import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

  const {title, price, pictureUrl, description } = item;
  
  return (
    <div  >
      <Card border="dark" style={{ display: 'inline'}}>
        <Card.Img variant="top" src={pictureUrl + "/50px60"} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Link to={`/item/CartWidget`}>
            <Button variant="primary">AgregarCarrito</Button>
          </Link>
        </Card.Body>
      </Card> 
   
  
    </div>
   
  );
};
export default ItemDetail;

