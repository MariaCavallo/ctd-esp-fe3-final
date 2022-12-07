import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import ContextGlobal from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);
  const { state } = useContext(ContextGlobal)

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")))
  }, [favs])

  return (
    <div style={{ bgColor: state.bgColor, color: state.ftColor }}>
      <h1 style={{ bgColor: state.bgColor, color: state.ftColor }}>Dentists Favs</h1>
      <div className="card-grid">
        {favs?.map(fav => <Card {...fav} key={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
