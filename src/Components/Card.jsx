import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";


const CardsDentist = ({ name, username, id }) => {

  const addFav = ()=>{
    JSON.parse(localStorage.setItem("name", name));
    JSON.parse(localStorage.setItem("username", username));
    JSON.parse(localStorage.setItem("id", id));
    alert("Dentist added to favorites")
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
                image={"images/doctor.jpg"}
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
              <Button onClick={addFav} className="favButton">⭐</Button>
            </CardActions>
          </Card>
      }
    </div>
  );
};

export default CardsDentist;
