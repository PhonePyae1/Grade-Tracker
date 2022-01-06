import grade from './grade.png'

import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
        <img src={grade} height={50}/>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#">CS</Nav.Link>
          <Nav.Link href="#">IT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default App;
