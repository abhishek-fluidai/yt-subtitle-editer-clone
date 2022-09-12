import "./App.css";
import React, { useState, createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Ui from "./components/Ui";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const ThemeContext = createContext();

function App() {
  const [zoom, setZoom] = useState(30);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCT] = useState("0");

  return (
    <ThemeContext.Provider
      value={{ zoom, setZoom, isPlaying, setIsPlaying, currentTime, setCT }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="xl" disableGutters="True">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                mx: 13,
                my: 5,
                width: "85vw",
                height: "90vh",
              },
            }}
          >
            <Ui />
          </Box>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
