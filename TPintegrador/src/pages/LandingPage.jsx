/* import { useContext } from 'react'
import SearchContext from "../components/SearchContext"; */
import "./LandingPage.css";



export const LandingPage = () => {
  /* const { searchResults } = useContext(SearchContext); */ 

  
  return (
    <div className="containerNeon">
      <h1 className="neon">•. Welcome to .•</h1>
      <p className="neon2">Cocktails!</p>
      <p className="neon3">
        <span className="flicker1">★</span>
        <span className="flicker2">★</span>
        <span className="flicker3">★</span>
      </p>
    </div>
  )
}

