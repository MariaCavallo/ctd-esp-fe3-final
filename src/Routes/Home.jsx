import { useState, useEffect  } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios';
import { CircularProgress } from '@mui/material';

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

  return (
    <main>
      <h1>Home</h1>
      <Navbar />
        <div className='card-grid'>
          {/* Aqui deberias renderizar las cards */}
          {data ? (data.map(dentist => (<Card {...dentist} key={dentist.id} /> )
          )) : (<CircularProgress color="primary" />)}
        </div>
      <Footer /> 
    </main>
  )
}

export default Home