import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import "./DetalleTragos.css"


export const DetalleTragos = () => {

  const [drink, setDrinks] = useState(null);

  const { idDrink } = useParams();

  useEffect(() => {
    get(`/lookup.php?i=${idDrink}`).then((data) => {

      setDrinks(data?.drinks?.[0]);
    })
  }, [idDrink]);

  if (!drink) {
    return null;
  }


  return (


    <div className="contenedorDetalle">
   
      <img className="imagenDrink col" src={drink.strDrinkThumb} alt={drink.strDrink} />
    
      <div className="tragoDetalle col">
        <p className="item">
          <strong>{drink.strDrink}</strong>
          
        </p>
        <p>
          <strong>Instrucciones</strong><br/>
          {drink.strInstructionsES}
        </p>
        <p>
          <strong>Categoria:</strong><br/>
          {drink.strCategory}
        </p>
      </div>
      <div className="backgroundImage">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
    </div>
    </div>
  );
}