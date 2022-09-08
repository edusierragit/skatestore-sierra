import { useState, useEffect } from "react";
import { productos } from "./helper.js/helper";
import ItemDetail from '../components/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  console.log("productId", productId);

  const [item, setItem] = useState();

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
      const product = productos.find((item) => item.id === parseInt(id));
      resolve(product);
      console.log("product getItem", product);
    });
  };

  useEffect(() => {
    const getProducto = async () => {
      const producto = await getItem(productId);
      console.log("producto", producto);
      setItem(producto);
    };
    getProducto();
  }, [productId]);

  console.log("item:", item);
  return (
    <div className="item-detail-container">
      <p style={{ width: "100%", color: "white" }}>item detail container</p>
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
//  import { useState, useEffect } from "react";
//  import {getItem} from "./helper.js/helper";
//  import ItemDetail from './itemDetail';

//  const ItemDetailContainer = () => {
//      const [item, setItem] = useState([])

//      useEffect(() => {
//          getItem.then((item) => {
//            setItem(item);
//            setLoading(false);
//            console.log(ItemDetailContainer)
//          })
//        }, [])
//  }

//      return (
//      <div>
//          <ItemDetail item={Item}/>
//      </div>
//  )
//  export default ItemDetailContainer;
