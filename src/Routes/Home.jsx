import { useState, useEffect  } from 'react';
import Card from '../Components/Card';
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
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data ? (data.map(item => (<Card key={item.id} name={item.name} username={item.username} id={item.id} /> )
        )) : (<CircularProgress color="primary" />)}
      </div>
    </main>
  )
}

export default Home