import * as React from "react";
import { Box } from "@mui/system";

import { Button, Grid } from "@mui/material";
import Item from "./Item";
import Experiencia from "./Experiencia";


function CV() {

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(10, 50px)",
          gap: 1,
        }}
      >
        <Item sx={{ gridColumn: "1", gridRow: "1 / 10" }}>

        </Item>

        <Item sx={{ gridColumn: "2 / 4", gridRow: "1 / 10" }}>

        </Item>
      </Box>
      <Box style={{ width: "100%" }}>
        <h2>Professional Experience</h2>
      <Experiencia />
      </Box>

    </div>
  );
}

export default CV;
