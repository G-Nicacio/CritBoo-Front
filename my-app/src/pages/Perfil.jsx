import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Perfil.css';

const Perfil = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('/fotinha.jpg');
  const [jogosFavoritos, setJogosFavoritos] = useState([]);

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const id = usuario?.id;

  useEffect(() => {
    if (!id) {
      navigate("/login");
      return;
    }

    fetch(`http://localhost:8080/usuario/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar usuário");
        return res.json();
      })
      .then((data) => {
        setNome(data.nome);
        setImagem(data.imagem || "/fotinha.jpg");
        setJogosFavoritos(data.jogosFavoritos || []);
      })
      .catch((err) => {
        console.error("Erro ao buscar perfil:", err);
      });
  }, []);

  const tabs = [
    { label: 'Perfil', value: 'profile' },
    { label: 'Atividade', value: 'activity' },
    { label: 'Reviews', value: 'reviews' },
  ];

  const handleEditProfile = () => {
    navigate('/editar-perfil', { state: { nome, imagem, jogosFavoritos } });
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="perfil-info">
          <img src={imagem} alt="Avatar" className="perfil-avatar" width="200px" height="200px" />
          <div className="perfil-text">
            <h2 className="perfil-username">{nome}</h2>
            <br />
            <button className="perfil-edit-button" onClick={handleEditProfile}>
              Edit Profile
            </button>
            <button className="perfil-logout-button" onClick={handleLogout}>
              Logout
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
