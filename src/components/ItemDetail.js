import React from "react";
import Item from "./Item";
import { useState, useEffect } from "react";

const ItemDetail = (props) => {
  console.log(props, 'holiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis')
  
  return (
   
    <div className="grid=product">
    
     <Item key={props.item.id} data={props.item} />
   
 </div> 
  );
};
export default ItemDetail;