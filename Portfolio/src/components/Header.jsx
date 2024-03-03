import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function PermaNav() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">John Gotheridge</Navbar.Brand>
                <Nav>
                    <Nav.link href="/about">About me</Nav.link>
                    <Nav.link href="/documents">Documents</Nav.link>
                    <Nav.link href="/contact">Contact Me</Nav.link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default PermaNav