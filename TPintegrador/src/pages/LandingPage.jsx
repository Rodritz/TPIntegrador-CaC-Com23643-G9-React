import { useContext } from "react";
import SearchContext from "../components/SearchContext";
import { DrinksGrid } from "./DrinksGrid";

export const LandingPage = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      <DrinksGrid searchResults = {searchResults}/>
    </> 
  );
};

