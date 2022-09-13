import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import logoskate from "./assets/logoskate.png";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Marcas from "./components/pages/Marcas"
import Contacto from "./components/pages/Contacto"
import Longboards from "./components/pages/Longboards"
import Lijas from "./components/pages/Accesorios/Lijas"
import Ruedas from "./components/pages/Accesorios/Ruedas"
import Rulemanes from "./components/pages/Accesorios/Rulemanes"
import Tablas from "./components/pages/Accesorios/Tablas"

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
      <NavBar />
      
      <Link to={`/`}>
      <Button variant="dark"> <img src={logoskate} height ="100" width="100"/></Button>
          </Link> 
      <Routes>
        <Route path='/Marcas' element={<Marcas />}/>
        <Route path='/Lonboards' element={<Longboards />}/>
        <Route path='/Contacto' element={<Contacto />}/>    
        <Route path='/Ruedas' element={<Ruedas />}/>
        <Route path='/Tablas' element={<Tablas />}/>
        <Route path='/Lijas' element={<Lijas />}/>
        <Route path='/Rulemanes' element={<Rulemanes />}/>
        <Route path='/item/:productId' element={<ItemDetailContainer onAdd={onAdd} />}/>
         <Route path='*' element={<ItemListContainer />}/> 
      </Routes>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
   
    </BrowserRouter>
  );
}

export default App;
