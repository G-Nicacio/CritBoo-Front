import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Noticia_esp.css';

export function Noticia_esp() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState({});

  useEffect(() => {
          fetch(`http://localhost:8080/noticia/${id}`, { method: "GET" })
            .then((response) => {
              if (!response.ok) throw new Error("Erro ao buscar noticia");
              return response.json();
            })
            .then((data) => {
              setNoticia(data);
            })
            .catch((error) => {
              console.error("Erro ao buscar noticia:", error);
            });
        }, []);

  return (
    <div className="noticia-container">
        <h1 className="noticia-titulo">{noticia.titulo}</h1>
        <div className="noticia-imagem-wrapper">
        <img src="/fotinha.jpg" alt="Imagem da Notícia" className="noticia-imagem" />
      </div>
      <div className="noticia-card">
        <div className="noticia-info">
        <div className="noticia-meta">
            <span className="noticia-categoria">FONTE </span>
            <span> {noticia.fonte}</span>
          </div>
          <div className="noticia-meta">
            <span className="noticia-categoria">NOTÍCIAS</span>
            <span> PUBLICADO EM {noticia.data}</span>
          </div>
        </div>
        <p className="noticia-conteudo">{noticia.conteudo}</p>
      </div>
    </div>
  );
}
