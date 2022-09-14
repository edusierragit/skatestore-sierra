import React from "react";
import Item from "../components/Item";
import {Link} from 'react-router-dom';

const ItemList = (props) => {
  
  return (
   
        <div >
           {props.items.map((data) => (
            <Item key={data.name} data={data} />
          ))} 
        </div>  
  );
};
export default ItemList;
