import * as React from "react";
import { Box } from "@mui/system";

import { Button, Grid } from "@mui/material";
import Item from "./Item";
import Experiencia from "./Experiencia";
import Imagen from "./Imagen";
import Resumen from "./Resumen";


function CV() {

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(3, 1fr)",
   
          gap: 1,
        }}
      >
        <Item sx={{ gridColumn: "1/2", gridRow: "1 / 8" }}>
          <Imagen />
        </Item>

        <Item sx={{ gridColumn: "2/4", gridRow: "1 / 8" }}>
<Resumen/>
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
