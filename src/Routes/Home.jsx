import { useState, useEffect  } from 'react';
import Card from '../Components/Card';
import { Box, CircularProgress } from '@mui/material';
import { useOutlet } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => setDentist(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const outlet = useOutlet();


  return (
    <Box component="main">
        {
          outlet ||
          <div className='card-grid'>
            {dentist.length ? dentist.map(
              (dentist) => ( <Card {...dentist} key={dentist.matricula} />))
            : (<CircularProgress color="primary" />)}
          </div>
        }
    </Box>
  )
}

export default Home