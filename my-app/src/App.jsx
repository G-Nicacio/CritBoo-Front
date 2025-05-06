import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MyAppBar } from "./components/AppBar";
import { Carrossel } from "./components/Carrossel";
import { Jogos } from './Jogos';
import { Estudio } from './Estudio';

function App() {
  return (

    <>

    <Routes>
      <Route path="/jogos" element={<Jogos />} />
      <Route path="/" element={<Carrossel />} />
      <Route path="/estudio" element={<Estudio />} />
    </Routes>
    
    <MyAppBar />
    
    
    </>
  );
}

export default App;
