import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const games = [
    { id: 1, nome: "God of War Ragnarok", imagem: "/gow-ragnarok.jpg" },
    { id: 2, nome: "Hollow Knight", imagem: "/hk.jpg" },
    { id: 3, nome: "Red Dead Redemption II", imagem: "/rdr2.jpg" },
    { id: 4, nome: "Celeste", imagem: "/celeste.jpg" },
    { id: 5, nome: "Elden Ring", imagem: "/eldenring.jpg" }
  ];

export function Carrossel2() {
    const navigate = useNavigate();

    // const [jogos, setJogos] = useState([])
    // useEffect(() => {

    //     fetch('http://localhost:8080/jogos', {
    //         method: 'GET'
    //     }).then(response => {
    //         return response.json()
    //     }).then(data => {
    //         setJogos(data.content)
    //     })

    // }, [])


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
      };
    
      return (
        <Box sx={{ width: '100%', p: 2}}>
          <Slider {...settings}>
            {games.map((game, index) => (
                <Typography variant="h6" fontWeight="bold" sx={{ cursor: 'pointer' }} onClick={() => navigate(`/jogo/${game.id}`)}>
              <Card key={index} sx={{ mx: 1, backgroundColor: 'black', color: 'white' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={game.imagem}
                  alt={game.nome}
                />
                <CardContent>
                  <Typography variant="body2" align="center">
                    {game.nome}
                  </Typography>
                </CardContent>
              </Card>
              </Typography>
            ))}
          </Slider>
        </Box>
      );
    };
