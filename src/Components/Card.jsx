import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography} from '@mui/material'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import { setFavoritesStorage, removeFavoriteStorage, isFavorited } from "./utils/FavsLocalStorage";
import { useState } from "react";


const CardsDentist = ({ name, username, id }) => {
  const [favorite, setFavorite] = useState(() => isFavorited(id));

  const isFavorite = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = ()=>{
    const favorite = setFavoritesStorage({ name, username, id });
    isFavorite(favorite);
  };

  const removeFav = () => {
    const favorite = removeFavoriteStorage(id);
    isFavorite(favorite);
  };

  return (
          <Card sx={{ maxWidth: 345, width: window.innerWidth < 800 ? '50vw' : '10vw', minWidth: '200px', display: {xs: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}}>
            <CardActionArea sx={{ maxWidth: 345 }}>
              <Link to={`/dentist/${id}`}>
              <CardMedia
                component="img"
                height="140"
                image={"images/doctor.jpg"}
                alt="doctor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {username}
                </Typography>
              </CardContent>
              </Link>
            </CardActionArea>
            <CardActions>
              <Button 
              sx={{left: "32%"}}
              variant="contained"
              onClick={favorite ? removeFav : addFav}>
                {favorite ? "❌" : "⭐"}
              </Button>
            </CardActions>
          </Card>
  );
};

export default CardsDentist;