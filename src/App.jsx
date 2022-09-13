import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import logoskate from "./assets/logoskate.png";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [cantproductos, setCantproductos] = useState(0);
  const onAdd = async (productos) => {
    await setCantproductos(productos);
    console.log(productos);
    console.log(cantproductos);
  };

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar logoskate={logoskate}/>
      www.skatestore.com/
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/item/:productId' element={<ItemDetailContainer onAdd={onAdd} />}/>
         <Route path='*' element={<ItemListContainer />}/> 
        <Route/>
      </Routes>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      <img src={logoskate} height="100" width="100" />
    </div>
  
    </BrowserRouter>
  );
}

export default App;
