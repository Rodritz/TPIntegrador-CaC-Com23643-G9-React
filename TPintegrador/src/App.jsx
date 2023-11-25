import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import { LandingPage } from "./pages/LandingPage";
import { DetalleTragos } from "./pages/DetalleTragos";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar"; 



export const App = () => {



    return (
        <BrowserRouter>
         <div>
          <Navbar /> {Navbar}
         </div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/drink/:idDrink" element={<DetalleTragos />} />

            </Routes>
        </BrowserRouter >
    )
};
