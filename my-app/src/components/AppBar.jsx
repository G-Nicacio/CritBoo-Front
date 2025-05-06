import { AppBar, Toolbar, Typography, Box, InputBase, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  width: '200px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: theme.spacing(1),
}));

import { useNavigate } from 'react-router-dom';


export const MyAppBar = () => {
    const navigate = useNavigate();

    const menuItems = [
        { label: 'JOGOS', path: '/jogos' },
        { label: 'NOTICIAS', path: '/noticias' },
        { label: 'LOGAR', path: '/signin' },
        { label: 'LOGAR', path: '/login' },
    ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', boxShadow: 'none' }}>
    <Toolbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '65%',
          margin: '0 auto',
        }}
      >
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <img
            src="/critboo.png"
            alt="Logo"
            style={{ cursor: 'pointer', height: 30, marginRight: 8 }}
            onClick={() => navigate('/')}
          />

          </Box>

        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flex: 2 }}>
          {menuItems.map(({ label, path }) => (
            <Typography
              key={label}
              variant="body2"
              fontWeight="bold"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(path)}
            >
              {label}
            </Typography>
          ))}
        </Box>

        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Search>
            <SearchIcon sx={{ color: 'white', mr: 1 }} />
            <SearchInput placeholder="Search..." />
          </Search>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
  );
};

