import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown, faBarChart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Report Card for Basic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Quarter 1">Quarter 1</Nav.Link>
            <Nav.Link href="#Quarter 1">
              <FontAwesomeIcon icon={faBarChart}/>
            </Nav.Link>
            <Nav.Link href="#Quarter 2">Quarter 2</Nav.Link>
            <Nav.Link href="#Quarter 2">
              <FontAwesomeIcon icon={faBarChart}/>
            </Nav.Link>
            <Nav.Link href="#Quarter 3">Quarter 3</Nav.Link>
            <Nav.Link href="#Quarter 3">
              <FontAwesomeIcon icon={faBarChart}/>
            </Nav.Link>
            <Nav.Link href="#Quarter 4">Quarter 4</Nav.Link>
            <Nav.Link href="#Quarter 4">
              <FontAwesomeIcon icon={faBarChart}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <ProductList/> */}
      <Cart />
    </div>
    
  );
}

export default App;
