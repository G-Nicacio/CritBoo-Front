import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia, Rating, Grid } from "@mui/material";
import { useEffect } from "react";

export function Jogo() {
    const { id } = useParams();
    const [jogo, setJogo] = useState({});

      useEffect(() => {
        fetch(`http://localhost:8080/jogos/${id}`, { method: "GET" })
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
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "white",
        minHeight: "100vh",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#2c2c2c" }}>
            <CardMedia
              component="img"
              image={jogo.imagem}
              alt={jogo.nomeJogo}
              sx={{ height: 500, objectFit: "cover" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom fontWeight="bold">
            {jogo.nomeJogo}
          </Typography>
          <div style={{ marginTop: '20px' }}></div>
          <Typography variant="subtitle1" gutterBottom color="gray">
          <Box >
            <Rating name="read-only" value={2} precision={0.1} readOnly />
            <Typography>Avaliação: 2/5</Typography>
          </Box>
          <div style={{ marginTop: '10px' }}></div>
            Rockstar Games • 2018 • Ação / Aventura
          </Typography>
          <Typography variant="body1" paragraph>
            {jogo.descricaoJogo}
          </Typography>
        </Grid>
      </Grid>


    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        mt: 4,
        backgroundColor: "#2c2c2c",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Comentários
      </Typography>
      <Box
        sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        }}
      >
        <Box
        sx={{
          backgroundColor: "#1e1e1e",
          padding: 2,
          borderRadius: 1,
        }}
        >
        <Typography variant="subtitle2" color="gray">
          Usuário1
        </Typography>
        <Typography variant="body2">
          Esse jogo é incrível! A história é muito envolvente.
        </Typography>
        </Box>
        <Box
        sx={{
          backgroundColor: "#1e1e1e",
          padding: 2,
          borderRadius: 1,
        }}
        >
        <Typography variant="subtitle2" color="gray">
          Usuário2
        </Typography>
        <Typography variant="body2">
          Achei os gráficos impressionantes, mas a jogabilidade poderia ser melhor.
        </Typography>
        </Box>
      </Box>
      <Box
        sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        }}
      >
        <Typography variant="subtitle1">Deixe seu comentário:</Typography>
        <textarea
        rows="4"
        style={{
          width: "100%",
          padding: "3px",
          borderRadius: "4px",
          border: "1px solid #444",
          backgroundColor: "#1e1e1e",
          color: "white",
          resize: "none",
        }}
        ></textarea>
        <Button variant="contained" color="primary">
        Enviar
        </Button>
      </Box>
    </Box>
    </Box>
  );
}
