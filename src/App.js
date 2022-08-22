import './App.css';
import NavBar from './components/NavBar';
import logoskate from './assets/logoskate.png';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/> 
      <img  src={logoskate} height="100" width="100" />
    </div>
  );
}

export default App;
