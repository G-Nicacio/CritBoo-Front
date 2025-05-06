import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Perfil.css';

const Perfil = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState('profile');
  const [nome, setNome] = useState('Gatchuscos'); // Nome inicial
  const [imagem, setImagem] = useState('/fotinha.jpg'); // Imagem inicial
  const [jogosFavoritos, setJogosFavoritos] = useState([]); // Jogos Favoritos

  useEffect(() => {
    if (location.state) {
      // Atualiza os estados quando navegar de EditarPerfil
      if (location.state.nome) setNome(location.state.nome);
      if (location.state.imagem) setImagem(location.state.imagem);
      if (location.state.jogosFavoritos) setJogosFavoritos(location.state.jogosFavoritos);
    }
  }, [location]);

  const tabs = [
    { label: 'Perfil', value: 'profile' },
    { label: 'Atividade', value: 'activity' },
    { label: 'Reviews', value: 'reviews' },
  ];

  const handleEditProfile = () => {
    // Navega para editar perfil, passando as informações atuais
    navigate('/editar-perfil', { state: { nome, imagem, jogosFavoritos } });
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="perfil-info">
          <img src={imagem} alt="Avatar" className="perfil-avatar" width="200px" height="200px" />
          <div className="perfil-text">
            <h2 className="perfil-username">{nome}</h2> {/* Nome dinâmico */}
            <br />
            <button className="perfil-edit-button" onClick={handleEditProfile}>
              Edit Profile
            </button>
          </div>
        </div>

        <div className="perfil-tabs">
          {tabs.map(({ label, value }) => (
            <button
              key={value}
              className={`perfil-tab-button ${activeTab === value ? 'active' : ''}`}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="perfil-content">
        {activeTab === 'profile' ? (
          <>
            <h3>Jogos Favoritos</h3>
            {jogosFavoritos.length === 0 ? (
              <p>Não se esqueça de colocar seus <strong>Jogos Favoritos!</strong></p>
            ) : (
              <ul>
                {jogosFavoritos.map((jogo, index) => (
                  <li key={index}>{jogo}</li>
                ))}
              </ul>
            )}
            <h3>Atividade Recente</h3>
            <div className="recent-activity">
              <div className="activity-box"></div>
              <div className="activity-box"></div>
              <div className="activity-box"></div>
            </div>
          </>
        ) : (
          <p>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}: No content yet.</p>
        )}
      </div>
    </div>
  );
};

export default Perfil;
