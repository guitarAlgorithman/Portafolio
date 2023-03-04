import { Box } from "@mui/system";
import React, { useState } from "react";
import ControlledCarousel from "./ControlledCarousel";

function Portafolio() {
  return (
    <Box sx={{ mt: '5%' }}>
      <h4>Project Portfolio (Only Public ones)</h4>
      <Box sx={{ m: '2%' }}>
        <ControlledCarousel />　
        </Box>
      </Box>

  );
}

export default Portafolio;
