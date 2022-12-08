import React from "react";
import Card from "../Components/Card";
import { favsLocalSotrage } from '../Components/utils/FavsLocalStorage'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const localFavs = favsLocalSotrage();

  return (
      <main>
        <h1>Dentist Fav</h1>
          <div className='card-grid'>
            {localFavs.length
            ? localFavs.map((dentistFav) => (
            <Card {...dentistFav} key={dentistFav.matricula} />
            ))
            : null}
          </div>
      </main>
  );
};

export default Favs;
