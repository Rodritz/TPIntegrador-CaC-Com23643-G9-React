import { TragosCard } from "./TragosCard";
import "./TragosGrid.css"
/*import peliculas from "../data/peliculas.json";*/
import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
export const TragosGrid = () => {
    const [drinks, setDrink] = useState([]);

    useEffect(() => {
        get("/search.php?f=a").then((data) => {
            if (data && data.drinks) {
                console.log(data.drinks);
                setDrink(data.drinks);
            }
        }).catch((error) => {
            console.error("Error fetching drinks:", error);
        });
    }, []);
    return (
        <ul className="drinksGrid">
            {drinks.map((drink) => (
                <TragosCard key={drink.id} drink={drink} />
            ))}
        </ul>
    );
};


