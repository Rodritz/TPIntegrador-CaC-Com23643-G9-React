import {Link} from "react-router-dom"
import "./TragosCard.css"

export const TragosCard = ({drink})=>{     
   
    const imgURL = drink.strDrinkThumb;
    return (
       
        <li className="drinksCard">
            <Link className="link-style" to={`/drink/${drink.idDrink}`}>
            <img src={imgURL} alt={drink.strCategory} />
            <p>
        <span className="drink-data">{drink.strDrink}</span>
        </p>
            </Link>
        </li>
    )
}
