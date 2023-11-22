import {Link} from "react-router-dom"
import "./TragosCard.css"


export const TragosCard = ({drink})=>{     
    /* const imgUrl= "https://image.tmdb.org/t/p/w300" + pelicula.poster_path */
    const imgURL = drink.strDrinkThumb;
    return (
        <li className="drinksCard">
            <Link to={`/${drink.idDrink}`}>
            <img className="drinkImage" src={imgURL} alt={drink.strCategory} />
            <div>{drink.strDrink}</div>
            </Link>
        </li>
    )
}
