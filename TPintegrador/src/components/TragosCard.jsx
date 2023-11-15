import {Link} from "react-router-dom"
import "./TragosCard.css"


export const TragosCard = ({trago})=>{     
    /* const imgUrl= "https://image.tmdb.org/t/p/w300" + pelicula.poster_path */
    const imgUrl = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    

    return (
        <li className="moviesCard">
            <Link to={`/trago/${pelicula.id}`}>
                <img className="movieImage" src={imgUrl} alt={pelicula.title} />
                <div>{pelicula.title}</div>
            </Link>
        </li>        
    );
};