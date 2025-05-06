import React, { useState, useEffect } from 'react';
import './Carrossel.css';
import { useNavigate } from 'react-router-dom';
import { Carrossel2 } from './Carrossel2';

const jogosMock = [
  { id: 1, nome: "God of War Ragnarok", imagem: "/gow-ragnarok.jpg" },
  { id: 2, nome: "Hollow Knight", imagem: "/hk.jpg" },
  { id: 3, nome: "Red Dead Redemption II", imagem: "/rdr2.jpg" },
  { id: 4, nome: "Celeste", imagem: "/celeste.jpg" },
  { id: 5, nome: "Elden Ring", imagem: "/eldenring.jpg" }
];

export function Carrossel() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const navigate = useNavigate();

  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: "Novo DLC anunciado",
      conteudo: "God of War Ragnarok receberá uma nova expansão que continua a jornada de Kratos e Atreus pelos reinos nórdicos.",
      jogo: {
        nome: "God of War Ragnarok",
        imagem: "/gow-ragnarok.jpg"
      }
    },
    {
      id: 2,
      titulo: "Atualização de Hollow Knight",
      conteudo: "Uma grande atualização para Hollow Knight traz novos desafios e melhorias gráficas, além de pistas sobre Silksong.",
      jogo: {
        nome: "Hollow Knight",
        imagem: "/hk.jpg"
      }
    },
    {
      
      id: 4,
      titulo: "Elden Ring recebe Modo Fotografia",
      conteudo: "A FromSoftware lançou uma atualização para Elden Ring que inclui um aguardado modo fotografia, permitindo aos jogadores capturar momentos épicos das batalhas e paisagens deslumbrantes do mundo de Lands Between.",
      jogo: {
        nome: "Elden Ring",
        imagem: "/eldenring.jpg"
      }
      
    }
  ]);

  const anterior = () => {
    setIndex((prev) => (prev - 1 + jogosMock.length) % jogosMock.length);
  };

  const proximo = () => {
    setIndex((prev) => (prev + 1) % jogosMock.length);
  };

  useEffect(() => {
    let timer;
    if (!hovering) {
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % jogosMock.length);
      }, 8000);
    }
    return () => clearInterval(timer);
  }, [hovering, index]);

  const anteriorIdx = (index - 1 + jogosMock.length) % jogosMock.length;
  const proximoIdx = (index + 1) % jogosMock.length;

  return (
    <div className="carrossel-wrapper">
    <div className="carousel-title">Jogos Populares</div>

    <div
      className="carousel-container"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <button className="arrow left" onClick={anterior}>&lt;</button>
      <div className="carousel-slide">
        {[anteriorIdx, index, proximoIdx].map((i, pos) => {
          const posClass = pos === 1 ? "center" : pos === 0 ? "left" : "right";
          return (
            <div key={jogosMock[i].id} className={`carousel-item ${posClass}`}>
              <img
                src={jogosMock[i].imagem}
                alt={jogosMock[i].nome}
                className="carousel-img"
              />
              <button
                className="view-button"
                onClick={() => navigate(`/jogo/${jogosMock[i].id}`)}
              >
                Ver jogo
              </button>
            </div>
          );
        })}
      </div>
      <button className="arrow right" onClick={proximo}>&gt;</button>
    </div>

    <div className="carousel2-wrapper">
      <h2 className="carousel2-title">Jogos</h2>
      <Carrossel2 />
    </div>
    <div className="noticia-wrapper">
      <h2 className="noticia-title">Notícia</h2>
        <div className="noticia-container">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="noticia-box">
              <h3 className="noticia-box-title">{noticia.titulo}</h3>
              <p className="noticia-content">{noticia.conteudo}</p>
              <div className="noticia-jogo">
                <img src={noticia.jogo.imagem} alt={noticia.jogo.nome} className="noticia-img" />
                <span className="noticia-jogo-nome">{noticia.jogo.nome}</span>
              </div>
            </div>
          ))}
        </div>
    </div>
  </div>
  );
}
