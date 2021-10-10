import '../assets/style/NavbarStyle.css'
import {
    Navbar,
    Container,

}from 'react-bootstrap';

export function NavbarComponent(){
    return(
        <Navbar className="pt-4">
            <Container>
                <Navbar.Brand>
                    <p className='brand'>Lesther</p>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}