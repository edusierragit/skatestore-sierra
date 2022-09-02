import React from "react";
import Item from "../components/Item";
import { useState, useEffect } from "react";


const ItemList = (props) => {
   const [loading, setLoading] = useState(true)
  console.log(props)
  
  return (
   
        <div className="grid=product">
           {props.items.map((data) => (
            <Item key={data.name} data={data} />
           
          ))} 

        </div>  
  );
};
export default ItemList;
