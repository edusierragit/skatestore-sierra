import React from 'react';
import { useState, useEffect } from "react";
import {getItem} from "./helper.js/helper";
import ItemDetail from './itemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem.then((item) => {
          setItem(item);
          setLoading(false);
          console.log(ItemDetailContainer)
        })
      }, [])
}

    return (
    <div>
        <ItemDetail item={Item}/>
    </div>
)
export default ItemDetailContainer;
