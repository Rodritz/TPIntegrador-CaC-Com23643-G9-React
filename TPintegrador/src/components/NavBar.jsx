import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Brand from '../img/svg/logo-no-background.svg';
import '../components/NavBar.css';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data.drinks || []);
      setSearchTerm(''); // Clear the search bar after search
    } catch (error) {
      console.error('Error searching for cocktails:', error);
      setSearchResults([]);
    }
  };
  

  const handleSearchResultClick = () => {
    setSearchResults([]);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Link to="/" className="brand-logo">
            <img
              src={Brand}
              alt="Logo"
              className="d-inline-block align-top logo-image"
            />
          </Link>
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <FormControl
              type="search"
              placeholder=""
              className="mr-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <div className="search-results">
        <ul className="drinksSearch">
          {searchResults.map((drink) => (
            <li key={drink.idDrink} className="drinksCard">
              <Link
                to={`/drink/${drink.idDrink}`}
                className="drinksCardLink"
                onClick={handleSearchResultClick}
              >
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="drinkImage"
                />
                <p>
                  <span className="drinksName">{drink.strDrink}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
