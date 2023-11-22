import "./App.css"
import { LandingPage } from "./pages/LandingPage"
import { DetalleTrago } from "./pages/DetalleTrago"
import {BrowserRouter, Routes, Route,Link} from "react-router-dom"


export const App = () =>{

  return(    
    <BrowserRouter>
    {/* <HomeNavbar/>  */}
      <header>      
        <Link to="/" className="link-style">
        <h2 className="section-title">Cocktails</h2>
        </Link>
      </header>
      <body>
      <Routes>
        <Route path="/" element ={<LandingPage/>}/>
        <Route path="/drink/:idDrink" element ={<DetalleTrago/>}/>
      </Routes>
      </body>
    </BrowserRouter>
  )
}
