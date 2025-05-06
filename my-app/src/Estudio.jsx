import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Estudio.css';

const jogos = [
  {
    id: 1,
    nome: "Subway Surfs",
    descricao: "descrição do jogo",
    imagem: "/BlendoDestaque.jpg",
    data: "2025-05-05",
  },
  {
    id: 2,
    nome: "Celeste",
    descricao: "descrição do jogo",
    imagem: "/celeste.jpg",
    data: "2025-04-30",
  },
  {
    id: 3,
    nome: "Elden Ring",
    descricao: "descrição do jogo",
    imagem: "/eldenring.jpg",
    data: "2025-04-30",
  },
  {
    id: 4,
    nome: "God of Ragnarok",
    descricao: "descrição do jogo",
    imagem: "/gow-ragnarok.jpg",
    data: "2025-04-30",
  },
  {
    id: 5,
    nome: "Red Dead Redemption II",
    descricao: "descrição do jogo",
    imagem: "/rdr2.jpg",
    data: "2025-04-28",
  },
  {
    id: 6,
    nome: "Hollow Knight",
    descricao: "descrição do jogo",
    imagem: "/hk.jpg",
    data: "2025-04-30",
  },
];

export function Estudio() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const navigate = useNavigate();

  const jogoDestaque = jogos[0];
  const jogosVisiveis = mostrarTodos ? jogos.slice(1) : jogos.slice(1, 3);

  return (
    <div className="estudio-container">
      {/* Cabeçalho do estúdio */}
      <div className="estudio-header">
        <div className="estudio-identidade">
          <img src="/blendo-logo.png" alt="Logo BlendoGames" className="estudio-logo" />
            <div className="estudio-textos">
                <h2 className="estudio-nome">BlendoGames</h2>
                <h3 className="estudio-data">Data do estudio</h3>
            </div>
        </div>
      </div>

      {/* Sobre (estilo Steam) */}
      <div className="estudio-desc">
        Descrição do estudio
      </div>

      {/* Jogo em destaque */}
      <div className="jogo-destaque">
        <h2>Jogo em Destaque</h2>
        <Card className="card-destaque">
          <CardMedia
            component="img"
            className="imagem-destaque"
            image={jogoDestaque.imagem}
            alt={jogoDestaque.nome}
          />
        </Card>
      </div>

      {/* Lista de jogos */}
      <div className="jogos-lista">
        <h2>Todos os Jogos</h2>
        <div className="jogos-lista-horizontal">
          {jogosVisiveis.map((jogo) => (
            <div
              key={jogo.id}
              className="jogo-card"
              onClick={() => navigate(`/jogo/${jogo.id}`)}
            >
              <img src={jogo.imagem} alt={jogo.nome} />
              <div className="jogo-info">
                <h3>{jogo.nome}</h3>
                <div className="jogo-data">
                  {new Date(jogo.data).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
                <div className="jogo-descricao">{jogo.descricao}</div>
              </div>
            </div>
          ))}
        </div>

        {jogos.length > 3 && (
          <div className="botao-mais">
            <Button variant="contained" onClick={() => setMostrarTodos(!mostrarTodos)}>
              {mostrarTodos ? "Mostrar menos" : "Mostrar mais"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
