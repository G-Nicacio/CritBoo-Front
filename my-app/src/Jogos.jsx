import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import React from 'react';
import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';
import { Carrossel2 } from './components/Carrossel2';
import { useNavigate } from 'react-router-dom';

export function Jogos() {
    const navigate = useNavigate();
  const [jogos, setJogo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/jogos", { method: "GET" })
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar jogos");
        return response.json();
      })
      .then((data) => {
        setJogo(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar jogos:", error);
      });
  }, []);



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
    {jogos.map((game, index) => (
      <Grid item key={index} xs={6} sm={4} md={4}>
        <Typography onClick={() => navigate(`/jogos/${game.id}`)} style={{ cursor: 'pointer' }} align='center'>
        <Card sx={{ borderRadius: 3, boxShadow: 4 }} style={{ backgroundColor: 'black', color: 'white' }}>
          <CardMedia
            component="img"
            height="220"
            image={game.imagem}
            alt={game.nomeJogo}
            />
          <CardContent sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              {game.nomeJogo}
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