import person from '../assets/images/male.svg';
import '../assets/style/HomeStyle.css';
import {
    Row,
    Col,
    Figure,
    Container,
}from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function HomeComponent(){
    return(
        <div className="container">
            <Row>
                <Col>
                    <Container className="p-4 detail-wrapper">
                        <p className="greet">Hi, i'm <span className="dev-name">Lesther</span></p>
                        <Container className="p-0 m-0 detail">
                            <p>Software Developer and Freelancer based in Philippines</p>
                        </Container>
                    </Container>
                    <Container>
                        <p>Explore more detail about me below</p>
                    </Container>
                    <Container>
                        <Button variant="primary">Hire Me</Button>
                    </Container>
                </Col>
                <Col className="mt-5">
                    <Figure className="person-image">
                        <Figure.Image
                            src={person}
                            width={900}
                            height={900}
                        />
                    </Figure>
                </Col>
            </Row>
            <div className="arrow-down">
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    );
}