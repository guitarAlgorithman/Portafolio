import * as React from "react";
import { Box } from "@mui/system";

import { Button, Grid } from "@mui/material";
import Item from "./Item";
import Experiencia from "./Experiencia";
import Imagen from "./Imagen";
import Resumen from "./Resumen";
import ProfesionalStudies from "./ProfesionalStudies";
import Datos from "./Datos";
import Portafolio from "./Portafolio";
import Footer from "./Footer";
import Header from "./Header";

function CV() {
  return (
    <>
      <Header />
      <div style={{ width: "100%" }}>
        <div>
          <Box
            sx={{
              display: "grid",
              gridAutoFlow: "row",
              gridTemplateColumns: "repeat(3, 1fr)",              
              gap: 1,              
            }}
          >
            <Item sx={{ gridColumn: "1/2", gridRow: "1 / 8", display: {xs:'none', sm:'block'}}}>
              <Imagen />
            </Item>

            <Item sx={{ gridColumn: "2/4", gridRow: "1 / 8",display: {xs:'none', sm:'block'}}}>
              <Datos />
              <ProfesionalStudies />
            </Item>


            <Item sx={{ gridColumn: "1/4", gridRow: "1 / 8",display: {xs:'block', sm:'none'}}}>
              <Datos />
              <ProfesionalStudies />
            </Item>
          </Box>
        </div>

        <Box style={{ width: "100%" }}>
          <Resumen />
          <Experiencia />
          <Portafolio />
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default CV;
