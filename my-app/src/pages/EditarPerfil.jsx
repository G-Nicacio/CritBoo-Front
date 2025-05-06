import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../EditarPerfil.css';

const EditarPerfil = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [nome, setNome] = useState(location?.state?.nome || '');
  const [imagem, setImagem] = useState(location?.state?.imagem || '/fotinha.jpg');
  const [jogosFavoritos, setJogosFavoritos] = useState(location?.state?.jogosFavoritos || []);
  const [novoNome, setNovoNome] = useState(nome);
  const [novaImagem, setNovaImagem] = useState(imagem);
  const [novosJogos, setNovosJogos] = useState(jogosFavoritos.join(', '));

  useEffect(() => {
    if (!location?.state) {
      navigate('/perfil');
    }
  }, [location, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jogosArray = novosJogos.split(',').map((jogo) => jogo.trim());
    navigate('/perfil', {
      state: { nome: novoNome, imagem: novaImagem, jogosFavoritos: jogosArray },
    });
  };

  return (
      <div className="editar-card">
        <h1>Editar Perfil</h1>
        <form onSubmit={handleSubmit} className="editar-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imagem">Imagem de Perfil (URL):</label>
            <input
              type="text"
              id="imagem"
              value={novaImagem}
              onChange={(e) => setNovaImagem(e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="jogosFavoritos">Jogos Favoritos:</label>
            <input
              type="text"
              id="jogosFavoritos"
              value={novosJogos}
              onChange={(e) => setNovosJogos(e.target.value)}
              placeholder="Ex: GTA, Mario, Zelda"
            />
          </div>

          <button type="submit" className="btn-salvar">Salvar Alterações</button>
        </form>
      </div>
  );
};

export default EditarPerfil;
