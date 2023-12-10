import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import { LandingPage } from "./pages/LandingPage";
import { DetalleTragos } from "./pages/DetalleTragos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Show } from "./components/Show";
import { Edit } from "./components/Edit";
import { Create } from "./components/Create";

export const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/drink/:idDrink" element={<DetalleTragos />} />
                <Route path="/show" element={<Show />} />
                <Route path="/show/create/" element={<Create />} />
                <Route path="/show/edit/:id" element={<Edit />} />
            </Routes>
            <Footer />
        </BrowserRouter >
    )
};
