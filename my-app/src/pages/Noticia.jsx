import React from 'react';
import '../Noticia.css';

export function Noticia() {
  const noticias = [
    {
      id: 1,
      titulo: "Celeste completa 5 anos",
      conteudo: "O aclamado jogo de plataforma Celeste celebra seu quinto aniversário com um novo capítulo gratuito que oferece desafios inéditos aos jogadores.",
      jogo: {
        nome: "Celeste",
        imagem: "/celeste.jpg"
      }
    },
    {
      id: 2,
      titulo: "Novo DLC de God of War",
      conteudo: "God of War Ragnarok receberá um novo DLC que expande a história e oferece mais desafios para Kratos e Atreus.",
      jogo: {
        nome: "God of War Ragnarok",
        imagem: "/gow-ragnarok.jpg"
      }
    },
    {
      id: 3,
      titulo: "Hollow Knight: Silksong é confirmado",
      conteudo: "Após anos de espera, Hollow Knight: Silksong finalmente foi confirmado com data de lançamento para o ano seguinte.",
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
    },
    {
      id: 5,
      titulo: "Red Dead Redemption 2 ganha remasterização",
      conteudo: "Red Dead Redemption 2 acaba de ganhar uma remasterização para as novas gerações de consoles, trazendo gráficos mais realistas e um desempenho melhor.",
      jogo: {
        nome: "Red Dead Redemption 2",
        imagem: "/rdr2.jpg"
      }
    }
  ];

  return (
    <div className="noticia-wrapper">
      {/* Div do título centralizado */}
      <div className="noticia-title-container">
        <h2 className="noticia-title">Notícias</h2>
      </div>

      {/* Container das boxes de notícias */}
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
  );
}
