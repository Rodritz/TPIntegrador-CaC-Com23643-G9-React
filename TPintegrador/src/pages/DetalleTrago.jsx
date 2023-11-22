import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetalleTrago.css"

export const DetalleTrago = () => {
  const [drink, setTrago] = useState(null);
  const { idDrink } = useParams();

  useEffect(() => {
    get(`/lookup.php?i=${idDrink}`).then((data) => {
 /*      console.log(data); */
 setTrago(data?.drinks?.[0]); 
    });
  }, [idDrink]);

  if (!drink) {
    return null;
  }

  return (
    <div className="contenedorDetalle"> 
     <img className="col" src={drink.strDrinkThumb} alt={drink.strDrink} />
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