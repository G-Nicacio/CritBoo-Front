import React, { useEffect, useState } from 'react';
import { Card, CardMedia, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import './Estudio.css';

export function Estudio() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o id da URL
  const [estudio, setEstudio] = useState(null);
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/estudio/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar estudio");
        return response.json();
      })
      .then((data) => {
        setEstudio(data);
        setJogos(data.jogos || []); // Supondo que venha junto
      })
      .catch((error) => {
        console.error("Erro ao buscar estudio:", error);
      });
  }, [id]);

  const jogoDestaque = jogos[0];
  const jogosVisiveis = mostrarTodos ? jogos.slice(1) : jogos.slice(1, 3);

  return (
    <div className="estudio-container">
      <div className="estudio-header">
        <div className="estudio-identidade">
          <img src="/blendo-logo.png" alt="Logo BlendoGames" className="estudio-logo" />
          <div className="estudio-textos">
            <h2 className="estudio-nome">{estudio.nomeEstudio}</h2>
            <h3 className="estudio-data">
              {new Date(estudio.dataFundacao).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </h3>
          </div>
        </div>
      </div>

      <div className="estudio-desc">
        {estudio.descricao}
      </div>

      {jogoDestaque && (
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
      )}

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
