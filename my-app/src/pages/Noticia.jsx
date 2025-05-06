import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

export function Noticia() {
    return (
        <>
        <Typography variant="h2" sx={{ textAlign: 'center', color: '#ffffff', mb: 4 }}>
            Notícias
        </Typography>
        <Box sx={{ backgroundColor: '#1e1e1e', color: '#dbe3eb', py: 6, px: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={12} md={6}>
                <img src="/celeste.jpg" alignItems="center"
                />
              <Box
                alt="Punks and Drunks"
                sx={{
                  width: '100%',
                  borderRadius: 1,
                  boxShadow: 3,
                  paddingTop: '20px'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{ color: '#b0c4d4', textTransform: 'uppercase', mb: 1 }}>
                Shelf Life
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 2 }}>
                Punks, Drunks and Love.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
                A brand new label on the circuit, a classic for the boozers, Robert De Niro and Meryl Streep falling in love, French cannibalism and the ultimate date movie for goths all feature in the latest edition of <i>Shelf Life</i>.
              </Typography>
              <Typography variant="caption" sx={{ mt: 3, display: 'block', color: '#a0b8cc' }}>
                KATIE RIFE
              </Typography>
            </Grid>
          </Grid>
        </Box>
        </>
      );
    }
