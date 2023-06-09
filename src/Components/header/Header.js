import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginButton from "../../Auth0/Login";
import LogoutButton from "../../Auth0/Logout";
import Profile from "../../Auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../Assets/Logo.svg";
import { Link } from "react-router-dom";
import "./header.css";


const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Container fluid className="p-0" >
      <Navbar bg="dark" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} width="30" height="30" alt="Our Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/fav">Favourites</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>

          <Nav className="justify-content-end" activeKey="/home">
            {!isAuthenticated && (
              <Nav.Item>
                <Nav.Link href="/home">
                  <LoginButton />
                </Nav.Link>
              </Nav.Item>
            )}

            {isAuthenticated && (
              <>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <Profile />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    <LogoutButton />
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
