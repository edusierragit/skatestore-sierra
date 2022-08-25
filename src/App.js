import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import logoskate from './assets/logoskate.png';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from 'react';

function App() {

const [cantproductos, setCantproductos] = useState(0);

  const onAdd = (productos) => 
  {
    setCantproductos(productos)
    console.log(cantproductos, 'hola cantproducto');
  };



  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings={'hi'}/> 
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      <img  src={logoskate} height="100" width="100" />
    </div>
  );
}

export default App;
 