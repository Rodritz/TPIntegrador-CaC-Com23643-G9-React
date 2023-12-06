import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
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
        <Container fluid>      
          <Link to="/" className="brand-logo">
            <img
                src={Brand}
                alt="Logo"
                className="d-inline-block align-top logo-image"
              />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
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