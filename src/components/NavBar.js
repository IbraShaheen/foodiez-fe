// import { Logo, NavItem, ThemeButton } from "../styles";
import { Container, Nav, Navbar } from "react-bootstrap";
// import darkLogo from "../dark-logo.png";
// import lightLogo from "../light-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

    <Navbar bg="success" variant="dark">
    <Container>
    <Link style={{textDecoration:"none"
    ,color:"white",fontSize:"25px"}} to ="/categories">Categories</Link>
    <Nav className="me-auto">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link style={{textDecoration:"none"
    ,color:"white",fontSize:"25px"}} to="/ingredients">Ingredients</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link style={{textDecoration:"none"
    ,color:"white",fontSize:"25px"}} to="/recipes">Recipes</Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default NavBar;