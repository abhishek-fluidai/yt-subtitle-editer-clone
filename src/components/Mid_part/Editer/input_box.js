import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function HelperTextMisaligned() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        outlineColor: "#292829",
        width: "100%",
      }}
    >
      <Box component="form" noValidate autoComplete="off">
        <TextareaAutosize
          minRows={8}
          noresize="true"
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          style={{
            width: 320,
            backgroundColor: "#292829",
            color: "white",
            borderRadius: 6,
          }}
        />
        {/* <MyFormHelperText /> */}
      </Box>
      <IconButton aria-label="upload picture" component="label">
        {/* <input hidden accept="image/*" type="file" /> */}
        <DeleteIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          sx={{ width: "12ch" }}
          id="demo-helper-text-misaligned-no-helper"
          label="Start"
          defaultValue="00:00:00"
        />
        <TextField
          sx={{ width: "12ch" }}
          id="demo-helper-text-misaligned-no-helper"
          label="End"
          defaultValue="00:02:45"
        />
      </Box>
    </Box>
  );
}
