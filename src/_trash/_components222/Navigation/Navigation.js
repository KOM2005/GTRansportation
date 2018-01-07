import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
// import { Nav } from "react-bootstrap";
// import NavItem from "react-bootstrap";


const Navigation = props =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">GTransportation</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={0}>
        <Link to="/register">Registration</Link>
      </NavItem>
    </Nav>
  </Navbar>;

export default Navigation;