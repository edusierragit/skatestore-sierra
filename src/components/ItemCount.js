import React from "react";
import { useState } from "react";
import CartWidget from "./CartWidget";


// import {CartWidget} from '../components/CartWidget'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const incrementar = () => {
    if (contador < stock) setContador(contador + 1);
    console.log(contador);
  };

  const decrementar = () => {
    if (contador > 0) setContador(contador - 1);
    console.log(contador);
  };
  return (
    <div>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={() => onAdd(contador)} className={`onAdd${contador > 0 ? "activo": "inactivo"}`}><CartWidget/> </button>
      
      <p>{contador}</p>
    </div>
  );
};

export default ItemCount;
