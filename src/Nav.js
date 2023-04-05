import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navv() {

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img src='https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80' width={35} height={35} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.bluehillfarm.com/">Home</Nav.Link>
            <Nav.Link href="https://www.starbucks.in/ordering">Coffees</Nav.Link>
            <Nav.Link href="https://organicindia.com/collections/teas-infusions">Teas</Nav.Link>
            <Nav.Link href="https://www.delish.com/cooking/g1504/milkshake-recipes/">Milkshakes</Nav.Link>
            <Nav.Link href="https://www.starbucks.com/about-us/">AboutUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navv