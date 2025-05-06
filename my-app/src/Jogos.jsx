import React from 'react';
import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';
import { Carrossel2 } from './components/Carrossel2';
import { useNavigate } from 'react-router-dom';

const games = [
    { id: 1, nome: "God of War Ragnarok", imagem: "/gow-ragnarok.jpg" },
    { id: 2, nome: "Hollow Knight", imagem: "/hk.jpg" },
    { id: 3, nome: "Red Dead Redemption II", imagem: "/rdr2.jpg" },
    { id: 4, nome: "Celeste", imagem: "/celeste.jpg" },
    { id: 5, nome: "Elden Ring", imagem: "/eldenring.jpg" }
  ];

  export function Jogos() {
    const navigate = useNavigate();

    return (
        <>
        <div className="jogoCarrossel" style={{ paddingTop: '100px' }}></div>

        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
            Jogos Populares
        </Typography>

        <Carrossel2 />

      <Grid
        container
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: 2, paddingTop: 10 }}
      >
        {games.map((game, index) => (
          <Grid item key={index} xs={6} sm={4} md={4}>
            <Typography onClick={() => navigate(`/jogo/${game.id}`)} style={{ cursor: 'pointer' }} align='center'>
            <Card sx={{ borderRadius: 3, boxShadow: 4 }} style={{ backgroundColor: 'black', color: 'white' }}>
              <CardMedia
                component="img"
                height="220"
                image={game.imagem}
                alt={game.nome}
                />
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {game.nome}
                </Typography>
              </CardContent>
            </Card>
            </Typography>
          </Grid>
        ))}
      </Grid>
      </>
    );
  }