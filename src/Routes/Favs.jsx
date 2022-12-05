import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const localFavs = getFavFromStorage();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {localFavs.length ? localFavs.map((detistFav) => (<Card {...detistFav} key={detistFav.id} />
        )) : null}
      </div>
      <Card></Card>
    </>
  );
};

export default Favs;
