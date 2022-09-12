import React, { useContext } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Header from "./Header/Header";
import Mid from "./Mid_part/Mid";
// import Line from "./Timeline/Visual/Linecontainer";
import Sub from "./Timeline/sub_edit/sub_edit";
import Utils from "./Timeline/Utils/Utils";
import { ThemeContext } from "../App";
const style = {
  bgcolor: "#292829",
  borderRadius: "5px",
};

export default function ListDividers() {
  // const { zoom, setZoom } = useContext(ThemeContext);
  const { isLoading } = useContext(ThemeContext);

  return (
    <List sx={style}>
      <Header />
      <Divider />

      <Mid />
      <Divider />

      <Utils />
      <Divider />
      {/* <div onClick={() => setZoom(50)}>{zoom}</div> */}
      <Sub />
      <Divider />
    </List>
  );
}
