import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MyAppBar } from "./components/AppBar";
import { Carrossel } from "./components/Carrossel";
import { Jogos } from './Jogos';
import { Estudio } from './Estudio';
import Perfil from './pages/Perfil';
import EditarPerfil from './pages/EditarPerfil';
import { Jogo } from './Jogo';
import Post from './pages/Post';
import { Noticia } from './pages/Noticia';
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro';
import { Noticia_esp } from './pages/Noticia_esp';

function App() {
  return (
    <>
      <MyAppBar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Carrossel />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path='/jogos/:id' element={<Jogo />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/post" element={<Post />} />
          <Route path="/editar-perfil" element={<EditarPerfil />} />
          <Route path="/estudio/:id" element={<Estudio />} />
          <Route path="/noticias" element={<Noticia />} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/cadastro" element={<Cadastro/>} /> 
          <Route path="/noticias/:id" element={<Noticia_esp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
