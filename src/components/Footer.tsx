import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#eceff1",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Portfolio - Gustavo Henriquez
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router | CPLEX | GUROBI | PYTHON | Data Science`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            
            <a href="https://www.linkedin.com/in/gustavo-henriquez-a8381038/"><LinkedInIcon/></a> 
            <a href="https://github.com/guitarAlgorithman"><GitHubIcon /></a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;