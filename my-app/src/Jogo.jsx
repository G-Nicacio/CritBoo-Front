import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  Rating,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export function Jogo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [modo, setModo] = useState("postagens");
  const [jogo, setJogo] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [nota, setNota] = useState(0);
  const [comentarioAvaliacao, setComentarioAvaliacao] = useState("");

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  // Carrega dados iniciais
  useEffect(() => {
    fetch(`http://localhost:8080/jogos/${id}`)
      .then((res) => res.json())
      .then(setJogo)
      .catch(console.error);

    fetchComentarios();
    fetchAvaliacoes();
  }, [id]);

  const fetchComentarios = () => {
    fetch("http://localhost:8080/post")
      .then((res) => res.json())
      .then((data) => {
        const relacionados = data.filter((p) => String(p.jogo?.id) === String(id));
        setComentarios(relacionados);
      })
      .catch(console.error);
  };

  const fetchAvaliacoes = () => {
    fetch(`http://localhost:8080/avaliacao/jogo/${id}`)
      .then((res) => {
        if (res.status === 404) {
          // Nenhuma avaliação: retorna lista vazia
          return [];
        } else if (!res.ok) {
          throw new Error("Erro ao buscar avaliações");
        }
        return res.json();
      })
      .then(setAvaliacoes)
      .catch((err) => {
        console.error("Erro ao buscar avaliações:", err);
        setAvaliacoes([]); // Garante que a interface continua funcionando
      });
  };
  

  const handleEnviarComentario = async () => {
    if (!usuario?.id) {
      alert("Você precisa estar logado para comentar.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comentario: novoComentario,
          usuario: { id: usuario.id },
          jogo: { id: parseInt(id) }
        }),
      });

      if (!res.ok) throw new Error("Erro ao enviar comentário.");

      setNovoComentario("");
      fetchComentarios();
    } catch (err) {
      console.error(err);
      alert("Erro ao comentar.");
    }
  };

  const handleEnviarAvaliacao = async () => {
    if (!usuario?.id) {
      alert("Você precisa estar logado para avaliar.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/avaliacao/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comentario: comentarioAvaliacao,
          nota: nota,
          usuario: { id: usuario.id },
          jogo: { id: parseInt(id) }
        }),
      });

      if (!res.ok) throw new Error("Erro ao enviar avaliação.");

      setNota(0);
      setComentarioAvaliacao("");
      fetchAvaliacoes();
    } catch (err) {
      console.error(err);
      alert("Erro ao avaliar.");
    }
  };

  const media =
    avaliacoes.length > 0
      ? (avaliacoes.reduce((soma, a) => soma + a.nota, 0) / avaliacoes.length).toFixed(1)
      : "0.0";

  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "white", minHeight: "100vh", padding: 4 }}>
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
          <Typography variant="h3" fontWeight="bold">{jogo.nomeJogo}</Typography>
          <Box mt={2}>
            <Rating name="media" value={parseFloat(media)} precision={0.1} readOnly />
            <Typography color="gray">Avaliação média: {media}/5</Typography>
          </Box>
          <Typography mt={2} color="gray" onClick={() => navigate(`/estudio/${jogo.estudio?.id}`)} style={{color: '#fff',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontWeight: 'bold',}}>{jogo.estudio?.nomeEstudio}</Typography>
          <Typography color="gray">
            {jogo.lancamentoJogo?.substring(0, 4)} • {jogo.categorias?.map(c => c.nomeCategoria).join(" / ")}
          </Typography>
          <Typography mt={2}>{jogo.descricaoJogo}</Typography>
        </Grid>
      </Grid>

      {/* Postagens / Avaliações */}
      <Box sx={{ maxWidth: 800, mt: 6, mx: "auto", backgroundColor: "#2c2c2c", borderRadius: 2, padding: 3 }}>
        <ToggleButtonGroup
          color="primary"
          value={modo}
          exclusive
          onChange={(e, novo) => novo && setModo(novo)}
          sx={{ mb: 3 }}
        >
          <ToggleButton value="postagens">Postagens</ToggleButton>
          <ToggleButton value="avaliacoes">Avaliações</ToggleButton>
        </ToggleButtonGroup>

        {modo === "postagens" ? (
          <>
            {comentarios.map((c, i) => (
              <Box key={i} sx={{ backgroundColor: "#1e1e1e", p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="subtitle2" color="gray">{c.usuario?.nome || "Anônimo"}</Typography>
                <Typography>{c.comentario}</Typography>
              </Box>
            ))}
            <Typography variant="subtitle1">Deixe sua Postagem:</Typography>
            <TextField
              multiline
              minRows={4}
              fullWidth
              value={novoComentario}
              onChange={(e) => setNovoComentario(e.target.value)}
              placeholder="Escreva sua postagem..."
              InputProps={{ style: { backgroundColor: "#1e1e1e", color: "white" } }}
              sx={{ mt: 2 }}
            />
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleEnviarComentario}>Enviar</Button>
          </>
        ) : (
          <>
            {avaliacoes.map((a) => (
              <Box key={a.id} sx={{ backgroundColor: "#1e1e1e", p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="subtitle2" color="gray">{a.usuario?.nome}</Typography>
                <Rating value={a.nota} precision={0.5} readOnly />
                <Typography>{a.comentario}</Typography>
              </Box>
            ))}
            <Typography variant="subtitle1">Avalie você também:</Typography>
            <Rating
              value={nota}
              precision={0.5}
              onChange={(e, v) => setNota(v)}
              sx={{ mt: 1 }}
            />
            <TextField
              multiline
              minRows={3}
              fullWidth
              value={comentarioAvaliacao}
              onChange={(e) => setComentarioAvaliacao(e.target.value)}
              placeholder="Escreva sua opinião..."
              InputProps={{ style: { backgroundColor: "#1e1e1e", color: "white" } }}
              sx={{ mt: 2 }}
            />
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleEnviarAvaliacao}>Enviar Avaliação</Button>
          </>
        )}
      </Box>
    </Box>
  );
}
