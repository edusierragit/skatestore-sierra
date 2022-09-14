import React from "react";
import { useState } from "react";
import CartWidget from "./CartWidget";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
   
  };

  const decrementar = () => {
     if (count > 0)  setCount(count - 1);
    
  };
 
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      <button onClick={() =>  onAdd(count)} disabled={count > 0 ? false : true} className={`onAdd${count > 0 ? "activo": "inactivo"}`}><CartWidget/> </button>     
      <p>{count}</p>
    </div>
  );
};


