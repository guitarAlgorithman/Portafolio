import { Box } from '@mui/system'
import React from 'react'

function Datos() {
  return (<Box sx={{backgroundColor:'whitesmoke', margin:'5%',whiteSpace: 'normal'}}>
  <h4>Personal Data</h4>
<table align="center">
  <tr>
    <td align="left">Name:</td>
    <td align="left">Gustavo Henriquez</td>
  </tr>
  <tr>
    <td align="left">Nationality:</td>
    <td align="left">Chilean</td>
  </tr>

  <tr>
    <td align="left">Email:</td>
    <td align="justify">gustavo.henriquez.m@gmail.com</td>
  </tr>
  <tr>
    <td align="left">Location:</td>
    <td align="left">Santiago of Chile</td>
  </tr>
  
</table>
</Box>
  )
}

export default Datos