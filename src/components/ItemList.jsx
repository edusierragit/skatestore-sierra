import React from "react";
import getFetch from "./helper.js/helper";
import Item from "../components/Item";
import { useState, useEffect } from "react";

const ItemList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch.then((data) => {
      setData(data);
      setLoading(false);
    })
  }, [])
  return (
    <>
      <h1> Item List Container </h1>
      {loading ? (
        <h2>Cargado... </h2>
      ) : (
        <div className="grid=product">
          {data.map((data) => (
            <Item key={data.name} data={data} />
          ))}
        </div>
      )}
    </>
  );
};
export default ItemList;
