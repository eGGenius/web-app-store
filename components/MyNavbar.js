// Top navbar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

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
            </Container>
        </Navbar>
    );
}