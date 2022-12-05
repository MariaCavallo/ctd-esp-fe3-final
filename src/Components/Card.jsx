import React from "react";
import { setFavInStorage } from './utils/localStorage'
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";


const CardsDentist = ({ name, username, id }) => {

  const addFav = (data)=>{
    setFavInStorage({ name, username, id })
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card" style={{ maxWidth: 345 }}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {
          <Card className="card" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL + "images/doctor.jpg"}
                alt="doctor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to={`/dentist/${id}`}>{name}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {username}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className="favButton" onClick={addFav}>⭐</Button>
            </CardActions>
          </Card>
      }
    </div>
  );
};

export default CardsDentist;
