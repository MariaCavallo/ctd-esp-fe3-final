import React, { useContext } from "react";
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { setFavoritesStorage, removeFavoriteStorage, isFavorited } from "./utils/FavsLocalStorage";
import { useState } from "react";



const CardsDentist = ({ name, username, id }) => {
  const [favorite, setFavorite] = useState(() => isFavorited(id));
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

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
          <Card className={`card ${isDarkMode ? "#12121296" : "#fffff"}`} sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ maxWidth: 345 }}>
              <Link to={`/dentist/${id}`}/>
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
              <button 
              onClick={favorite ? removeFav : addFav}
              className={`favButton ${isDarkMode ? "dark" : "light"}`}>
                {favorite ? "❌" : "⭐"}
              </button>
            </CardActions>
          </Card>
  );
};

export default CardsDentist;