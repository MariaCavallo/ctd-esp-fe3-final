import { useState, useEffect  } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import { useOutlet } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => { 
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const outlet = useOutlet();


  return (
    <Box component="main">
      <Navbar />
        {
          outlet ||
          <div className='card-grid'>
            {data ? (data.map(dentist => (<Card {...dentist} key={dentist.id} /> )
            )) : (<CircularProgress color="primary" />)}
          </div>
        }
      <Footer /> 
    </Box>
  )
}

export default Home