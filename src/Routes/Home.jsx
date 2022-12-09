import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { Box } from '@mui/material';
import { useOutlet } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



const Home = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },[])

  const outlet = useOutlet();


  return (
    <Box component="main">
      <Navbar />
        {
          outlet ||
          <div className='card-grid'>
              {data?.map((dentists) => 
              <Card key={dentists.id} 
              name={dentists.name} 
              username={dentists.username} 
              id={dentists.id} 
              />)}
          </div>
        }
      <Footer />
    </Box>
  )
}

export default Home