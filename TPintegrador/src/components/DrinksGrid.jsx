import { DrinksCard } from "./DrinksCard";
/* import drinks from "../data/tragos.json" */
import "./DrinksGrid.css";
import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";

export const DrinksGrid = ({ searchResults }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setDrinks(searchResults);
    } else {
      get("/filter.php?c=Ordinary_Drink")
        .then((data) => {
          setDrinks(data.drinks);
        })
        .catch((error) => {
          console.error("Error fetching drinks:", error);
        });
    }
  }, [searchResults]);

  return (
    <ul className="drinksGrid">
      {drinks.map((drink) => (
        <DrinksCard key={drink.idDrink} drink={drink} />
      ))}
    </ul>
  );
};
