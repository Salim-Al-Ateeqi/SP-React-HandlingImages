import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/products">
          <Navbar.Brand>Salim's Emporium</Navbar.Brand>
        </Link>
        {/* <Nav className="me-auto">
          <Nav.Link>
            <Link to="/products">Products</Link>
          </Nav.Link>
        </Nav> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
