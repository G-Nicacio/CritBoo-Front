import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

export function Carrossel2() {
  const navigate = useNavigate();
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/jogos')
      .then(res => res.json())
      .then(data => {
        setJogos(data.content || []);
      })
      .catch(err => console.error('Erro ao buscar jogos:', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Slider {...settings}>
        {jogos.map((game, index) => (
          <Box
            key={index}
            sx={{ px: 1 }}
            onClick={() => navigate(`/jogos/${game.id}`)}
          >
            <Card sx={{ backgroundColor: 'black', color: 'white', cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="140"
                image={game.imagem}
                alt={game.nomeJogo}
              />
              <CardContent>
                <Typography variant="body2" align="center">
                  {game.nomeJogo}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
