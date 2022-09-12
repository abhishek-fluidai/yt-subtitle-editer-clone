import React from "react";
import Box from "@mui/material/Box";
import Input_box from "./input_box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Editer() {
  let insts = [<Input_box />, <Input_box />];
  const renderList = insts.map((item) => item);

  function add() {
    insts.push(<Input_box />);
    console.log(insts);
    // renderList();
  }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "575px",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Button
          startIcon={<AddIcon />}
          style={{ marginRight: "260px" }}
          onClick={add}
        >
          CAPTION
        </Button>
        <Button>EDIT AS TEXT</Button>
        <IconButton aria-label="delete">
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "620px",
          "& > :not(style)": { m: 1 },
        }}
      >
        {renderList}
      </Box>
    </Box>
  );
}
