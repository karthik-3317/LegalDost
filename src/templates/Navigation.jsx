import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import img1 from '../2.jpg'
import img2 from '../3.jpg'
import img3 from '../4.jpg'
import '../App.css'
import img4 from '../5.jpg'
import img5 from '../6.jpg'
import img6 from '../1.jpg'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

  const [searchTerm,setSearchTerm] = useState()
  const  dic = [
    {
      image: img1,
      tag:"civil",
      description: 'EXPERIENCED IN HANDLING',
    },
    {
      image: img2,
      tag:"criminal",
      description: 'Description for image 2',
    },
    {
      image: img3,
      tag:"cyber",
      description: 'Description for image 3',
    },
    {
      image: img4,
      tag:"divorce",
      description: 'Description for image 3',
    },
    {
      image: img5,
      tag:"marriage",
      description: 'Description for image 3',
    },
    {
      image: img6,
      tag:"legaladvisor",
      description: 'Description for image 3',
    },
    {
      image: img2,
      tag:"civil",
      description: 'Description for image 3',
    },
    {
      image: img3,
      tag:"criminal",
      description: 'Description for image 3',
    },
    {
      image: img4,
      tag:"legaladvisor",
      description: 'Description for image 3',
    },
    {
      image: img1,
      tag:"cyber",
      description: 'Description for image 3',
    },
    {
      image: img4,
      tag:"criminal",
      description: 'Description for image 3',
    },
    {
      image: img3,
      tag:"divorce",
      description: 'Description for image 3',
    },
    {
      image: img2,
      tag:"legaladvisor",
      description: 'Description for image 3',
    },
    {
      image: img6,
      tag:"marriage",
      description: 'Description for image 3',
    },

  ];
  const [searchResults,setSearchResults] = useState(dic)


  const handleSearch = (event) => {
  const newSearchTerm = event.target.value;
  setSearchTerm(newSearchTerm);

  const filteredResults = dic.filter((item) =>
    item.tag.toLowerCase().includes(newSearchTerm.toLowerCase())
  );

  setSearchResults(filteredResults);
};



  return (
    <>
    <Navbar expand="lg" className=" bg-primary navbarcss py-3 text-sm" bg="white" data-bs-theme="">
          <Container fluid>
        <Navbar.Brand href="#">Legal Dosth</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 ui my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='hoverli' href="/" active>Home</Nav.Link>
            <Nav.Link className='hoverli' href="advocate" active>Advocates</Nav.Link>
            <Nav.Link className='hoverli'href="#" active>Mediator</Nav.Link>
            <Nav.Link className='hoverli'href="#" active>Arbitrator</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Notary Services</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                 Document Writers
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="outline-info btnp">Search</Button>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         <Home list={searchResults}/>
    </>
  );
}

export default Navigation;