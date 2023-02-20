import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { selectLogged, CurrectLogged, IsAdmin, CorrectToken } from "../Login/LoginSlicer";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import User from "../Screen/User";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../Screen/Cart";
import { CorrectCart } from '../Cart/CartSlice'
import { selectProduct } from "../Product/ProductSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  
  const [getToken, setGetToken] = useState("");
  const [username, setUserName] = useState("");
  let logged = useAppSelector(selectLogged);
  const dispatch = useAppDispatch()

  // Navbar / Nevigatin bar
  useEffect(() => {
    if(localStorage.getItem("token")){
      dispatch(CurrectLogged())
      dispatch(IsAdmin())
      dispatch(CorrectToken())
      dispatch(CorrectCart())

    }
    if (!getToken) {
      const tok = localStorage.getItem("token");
      setGetToken(JSON.parse(String(tok)));
      const userInlocalStorge = localStorage.getItem("username");
      setUserName(JSON.parse(String(userInlocalStorge)));

    }
  }, [logged]);

 
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="..\logo.jpeg" style={{ height: "20px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="about">About Us</Nav.Link>
              <NavDropdown title="Category" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="category/1">Soocer shoes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="category/2" >Ball</NavDropdown.Item>
              </NavDropdown>
              <SearchBar/>
            </Nav>
            <Nav>
              {getToken ? (
                <User />
              ) : (
                <Nav.Link href="/login">
                  <i className="fa-solid fa-user"></i>Login
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              <Nav.Link>
                <Cart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
