import Container from 'react-bootstrap/Container';
import '.././../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  mylogo  from '../Assets/logo.png'
import './Nav.css'


function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container className='padding-class'>
        <Navbar.Brand href="#home" className='logo'>
            <img src={mylogo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Nav-cus gap-3">
          <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Testimonials</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            
          </Nav>
          <button className='btn bg-black text-white btn-cus'>
        Get started
       </button>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default Header;