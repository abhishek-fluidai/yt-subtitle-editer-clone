import * as React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Surf from "./Surfer";

export default function VerticalDividers() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "150px",
          borderRadius: 1,
          color: "text.secondary",
          borderLeft: "6px solid #90CAF9",

          "& svg": {
            m: 1.5,
          },
        }}
      >
        <MusicNoteIcon sx={{ flexShrink: 1, width: "140px" }} color="primary" />
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "150px",
            width: '100%'
          }}
        >
          <Surf />
        </Box>
      </Box>
    </div>
  );
}
