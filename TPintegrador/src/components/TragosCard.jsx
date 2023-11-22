import {Link} from "react-router-dom"
import "./TragosCard.css"

export const TragosCard = ({drink})=>{     
   
    const imgURL = drink.strDrinkThumb;
    return (
        <li className="drinksCard">
            <Link to={`/drink/${drink.idDrink}`}>
            <img className="drinkImage" src={imgURL} alt={drink.strCategory} />
            <div>{drink.strDrink}</div>
            </Link>
        </li>
    )
}
