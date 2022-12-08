import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(undefined);
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => 
      setDentist(res.data)
  )
  .catch(err => console.log(err))
  }, [id])

  return (

    <div className='App'>
      <h3>Detail about Dentist</h3>
    {dentist ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: "#afd9f1"}}>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Phone</TableCell>
            <TableCell align='center'>Web Site</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">{dentist?.name}</TableCell>
            <TableCell align='left'>{dentist?.email}</TableCell>
            <TableCell align='left'>{dentist?.phone}</TableCell>
            <TableCell align='left'>{dentist?.website}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    ) : null}
    </div>      
  )
}

export default Detail