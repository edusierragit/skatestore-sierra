import React from "react";
import { useState } from "react";
import CartWidget from "./CartWidget";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const incrementar = () => {
    if (contador < stock) setContador(contador + 1);
   
  };

  const decrementar = () => {
     if (contador > 0)  setContador(contador - 1);
    
  };
 
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      <button onClick={() =>  onAdd(contador)} disabled={contador > 0 ? false : true} className={`onAdd${contador > 0 ? "activo": "inactivo"}`}><CartWidget/> </button>     
      <p>{contador}</p>
    </div>
  );
};

export default ItemCount;
