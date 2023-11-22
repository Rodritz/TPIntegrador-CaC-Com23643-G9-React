import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./DetalleTrago.css"


export const DetalleTrago = () => {
  const [drink, setTrago] = useState(null);
  const { IdDrink } = useParams();

  useEffect(() => {
    get(`/lookup.php?i=${IdDrink}`).then((data) => {
 /*      console.log(data); */
      setTrago(data);
    });
  }, [IdDrink]);

  if (!drink) {
    return null;
  }

  const imgURL = `https://www.thecocktaildb.com/images/media/drink/${drink.strDrinkThumb}`;


  return (
    <div className="contenedorDetalle"> 
      <img className="col" src={imgURL} alt={drink.strDrink} />
      <div className="tragoDetalle col">
        <p className="item">
          <strong>Titulo:</strong>
          {drink.strDrink}
        </p>
        <p>
          <strong>Instrucciones</strong>
          {drink.strInstructionsES}
        </p>
        <p>
            <strong>Categoria:</strong>
            {drink.strCategory}
        </p>
      </div>
    </div>
  );
};