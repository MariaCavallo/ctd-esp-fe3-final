import React, { useContext } from "react";
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";



const CardsDentist = ({ name, username, id }) => {

  const { state } = useContext(ContextGlobal)

  const addFav = ()=>{
    JSON.parse(localStorage.setItem("name", name));
    JSON.parse(localStorage.setItem("username", username));
    JSON.parse(localStorage.setItem("id", id));
    alert("Dentist added to favorites")
  }

  return (
          <Card className="card" sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={"images/doctor.jpg"}
                alt="doctor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ bgColor: state.bgColor, color: state.ftColor }}>
                  <Link to={`/dentist/${id}`}>{name}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ bgColor: state.bgColor, color: state.ftColor }}>
                  {username}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" onClick={addFav} className="favButton">⭐</Button>
            </CardActions>
          </Card>
  );
};

export default CardsDentist;