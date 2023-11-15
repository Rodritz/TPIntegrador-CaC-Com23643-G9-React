import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
/* import peliculas from "../data/peliculas.json" */
import {get} from "../../utils/httpCliente";
import { useState, useEffect } from "react";

export const PeliculasGrid = ()=>{
    /* declaro el estado en una const [nombre,funcion] = useState([]) */
    const [peliculas,setPelicula] = useState([])

    /* cuando se ejecute/renderice el componente se va a ejecutar la funcion. eso gracias al useEffect */
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            console.log(data);
            setPelicula(data.results);
        });
    },[])

    return(
        <ul className="moviesGrid">
            {peliculas.map((pelicula)=>(
                <PeliculasCard key={pelicula.id}pelicula={pelicula}/>
            ))}
        </ul>
    )
}