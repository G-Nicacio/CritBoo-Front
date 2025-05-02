import React, { useState, useEffect } from 'react';
import './Carrossel.css';
import { useNavigate } from 'react-router-dom';

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
  );
}
