import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  company: string,
  dates: string,
  position: string,
  area: string,
  description: string,
) {
  return { company, dates, position,area, description};
}

const rows = [
  createData('Central Bank of Chile', '2021-05-01', 'Complaince Analyst', 'Banking, Contracts, Treasury, Risk Management',''),
  createData('Ripp Consulting', '2019-09-01', 'Data Scientist', 'Mining, AI, Reliability, R.A.M., Programming',''),
  createData('STP Santiago S.A.', '2014-05-01 2021-04-30', 'Deputy IT and Controller Manager', 'Public Transportation, IT, Contracts, Financial Valuation',''),
  createData('Latam Airlines S.A.', '2012-06-01 2014-02-28', 'Consultant', 'Air Transportation, Optimization, Programming, Scheduling',''),
];

function Experiencia() {
  return (
<>
<h4>Work Experience</h4>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:'black'}}>
          <TableRow>
            <TableCell style={{ color: "white" }}  >Company</TableCell>
            <TableCell style={{ color: "white" }} align="center">Dates</TableCell>
            <TableCell style={{ color: "white" }}  align="center">Position</TableCell>
            <TableCell style={{ color: "white" }}  align="center">Area</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.company}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.company}
              </TableCell>
              <TableCell align="center">{row.dates}</TableCell>
              <TableCell align="center">{row.position}</TableCell>
              <TableCell align="center">{row.area}</TableCell>
            </TableRow>
            // <TableRow>
            //   <TableCell align="right">{row.description}</TableCell>
            // </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


export default Experiencia