import React, { useEffect, useState } from 'react';
import '../Noticia.css';

export function Noticia() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/noticia", { method: "GET" })
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar notícias");
        return response.json();
      })
      .then((data) => {
        setNoticias(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias:", error);
      });
  }, []);

  return (
    <div className="noticia-wrapper">
      <div className="noticia-title-container">
        <h2 className="noticia-title">Notícias</h2>
      </div>

      <div className="noticia-container">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="noticia-box">
            <h3 className="noticia-box-title">{noticia.titulo}</h3>

            <p className="noticia-content">{noticia.conteudo}</p>

            <div className="noticia-fonte">
              <strong>Fonte:</strong> {noticia.fonte}
            </div>

            {noticia.jogo && (
              <div className="noticia-jogo">
                <img 
                  src={noticia.jogo.imagem} 
                  alt={noticia.jogo.nomeJogo} 
                  className="noticia-img"
                />
                <span className="noticia-jogo-nome">{noticia.jogo.nomeJogo}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
