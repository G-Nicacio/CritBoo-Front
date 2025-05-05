import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MyAppBar } from "./components/AppBar";
import { Carrossel } from "./components/Carrossel";
import { Jogos } from './Jogos';

function App() {
  return (

    <>

    <Routes>
      <Route path="/jogos" element={<Jogos />} />
    </Routes>
    
    <MyAppBar />
    <div className="carousel-title">Jogos Populares</div>
        <Carrossel />
    
    </>
  );
}

export default App;
