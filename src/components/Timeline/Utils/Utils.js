import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { ThemeContext } from "../../../App";

export default function ButtonAppBar() {
  const { zoom, setZoom } = useContext(ThemeContext);
  const { currentTime } = useContext(ThemeContext);

  const handleChange = (event, newValue) => {
    setZoom(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "8px" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "85px",
            borderRadius: 1,
            color: "text.primary",
            boxSizing: "border-box",
            "& svg": {
              m: 1.5,
            },
          }}
        >
          <Typography
            variant="text"
            style={{
              border: "1px solid #bfbfbf",
              borderRadius: "3px",
              padding: "6px 14px",
            }}
          >
            {currentTime === "0"
              ? `00:00`
              : `00:${Math.round(currentTime * 100) / 100}`}
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} sx={{ mr: "auto" }}>
          <Button
            sx={{ color: "#ffffff", ml: "15px" }}
            startIcon={<UndoIcon />}
          >
            Undo
          </Button>
          <Button sx={{ color: "#ffffff" }} startIcon={<RedoIcon />} disabled>
            Redo
          </Button>
        </Stack>

        <Box sx={{ width: 280 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <ZoomOutIcon />
            <Slider
              aria-label="Zoom"
              defaultValue={30}
              marks
              valueLabelDisplay="auto"
              value={zoom}
              onChange={handleChange}
              sx={{ color: "#ffffff" }}
              step={10}
              min={10}
              max={100}
            />
            <ZoomInIcon />
          </Stack>
        </Box>
      </Toolbar>
    </Box>
  );
}
