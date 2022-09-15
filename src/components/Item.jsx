import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';

const Item = ({data}) => {
  const { id, title, price, pictureUrl, description } = data;

  return (
    <div style={{ display: 'inline-block'}}>
          <CardGroup  className="container d-flex justify-content-center" style={{ width: '12rem',background: "#000000"}}>
        <Card border="dark" style={{ width: '18rem', background: "#D1D120 "}}>
      <Card.Img variant="top" src={pictureUrl + '/50px60'}/>
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Link to={`/item/${data.id}`}>
        <Button variant="dark">Ver detalle </Button>
        </Link>
      </Card.Body>
    </Card> 
    </CardGroup> 
    </div> 
    
  );
};

export default Item;
