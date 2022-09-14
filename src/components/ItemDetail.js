import React from "react";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';

const ItemDetail = ({item}) => {
  const {addProduct} = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (count)=>{
      addProduct(item,count);
      setQuantity(count);
  }
  const {title, price, pictureUrl, description } = item;
  
  return (
    <div >
      <Card style={{height:"100", border:"dark"}} >
        <Card.Img className="container d-flex justify-content-center"  src={pictureUrl}  style = {{width: "10rem"}}  />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <Button>Ir al carrito</Button>
                </Link>
            }
        </Card.Body>
      </Card> 
   
  
    </div>
   
  );
};
export default ItemDetail;

