import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({item})=>{

    const onAdd = (count)=>{
        console.log("onAdd", count)
    }

    return(
        <div >
            <p style={{width: "100%"}}>item detail</p>
            <div >
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div >
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
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