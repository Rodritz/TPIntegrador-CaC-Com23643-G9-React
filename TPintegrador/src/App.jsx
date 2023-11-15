import "./App.css"
import { LandingPage } from "./pages/LandingPage"
import { DetalleTrago } from "./pages/DetalleTrago"
import {BrowserRouter, Routes, Route,Link} from "react-router-dom"


export const App = () =>{

  return(    
    <BrowserRouter>
    {/* <HomeNavbar/>  */}
      <header>      
        <Link to="/">
          <h1 className="title">DRINKS</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element ={<LandingPage/>}/>
        <Route path="/trago/:tragoId" element ={<DetalleDrink/>}/>
      </Routes>
    </BrowserRouter>
  )
}