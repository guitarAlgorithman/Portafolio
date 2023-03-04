import { Box } from '@mui/system'
import React from 'react'

function Resumen() {
  return (
    <Box sx={{margin:"5%"}}>
      <h4>About me..</h4>
        <p align="justify">
          Industrial Civil Engineer with experience in Banking, Public Transportation and Mining. 
          My carrer is focused on Contract Management, Operation Research models development, 
          Project and Business Valuations, 
          Negotiations and Consulting. I´d had leadered IT Teams, worked in high value and confindential contracts, participated in negotations with the goverment and data analysis in mining companies. </p>
        <p align="justify">My IT skills are focus on Data science (Tensorflow, Keras, RapidMiner), 
          Programming (Python, R, Javascript, Typescript, C/C++), Frontend and Backend Apps Development (React, Django, Fast API, Express), and 
          Databases (MongoDB, SQL Server, PostgresQl), Optimization software (Gurobi, Cplex) and Platform for deploying (Railway app, Amazon AWS, Google Cloud)  </p>
        <p align="justify">My hobbies are go to the gym, play the guitar and study a lot about new trends in techonology and mathematics (like solvers or new optimization techniques).</p>
    </Box>
  )
}

export default Resumen