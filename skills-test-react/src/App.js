import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './components/AccountMenu.js';
import List from './components/List.js';

export default function App() {
  return (
    <Container maxWidth="sm">
	<AccountMenu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
	<List />
    </Container>
  );
}
