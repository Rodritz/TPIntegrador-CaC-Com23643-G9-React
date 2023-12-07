import { DrinksGrid } from "../components/DrinksGrid";
import {  Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <DrinksGrid />
      <Link to="/show" className="btn btn-secondary">MIS TRAGOS</Link>
    </>
  );
};
