import React from "react";
import Box from "@mui/material/Box";

function Item(props) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{

        p: 1,
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      
      {...other}
    />


      
  );
}

export default Item;
