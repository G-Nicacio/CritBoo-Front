import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MyAppBar } from "./components/AppBar";
import { Carrossel } from "./components/Carrossel";

function App() {
  return (
    <BrowserRouter>
      <MyAppBar />
      <div className="carousel-title">Jogos Populares</div>
        <Carrossel />
    </BrowserRouter>
  );
}

export default App;
