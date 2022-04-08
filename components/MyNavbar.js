// Top navbar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {FaUser} from 'react-icons/fa';
import {IconContext} from "react-icons";

export default function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand href="/">WebAppStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/myapps">MyApps</Nav.Link>
                        <Nav.Link href="/newapp">NewApp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <IconContext.Provider value={{color: 'white',size: '26px'}}>
                            <FaUser/>
                        </IconContext.Provider>
      </Navbar.Text>
    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}