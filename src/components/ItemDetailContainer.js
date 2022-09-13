import { useState, useEffect } from "react";
import { getItem } from "./helper.js/helper";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true)
console.log('asdasdasdasd')
 
useEffect(() => {
  console.log('wtf')
  getItem(productId).then((data) => {
    setItem(data);
    setLoading(false);
    console.log(data, 'ITEM')
  })
}, [])
  return (
    <>
    <h1> </h1>
  {loading ? (
    <h2>Cargado... </h2>
  ) : 
    <div className="item-detail-container">
      <p style={{ width: "100%", color: "white" }}>item detail container</p>
      <ItemDetail item={item} />
    </div>}
    </>
   ); 
}; 
export default ItemDetailContainer;
