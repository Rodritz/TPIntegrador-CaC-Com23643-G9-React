import { DrinksCard } from "./DrinksCard";
/* import drinks from "../data/tragos.json" */
import "./DrinksGrid.css"
import {get} from "../../utils/httpCliente";
import {useState, useEffect} from "react";


export const DrinksGrid = () => {

    const [drinks, setDrinks] = useState([])

    
    useEffect(() => {
        get("/search.php?f=a")
          .then((data) => {
            setDrinks(data.drinks);
          })
      }, []);
    
    return (

        <ul className="drinksGrid">
            
            {drinks.map((drink) => (
                <DrinksCard key={drink.idDrink} drink={drink}/>
            ))}
        </ul>
    );
};