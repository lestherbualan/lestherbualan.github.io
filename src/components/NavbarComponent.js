import '../assets/style/NavbarStyle.css'
import {
    Navbar,
    Container,
    Figure,
}from 'react-bootstrap';
import logo from '../assets/images/logo.png';

export function NavbarComponent(){
    return(
        <Navbar className="pt-4">
            <Container>
                <Navbar.Brand>
                    <p className='brand'>
                        <Figure className='brand-logo'>
                        <Figure.Image
                            src={logo}
                            width={300}
                            height={150}
                        />
                    </Figure>
                    </p>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}