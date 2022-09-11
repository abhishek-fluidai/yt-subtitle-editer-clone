import './App.css';
import React, { useRef, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Ui from  './components/Ui';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
 

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters='True'>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mx: 13,
          my: 5,
          width: '85vw',
          height: '90vh',
        },
      }}
    >
    
          <Ui />
        </Box>
      </Container>
    </ThemeProvider>

  )
}



export default App;
