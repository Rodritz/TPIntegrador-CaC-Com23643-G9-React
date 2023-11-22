import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
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
   // Filtrar y mapear los ingredientes no nulos
   const ingredients = Object.keys(drink)
   .filter((key) => key.startsWith("strIngredient") && drink[key])
   .map((key) => drink[key]);
  return (
    <section className="section cocktail-section">
       <Link to="/" className="btn btn-primary link-style">
        Back home
      </Link>
   <h2 className="section-title">{drink.strDrink}</h2>
    <div className="drink">
     <img src={drink.strDrinkThumb} alt={drink.strDrink} />
     <div className="drink-info">
        <p>
        <span className="drink-data">Nombre:</span>
        {drink.strDrink}
        </p>
        <p>
        <span className="drink-data">Instrucciones:</span>
          {drink.strInstructionsES}
        </p>
        <p>
        <span className="drink-data">Categoria:</span>
            {drink.strCategory}
        </p>

        <p>
            <span className="drink-data">Ingredientes:</span>
      
              {ingredients.map((ingredient, index) => (
                <span key={index}>{ingredient}</span>
              ))}
            
          </p>

      </div>
    </div>
    </section>
  );
};