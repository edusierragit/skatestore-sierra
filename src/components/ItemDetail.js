import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';

const ItemDetail = (data)=>{
    const { id, title, price, pictureUrl, description } = data;
    console.log('data',data)
   
    return(
        <div style={{ display: 'inline-block'}}>
          <CardGroup  className="container d-flex justify-content-center" style={{ width: '12rem'}}>
        <Card border="dark" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={pictureUrl + '/50px60'}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Link to={`/item/CartWidget`}>
        <Button variant="primary">AgregarCarrito</Button>
        </Link>
      </Card.Body>
    </Card> 
    </CardGroup> 
    </div> 
        // <div >
        //     <p style={{width: "100%"}}>item detail</p>
        //     <div >
        //         <img src={item.pictureUrl} alt={item.title}/>
        //     </div>
        //     <div >
        //         <h4>{item.title}</h4>
        //         <h5>$ {item.price}</h5>
        //     </div>
        //     <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        // </div>
    )
}
export default ItemDetail;
// import React from "react";
// import Item from "./Item";
// import { useState, useEffect } from "react";

// const ItemDetail = (props) => {
//   console.log(props)
  
//   return (
   
//     <div className="grid=product">
    
//      <Item key={props.item.id} onAdd={props.onAdd} data={props.item} />
   
//  </div> 
//   );
// };
// export default ItemDetail;