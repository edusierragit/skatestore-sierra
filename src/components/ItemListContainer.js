import React from 'react';
import ItemList from '../components/ItemList';
import { useState, useEffect } from "react";
import {getFetch} from "./helper.js/helper";

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        getFetch.then((data) => {
          setData(data);
          setLoading(false);
          console.log(ItemListContainer)
        })
      }, [])
    
    return (
        <>
        <h1> </h1>
      {loading ? (
        <h2>Cargado... </h2>
      ) : 
       <div>
            texto 
            
            <ItemList items={data} />
        </div>
    }
    </>
  );
};
export default ItemListContainer;