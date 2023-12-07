import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { LandingPage } from "./pages/LandingPage";
import { DetalleTragos } from "./pages/DetalleTragos";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import SearchContext from "./components/SearchContext";

export const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ searchResults, setSearchResults }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/drink/:idDrink" element={<DetalleTragos />} />
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </BrowserRouter>
  );
};
