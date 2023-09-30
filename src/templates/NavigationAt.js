import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {
  const callLoginForm = () => {};
  return (
    <Navbar
      expand="lg"
      className=" bg-primary navbarcss py-3 text-sm"
      bg="white"
      data-bs-theme=""
    >
      <Container fluid>
        <Navbar.Brand href="/">Legal Dosth</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 ui my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="hoverli" href="/advocate" active>
              Advocates
            </Nav.Link>
            <Nav.Link className="hoverli" href="#action2" active>
              Mediator
            </Nav.Link>
            <Nav.Link className="hoverli" href="#action2" active>
              Arbitrator
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Notary Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Document Writers
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-info btnp" onClick={callLoginForm}>
              <FaUserAlt />
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
