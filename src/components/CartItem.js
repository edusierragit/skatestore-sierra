import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div style={{ display: 'inline-block'}}>
        <CardGroup  className="container d-flex justify-content-center" style={{ width: '12rem',background: "#000000"}}>
      <Card border="dark" style={{ width: '18rem', background: "#D1D120 "}}>
    <Card.Img src={item.pictureUrl} alt={item.title}/>
    <Card.Body >
    <p>{item.title}</p>
                <p>precio unitario: {item.price}</p>
                 <p>cantidad: {item.quantity}</p>
               <p>Precio total: {item.totalPrice}</p>
        <Button variant="dark" onClick={()=>removeProduct(item.id)}>Eliminar producto</Button>
    </Card.Body>
  </Card> 
  </CardGroup> 
  </div> 
        // <div className='cart-item-container'>
        //     <div className='cart-img-container'>
        //         <img src={item.pictureUrl} alt={item.title}/>
        //     </div>
        //     <div className='cart-info-container'>
        //         <p>{item.title}</p>
        //         <p>precio unitario: {item.price}</p>
        //         <p>cantidad: {item.quantity}</p>
        //         <p>Precio total: {item.totalPrice}</p>
        //         <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
        //     </div>
        // </div>
    )
}