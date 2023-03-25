import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./dropDownMenu.css";

function DropDownMenu() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="nav-menu">
            <NavDropdown id="nav-dropdown-dark-example" title="Electric" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">All Electric</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Popular models</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Beginners friendly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3/4 size</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown id="nav-dropdown-dark-example" title="Acoustic" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">All Acoustic</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Popular models</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Beginners friendly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3/4 size</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Left handed</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown id="nav-dropdown-dark-example" title="Bass" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">All Bass</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Popular models</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">4 String</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">5 String</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">6 String</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3/4 size</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Left handed</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown id="nav-dropdown-dark-example" title="Classical" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">All Classical</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Popular models</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Beginners friendly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3/4 size</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Left handed</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown id="nav-dropdown-dark-example" title="Accessories" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">Electric Strings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Acoustic Strings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ukulele Strings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tuners</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Straps</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DropDownMenu;
